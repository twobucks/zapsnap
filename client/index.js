var Webtorrent = require('webtorrent')
var client = new Webtorrent()
var request = require('request')
var listify = require('listify')

var img = document.getElementById("img")
var seededImg = document.getElementById('img2')

if (seededImg){
  client.add(seededImg.src, function(torrent){
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
    request.post(window.location.href, {
      body: {
        infoHash: torrent.magnetURI
      },
      json: true
    })
  })
}
