DROP TABLE IF EXISTS shelters CASCADE;

CREATE TABLE shelters (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone_number VARCHAR(255),
  password TEXT NOT NULL,
  favourited_pets VARCHAR(255),
  location VARCHAR(255) 
);
