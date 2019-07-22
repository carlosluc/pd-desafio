CREATE SCHEMA `discocarlosw` DEFAULT CHARACTER SET utf8;

DROP TABLE IF EXISTS `COLLECTION`;

CREATE TABLE `COLLECTION` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(20) NOT NULL,
 PRIMARY KEY (`id`)
) ;

INSERT INTO `COLLECTION` VALUES (1,'Melhores do Brasil'),
(5,'Melhores Internacional');

DROP TABLE IF EXISTS `DISC`;
CREATE TABLE `DISC` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(100) NOT NULL,
 `band` varchar(100) DEFAULT NULL,
 `collectionId` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `id_idx` (`collectionId`),
 CONSTRAINT `collectionId` 
 FOREIGN KEY (`collectionId`) REFERENCES `collection` (`id`)
);

INSERT INTO `DISC` VALUES (2,'Só as melhores!!!','PEPE E NENEM',1),
(3,'A igreja subiu!','Padre Marcelo Rossi',1),
(5,'Summer Eletro Hits Vol. 5','Diversas',5),
(6,'Xuxa only for children','Xuxa Meneghel',5);