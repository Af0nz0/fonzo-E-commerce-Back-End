-- schema.sql

-- Create the database
CREATE DATABASE IF NOT EXISTS 'api connect';
USE 'api connect';

-- Create the Category table
CREATE TABLE Category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(255) NOT NULL
);

-- Create the Product table
CREATE TABLE Product (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL DEFAULT 10,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES Category (id) ON DELETE CASCADE
);

-- Create the Tag table
CREATE TABLE Tag (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tag_name VARCHAR(255) NOT NULL
);

-- Create the ProductTag table for many-to-many relationship
CREATE TABLE ProductTag (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  tag_id INT,
  FOREIGN KEY (product_id) REFERENCES Product (id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES Tag (id) ON DELETE CASCADE
);
