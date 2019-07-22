-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: discocarlos
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `COLLECTION`
--

DROP TABLE IF EXISTS `COLLECTION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `COLLECTION` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `COLLECTION`
--

LOCK TABLES `COLLECTION` WRITE;
/*!40000 ALTER TABLE `COLLECTION` DISABLE KEYS */;
INSERT INTO `COLLECTION` VALUES (1,'Melhores do Brasil'),(5,'Melhores Internacional');
/*!40000 ALTER TABLE `COLLECTION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DISC`
--

DROP TABLE IF EXISTS `DISC`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `DISC` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `band` varchar(100) DEFAULT NULL,
  `collectionId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_idx` (`collectionId`),
  CONSTRAINT `collectionId` FOREIGN KEY (`collectionId`) REFERENCES `collection` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DISC`
--

LOCK TABLES `DISC` WRITE;
/*!40000 ALTER TABLE `DISC` DISABLE KEYS */;
INSERT INTO `DISC` VALUES (2,'Só as melhores!!!','PEPE E NENEM',1),(3,'A igreja subiu!','Padre Marcelo Rossi',1),(5,'Summer Eletro Hits Vol. 5','Diversas',5),(6,'Xuxa only for children','Xuxa Meneghel',5);
/*!40000 ALTER TABLE `DISC` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'discocarlos'
--

--
-- Dumping routines for database 'discocarlos'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-22  0:54:54
