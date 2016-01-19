var Webtorrent = require('webtorrent')
var client = new Webtorrent()
var request = require('request')

var img = document.getElementById("img")
var seededImg = document.getElementById('img2')

var status = document.querySelector('.status')
function updateSpeed (torrent) {
  status.innerHTML =
    '<b>Peers:</b> ' + torrent.swarm.wires.length
}

if (seededImg){
  client.add(seededImg.src, function(torrent){
    torrent.swarm.on('download', function(){
      updateSpeed(torrent)
    })
    torrent.swarm.on('upload', function(){
      updateSpeed(torrent)
    })
    setInterval(function(){
      updateSpeed(torrent)
    }, 5000)
    updateSpeed(torrent)

    console.log('downloading ' + torrent.infoHash)

    torrent.files.forEach(function (file) {
      file.getBuffer(function (er, buf) {
        seededImg.src = buf.toString()
      })
    })
  })
} else {
  client.seed(new Buffer(img.src), {name: "image"}, function(torrent){
    console.log('seeding ' + torrent.infoHash)
    torrent.swarm.on('download', function(){
      updateSpeed(torrent)
    })
    torrent.swarm.on('upload', function(){
      updateSpeed(torrent)
    })
    setInterval(function(){
      updateSpeed(torrent)
    }, 5000)
    updateSpeed(torrent)

    request.post(window.location.href, {
      body: {
        infoHash: torrent.magnetURI
      },
      json: true
    })
  })
}
