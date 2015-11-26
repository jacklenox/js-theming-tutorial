<?php
/**
 * Enqueue scripts and styles.
 */
function javascript_theme_3_scripts() {
	wp_enqueue_style( 'javascript-theme-3-style', get_stylesheet_uri() );

	wp_enqueue_script( 'javascript-theme-3-script', get_template_directory_uri() . '/compiled.js', array(), '20151030', true );
}
add_action( 'wp_enqueue_scripts', 'javascript_theme_3_scripts' );
