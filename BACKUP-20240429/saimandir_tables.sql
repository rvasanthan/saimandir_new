CREATE TABLE saimandir_devotee(
   devotee_id serial PRIMARY KEY,
   first_name VARCHAR (50) NOT NULL,
   last_name VARCHAR (50)  NOT NULL,
   email VARCHAR (355) UNIQUE NOT NULL,
   phone_no VARCHAR (16) UNIQUE NOT NULL,
   dev_address VARCHAR (355) NOT NULL,
   gothram VARCHAR(16),
   family_members VARCHAR(355),
   telugu_calendar_flag BOOLEAN,
   last_login TIMESTAMP
);

INSERT INTO 