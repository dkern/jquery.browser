# jQuery Browser
Re-Implementation of jQuery's deprecated and removed (_within jQuery 1.9_) `$.browser` functionality, to detect current browser information.
It's even part of [jQuery migrate](https://github.com/jquery/jquery-migrate) and don't need to be included twice.

Live Example: http://jquery.eisbehr.de/browser



## Installation
First of all, you will need a copy of [jQuery](http://jquery.com) to use it.
Then [download](https://github.com/eisbehr-/jquery.browser/archive/master.zip) and save one of two available files and include them in your page, just below jQuery itself.
Either the [development](http://raw.githubusercontent.com/eisbehr-/jquery.browser/master/jquery.browser.js) or the [minified](http://raw.githubusercontent.com/eisbehr-/jquery.browser/master/jquery.browser.min.js) version.
```HTML
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jquery.browser.min.js"></script>
```


## Object Data
`$.browser` is an object and contains data of the current browser.
Below you find some example outputs by different browsers.
You will find a live example of your browser [here](http://jquery.eisbehr.de/browser/).

### Firefox 42:
```JS
{
    ua: 'mozilla/5.0 (windows nt 6.1; wow64; rv:42.0) gecko/20100101 firefox/42.0',
    type: 'mozilla',
    mozilla: true,
    version: '42.0',
    versionNum: 42
}
```

### Chrome 46:
```JS
{
    ua: 'mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) chrome/46.0.2490.86 safari/537.36',
    type: "chrome"
    chrome: true,
    webkit: true,
    version: '46.0.2490.86',
    versionNum: 46
}
```

### Internet Explorer 10:
```JS
{
    ua: 'mozilla/5.0 (compatible; msie 10.0; windows nt 6.1; wow64; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.3; masbjs)',
    type: 'msie',
    msie: true,
    version: '10.0',
    versionNum: 10
}
```


## Bugs / Feature request
Please [report](http://github.com/eisbehr-/jquery.browser/issues) bugs and feel free to [ask](http://github.com/eisbehr-/jquery.browser/issues) for new features directly on GitHub.


## License
This plugin is dual-licensed under [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL-2.0](http://www.gnu.org/licenses/gpl-2.0.html) license. 
