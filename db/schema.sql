-- MUST DROP IN THIS ORDER DUE TO FK CONSTRAINTS 
DROP TABLE IF EXISTS `item_pictures`;
DROP TABLE IF EXISTS `item_colors`;
DROP TABLE IF EXISTS `items`;

CREATE TABLE `items` (
  `shoe_id` varchar(255) NOT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `price` DECIMAL(5,2) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `front_paragraph` varchar(4084) DEFAULT NULL,
  `complete_description` varchar(4096) DEFAULT NULL,
  PRIMARY KEY (`shoe_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `item_colors` (
  `shoe_id` varchar(255) NOT NULL,
  `color_id` varchar(255) NOT NULL,
  `text_of_color` varchar(255) DEFAULT 'color_text',
  CONSTRAINT `item_colors_2_items_shoe_id` FOREIGN KEY (`shoe_id`) REFERENCES `items` (`shoe_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY `ic_index` (`shoe_id`,`color_id`),
  INDEX `color_index` (`color_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `item_pictures` (
  `shoe_id` varchar(255) NOT NULL,
  `image_link` varchar(4096) DEFAULT 'img_url',
  `color_id` varchar(255) NOT NULL,
  `orientation` varchar(255) NOT NULL,
  CONSTRAINT `pictures_2_color_fkc` FOREIGN KEY (`color_id`) REFERENCES `item_colors` (`color_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pictures_2_item_fkc` FOREIGN KEY (`shoe_id`) REFERENCES `items` (`shoe_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY `ico_index` (`shoe_id`,`color_id`,`orientation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
