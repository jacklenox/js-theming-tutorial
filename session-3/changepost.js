function changePost( event ) {
	event.preventDefault();

	var request = new XMLHttpRequest();
	// The URL should point to a post on your local WordPress installation
	request.open( 'GET', 'http://resttheming.dev/wp-json/wp/v2/pages/1086', true );

	request.onload = function() {
		if ( request.status >= 200 && request.status < 400 ) {
			// Success!
			var data = JSON.parse( request.responseText );
			document.querySelector( '#content h1' ).innerHTML = data.title.rendered;
			document.querySelector( '#content div' ).innerHTML = data.content.rendered;
			window.location.hash = '#1086';
		} else {
			// We reached our target server, but it returned an error

		}
	};

	request.onerror = function() {
		// There was a connection error of some sort
	};

	request.send();

}

module.exports = changePost;
