jQuery.Loader
===============

Small jQuery plugin for do animated gif loaders with opacity overflow over html elements.



## Setup

Put `jquery.loader.js` into your js folder.

Include script tag after jquery:

`<script type="text/javascript" src="js/jquery.loader.js"></script>`

## Usage

Default you can use `$('.foo_div').Loader('show')` or `$('.foo_div').Loader('hide')` methods for show/hide loader over selected element. 

Also you can overwrite default css for loader elements. Example:

```
$('.foo_div').Loader({css: {
    'overflow': {'background': 'red'}
}});
```

See code for more details :)
