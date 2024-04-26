-- Create the database (replace 'your_database_name' with your desired name)
CREATE DATABASE team_db;

-- Use the newly created database
USE team_db;

-- Create the table 'students'
CREATE TABLE students (
  Id INT PRIMARY KEY AUTO_INCREMENT,  -- Auto-incrementing integer for ID
  First_Name VARCHAR(255) NOT NULL,  -- First name (text)
  Last_Name VARCHAR(255) NOT NULL,  -- Last name (text)
  CGPA DECIMAL(5,2) NOT NULL        -- CGPA with two decimal places
);

INSERT INTO students (First_name, Last_name, CGPA)
VALUES ("Abdullah", "Allama", 4.0), ("Ahmed", "Ihab", 4.0),("Khaled", "Hamada", 4.0), ("Eyad", "Anan", 4.0),("Marawan", "Khaled", 4.0);