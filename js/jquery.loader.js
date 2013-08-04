/*global jQuery */
/*jslint browser: true, todo: true, indent: 4 */
(function ($) {
    'use strict';

    /* Some utils */
    function get_el_params($el) {
        return $.extend($el.offset(), {
            width: $el.outerWidth(),
            height: $el.outerHeight()
        });
    }

    function get_middle_of(flat, el_params, gif) {
        return (el_params[flat] - parseInt(gif.css(flat), 10)) / 2;
    }

    var default_options = {
            css: {
                'container': {
                    'display': 'none',
                    'position': 'absolute'
                },

                'gif': {
                    'position': 'absolute',
                    'width': '32px',
                    'height': '32px',
                    'background': 'url("i/loader-circle-32.gif") 0 0 no-repeat',
                    'z-index': '1'
                },

                'overflow': {
                    'background': '#aeaeae',
                    'opacity': '0.4'
                }
            }
        },

        Loader = {
            initialized: false,

            init: function () {
                var self = this,
                    suffixs = ['container', 'gif', 'overflow'];

                $.each(suffixs, function (i, suff) {
                    self[suff] = $('<div>', {'class': 'loader_' + suff});
                    if (i > 0) {
                        self[suffixs[0]].append(self[suff]);
                    }
                });

                self.initialized = true;

                return self;
            },

            append_to: function ($el) {
                $el.append(this.container);
                return this;
            },

            show: function ($el, default_options) {
                var el_params = get_el_params($el),
                    settings = $el.data('loader_settings') || default_options;

                this.container.css($.extend({}, settings.css.container, el_params));
                this.overflow.css($.extend({}, settings.css.overflow, el_params));

                this.gif.css(settings.css.gif).css({
                    top: get_middle_of('height', el_params, this.gif),
                    left: get_middle_of('width', el_params, this.gif)
                });

                return this.container.css('display', 'block');
            },

            hide: function () {
                return this.container.css('display', 'none');
            }
        };

    $.fn.Loader = function (options) {
        var settings = $.extend({}, default_options);

        if (!Loader.initialized) {
            Loader.init().append_to($('body'));
        }

        if (options === Object(options) || !options) {
            return this.each(function () {
                $(this).data('loader_settings', $.extend(true, settings, options || {}));
            });
        }

        if (options === 'show' || options === 'hide') {
            Loader[options]($(this[0]), settings); // TODO: make more loaders! >:)
        }

        return this;
    };
}(jQuery));
