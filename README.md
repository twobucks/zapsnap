# [:zap: Zapsnap](http://zapsnap.io/) 

[![Build Status](https://travis-ci.org/twobucks/zapsnap.svg?branch=master)](https://travis-ci.org/twobucks/zapsnap)

Temporary peer to peer screenshot sharing from your browser.

## Links

* [zapsnap-desktop](https://github.com/twobucks/zapsnap-desktop) - MacOS app for taking screenshots
* [seedshot-cli](https://github.com/twobucks/seedshot-cli) - CLI tool for taking screenshots (Linux and MacOS)

## What rocks

* the files are temporary, so we don't waste resources on storing them
* powered by [WebTorrent](https://github.com/feross/webtorrent)
* browser is used for sharing images peer to peer
* when all browsers with the image are closed, the image is gone forever

## What sucks

* browser support, since it depends on [WebTorrent](https://github.com/feross/webtorrent) which doesn't support IE and probably lacks support for majority
of mobile browsers
* each file depends on torrent network so it takes around ~3s to load the image
* no Windows support for taking screenshots
* once you as an owner of an image close the browser, the file might still be available if other peers keep their browser open

## Development

```
npm start     # will start the server
npm run watch # watch for CSS/JS file changes and build 
npm run build # build CSS/JS for production
```

## Attributions

Logo created by il Capitano from [Noun Project](https://thenounproject.com/search/?q=zap&i=889349).

Design by [Benjamin Alijagić](https://twitter.com/benjam1n).

## License

MIT

## Sponsors

Two Bucks Ltd © 2017

[![https://twobucks.co](https://twobucks.co/assets/images/logo-small.png)](https://twobucks.co)
