DROP TABLE IF EXISTS "composers";
CREATE TABLE composers ( 
id INTEGER PRIMARY KEY AUTOINCREMENT, 
first_name VARCHAR(25), 
last_name VARCHAR(25)
);
INSERT INTO "composers" VALUES(1,'Johannes','Brahms');
INSERT INTO "composers" VALUES(2,'Claude','Debussy');
