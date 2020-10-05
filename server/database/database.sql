CREATE DATABASE react_gallery;

CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(300) NOT NULL DEFAULT '',
	description VARCHAR(300) NOT NULL DEFAULT '',
	likes INTEGER NOT NULL DEFAULT 0
);

--MaterialUI feature update..needed another column
--Note: I directly changed the existing rows to have data in this column using postico
ALTER TABLE gallery
ADD COLUMN title VARCHAR(50) NOT NULL DEFAULT 'Title here!';

--seed database
INSERT INTO gallery(path, description, likes)
VALUES ('images/library.jpeg', 'I toured the Library of Trinity College Dublin (2018).', 0);

INSERT INTO gallery(path, description, likes)
VALUES ('images/cliffs-of-moor.jpeg', 'Photo of the Cliffs of Moher when I was in Ireland (2018).', 3);

INSERT INTO gallery(path, description, likes)
VALUES ('images/coachella3.jpeg', 'Me doing what everybody does at Coachella: posing for those pics (2019).', 2);

INSERT INTO gallery(path, description, likes)
VALUES ('images/coachella-wheel.jpeg', 'The Coachella Ferris wheel. This was taken after the last act of the last night in 2019.', 0);

INSERT INTO gallery(path, description, likes)
VALUES ('images/sf.jpeg', 'New Years day in San Francisco (2019). I ran about 15 miles that day around SF, touring the city. I had an out-of-body experience running over the Golden Gate Bridge.', 0);

INSERT INTO gallery(path, description, likes)
VALUES ('images/medora.jpeg', 'Me doing yoga in Medora (2020). Fun fact: The official Medora instagram requested to use this image for advertising campaigns.', 0);

INSERT INTO gallery(path, description, likes)
VALUES ('images/MississippiHike.jpeg', 'Some of my close friends I met in Mississippi went on a hike/tour around the Vicksburg Military Park (2019). It was gorgeous.', 0);

INSERT INTO gallery(path, description, likes)
VALUES ('images/paige-and-me.jpeg', 'A close friend of mine and me in Grand Forks, ND, on New Years Eve 2017.', 0);

INSERT INTO gallery(path, description, likes)
VALUES ('images/proof1.jpeg', 'Part 1 of 2 of a mathematical proof I did a couple weeks back (2020). I like to learn about mathematics and its Computer Science applications recreationally.', 0);

INSERT INTO gallery(path, description, likes)
VALUES ('images/proof2.jpeg', 'Part 2 of 2 of a mathematical proof I did a couple weeks back. Currently halfway through a discrete mathematics textbook. Next will be linear algebra.', 0);

INSERT INTO gallery(path, description, likes)
VALUES ('images/vienna-palace.jpeg', 'I went for a 13-mile run around Vienna, Austria, and found the the Schönbrunn Palace (2017). It is beautiful!', 0);

INSERT INTO gallery(path, description, likes)
VALUES ('images/nola.jpeg', 'When I lived in the South, I freqently went to New Orleans (2019). Besides the smell, I loved it there.', 0);

INSERT INTO gallery(path, description, likes)
VALUES ('images/southnature.jpeg', 'If there is one thing I will miss about the South, it will be the perpertual greenness (2019).', 0);
