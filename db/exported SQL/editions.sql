DROP TABLE IF EXISTS "editions";
CREATE TABLE editions ( 
id INTEGER PRIMARY KEY AUTOINCREMENT, 
work_id INT(11) NOT NULL, 
description VARCHAR(30), 
publisher VARCHAR(60), 
year INT(4), 
price FLOAT(20, 2)
);
INSERT INTO "editions" VALUES(1,1,'Facsimile','D. Black Music House',1998,21.95);
INSERT INTO "editions" VALUES(2,1,'Urtext','Ruby Music Inc.',1977,23.5);
INSERT INTO "editions" VALUES(3,1,'ed. Y Matsumoto','Ruby Music Inc.',2001,22.95);
INSERT INTO "editions" VALUES(4,2,'','D. Black Music House',1995,39.95);
INSERT INTO "editions" VALUES(5,2,'Reprint of 1894 edition','Ruby Music Inc',2003,35.95);
