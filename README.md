# [Seedshot](http://seedshot.io/)

Peer to peer screenshot sharing from your browser.

## Idea

The cool thing with Dropbox is that once a screenshot is taken, it's immediately available in my Dropbox folder and the link is ready for sharing.
Ideally, this should all happen on my own machine and things could be shared with Bittorrent. The problem is privacy. There is no privacy if there is Bittorrent, since data is shared all over the network.

Solution? Server is just a mediator between peers that are sharing files. The request comes, the server gives back the URL for sharing and then you can use that URL for sharing files. You can observe the progress of downloads for that file among peers and remove it at any time. Server is not involved in the download/upload traffic of that file, it goes directly from seeder to leecher.

## Features

### Server

1. Give the file directly to a server, the browser opens the site where a file is living
2. You are the first viewer or the admin of the file, so you're the only user downloading the file from the server
3. Once you download the file, it's removed from the server and only continues to live in your current browser session
4. The seeding process begins, anyone who gets to the URL you're viewing will receive the file from you (with webtorrent)
5. You get the info about how much peers is viewing the file and when they stop viewing it
6. Once you close the browser, the file is completely gone

We basically need to build something similar to [instant.io](https://instant.io/). The problem with instant.io is that you have to manually click and
select the file you want to host. Since we're trying to do it directly from your machine, with the help of that command line tool, we can't use that.
We also don't have access to that button from inside a terminal. Notice that with instant.io, there is no post request that uploads the file anywhere, there's only the file input.

### Client

1. Take the screenshot
2. Image is sent to the server
3. URL opens in your browser with the image you start seeding from your browser

Check [imgur-screenshot](https://github.com/jomo/imgur-screenshot), which does almost the same thing we need,
just uploads the file to imgur. Also, there exists an even simpler tool for that, but I think it's more for Linux
folks - check [this article to find out more](http://sirupsen.com/a-simple-imgur-bash-screenshot-utility/).

## License

MIT

## Sponsors

Two Bucks Ltd © 2016

<a href="https://twobucks.co">
![https://twobucks.co](https://twobucks.co/assets/images/logo-small.png)
</a>
