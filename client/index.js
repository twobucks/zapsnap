var Webtorrent = require('webtorrent')
var client = new Webtorrent()

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
        'Unable to find peers for this image. <br/> Try waiting a little longer or reloading the browser ' +
        ' if you think the image is still available.'
    }
  }, 10000) // 10s

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
  client.seed(Buffer.from(img.src), {name: 'image'}, function (torrent) {
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

    var xhr = new window.XMLHttpRequest()
    xhr.open('POST', window.location.href, true)
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')

    // send the collected data as JSON
    xhr.send(JSON.stringify({
      infoHash: torrent.magnetURI
    }))
  })
}
