<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="UTF-8">
		<title>ThemeConf Workshop - Session 2</title>
	</head>
	<body>

		<div id="page">
			<p><a href="#" id="another-post">Hello world!</a></p>
			<h1></h1>
			<div id="content"></div>
		</div>

		<script>
			var request = new XMLHttpRequest();
			// The URL should point to a post on your local WordPress installation
			request.open( 'GET', 'http://resttheming.dev/wp-json/wp/v2/posts/1241', true );

			request.onload = function() {
				if ( request.status >= 200 && request.status < 400 ) {
					// Success!
					var data = JSON.parse( request.responseText );
					document.querySelector( '#page h1' ).innerHTML = data.title.rendered;
					document.querySelector( '#page #content' ).innerHTML = data.content.rendered;
				} else {
					// We reached our target server, but it returned an error

				}
			};

			request.onerror = function() {
				// There was a connection error of some sort
			};

			request.send();

			function changePost( event ) {
				event.preventDefault();

				var request = new XMLHttpRequest();
				// The URL should point to a post on your local WordPress installation
				request.open( 'GET', 'http://resttheming.dev/wp-json/wp/v2/posts/1', true );

				request.onload = function() {
					if ( request.status >= 200 && request.status < 400 ) {
						// Success!
						var data = JSON.parse( request.responseText );
						document.querySelector( '#page h1' ).innerHTML = data.title.rendered;
						document.querySelector( '#page #content' ).innerHTML = data.content.rendered;
					} else {
						// We reached our target server, but it returned an error

					}
				};

				request.onerror = function() {
					// There was a connection error of some sort
				};

				request.send();


			}

			var el = document.getElementById( 'another-post' );
			el.addEventListener( 'click', changePost, false );
		</script>

	</body>
</html>
