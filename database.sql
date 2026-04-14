-- Database Setup
CREATE DATABASE IF NOT EXISTS `fullstack_test` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `fullstack_test`;

-- Categories table
CREATE TABLE IF NOT EXISTS `categories` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `icon` VARCHAR(500) NOT NULL,
    `sort_order` INT DEFAULT 0,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Slides table
CREATE TABLE IF NOT EXISTS `slides` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `category_id` INT NOT NULL,
    `title` VARCHAR(200) NOT NULL,
    `description` TEXT,
    `image_url` VARCHAR(500) NOT NULL,
    `learn_btn_text` VARCHAR(200) NOT NULL,
    `learn_btn_link` VARCHAR(500) NOT NULL,
    `sort_order` INT DEFAULT 0,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Insert categories
INSERT INTO `categories` (`name`, `icon`, `sort_order`) VALUES
('Learning', 'images/DL-learning.svg', 1),
('Technology', 'images/DL-technology.svg', 2),
('Communication', 'images/DL-communication.svg', 3);

-- Insert slides
INSERT INTO `slides` 
(`category_id`, `title`, `description`, `image_url`, `learn_btn_text`, `learn_btn_link`, `sort_order`) 
VALUES
(1, 'Digital Learning Infrastructure', 'Usability enhancement and Training for Transaction Portal for Customers', 'images/DL-Communication.jpg', 'Learn More', '#', 1),
(2, 'New Technologies', 'Usability enhancement and Training for Transaction Portal for Customers', 'images/DL-Learning-1.jpg', 'Learn More', '#', 1),
(3, 'Communication Matters', 'Usability enhancement and Training for Transaction Portal for Customers', 'images/DL-Technology.jpg', 'Learn More', '#', 1);