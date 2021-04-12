-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : Dim 11 avr. 2021 à 20:15
-- Version du serveur :  10.4.17-MariaDB
-- Version de PHP : 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `exosquelette`
--

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

CREATE TABLE `commande` (
  `id` int(10) NOT NULL,
  `design_id` varchar(255) NOT NULL,
  `design_type` varchar(250) NOT NULL,
  `quantity` int(10) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `valide` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `commande`
--

INSERT INTO `commande` (`id`, `design_id`, `design_type`, `quantity`, `first_name`, `last_name`, `email`, `valide`) VALUES
(25, 'jr1zKR9s7m', '', 1, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0),
(26, 'E3DpHUdMSo', '', 1, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0),
(27, 'PXGLYUNofg', '', 1, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0),
(28, 'ovGneNVYfk', '', 1, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0),
(29, 'bCfUNXt4kI', '', 2, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0),
(30, 'F3Kxv1VKkR', '', 20, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0),
(31, 'YDNu7apzcA', '', 7, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0),
(32, 'DYIhzL21JD', '', 7, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0),
(33, 'G5jrNKXqFn', '', 20, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0),
(34, 'SOGHDTsWfV', '', 20, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0),
(35, 'Ay4VcyzmWj', '', 7, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0),
(36, 'Ay4VcyzmWj', '', 12, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0),
(37, 'Ay4VcyzmWj', '', 7, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0),
(38, 'xzRD0MlLf0', '', 8, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0),
(39, 'xzRD0MlLf0', '', 12, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0),
(40, 'sMIRQnJJXa', 'name_plate', 7, 'Thien Thanh', 'TRAN', 'tthanh.nt99@gmail.com', 0);

-- --------------------------------------------------------

--
-- Structure de la table `typedesign`
--

CREATE TABLE `typedesign` (
  `id_type` int(10) NOT NULL,
  `type_name` varchar(250) NOT NULL,
  `stock` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `typedesign`
--

INSERT INTO `typedesign` (`id_type`, `type_name`, `stock`) VALUES
(0, 'name_plate', 20),
(1, 'tor', 20),
(2, 'name_writehand', 20);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `typedesign`
--
ALTER TABLE `typedesign`
  ADD PRIMARY KEY (`id_type`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `commande`
--
ALTER TABLE `commande`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
