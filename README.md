# [Seedshot](http://seedshot.io/) [![Build Status](https://travis-ci.org/twobucks/seedshot.svg?branch=master)](https://travis-ci.org/twobucks/seedshot)

Temporary peer to peer screenshot sharing from your browser.

## Installation

```
npm install -g seedshot-cli
```

## Usage

```
seedshot
```

## What rocks

* the files are temporary, so we don't waste resources on storing them
* powered by [WebTorrent](https://github.com/feross/webtorrent)
* browser is used for sharing images peer to peer
* when all browsers with the image are closed, the image is gone forever

## What sucks

* browser support, since it depends on [WebTorrent](https://github.com/feross/webtorrent) which doesn't support IE and probably lacks support for majority
of mobile browsers
* each file depends on torrent network so it takes around ~3s to load the image
* no app so you have to use the CLI tool
* no Windows support for taking screenshots
* once you as an owner of an image close the browser, the file might still be available if other peers keep their browser open
* design 

## Development

```
npm start
```

## License

MIT

## Sponsors

Two Bucks Ltd © 2017

[![https://twobucks.co](https://twobucks.co/assets/images/logo-small.png)](https://twobucks.co)
