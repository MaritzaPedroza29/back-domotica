-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2023 a las 14:42:59
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `domotica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dispositivos`
--

CREATE TABLE `dispositivos` (
  `iddispositivo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre_dispositivo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salonesIdsalon` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `dispositivos`
--

INSERT INTO `dispositivos` (`iddispositivo`, `nombre_dispositivo`, `salonesIdsalon`) VALUES
('01-202310201157-03261299', 'aire acondicionado', 1),
('70041D82C9B2', 'enchufle', 1),
('E91D07CDFC9D', 'medidor de temperatura', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salones`
--

CREATE TABLE `salones` (
  `idsalon` int(11) NOT NULL,
  `nombre_salon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `salones`
--

INSERT INTO `salones` (`idsalon`, `nombre_salon`) VALUES
(1, 'A103');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuario` int(11) NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clave` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `nombre`, `correo`, `clave`, `imagen`) VALUES
(1, 'Jessica Suarez', 'doc_js_suarez@fesc.edu.co', '81dc9bdb52d04dc20036dbd8313ed055', 'profesora1.33da8df4be4819a217b8.png'),
(2, 'Rodolfo Ortega', 'doc_jr_ortega@fesc.edu.co', '674f3c2c1a8a6f90461e8a66fb5550ba', 'profesor4.d905d407c8b317250903.png'),
(3, 'Sebastian Galindo', 'doc_js_galindo@fesc.edu.co', 'c5c53759e4dd1bfe8b3dcfec37d0ea72', 'profesor2.c181b8ec71a951b94a07.png'),
(4, 'Magda Martinez', 'doc_mf_martinez@fesc.edu.co', 'e846fb8a4f365ca8e84393d4f34e1b07', 'profesora3.4c238302726fa4dbade3.png'),
(5, 'Maria Fernandez', 'est_mf_fernandez@fesc.edu.co', 'ad75b1b9aa47736564576fa6667fe1a4', 'profesora6.35f259923b30eead07c3.png'),
(6, 'Darwin Cardozo', 'doc_da_cardozo@fesc.edu.co', 'b4631d19343f260022ee73087c6e2eab', 'profesor5.89703c8e36a3f133af30.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('9212f8be-e742-437c-a04b-39f8cf209f36', '7e358e8bff1cab677fd6aa62991d13b672a1087a56e9cad8d84b420d8442b0fb', '2023-11-15 16:10:00.558', '20231115134450_init', NULL, NULL, '2023-11-15 16:10:00.457', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dispositivos`
--
ALTER TABLE `dispositivos`
  ADD PRIMARY KEY (`iddispositivo`),
  ADD KEY `dispositivos_salonesIdsalon_fkey` (`salonesIdsalon`);

--
-- Indices de la tabla `salones`
--
ALTER TABLE `salones`
  ADD PRIMARY KEY (`idsalon`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuario`);

--
-- Indices de la tabla `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `dispositivos`
--
ALTER TABLE `dispositivos`
  ADD CONSTRAINT `dispositivos_salonesIdsalon_fkey` FOREIGN KEY (`salonesIdsalon`) REFERENCES `salones` (`idsalon`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
