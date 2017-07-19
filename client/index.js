var Webtorrent = require('webtorrent')
var client = new Webtorrent()
var request = require('request')

var img = document.getElementById('seeded')
var downloadedImg = document.getElementById('downloaded')

var status = document.querySelector('.status')

function updateSpeed (torrent) {
  status.innerHTML =
    '<b>Viewing:</b> ' + parseInt(torrent.wires.length + 1)
}

if (downloadedImg) {
  var downloadStarted = false

  setTimeout(function () {
    if (!downloadStarted) {
      document.getElementById('spinner').style.display = 'none'
      status.innerHTML =
        'We are sorry, but the image is no longer present.'
    }
  }, 60000) // 60s

  client.add(downloadedImg.dataset.infoHash, function (torrent) {
    torrent.on('download', function () {
      updateSpeed(torrent)
    })
    torrent.on('upload', function () {
      updateSpeed(torrent)
    })
    setInterval(function () {
      updateSpeed(torrent)
    }, 1000)
    updateSpeed(torrent)

    console.log('downloading ' + torrent.infoHash)
    downloadStarted = true

    torrent.files.forEach(function (file) {
      file.getBuffer(function (er, buf) {
        document.getElementById('spinner').style.display = 'none'
        downloadedImg.src = buf.toString()
      })
    })
  })
} else {
  client.seed(new Buffer(img.src), {name: 'image'}, function (torrent) {
    console.log('seeding ' + torrent.infoHash)
    torrent.on('download', function () {
      updateSpeed(torrent)
    })
    torrent.on('upload', function () {
      updateSpeed(torrent)
    })
    setInterval(function () {
      updateSpeed(torrent)
    }, 1000)
    updateSpeed(torrent)

    request.post(window.location.href, {
      body: {
        infoHash: torrent.magnetURI
      },
      json: true
    })
  })
}
