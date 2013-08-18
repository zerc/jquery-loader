/*global jQuery */
/*jslint browser: true, todo: true, indent: 2 */
(function ($) {
  'use strict';

  /* Some utils */
  function get_el_params($el) {
    return $.extend({top: 0, left: 0}, $el.offset(), {
      width: $el.outerWidth(),
      height: $el.outerHeight()
    });
  }

  function get_middle_of(flat, el_params, gif) {
    return (el_params[flat] - parseInt(gif.css(flat), 10)) / 2;
  }

  var default_settings = {
      css: {
        'container': {},
        'gif': {},
        'overflow': {}
      }
    },
    loader_index = 0,
    Loader;

  Loader = function ($el) {
    var self = {},
      suffixs = ['container', 'gif', 'overflow'];

    $.each(suffixs, function (i, suff) {
      self[suff] = $('<div>', {
        'class': 'loader_' + suff + ' loader_' + loader_index
      });
      if (i > 0) {
        self[suffixs[0]].append(self[suff]);
      }
    });

    $('body').append(self.container);
    loader_index += 1;
    self.settings = $.extend(true, {}, default_settings);

    self.set_settings = function (settings) {
      self.settings = $.extend(true, self.settings, settings);
    };

    self.show = function () {
      var el_params = get_el_params($el);

      self.container.css($.extend(el_params, self.settings.css.container));
      self.overflow.css($.extend(el_params, self.settings.css.overflow));

      self.gif.css(self.settings.css.gif).css({
        top: get_middle_of('height', el_params, self.gif),
        left: get_middle_of('width', el_params, self.gif)
      });

      return self.container.css('display', 'block');
    };

    self.hide = function () {
      return self.container.css('display', 'none');
    };

    $el.data('loader', self);

    return self;
  };

  $.fn.Loader = function (settings) {
    var loader;

    return this.each(function () {
      loader = $(this).data('loader') || new Loader($(this));

      if (settings === Object(settings)) {
        return loader.set_settings(settings);
      }

      if (settings === 'show' || settings === 'hide') {
        return loader[settings]();
      }
    });
  };
}(jQuery));
