var Webtorrent = require('webtorrent')
var client = new Webtorrent()

var img = document.getElementById("img")
client.seed(new Buffer(img.src), {name: "image"}, function(torrent){
  console.log('seeding ' + torrent.infoHash)

  client.add(torrent.infoHash, function(torrent){
    console.log('downloading ' + torrent.infoHash)

    torrent.files.forEach(function (file) {
      file.getBuffer(function (er, buf) {
        var img2 = document.getElementById('img2')
        img2.src = buf.toString()
      })
    })
  })
})
