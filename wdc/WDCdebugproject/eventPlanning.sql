-- CREATE DATABASE eventPlanning;

USE eventPlanning;

CREATE TABLE admin (
    email VARCHAR(127),
    password VARCHAR(127),
    PRIMARY KEY (email)
);

CREATE TABLE users (
    users_email VARCHAR(127) UNIQUE,
    password VARCHAR(127),
    last_name VARCHAR(63),
    first_name VARCHAR(63),
    PRIMARY KEY (users_email)
);

INSERT INTO users VALUES ("kexin.hkc@gmail.com","123456","Kexin","Huang");

CREATE TABLE events (
    ID INT NOT NULL AUTO_INCREMENT,
    event_name VARCHAR(127),
    description VARCHAR(1207),
    PRIMARY KEY (ID)
);

CREATE TABLE creating_trip (
    users_email VARCHAR(127),
    event_ID INT,
    FOREIGN KEY (users_email) REFERENCES users(users_email) ON DELETE SET NULL,
    FOREIGN KEY (event_ID) REFERENCES events(ID) ON DELETE SET NULL
);

CREATE TABLE availaility (
    timestamp DATETIME,
    event_ID INT,
    FOREIGN KEY (event_ID) REFERENCES events(ID) ON DELETE CASCADE
);

