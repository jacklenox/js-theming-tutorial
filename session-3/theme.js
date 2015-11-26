var request = new XMLHttpRequest();
// The URL should point to a post on your local WordPress installation
request.open( 'GET', 'http://resttheming.dev/wp-json/wp/v2/posts/1241', true );

request.onload = function() {
	if ( request.status >= 200 && request.status < 400 ) {
		// Success!
		var data = JSON.parse( request.responseText );
		var h1 = document.createElement( 'h1' );
		var div = document.createElement( 'div' );
		h1.appendChild( document.createTextNode( data.title.rendered ) );
		div.innerHTML = data.content.rendered;
		var content = document.getElementById( 'content' );
		content.appendChild( h1 );
		content.appendChild( div );
	} else {
		// We reached our target server, but it returned an error

	}
};

request.onerror = function() {
	// There was a connection error of some sort
};

request.send();

changePost = require( './changepost' );

var el = document.querySelector( '.page_item a' );
el.addEventListener( 'click', changePost, false );

window.onhashchange = changeRoute;

function changeRoute() {
	if ( location.hash === "" ) {
		var request = new XMLHttpRequest();
		// The URL should point to a post on your local WordPress installation
		request.open( 'GET', 'http://resttheming.dev/wp-json/wp/v2/posts/1241', true );

		request.onload = function() {
			if ( request.status >= 200 && request.status < 400 ) {
				// Success!
				var data = JSON.parse( request.responseText );
				document.querySelector( '#content h1' ).innerHTML = data.title.rendered;
				document.querySelector( '#content div' ).innerHTML = data.content.rendered;
			} else {
				// We reached our target server, but it returned an error

			}
		};
		request.onerror = function() {
			// There was a connection error of some sort
		};

		request.send();
	}
}

