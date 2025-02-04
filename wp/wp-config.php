<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'spa-db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'E<^JZAv7n7Jy^^(5HIiCh]O4KW9-8N^};80Kv% Vt5-mL1a+,a=2>F3o@aX5piu4' );
define( 'SECURE_AUTH_KEY',  's~:UF}cZj8rY7d742eXN:A9^m8k<Er a&eDY$vU_]M+DW6=UiI[PCxsjZL5I-K@V' );
define( 'LOGGED_IN_KEY',    'Sb@Ce<V%3q:lv/B(Q!IOMdfE+LK 7 3$VW-jddeL7}.J:DN`+Ws21+,QkTb^:y6K' );
define( 'NONCE_KEY',        'R$mU!*QTmhcCbTl&c[Sic(NPu$@9S@T<s+&KtZpTx^s$A7rp ,,fQJo,tS&U1.Ao' );
define( 'AUTH_SALT',        'y[RH6J.odJfxW7ZKpr<FPBAZHJ`oWSC<vstC/6N[BLH^el[/gSr^w:-]h@#D`A&m' );
define( 'SECURE_AUTH_SALT', 'qW^{}uyo=fWV[J,YNHh-Gz@F,^J7cK(0!>XSxS$CS%ijC/ .:6Tc]y;ypt=]#{Fp' );
define( 'LOGGED_IN_SALT',   '[r]b9JoC~x33OjrU=0L.J)>NQ= j;&By,`tbHz1U9 yOCbC-~> ]{R?@f]H;jH3,' );
define( 'NONCE_SALT',       't]U*Bk`1`xtx%5E. NY@:F^1gk~oQ(!!Iq1&fT!*y*h}+cwz%8pl:Rw.&L,O8f)w' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
