 const html = (css, app) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Color Name</title>
        ${css}
        <!-- Piwik -->
        <script type="text/javascript">
          var _paq = _paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//analytics.simonbreiter.com/";
            _paq.push(['setTrackerUrl', u+'piwik.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
          })();
        </script>
        <!-- End Piwik Code -->
    </head>
    <body>
        <div id="app" style="height: 100%">${app}</div>
        <script src="js/client.js"></script>
    </body>
    </html>
  `

 export default html
