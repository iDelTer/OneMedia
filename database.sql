CREATE DATABASE onemedia;

/* Tabla de los usuarios */
CREATE TABLE users(id INTEGER AUTO_INCREMENT PRIMARY KEY, username VARCHAR(20), email VARCHAR(50), password VARCHAR(50), privileges TINYINT, verified BOOLEAN);

/* Bans */
CREATE TABLE bans(id INTEGER AUTO_INCREMENT PRIMARY KEY, user_id INTEGER, createdAt TIMESTAMP, endsAt TIMESTAMP, FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE);

/* Tabla de todas las peliculas, series, juegos, canciones */
CREATE TABLE items(id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30), family TINYINT, has_childs BOOLEAN, description TEXT, release VARCHAR(20), height_picture INTEGER, width_picture INTEGER, FOREIGN KEY (family) REFERENCES families(id) ON update CASCADE, FOREIGN KEY (high_picture) REFERENCES picture(id) ON UPDATE CASCADE, FOREIGN KEY (high_picture) REFERENCES picture(id) ON UPDATE CASCADE);
CREATE TABLE item_platforms(item_id INTEGER, platform_id INTEGER, FOREIGN KEY (item_id) REFERENCES items(id) ON UPDATE CASCADE, FOREIGN KEY (platform_id) REFERENCES platforms(id) ON UPDATE CASCADE);

/* Peliculas */
CREATE TABLE movies(id INTEGER AUTO_INCREMENT PRIMARY KEY, item_id INTEGER, FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE ON UPDATE CASCADE);

/* Series */
CREATE TABLE series(id INTEGER AUTO_INCREMENT PRIMARY KEY, item_id INTEGER, season TINYINT, episode_number TINYINT, episodei_name VARCHAR(30), FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE ON UPDATE CASCADE);

/* Music */
CREATE TABLE music(id INTEGER AUTO_INCREMENT PRIMARY KEY, item_id INTEGER, author INTEGER, FOREIGN KEY (item_id) REFERENCES items(id), FOREIGN KEY (author) REFERENCES authors(id) ON DELETE CASCADE ON UPDATE CASCADE);

/* Games */
CREATE TABLE games(id INTEGER AUTO_INCREMENT PRIMARY KEY, item_id INTEGER, FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE ON UPDATE CASCADE);
CREATE TABLE game_dlcs(id INTEGER AUTO_INCREMENT PRIMARY KEY, game_id INTEGER, name varchar(30), FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE ON UPDATE CASCADE);

/* Las imagenes de cada item */
CREATE TABLE pictures(id INTEGER AUTO_INCREMENT PRIMARY KEY, origin_link VARCHAR(255));

/* Si es pelicula, serie o juego */
CREATE TABLE families(id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20));

/* Todos los generos que existen */
CREATE TABLE genres(id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20));
/* Genero de cada item */
CREATE TABLE genre_items(item_id INTEGER, genre_id INTEGER, FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE, FOREIGN KEY (genre_id) REFERENCES genres(id) ON DELETE CASCADE);

/* Los links de cada item */
CREATE TABLE origin(id INTEGER AUTO_INCREMENT PRIMARY KEY, name varchar(20), domain varchar(50));

/* Sitios oficiales como Netflix */
/* Netflix, HBO, Disney, Amazon Video, Steam, PS4, XBOX, Nintendo, Uplay, Origin, GOG, Epic Games*/
CREATE TABLE platforms(id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), web_url VARCHAR(30), picture INTEGER, FOREIGN KEY (picture) REFERENCES picture(id) ON DELETE CASCADE);
/* Links a los sitios oficiales */
CREATE TABLE platform_links(id INTEGER AUTO_INCREMENT PRIMARY KEY, item_id INTEGER, platform_id INTEGER, url_link VARCHAR(255), FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE, FOREIGN KEY (platform_id) REFERENCES platforms(id) ON DELETE CASCADE);

/* Voto para cada item */
CREATE TABLE votes(user_id INTEGER, item_id INTEGER, score TINYINT, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE);
/* Comentarios de cada item */
CREATE TABLE comments(id INTEGER AUTO_INCREMENT PRIMARY KEY, user_id INTEGER, item_id INTEGER, comment TEXT, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE);
/* Marcar como visto */
CREATE TABLE completed_movies(user_id INTEGER, movie_id INTEGER, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE);
CREATE TABLE completed_series(user_id INTEGER, serie_id INTEGER, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, FOREIGN KEY (serie_id) REFERENCES series(id) ON DELETE CASCADE);
CREATE TABLE completed_games(user_id INTEGER, game_id INTEGER, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE);

/* Listas de los usuarios */
CREATE TABLE lists(id INTEGER AUTO_INCREMENT PRIMARY KEY, user_id INTEGER, name VARCHARAR(20), FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE);
/* Los items de cada lista */
CREATE TABLE list_items(list_id INTEGER, item_id INTEGER, user_id INTEGER, FOREIGN KEY (list_id) REFERENCES lists(id) ON DELETE CASCADE, FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, FOREIGN KEY);

/* Actores */
CREATE TABLE actors(id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30), birthday VARCHAR(20), height_picture INTEGER, width_picture INTEGER, FOREIGN KEY (high_picture) REFERENCES picture(id), FOREIGN KEY (high_picture) REFERENCES picture(id));
CREATE TABLE actors_items(item_id INTEGER, actor_id INTEGER, character_role VARCHAR(30), FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE, FOREIGN KEY (actor_id) REFERENCES actors(id) ON DELETE CASCADE);
CREATE TABLE singers(id INTEGER AUTO_INCREMENT PRIMARY KEY, birthday VARCHAR(20));