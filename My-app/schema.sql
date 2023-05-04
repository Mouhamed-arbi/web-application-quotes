-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema motivation
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema motivation
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `motivation` DEFAULT CHARACTER SET utf8 ;
USE `motivation` ;

-- -----------------------------------------------------
-- Table `motivation`.`quote`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `motivation`.`quote` (
  `idquote` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `bodyquote` VARCHAR(255) NOT NULL,
  `typequote` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idquote`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
