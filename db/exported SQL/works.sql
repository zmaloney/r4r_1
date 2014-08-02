DROP TABLE IF EXISTS "works";
CREATE TABLE works ( 
id INTEGER PRIMARY KEY AUTOINCREMENT, 
composer_id INT(11), 
title VARCHAR(100)
);
INSERT INTO "works" VALUES(1,1,'Sonata for Cello and Piano in F Major');
INSERT INTO "works" VALUES(2,2,'String Quartet');
