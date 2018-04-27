-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2018 at 06:50 PM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `incubatelabs`
--

-- --------------------------------------------------------

--
-- Table structure for table `favorite_images`
--

CREATE TABLE `favorite_images` (
  `img_id` varchar(20) NOT NULL,
  `url` varchar(500) NOT NULL,
  `description` varchar(30) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `favorite_images`
--

INSERT INTO `favorite_images` (`img_id`, `url`, `description`, `status`) VALUES
('B3JbU9Uvim4', 'https://images.unsplash.com/photo-1519615514965-d9ed6791c578?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI1Mjk5fQ&s=3aa6ad498ac57ea8ff9e5ca49fbf1049', 'chair', 1),
('gh1UZkWzw9Q', 'https://images.unsplash.com/photo-1453402524241-409afa47033b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI1Mjk5fQ&s=87f40314bb950518d7085ae27eca2532', NULL, 1),
('IVO6tozN6ZQ', 'https://images.unsplash.com/photo-1519262229618-980405fda403?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI1Mjk5fQ&s=a3a755d25b76f0322a86f78fc3421a0b', 'gg', 1),
('NOWXEIETGAQ', 'https://images.unsplash.com/photo-1514214144664-c28b328245e2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI1Mjk5fQ&s=b96edabe83e4678b6ea8ae3cb313a4bc', 'fggffgfgf', 1),
('Np0s6GO9QkY', 'https://images.unsplash.com/photo-1516749712236-67f5688a642a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI1Mjk5fQ&s=8c9d98a76fa087a25bf12b21ee898e52', 'fdfdfdfdfdfdfdf', 1),
('S2AcayPkszE', 'https://images.unsplash.com/photo-1503595855261-9418f48a991a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI1Mjk5fQ&s=bde416ecb8cb2aa4d780c0ff285044f2', 'rgrgrg', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favorite_images`
--
ALTER TABLE `favorite_images`
  ADD PRIMARY KEY (`img_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
