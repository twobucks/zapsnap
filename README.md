# Seedshot

Peer to peer screenshot sharing.

## Idea

The cool thing with Dropbox is that once a screenshot is taken, it's immediately available in my Dropbox folder and the link is ready for sharing.
Ideally, this should all happen on my own machine and things could be shared with Bittorrent. The problem is privacy. There is no privacy if there is Bittorrent, since data is shared all over the network.

Solution? Server is just a mediator between peers that are sharing files. The request comes, the server gives back the URL for sharing and then you can use that URL for sharing files. You can observe the progress of downloads for that file among peers and remove it at any time. Server is not involved in the download/upload traffic of that file, it goes directly from seeder to leecher.

## Features

### Server

**Server must not get the file in one go, since this kills the nature of P2P. Instead, server should behave as another leecher and provider of link for additional sharing.**

1. Start seeding a file to a server, which gives you a URL from which other leechers can get the content
2. You get a URL with the location of that file, you need to have your browser opened
3. Once you give that URL to someone, the seeding process starts, you are still the seeder
4. You get info about the download status and about which ip is downloading the picture (each IP gets download bar with different colors)
5. Once you close the page, the file is gone

We basically need to build something on top of [instant.io](https://instant.io/).

### Client

1. Take the screenshot
2. Image is converted to a torrent file on your machine
3. Torrent is sent to the server
3. URL opens in your browser with the image you are seeding

Check [imgur-screenshot](https://github.com/jomo/imgur-screenshot), which does almost the same thing we need,
just uploads the file to imgur. Also, there exists an even simpler tool for that, but I think it's more for Linux
folks - check [this article to find out more](http://sirupsen.com/a-simple-imgur-bash-screenshot-utility/).

## License

MIT

## Sponsors

Two Bucks Ltd © 2015

<a href="https://twobucks.co">
![https://twobucks.co](https://twobucks.co/assets/images/logo-small.png)
</a>
