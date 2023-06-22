CREATE DATABASE onemedia;

/* Tabla de los usuarios */
CREATE TABLE users(id INTEGER AUTO_INCREMENT PRIMARY KEY, username VARCHAR(20), email VARCHAR(50), password VARCHAR(50), privileges TINYINT, verified BOOLEAN);

/* Tabla de todas las peliculas, series, juegos */
CREATE TABLE items(id INTEGER AUTO_INCREMENT PRIMARY KEY, family TINYINT, name VARCHAR(30), has_childs BOOLEAN, description TEXT, release VARCHAR(20), picture INTEGER, official_site INTEGER, official_link INTEGER, origin TINYINT, origin_id INTEGER, FOREIGN KEY (family) REFERENCES families(id) ON DELETE CASCADE, FOREIGN KEY (picture) REFERENCES pictures(id) ON DELETE CASCADE, FOREIGN KEY (origin) REFERENCES origin(id) ON DELETE CASCADE);
/* Las series necesitan */
CREATE TABLE items_childs(id INTEGER AUTO_INCREMENT PRIMARY KEY, item_id INTEGER, season TINYINT, episode TINYINT, origin TINYINT);
/* Las imagenes de cada item */
CREATE TABLE pictures(id INTEGER AUTO_INCREMENT PRIMARY KEY, cdn VARCHAR(255));

/* Si es pelicula, serie o juego */
CREATE TABLE families(id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20));

/* Todos los generos que existen */
CREATE TABLE genres(id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20));
/* Genero de cada item */
CREATE TABLE item_genres(item_id INTEGER, genre_id INTEGER, FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE, FOREIGN KEY (genre_id) REFERENCES genres(id) ON DELETE CASCADE);

/* Los links de cada item */
CREATE TABLE origin(id INTEGER AUTO_INCREMENT PRIMARY KEY, name varchar(20), domain varchar(50));

/* Sitios oficiales como Netflix */
CREATE TABLE official_sites(id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), web_url VARCHAR(30));
/* Links a los sitios oficiales */
CREATE TABLE official_links(id INTEGER AUTO_INCREMENT PRIMARY KEY, item_id INTEGER, site_id INTEGER, url_link VARCHAR(255), FOREIGN KEY (item_id) REFERENCES items(id), FOREIGN KEY (site_id) REFERENCES sites(id) ON DELETE CASCADE);

/* Voto para cada item */
CREATE TABLE votes (user_id INTEGER, item_id INTEGER, score TINYINT, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE);
/* Comentarios de cada item */
CREATE TABLE comments(id INTEGER AUTO_INCREMENT PRIMARY KEY, user_id INTEGER, item_id INTEGER, comment TEXT, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE);
/* Marcar como visto */
CREATE TABLE viewed_items(user_id INTEGER, item_id INTEGER, child_id INTEGER, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE, FOREIGN KEY (child_id) REFERENCES items_childs(id) ON DELETE CASCADE);

/* Listas de los usuarios */
CREATE TABLE lists(id INTEGER AUTO_INCREMENT PRIMARY KEY, user_id INTEGER, name VARCHARAR(20), FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE);
/* Los items de cada lista */
CREATE TABLE list_items(list_id INTEGER, item_id INTEGER, user_id INTEGER, FOREIGN KEY (list_id) REFERENCES lists(id) ON DELETE CASCADE, FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, FOREIGN KEY);