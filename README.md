# Launch

A terminal-like startpage that supports commands.

From [/r/startpages](https://www.reddit.com/r/startpages):

> A startpage is the page you first see when you open your browser. A custom startpage may have links to your favourite sites and maybe a search box for your favourite search engine.

## Features

- Terminal-like design
- Utilizes the dark [Solarized](http://ethanschoonover.com/solarized) colour palette
- Generates searches from [DuckDuckGo](https://duckduckgo.com/)
- Quick access to favourite links
- Supports commands (see below for more details)

*Note: This startpage has only been tested on Firefox. However, any modern browser should be able to render it within intention.*

## Screenshot

![Startpage in action.](https://github.com/haothitran/launch/blob/master/assets/screenshot.png?raw=true)

## Commands

The following is a list of all commands available for input into the search box, as well as their functions:

- `reddit [-r][-u]`
  - go to [reddit](https://www.reddit.com/)
  - `-r` go to subreddit
  - `-u` go to specified user
- `reddit [bs][pc][up][sp]`
  - `bs` /r/battlestations
  - `pc` /r/pcmasterrace
  - `up` /r/unixporn
  - `sp` /r/startpages
- `twt [-u][-s]`
  - go to [Twitter](https://twitter.com/)
  - `-u` go to specified user (`@` is optional)
  - `-s` search for tweets containing text
- `ig [-u]`
  - go to [Instagram](https://www.instagram.com/)
  - `-u` go to specified user (`@` is optional)
- `yt` go to [YouTube](https://www.youtube.com/) subscriptions page
- `ttv [-u]`
  - go to [Twitch](https://www.twitch.tv/) following directory
  - `-u` go to specified user

## Usage

Most browsers will require you to use extensions to set a custom startpage as your new tab page:

- [New Tab Redirect](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna) for Chrome
- [New Tab Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/) for Firefox
- [Custom New Tab Page](https://addons.opera.com/en/extensions/details/custom-new-tab-page/) for Opera
- Safari - set this startpage as your homepage in settings

If you decide to use this startpage, be sure to personalize the links in `index.html` to your liking.

## Credits

- Source inspiration from [/u/TASER_NINJA](https://www.reddit.com/user/TASER_NINJA)'s [startpage](https://github.com/NickBrisebois/dotfiles/tree/master/startpage)
- Design inspiration from [/u/jarvvski](https://www.reddit.com/user/jarvvski)'s [startpage](https://github.com/Jarvvski/Start-Page)
- Search script from [/u/Will_Eccles](https://www.reddit.com/user/Will_Eccles)'s [startpage](https://github.com/WillEccles/startpage/tree/0a83b3dd8cb0de95a1c4b6408c5b129e7db90dd7) (modified)

## License

Copyright (c) 2016 Hao Tran - Released under the [MIT license](https://github.com/haothitran/launch/blob/master/LICENSE).
