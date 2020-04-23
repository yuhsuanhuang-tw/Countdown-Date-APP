CREATE TABLE IF NOT EXISTS event(
	id INTEGER PRIMARY KEY AUTOINCREMENT, 
	title TEXT, 
	note TEXT, 
	startDate TEXT, 
	eventEnd INTEGER NOT NULL CHECK(eventEnd IN(0,1)), 
	endDate TEXT, 
	top INTEGER NOT NULL CHECK(top IN(0,1)), 
	orders INTEGER,
	counts INTEGER);



INSERT or IGNORE INTO event(
	title, note, startDate, eventEnd, endDate, top, orders, counts) 
	VALUES ('Together', 'record we together days', '2011-11-25T23:59:59.999Z', 0, '', 1, 0, null);

INSERT or IGNORE INTO event(
	title, note, startDate, eventEnd, endDate, top, orders, counts) 
	VALUES ('Australia Life', 'working & holiday', '2018-05-03T23:59:59.999Z', 1, '2019-01-03T23:59:59.999Z', 0, 1, 195);
	
INSERT or IGNORE INTO event(
	title, note, startDate, eventEnd, endDate, top, orders, counts) 
	VALUES ('Canada Life', 'working & holiday', '2019-03-21T23:59:59.999Z', 0, '', 0, 2, null);