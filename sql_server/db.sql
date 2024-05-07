CREATE DATABASE team_db;

USE team_db;

CREATE TABLE students (
  Id INT PRIMARY KEY AUTO_INCREMENT,  
  First_Name VARCHAR(255) NOT NULL,  
  Last_Name VARCHAR(255) NOT NULL,  
  CGPA DECIMAL(5,2) NOT NULL       
);

INSERT INTO students (First_name, Last_name, CGPA)
VALUES ("Abdullah", "Allama", 4.0), ("Ahmed", "Ihab", 4.0),("Khaled", "Hamada", 4.0), ("Eyad", "Anan", 4.0),("Marawan", "Khaled", 4.0);