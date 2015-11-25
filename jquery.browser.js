/*!
 * jQuery Browser - v0.1.1
 * http://jquery.eisbehr.de/browser/
 *
 * Copyright 2012 - 2015, Daniel 'Eisbehr' Kern
 *
 * Dual licensed under the MIT and GPL-2.0 licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * $.browser;
 */
(function($)
{
    // we will never overwrite an existing instance of jquery browser
    if( !$.browser )
    {
            // current user agent
        var userAgent = navigator.userAgent.toLowerCase(),

            // pass an default object to jquery with current user agent
            // and use a internal variable for better minification 
            browser = $.browser = {ua: userAgent},

            // browsers regex pattern
            regex =
            {
                chrome: /(chrome)[ \/]([\w.]+)/,
                webkit: /(webkit)[ \/]([\w.]+)/,
                opera: /(opera)(?:.*version|)[ \/]([\w.]+)/,
                msie: /(msie) ([\w.]+)/,
                mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/
            },

            // try everything until some browser matches  
            match = regex.chrome.exec(userAgent) ||
                    regex.webkit.exec(userAgent) ||
                    regex.opera.exec(userAgent) ||
                    regex.msie.exec(userAgent) ||
                    (userAgent.indexOf("compatible") < 0 && regex.mozilla.exec(userAgent)) || 
                    [];

        // fill object if we get a match
        if( match[1] )
        {
            // jquery's old default object data
            browser[match[1]] = true;
            browser.version = match[2] || "0";

            // some extension of mine :)
            browser.type = match[1];
            browser.versionNum = parseFloat(match[2] || "0");
        }

        // chrome is webkit
        if ( browser.chrome )
        {
            browser.webkit = true;
        }

        // but webkit is also safari
        else if ( browser.webkit )
        {
            browser.safari = true;
        }
    }
})(jQuery);