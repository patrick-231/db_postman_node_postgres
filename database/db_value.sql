CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(15),
  address VARCHAR(255)
);

INSERT INTO customers (name, email, phone, address) VALUES
  ('Patrick Umukoro', 'patrick@example.com', '123-456-7890', '123 Leipziger'),
  ('Daria Umukor', 'daria@example.com', '987-654-3210', '456 Elm St'),
  ('Naomi Umukoro', 'naomi@example.com', '555-123-4567', '789 Oak Ave');