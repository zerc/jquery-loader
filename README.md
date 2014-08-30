jquery.simpleLoader
===============

Small jQuery plugin for do animated gif loaders with opacity overflow over html elements.



## Setup

Put `jquery.simpleLoader.min.js` into your js folder.

Include script tag after jquery:

`<script type="text/javascript" src="js/jquery.simpleLoader.js"></script>`

Include css from `loader.css' inside your css file or just put

`<link rel="stylesheet" href="css/loader.css" type="text/css">`.



## Usage

Default you can use `$('.foo_div').Loader('show')` or `$('.foo_div').Loader('hide')` methods for show/hide loader over selected element.

Also you can overwrite default css for loader elements. Example:

```
$('.foo_div').Loader({css: {
    'overflow': {'background': 'red'}
}});
```

You can init many loaders on one page. Every loader elements have loader_index class and you can set different styles for:

```
.loader_0 .loader_overflow {
  background:red;
}

.loader_1 .loader_overflow {
  background:green;
}
```
