 const html = (css, app) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Color Name</title>
        ${css}
				<script>
					var WebFontConfig = {
						google: {
								families: ['Roboto:400,900']
						},
						timeout: 3000
					};
					(function(d) {
						var wf = d.createElement('script'), s = d.scripts[0];
						wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
						wf.async = true;
						s.parentNode.insertBefore(wf, s);
					})(document);
				</script>
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
