-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-11-2017 a las 16:06:48
-- Versión del servidor: 10.1.26-MariaDB
-- Versión de PHP: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fuerza_ventas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_archivos`
--

CREATE TABLE `a365_buzon_archivos` (
  `id_buzon_archivos` mediumint(9) NOT NULL,
  `id_buzon_consulta` mediumint(9) DEFAULT NULL,
  `nombre_archivo` varchar(50) DEFAULT NULL,
  `mime` varchar(50) DEFAULT NULL,
  `usr_registro` char(20) DEFAULT NULL,
  `ip_usr_registro` char(30) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `flg_activo` enum('t','f') DEFAULT 't'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_archivos`
--

INSERT INTO `a365_buzon_archivos` (`id_buzon_archivos`, `id_buzon_consulta`, `nombre_archivo`, `mime`, `usr_registro`, `ip_usr_registro`, `fecha_registro`, `flg_activo`) VALUES
(1, 5, '5.pdf', 'application/pdf', 'aortiz', '::1', '2017-10-09 03:19:07', 't'),
(2, 6, '6.pdf', 'application/pdf', 'aortiz', '::1', '2017-10-09 03:56:53', 't'),
(3, 7, '7.pdf', 'application/pdf', 'aortiz', '::1', '2017-10-09 04:29:53', 't'),
(4, 9, '9.pdf', 'application/pdf', 'aortiz', '::1', '2017-10-09 05:01:33', 't'),
(5, 29, '29.pdf', 'application/pdf', 'aortiz', '::1', '2017-10-11 15:32:35', 't');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_campania`
--

CREATE TABLE `a365_buzon_campania` (
  `id_buzon_campania` mediumint(3) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `flg_activado` enum('N','Y') DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_consulta`
--

CREATE TABLE `a365_buzon_consulta` (
  `id_buzon_consulta` mediumint(9) NOT NULL,
  `nombres` varchar(50) DEFAULT NULL,
  `ap_paterno` varchar(50) DEFAULT NULL,
  `ap_materno` varchar(50) DEFAULT NULL,
  `fecha_nacimiento` datetime DEFAULT NULL,
  `id_tipo_documento` char(5) DEFAULT NULL,
  `nro_documento` varchar(30) DEFAULT NULL,
  `id_tipo_operacion` mediumint(2) DEFAULT NULL,
  `id_modalidad_venta` mediumint(2) DEFAULT NULL,
  `id_tipo_plan` int(11) DEFAULT NULL,
  `id_tipo_plazo` int(11) DEFAULT NULL,
  `id_tipo_consumo` int(11) DEFAULT NULL,
  `id_tipo_familia` int(11) DEFAULT NULL,
  `id_campania` int(11) DEFAULT NULL,
  `nro_telefono` varchar(10) DEFAULT NULL,
  `nro_referencia` varchar(10) DEFAULT NULL,
  `modalidad` varchar(50) DEFAULT NULL,
  `padre` varchar(100) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `sec` varchar(20) DEFAULT NULL,
  `fecha_sec` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `comentarios` varchar(200) DEFAULT NULL,
  `id_usr_registro` char(20) DEFAULT NULL,
  `ip_usr_registro` char(30) DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_usr_ult_modificacion` char(20) DEFAULT NULL,
  `ip_usr_ult_modificacion` char(20) DEFAULT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_consulta`
--

INSERT INTO `a365_buzon_consulta` (`id_buzon_consulta`, `nombres`, `ap_paterno`, `ap_materno`, `fecha_nacimiento`, `id_tipo_documento`, `nro_documento`, `id_tipo_operacion`, `id_modalidad_venta`, `id_tipo_plan`, `id_tipo_plazo`, `id_tipo_consumo`, `id_tipo_familia`, `id_campania`, `nro_telefono`, `nro_referencia`, `modalidad`, `padre`, `id_producto`, `precio`, `sec`, `fecha_sec`, `comentarios`, `id_usr_registro`, `ip_usr_registro`, `fecha_registro`, `id_usr_ult_modificacion`, `ip_usr_ult_modificacion`, `fecha_modificacion`) VALUES
(2, 'anthony', 'ortiz', 'arteaga', NULL, '1', '45544545', 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, '5555555555', NULL, NULL, NULL, NULL, NULL, '2017-10-09 02:59:40', 'dddfdf', 'aortiz', '::1', '2017-10-09 02:59:40', NULL, NULL, '0000-00-00 00:00:00'),
(3, 'anth', 'ort', 'arte', NULL, '1', '111111111111111111', 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, '222222', NULL, NULL, NULL, NULL, NULL, '2017-10-09 03:03:56', 'mensaje', 'aortiz', '::1', '2017-10-09 03:03:56', NULL, NULL, '0000-00-00 00:00:00'),
(4, 'ddd', 'fdd', 'dfdd', NULL, '1', '11111', 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, '2222222', NULL, NULL, NULL, NULL, NULL, '2017-10-09 03:04:44', 'fdf', 'aortiz', '::1', '2017-10-09 03:04:44', NULL, NULL, '0000-00-00 00:00:00'),
(5, 'a', 'b', 'c', NULL, '1', '111111', 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, '222222', NULL, NULL, NULL, NULL, NULL, '2017-10-09 03:19:07', 'asdf', 'aortiz', '::1', '2017-10-09 03:19:07', NULL, NULL, '0000-00-00 00:00:00'),
(6, 'a', 'b', 'c', NULL, '1', '111111', 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, '22222', NULL, NULL, NULL, NULL, NULL, '2017-10-09 03:56:53', 'sddsdsd', 'aortiz', '::1', '2017-10-09 03:56:53', NULL, NULL, '0000-00-00 00:00:00'),
(7, 'a', 'd', 'c', NULL, '1', '111111', 1, 3, NULL, NULL, NULL, NULL, NULL, NULL, '22222', NULL, NULL, NULL, NULL, NULL, '2017-10-09 04:29:53', 'ssdsd', 'aortiz', '::1', '2017-10-09 04:29:53', NULL, NULL, '0000-00-00 00:00:00'),
(8, 'a', 's', 'c', NULL, '1', '11111', 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, '222222', NULL, NULL, NULL, NULL, NULL, '2017-10-09 05:00:29', 'dddff', 'aortiz', '::1', '2017-10-09 05:00:29', NULL, NULL, '0000-00-00 00:00:00'),
(9, 'a', 's', 'd', NULL, '1', '11111', 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, '22222', NULL, NULL, NULL, NULL, NULL, '2017-10-09 05:01:33', 'sdd', 'aortiz', '::1', '2017-10-09 05:01:33', NULL, NULL, '0000-00-00 00:00:00'),
(10, 'dfsd', 'dfssfd', 'fsdfs', NULL, '1', '344334', 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, '43334', NULL, NULL, NULL, NULL, NULL, '2017-10-09 05:05:05', 'fdssfd', 'aortiz', '::1', '2017-10-09 05:05:05', NULL, NULL, '0000-00-00 00:00:00'),
(11, 'sd', 'sd', 'sd', NULL, '1', '232', 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, '232323', NULL, NULL, NULL, NULL, NULL, '2017-10-09 05:07:29', 'dsssd', 'aortiz', '::1', '2017-10-09 05:07:29', NULL, NULL, '0000-00-00 00:00:00'),
(12, 'asd', 'asd', 'dsa', NULL, '1', '233', 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, '2017-10-09 05:08:20', 'adsdas', 'aortiz', '::1', '2017-10-09 05:08:20', NULL, NULL, '0000-00-00 00:00:00'),
(13, 'sdd', 'dsfsdf', 'dfsdf', NULL, '1', '2332', 1, 3, NULL, NULL, NULL, NULL, NULL, NULL, '343', NULL, NULL, NULL, NULL, NULL, '2017-10-09 05:09:51', 'dfssdf', 'aortiz', '::1', '2017-10-09 05:09:51', NULL, NULL, '0000-00-00 00:00:00'),
(14, 'sd', 'sd', 'sd', NULL, '1', '111', 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, '2017-10-09 05:19:57', 'sd', 'aortiz', '::1', '2017-10-09 05:19:57', NULL, NULL, '0000-00-00 00:00:00'),
(15, '34', '43', '43', '2017-09-04 00:00:00', '1', '232', 3, 1, NULL, NULL, NULL, NULL, NULL, NULL, '4343', NULL, NULL, NULL, NULL, NULL, '2017-10-09 05:20:28', 'errr', 'aortiz', '::1', '2017-10-09 05:20:28', NULL, NULL, '0000-00-00 00:00:00'),
(16, 'fg', 'dg', 'g', NULL, '1', '4545', 1, 3, NULL, NULL, NULL, NULL, NULL, NULL, '454', NULL, NULL, NULL, NULL, NULL, '2017-10-09 05:21:29', 'dfggf', 'aortiz', '::1', '2017-10-09 05:21:29', NULL, NULL, '0000-00-00 00:00:00'),
(17, 'fg', 'dg', 'fg', '2017-10-01 00:00:00', '1', '4545', 3, 1, NULL, NULL, NULL, NULL, NULL, NULL, '455', NULL, NULL, NULL, NULL, NULL, '2017-10-09 05:22:35', 'fgdfg', 'aortiz', '::1', '2017-10-09 05:22:35', NULL, NULL, '0000-00-00 00:00:00'),
(18, 'ddg', 'fggf', 'gfg', NULL, '1', '44545', 1, 3, NULL, NULL, NULL, NULL, NULL, NULL, '56', NULL, NULL, NULL, NULL, NULL, '2017-10-09 05:28:27', 'dfdg', 'aortiz', '::1', '2017-10-09 05:28:27', NULL, NULL, '0000-00-00 00:00:00'),
(19, 'dfdf', 'dffd', 'dfdf', '2017-10-30 00:00:00', '1', '434', 3, 1, NULL, NULL, NULL, NULL, NULL, NULL, '4344', NULL, NULL, NULL, NULL, NULL, '2017-10-09 05:29:44', 'dfdf', 'aortiz', '::1', '2017-10-09 05:29:44', NULL, NULL, '0000-00-00 00:00:00'),
(20, 'ffd', 'gdg', 'dg', NULL, '1', '445', 1, 3, NULL, NULL, NULL, NULL, NULL, NULL, '445', NULL, NULL, NULL, NULL, NULL, '2017-10-09 05:30:15', 'gdffd', 'aortiz', '::1', '2017-10-09 05:30:15', NULL, NULL, '0000-00-00 00:00:00'),
(21, 'fdf', 'dsffds', 'fsddfs', NULL, '1', '44554', 1, 3, NULL, NULL, NULL, NULL, NULL, NULL, '4545', NULL, NULL, NULL, NULL, NULL, '2017-10-09 05:30:58', 'dsffsd', 'aortiz', '::1', '2017-10-09 05:30:58', NULL, NULL, '0000-00-00 00:00:00'),
(22, 'dsd', 'fsdfds', 'dfdf', NULL, '1', '434', 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, '4334', NULL, NULL, NULL, NULL, NULL, '2017-10-09 05:33:34', 'fdfdgf', 'aortiz', '::1', '2017-10-09 05:33:34', NULL, NULL, '0000-00-00 00:00:00'),
(23, 'ANTHONY', 'ORTIZ', 'ARTEAGA', '1980-02-12 00:00:00', '1', '47235779', 3, 2, NULL, NULL, NULL, NULL, NULL, NULL, '980081384', NULL, NULL, NULL, NULL, NULL, '2017-10-09 22:12:57', 'SE DESEA MIGRAR', 'aortiz', '::1', '2017-10-09 22:12:57', NULL, NULL, '0000-00-00 00:00:00'),
(24, 'dsf', 'fdf', 'fdsfds', NULL, '1', '47234774', 1, 3, NULL, NULL, NULL, NULL, NULL, NULL, '11111', NULL, NULL, NULL, 0, '', '2017-10-10 15:12:51', '565', 'aortiz', '::1', '2017-10-10 15:55:02', NULL, NULL, '0000-00-00 00:00:00'),
(25, 'anthony', 'ortiz', 'arteaga', NULL, '1', '47235779', 1, 3, NULL, NULL, NULL, NULL, NULL, NULL, '980081384', NULL, NULL, NULL, NULL, NULL, '2017-10-10 15:56:18', 'SE AGREGA PEDIDO', 'aortiz', '::1', '2017-10-10 15:56:18', NULL, NULL, '0000-00-00 00:00:00'),
(26, 'cesq', 'arteaga', 'ortiz', '2017-10-01 00:00:00', '1', '47235779', 2, 2, NULL, NULL, NULL, NULL, NULL, NULL, '555555555', NULL, NULL, NULL, NULL, NULL, '2017-10-10 17:55:57', '1223434', 'aortiz', '::1', '2017-10-10 17:55:57', NULL, NULL, '0000-00-00 00:00:00'),
(27, 'rert', 'tertre', 'tertre', '2017-10-02 00:00:00', '1', '54545', 2, 1, NULL, NULL, NULL, NULL, NULL, NULL, '655665', NULL, NULL, NULL, NULL, NULL, '2017-10-11 15:23:21', 'fgdgf', 'aortiz', '::1', '2017-10-11 15:23:21', NULL, NULL, '0000-00-00 00:00:00'),
(28, 'fhgh', 'gfhgfhgf', 'hgfhgf', NULL, '1', '6566556', 1, 3, NULL, NULL, NULL, NULL, NULL, NULL, '67676', NULL, NULL, NULL, NULL, NULL, '2017-10-11 15:27:29', 'hgfhgf', 'aortiz', '::1', '2017-10-11 15:27:29', NULL, NULL, '0000-00-00 00:00:00'),
(29, 'gfdgfd', 'gfgfd', 'gfdgfd', NULL, '1', '5655665', 1, 3, NULL, NULL, NULL, NULL, NULL, NULL, '54656565', NULL, NULL, NULL, NULL, NULL, '2017-10-11 15:32:34', 'fdgfdgfd', 'aortiz', '::1', '2017-10-11 15:32:34', NULL, NULL, '0000-00-00 00:00:00'),
(30, 'jhgjhg', 'jhgjhg', 'jhgjhg', NULL, '1', '565655665', 1, 3, NULL, NULL, NULL, NULL, NULL, NULL, '767788787', NULL, NULL, NULL, NULL, NULL, '2017-10-23 14:41:32', 'jhkkjhjkh', 'aortiz', '::1', '2017-10-23 14:41:32', NULL, NULL, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_consultaxplan`
--

CREATE TABLE `a365_buzon_consultaxplan` (
  `id_buzon_consultaxplan` mediumint(9) NOT NULL,
  `id_buzon_consulta` mediumint(9) DEFAULT NULL,
  `id_campania` mediumint(3) DEFAULT NULL,
  `id_tipo_plazo` mediumint(3) DEFAULT NULL,
  `id_tipo_familia` mediumint(3) DEFAULT NULL,
  `id_tipo_plan` mediumint(3) DEFAULT NULL,
  `id_producto` mediumint(3) DEFAULT NULL,
  `id_tipo_consumo` mediumint(3) DEFAULT NULL,
  `cuota` varchar(10) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `modalidad` varchar(30) DEFAULT NULL,
  `id_operador` mediumint(3) DEFAULT NULL,
  `id_usr_registro` char(20) DEFAULT NULL,
  `ip_usr_registro` char(30) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_consultaxplan`
--

INSERT INTO `a365_buzon_consultaxplan` (`id_buzon_consultaxplan`, `id_buzon_consulta`, `id_campania`, `id_tipo_plazo`, `id_tipo_familia`, `id_tipo_plan`, `id_producto`, `id_tipo_consumo`, `cuota`, `telefono`, `modalidad`, `id_operador`, `id_usr_registro`, `ip_usr_registro`, `fecha_registro`) VALUES
(8, 17, 154, 3, 1, 2, NULL, 1, '0', NULL, NULL, NULL, 'aortiz', '::1', '2017-10-09 05:22:35'),
(9, 18, 151, 2, 1, 2, 3, 1, '12', '5656', NULL, NULL, 'aortiz', '::1', '2017-10-09 05:28:27'),
(10, 19, 154, 3, 1, 1, NULL, 1, '0', NULL, NULL, NULL, 'aortiz', '::1', '2017-10-09 05:29:44'),
(11, 20, 159, 2, 1, 1, 5, 1, '12', '44554', NULL, NULL, 'aortiz', '::1', '2017-10-09 05:30:15'),
(12, 21, 151, 2, 1, 1, 4, 1, '12', '45', NULL, NULL, 'aortiz', '::1', '2017-10-09 05:30:58'),
(13, 22, 151, 3, 1, 5, 5, 1, '0', '4545', NULL, NULL, 'aortiz', '::1', '2017-10-09 05:33:34'),
(14, 23, 154, 3, 1, 6, 4, 1, '0', NULL, NULL, NULL, 'aortiz', '::1', '2017-10-09 22:12:57'),
(15, 24, 151, 2, 1, 2, 6, 1, '12', '56655665', NULL, NULL, 'aortiz', '::1', '2017-10-10 15:12:51'),
(16, 25, 151, 2, 1, 4, 5, 1, '12', '980081384', NULL, NULL, 'aortiz', '::1', '2017-10-10 15:56:18'),
(17, 26, 155, 3, 1, 7, 1, 1, '0', '980081384', 'PREPAGO', 2, 'aortiz', '::1', '2017-10-10 17:55:57'),
(18, 26, 155, 3, 1, 7, 1, 1, '0', '1111111111', 'PREPAGO', 2, 'aortiz', '::1', '2017-10-10 17:55:57'),
(19, 26, 155, 3, 1, 7, 1, 1, '0', '222222222222', 'PREPAGO', 2, 'aortiz', '::1', '2017-10-10 17:55:57'),
(20, 27, 155, 3, 1, 3, NULL, 1, '0', '56565656', 'POSTPAGO', 1, 'aortiz', '::1', '2017-10-11 15:23:21'),
(21, 28, 159, 3, 2, 11, 4, 2, '18', '5454545', NULL, NULL, 'aortiz', '::1', '2017-10-11 15:27:29'),
(22, 29, 159, 3, 1, 2, 5, 1, '18', '5656', NULL, NULL, 'aortiz', '::1', '2017-10-11 15:32:35'),
(23, 30, 159, 2, 1, 2, 5, 1, '12', '767676677', NULL, NULL, 'aortiz', '::1', '2017-10-23 14:41:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_consulta_bitacora`
--

CREATE TABLE `a365_buzon_consulta_bitacora` (
  `id_buzon_consulta` mediumint(9) NOT NULL,
  `nromovimiento` int(11) NOT NULL,
  `id_buzon_estado_consulta` mediumint(2) DEFAULT NULL,
  `id_buzon_motivo_consulta` mediumint(2) DEFAULT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  `id_usr_registro` char(20) DEFAULT NULL,
  `ip_usr_registro` char(30) DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_usr_modificacion` char(20) DEFAULT NULL,
  `ip_usr_modificacion` char(30) DEFAULT NULL,
  `fecha_registro_modificacion` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `usr_propietario` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_consulta_bitacora`
--

INSERT INTO `a365_buzon_consulta_bitacora` (`id_buzon_consulta`, `nromovimiento`, `id_buzon_estado_consulta`, `id_buzon_motivo_consulta`, `observaciones`, `id_usr_registro`, `ip_usr_registro`, `fecha_registro`, `id_usr_modificacion`, `ip_usr_modificacion`, `fecha_registro_modificacion`, `usr_propietario`) VALUES
(21, 1, 1, 1, 'dsffsd', 'aortiz', '::1', '2017-10-09 05:32:52', NULL, NULL, '0000-00-00 00:00:00', NULL),
(22, 1, 1, 1, 'fdfdgf', 'aortiz', '::1', '2017-10-09 05:33:34', NULL, NULL, '0000-00-00 00:00:00', NULL),
(23, 1, 1, 1, 'SE DESEA MIGRAR', 'aortiz', '::1', '2017-10-09 22:12:57', NULL, NULL, '0000-00-00 00:00:00', NULL),
(24, 1, 1, 1, '565', 'aortiz', '::1', '2017-10-10 15:12:51', NULL, NULL, '0000-00-00 00:00:00', NULL),
(24, 2, 2, 2, 'se asigno consulta', 'aortiz', '::1', '2017-10-10 16:25:35', NULL, NULL, '0000-00-00 00:00:00', NULL),
(24, 3, 3, 3, 'gfdgdfgf', 'aortiz', '::1', '2017-10-10 17:46:22', NULL, NULL, '0000-00-00 00:00:00', NULL),
(24, 4, 3, 4, 'fgdgdf', 'aortiz', '::1', '2017-10-10 17:54:44', NULL, NULL, '0000-00-00 00:00:00', NULL),
(25, 1, 1, 1, 'SE AGREGA PEDIDO', 'aortiz', '::1', '2017-10-10 15:56:18', NULL, NULL, '0000-00-00 00:00:00', NULL),
(25, 2, 3, 3, 'fggf', 'aortiz', '::1', '2017-10-10 17:47:36', NULL, NULL, '0000-00-00 00:00:00', NULL),
(25, 3, 3, 3, 'fggf', 'aortiz', '::1', '2017-10-10 17:49:12', NULL, NULL, '0000-00-00 00:00:00', NULL),
(25, 4, 3, 3, 'fggf', 'aortiz', '::1', '2017-10-10 17:49:37', NULL, NULL, '0000-00-00 00:00:00', NULL),
(25, 5, 3, 3, 'fggf', 'aortiz', '::1', '2017-10-10 17:49:52', NULL, NULL, '0000-00-00 00:00:00', NULL),
(25, 6, 3, 3, 'fggf', 'aortiz', '::1', '2017-10-10 17:50:35', NULL, NULL, '0000-00-00 00:00:00', NULL),
(26, 1, 1, 1, '1223434', 'aortiz', '::1', '2017-10-10 17:55:57', NULL, NULL, '0000-00-00 00:00:00', NULL),
(27, 1, 1, 1, 'fgdgf', 'aortiz', '::1', '2017-10-11 15:23:21', NULL, NULL, '0000-00-00 00:00:00', NULL),
(27, 2, 3, 4, 'gfgfdgfd', 'aortiz', '::1', '2017-10-11 15:23:37', NULL, NULL, '0000-00-00 00:00:00', NULL),
(28, 1, 1, 1, 'hgfhgf', 'aortiz', '::1', '2017-10-11 15:27:29', NULL, NULL, '0000-00-00 00:00:00', NULL),
(29, 1, 1, 1, 'fdgfdgfd', 'aortiz', '::1', '2017-10-11 15:32:35', NULL, NULL, '0000-00-00 00:00:00', NULL),
(30, 1, 1, 1, 'jhkkjhjkh', 'aortiz', '::1', '2017-10-23 14:41:32', NULL, NULL, '0000-00-00 00:00:00', NULL);

--
-- Disparadores `a365_buzon_consulta_bitacora`
--
DELIMITER $$
CREATE TRIGGER `sp_tr_consulta_mov` BEFORE INSERT ON `a365_buzon_consulta_bitacora` FOR EACH ROW BEGIN
     DECLARE var_maximo INT4;
     SELECT MAX(nromovimiento) INTO var_maximo FROM `a365_buzon_consulta_bitacora` WHERE id_buzon_consulta=NEW.id_buzon_consulta;
     IF var_maximo IS NULL THEN
	SET NEW.nromovimiento = 1;
     ELSE
	SET NEW.nromovimiento = var_maximo+1;
     END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_estado`
--

CREATE TABLE `a365_buzon_estado` (
  `id_buzon_tipo_familia` mediumint(3) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `flg_activado` enum('f','t') DEFAULT 't'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_estado_consulta`
--

CREATE TABLE `a365_buzon_estado_consulta` (
  `id_buzon_estado_consulta` mediumint(2) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `flg_activo` enum('t','f') DEFAULT 't',
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_estado_consulta`
--

INSERT INTO `a365_buzon_estado_consulta` (`id_buzon_estado_consulta`, `descripcion`, `flg_activo`, `fecha_registro`) VALUES
(1, 'REGISTRADO', 't', '2017-10-10 16:16:17'),
(2, 'PENDIENTE', 't', '2017-10-10 17:37:37'),
(3, 'PROCESO', 't', '2017-10-10 17:37:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_log_reportes`
--

CREATE TABLE `a365_buzon_log_reportes` (
  `id_buzon_log_reportes` mediumint(3) NOT NULL,
  `id_usuario` char(20) DEFAULT NULL,
  `fecha_reporte` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_modalidad_venta`
--

CREATE TABLE `a365_buzon_modalidad_venta` (
  `id_buzon_modalidad_venta` mediumint(2) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `flg_activado` enum('f','t') DEFAULT 't'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_modalidad_venta`
--

INSERT INTO `a365_buzon_modalidad_venta` (`id_buzon_modalidad_venta`, `descripcion`, `fecha_registro`, `flg_activado`) VALUES
(1, 'CHIP', '2017-10-08 20:01:46', 't'),
(2, 'CONTADO', '2017-10-08 20:01:49', 't'),
(3, 'CUOTAS', '2017-10-08 20:01:53', 't');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_motivo_consulta`
--

CREATE TABLE `a365_buzon_motivo_consulta` (
  `id_buzon_motivo_consulta` mediumint(2) NOT NULL,
  `id_estado_consulta` mediumint(2) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `flg_activo` enum('t','f') DEFAULT 't',
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_motivo_consulta`
--

INSERT INTO `a365_buzon_motivo_consulta` (`id_buzon_motivo_consulta`, `id_estado_consulta`, `descripcion`, `flg_activo`, `fecha_registro`) VALUES
(1, 1, '-', 't', '2017-10-10 16:24:56'),
(2, 2, 'ASIGNADO', 't', '2017-10-10 16:24:56'),
(3, 3, 'CONSULTA RENIEC', 't', '2017-10-10 16:24:56'),
(4, 3, 'CONSULTA SEC', 't', '2017-10-10 16:24:56'),
(5, 3, 'CONSULTA SIBOF', 't', '2017-10-10 16:25:04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_operador`
--

CREATE TABLE `a365_buzon_operador` (
  `id_buzon_operador` mediumint(2) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `flg_activo` enum('f','t') DEFAULT 't'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_operador`
--

INSERT INTO `a365_buzon_operador` (`id_buzon_operador`, `descripcion`, `fecha_registro`, `flg_activo`) VALUES
(1, 'ENTEL', '2017-10-08 21:23:19', 't'),
(2, 'CLARO', '2017-10-08 21:23:21', 't'),
(3, 'MOVISTAR', '2017-10-08 21:23:23', 't'),
(4, 'VIRGIN', '2017-10-08 21:23:27', 't'),
(5, 'BITEL', '2017-10-08 21:23:32', 't'),
(6, 'TUENTI', '2017-10-08 21:23:39', 't');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_pagina`
--

CREATE TABLE `a365_buzon_pagina` (
  `id_buzon_pagina` char(20) NOT NULL,
  `id_depende` int(11) DEFAULT NULL,
  `tipo` char(50) DEFAULT NULL,
  `ubicacion` char(50) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `flg_activado` enum('N','Y') DEFAULT 'Y',
  `id_usr_registro` char(20) DEFAULT NULL,
  `ip_usr_registro` char(30) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_tipo_usuario` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_pagina`
--

INSERT INTO `a365_buzon_pagina` (`id_buzon_pagina`, `id_depende`, `tipo`, `ubicacion`, `descripcion`, `flg_activado`, `id_usr_registro`, `ip_usr_registro`, `fecha_registro`, `id_tipo_usuario`) VALUES
('MENU_CONSULTA', NULL, 'REGISTRO', 'consulta/', 'Registro Pedido', 'Y', NULL, NULL, '2017-10-08 20:23:00', NULL),
('MENU_PANEL', NULL, 'GESTION', 'panel/', 'Gestion Pedidos', 'Y', NULL, NULL, '2017-10-08 20:23:04', NULL),
('MENU_REGISTRO', NULL, 'ACTUALIZACION', 'actualizar_usuario', 'Modificacion Usuario', 'Y', NULL, NULL, '2017-10-23 15:21:49', NULL),
('MENU_REGISTRO', NULL, 'REGISTROw', 'consulta/', 'Registro Usuario', 'Y', NULL, NULL, '2017-10-23 15:22:06', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_tipo_consumo`
--

CREATE TABLE `a365_buzon_tipo_consumo` (
  `id_buzon_tipo_consumo` mediumint(2) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `flg_activado` enum('f','t') DEFAULT 't'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_tipo_consumo`
--

INSERT INTO `a365_buzon_tipo_consumo` (`id_buzon_tipo_consumo`, `descripcion`, `fecha_registro`, `flg_activado`) VALUES
(1, 'ABIERTO', '2017-10-08 21:08:53', 't'),
(2, 'EXACTO', '2017-10-08 21:09:26', 't'),
(3, 'ADICIONAL', '2017-10-08 21:09:30', 't');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_tipo_documento`
--

CREATE TABLE `a365_buzon_tipo_documento` (
  `id_buzon_tipo_doc` mediumint(3) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_tipo_documento`
--

INSERT INTO `a365_buzon_tipo_documento` (`id_buzon_tipo_doc`, `descripcion`, `fecha_registro`) VALUES
(1, 'DNI', '2017-10-08 08:24:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_tipo_familia`
--

CREATE TABLE `a365_buzon_tipo_familia` (
  `id_buzon_tipo_familia` mediumint(3) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `flg_activado` enum('f','t') DEFAULT 't'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_tipo_familia`
--

INSERT INTO `a365_buzon_tipo_familia` (`id_buzon_tipo_familia`, `descripcion`, `fecha_registro`, `flg_activado`) VALUES
(1, 'NACIONAL', '2017-10-08 20:41:45', 't'),
(2, 'SIN FRONTERAS', '2017-10-08 20:41:48', 't');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_tipo_operacion`
--

CREATE TABLE `a365_buzon_tipo_operacion` (
  `id_buzon_tipo_operacion` mediumint(2) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `flg_activo` enum('f','t') DEFAULT 't'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_tipo_operacion`
--

INSERT INTO `a365_buzon_tipo_operacion` (`id_buzon_tipo_operacion`, `descripcion`, `fecha_registro`, `flg_activo`) VALUES
(1, 'RENOVACION', '2017-10-08 19:04:21', 't'),
(2, 'PORTABILIDAD', '2017-10-08 19:04:25', 't'),
(3, 'ALTA', '2017-10-08 19:04:37', 't');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_tipo_plan`
--

CREATE TABLE `a365_buzon_tipo_plan` (
  `id_buzon_tipo_plan` mediumint(2) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `flg_activo` enum('N','Y') DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_tipo_plazo`
--

CREATE TABLE `a365_buzon_tipo_plazo` (
  `id_buzon_tipo_plazo` mediumint(2) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `flg_activo` enum('t','f') DEFAULT 't'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_tipo_plazo`
--

INSERT INTO `a365_buzon_tipo_plazo` (`id_buzon_tipo_plazo`, `descripcion`, `fecha_registro`, `flg_activo`) VALUES
(1, '6 MESES', '2017-10-08 20:16:27', 't'),
(2, '12 MESES', '2017-10-08 20:16:29', 't'),
(3, '18 MESES', '2017-10-08 20:16:31', 't');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_tipo_usuario`
--

CREATE TABLE `a365_buzon_tipo_usuario` (
  `id_buzon_tipo` mediumint(2) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_tipo_usuario`
--

INSERT INTO `a365_buzon_tipo_usuario` (`id_buzon_tipo`, `descripcion`, `fecha_registro`) VALUES
(1, 'ADMINISTRADOR', '2017-10-08 04:24:28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_usuario`
--

CREATE TABLE `a365_buzon_usuario` (
  `id_buzon_usuario` char(20) NOT NULL,
  `password` varchar(200) DEFAULT NULL,
  `id_tipo_usuario` mediumint(11) DEFAULT NULL,
  `usr_vicidial` char(20) DEFAULT NULL,
  `nombres` varchar(50) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `id_tipo_documento` mediumint(3) DEFAULT NULL,
  `nro_documento` char(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telefono_principal` varchar(20) DEFAULT NULL,
  `telefono_secundario` varchar(20) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `flg_activado` enum('N','Y') DEFAULT 'Y',
  `id_usr_registro` char(20) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ip_usr_registro` varchar(255) DEFAULT NULL,
  `id_usr_registro_mod` char(20) DEFAULT NULL,
  `fecha_registro_mod` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `ip_usr_registro_mod` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_usuario`
--

INSERT INTO `a365_buzon_usuario` (`id_buzon_usuario`, `password`, `id_tipo_usuario`, `usr_vicidial`, `nombres`, `apellidos`, `id_tipo_documento`, `nro_documento`, `email`, `telefono_principal`, `telefono_secundario`, `direccion`, `flg_activado`, `id_usr_registro`, `fecha_registro`, `ip_usr_registro`, `id_usr_registro_mod`, `fecha_registro_mod`, `ip_usr_registro_mod`) VALUES
('aortiz', '01655c8a61e7fc043ef53c79dd32addee935a69e', 1, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Y', NULL, '2017-10-08 08:24:47', NULL, NULL, '0000-00-00 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a365_buzon_usuario_pagina`
--

CREATE TABLE `a365_buzon_usuario_pagina` (
  `id_pagina` mediumint(3) NOT NULL,
  `id_buzon_pagina` char(20) NOT NULL,
  `id_buzon_usuario` char(20) DEFAULT NULL,
  `ip_usr_registro` char(30) DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `a365_buzon_usuario_pagina`
--

INSERT INTO `a365_buzon_usuario_pagina` (`id_pagina`, `id_buzon_pagina`, `id_buzon_usuario`, `ip_usr_registro`, `fecha_registro`) VALUES
(2, 'MENU_CONSULTA', 'aortiz', NULL, '2017-10-23 15:23:16'),
(1, 'MENU_PANEL', 'aortiz', NULL, '2017-10-08 08:25:20'),
(3, 'MENU_REGISTRO', 'aortiz', NULL, '2017-10-23 15:23:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aai_clbkofi_campania`
--

CREATE TABLE `aai_clbkofi_campania` (
  `id_clbkofi_campania` mediumint(2) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `aai_flg_activo` enum('f','t') DEFAULT 't'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `aai_clbkofi_campania`
--

INSERT INTO `aai_clbkofi_campania` (`id_clbkofi_campania`, `descripcion`, `fecha_registro`, `aai_flg_activo`) VALUES
(151, 'LIMITADO CLARO', '2017-10-08 20:35:41', 't'),
(154, 'ALTA LIMITADO', '2017-10-08 20:37:07', 't'),
(155, 'PORTA LIMITADO', '2017-10-08 20:35:20', 't'),
(156, 'RENO OFERTA', '2017-10-08 20:34:30', 't'),
(157, 'ALTA OTROS', '2017-10-08 20:37:31', 't'),
(158, 'PORTA OFERTA', '2017-10-08 20:36:30', 't'),
(159, 'RENO OTROS', '2017-10-08 20:34:23', 't'),
(160, 'OTROS OFERTA', '2017-10-08 20:37:18', 't');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aai_clbkofi_productos`
--

CREATE TABLE `aai_clbkofi_productos` (
  `id_clbkofi_producto` mediumint(2) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `aai_flg_activo` enum('f','t') DEFAULT 't'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `aai_clbkofi_productos`
--

INSERT INTO `aai_clbkofi_productos` (`id_clbkofi_producto`, `descripcion`, `fecha_registro`, `aai_flg_activo`) VALUES
(1, 'SAMSUNG GALAXY S8', '2017-10-08 21:19:41', 't'),
(2, 'SAMSUNG GALAXY S7', '2017-10-08 21:19:46', 't'),
(3, 'SAMSUNG GALAXY 26', '2017-10-08 21:19:52', 't'),
(4, 'MOTO G5 PLUS', '2017-10-08 21:20:01', 't'),
(5, 'MOTO G5', '2017-10-08 21:20:06', 't'),
(6, 'MOTO G4', '2017-10-08 21:20:11', 't'),
(7, 'HUAWEI P10', '2017-10-08 21:20:17', 't'),
(8, 'HUAWEI P9', '2017-10-08 21:20:21', 't'),
(9, 'HUAWEI P9 LITE', '2017-10-08 21:20:26', 't'),
(10, 'HUAWEI P10 LITE', '2017-10-08 21:20:33', 't'),
(11, 'SAMSUNG J7', '2017-10-08 21:20:37', 't'),
(12, 'SAMSUNG A5', '2017-10-08 21:20:39', 't'),
(13, 'IPHONE 8 PLUS', '2017-10-08 21:20:45', 't'),
(14, 'IPHONE 7', '2017-10-08 21:20:50', 't'),
(15, 'IPHONE 6 PLUS', '2017-10-08 21:20:54', 't'),
(16, 'IPHONE 5', '2017-10-08 21:20:58', 't'),
(17, 'IPHONE 6', '2017-10-08 21:21:01', 't'),
(18, 'IPHONE 5 PLUS', '2017-10-08 21:21:05', 't'),
(19, 'IPHONE CC', '2017-10-08 21:21:10', 't'),
(20, 'ALCATEL Z10', '2017-10-08 21:21:17', 't');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aai_clbkofi_tipo_plan`
--

CREATE TABLE `aai_clbkofi_tipo_plan` (
  `id_clbkofi_tipo_plan` mediumint(2) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `aai_flg_activo` enum('f','t') DEFAULT 't'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `aai_clbkofi_tipo_plan`
--

INSERT INTO `aai_clbkofi_tipo_plan` (`id_clbkofi_tipo_plan`, `descripcion`, `fecha_registro`, `aai_flg_activo`) VALUES
(1, 'CLARO MAX CHIP 29', '2017-10-08 21:16:41', 't'),
(2, 'CLARO MAX 49', '2017-10-08 21:15:36', 't'),
(3, 'CLARO MAX 69', '2017-10-08 21:15:41', 't'),
(4, 'CLARO MAX 99', '2017-10-08 21:15:44', 't'),
(5, 'CLARO MAX 119', '2017-10-08 21:16:05', 't'),
(6, 'CLARO MAX 149', '2017-10-08 21:15:53', 't'),
(7, 'CLARO MAX 199', '2017-10-08 21:16:13', 't'),
(8, 'CLARO MAX SF CHIP 29', '2017-10-08 21:16:49', 't'),
(9, 'CLARO MAX SF 49', '2017-10-08 21:16:55', 't'),
(10, 'CLARO MAX SF 69', '2017-10-08 21:17:00', 't'),
(11, 'CLARO MAX SF 99', '2017-10-08 21:17:06', 't'),
(12, 'CLARO MAX SF 119', '2017-10-08 21:17:12', 't'),
(13, 'CLARO MAX SF 149', '2017-10-08 21:17:22', 't'),
(14, 'CLAOR MAX SF 199', '2017-10-08 21:17:30', 't');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `a365_buzon_archivos`
--
ALTER TABLE `a365_buzon_archivos`
  ADD PRIMARY KEY (`id_buzon_archivos`),
  ADD KEY `fk_usr_registro_archivos` (`usr_registro`);

--
-- Indices de la tabla `a365_buzon_campania`
--
ALTER TABLE `a365_buzon_campania`
  ADD PRIMARY KEY (`id_buzon_campania`);

--
-- Indices de la tabla `a365_buzon_consulta`
--
ALTER TABLE `a365_buzon_consulta`
  ADD PRIMARY KEY (`id_buzon_consulta`);

--
-- Indices de la tabla `a365_buzon_consultaxplan`
--
ALTER TABLE `a365_buzon_consultaxplan`
  ADD PRIMARY KEY (`id_buzon_consultaxplan`),
  ADD KEY `fk_usr_registro_archivos` (`id_tipo_familia`),
  ADD KEY `fk_consulta_consultaxplan` (`id_buzon_consulta`),
  ADD KEY `fk_producto_consultaxplan` (`id_producto`),
  ADD KEY `fk_consumo_consultaxplan` (`id_tipo_consumo`),
  ADD KEY `fk_operador_consultaxplan` (`id_operador`),
  ADD KEY `fk_usr_consultaxplan` (`id_usr_registro`),
  ADD KEY `fk_campania_consultaxplan` (`id_campania`),
  ADD KEY `fk_plan_consultaxplan` (`id_tipo_plan`),
  ADD KEY `fk_plazo_consultaxplan` (`id_tipo_plazo`);

--
-- Indices de la tabla `a365_buzon_consulta_bitacora`
--
ALTER TABLE `a365_buzon_consulta_bitacora`
  ADD PRIMARY KEY (`id_buzon_consulta`,`nromovimiento`);

--
-- Indices de la tabla `a365_buzon_estado`
--
ALTER TABLE `a365_buzon_estado`
  ADD PRIMARY KEY (`id_buzon_tipo_familia`);

--
-- Indices de la tabla `a365_buzon_estado_consulta`
--
ALTER TABLE `a365_buzon_estado_consulta`
  ADD PRIMARY KEY (`id_buzon_estado_consulta`);

--
-- Indices de la tabla `a365_buzon_log_reportes`
--
ALTER TABLE `a365_buzon_log_reportes`
  ADD PRIMARY KEY (`id_buzon_log_reportes`);

--
-- Indices de la tabla `a365_buzon_modalidad_venta`
--
ALTER TABLE `a365_buzon_modalidad_venta`
  ADD PRIMARY KEY (`id_buzon_modalidad_venta`);

--
-- Indices de la tabla `a365_buzon_motivo_consulta`
--
ALTER TABLE `a365_buzon_motivo_consulta`
  ADD PRIMARY KEY (`id_buzon_motivo_consulta`),
  ADD KEY `fk_estado_motivoconsulta` (`id_estado_consulta`);

--
-- Indices de la tabla `a365_buzon_operador`
--
ALTER TABLE `a365_buzon_operador`
  ADD PRIMARY KEY (`id_buzon_operador`);

--
-- Indices de la tabla `a365_buzon_pagina`
--
ALTER TABLE `a365_buzon_pagina`
  ADD PRIMARY KEY (`id_buzon_pagina`,`fecha_registro`) USING BTREE;

--
-- Indices de la tabla `a365_buzon_tipo_consumo`
--
ALTER TABLE `a365_buzon_tipo_consumo`
  ADD PRIMARY KEY (`id_buzon_tipo_consumo`);

--
-- Indices de la tabla `a365_buzon_tipo_documento`
--
ALTER TABLE `a365_buzon_tipo_documento`
  ADD PRIMARY KEY (`id_buzon_tipo_doc`);

--
-- Indices de la tabla `a365_buzon_tipo_familia`
--
ALTER TABLE `a365_buzon_tipo_familia`
  ADD PRIMARY KEY (`id_buzon_tipo_familia`);

--
-- Indices de la tabla `a365_buzon_tipo_operacion`
--
ALTER TABLE `a365_buzon_tipo_operacion`
  ADD PRIMARY KEY (`id_buzon_tipo_operacion`);

--
-- Indices de la tabla `a365_buzon_tipo_plan`
--
ALTER TABLE `a365_buzon_tipo_plan`
  ADD PRIMARY KEY (`id_buzon_tipo_plan`);

--
-- Indices de la tabla `a365_buzon_tipo_plazo`
--
ALTER TABLE `a365_buzon_tipo_plazo`
  ADD PRIMARY KEY (`id_buzon_tipo_plazo`);

--
-- Indices de la tabla `a365_buzon_tipo_usuario`
--
ALTER TABLE `a365_buzon_tipo_usuario`
  ADD PRIMARY KEY (`id_buzon_tipo`);

--
-- Indices de la tabla `a365_buzon_usuario`
--
ALTER TABLE `a365_buzon_usuario`
  ADD PRIMARY KEY (`id_buzon_usuario`),
  ADD KEY `fk_usuario_tipousuario` (`id_tipo_usuario`),
  ADD KEY `fk_usuario_vicidial` (`usr_vicidial`),
  ADD KEY `fk_usuario_registro` (`id_usr_registro`),
  ADD KEY `fk_usuario_tipodoc` (`id_tipo_documento`);

--
-- Indices de la tabla `a365_buzon_usuario_pagina`
--
ALTER TABLE `a365_buzon_usuario_pagina`
  ADD PRIMARY KEY (`id_buzon_pagina`,`id_pagina`),
  ADD KEY `fk_registro_pagina` (`id_buzon_usuario`),
  ADD KEY `fk_usuario_pagina` (`id_pagina`);

--
-- Indices de la tabla `aai_clbkofi_campania`
--
ALTER TABLE `aai_clbkofi_campania`
  ADD PRIMARY KEY (`id_clbkofi_campania`);

--
-- Indices de la tabla `aai_clbkofi_productos`
--
ALTER TABLE `aai_clbkofi_productos`
  ADD PRIMARY KEY (`id_clbkofi_producto`);

--
-- Indices de la tabla `aai_clbkofi_tipo_plan`
--
ALTER TABLE `aai_clbkofi_tipo_plan`
  ADD PRIMARY KEY (`id_clbkofi_tipo_plan`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `a365_buzon_archivos`
--
ALTER TABLE `a365_buzon_archivos`
  MODIFY `id_buzon_archivos` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_campania`
--
ALTER TABLE `a365_buzon_campania`
  MODIFY `id_buzon_campania` mediumint(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_consulta`
--
ALTER TABLE `a365_buzon_consulta`
  MODIFY `id_buzon_consulta` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_consultaxplan`
--
ALTER TABLE `a365_buzon_consultaxplan`
  MODIFY `id_buzon_consultaxplan` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_consulta_bitacora`
--
ALTER TABLE `a365_buzon_consulta_bitacora`
  MODIFY `id_buzon_consulta` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_estado`
--
ALTER TABLE `a365_buzon_estado`
  MODIFY `id_buzon_tipo_familia` mediumint(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_estado_consulta`
--
ALTER TABLE `a365_buzon_estado_consulta`
  MODIFY `id_buzon_estado_consulta` mediumint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_log_reportes`
--
ALTER TABLE `a365_buzon_log_reportes`
  MODIFY `id_buzon_log_reportes` mediumint(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_modalidad_venta`
--
ALTER TABLE `a365_buzon_modalidad_venta`
  MODIFY `id_buzon_modalidad_venta` mediumint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_motivo_consulta`
--
ALTER TABLE `a365_buzon_motivo_consulta`
  MODIFY `id_buzon_motivo_consulta` mediumint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_operador`
--
ALTER TABLE `a365_buzon_operador`
  MODIFY `id_buzon_operador` mediumint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_tipo_consumo`
--
ALTER TABLE `a365_buzon_tipo_consumo`
  MODIFY `id_buzon_tipo_consumo` mediumint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_tipo_documento`
--
ALTER TABLE `a365_buzon_tipo_documento`
  MODIFY `id_buzon_tipo_doc` mediumint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_tipo_familia`
--
ALTER TABLE `a365_buzon_tipo_familia`
  MODIFY `id_buzon_tipo_familia` mediumint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_tipo_operacion`
--
ALTER TABLE `a365_buzon_tipo_operacion`
  MODIFY `id_buzon_tipo_operacion` mediumint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_tipo_plan`
--
ALTER TABLE `a365_buzon_tipo_plan`
  MODIFY `id_buzon_tipo_plan` mediumint(2) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_tipo_plazo`
--
ALTER TABLE `a365_buzon_tipo_plazo`
  MODIFY `id_buzon_tipo_plazo` mediumint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_tipo_usuario`
--
ALTER TABLE `a365_buzon_tipo_usuario`
  MODIFY `id_buzon_tipo` mediumint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `a365_buzon_usuario_pagina`
--
ALTER TABLE `a365_buzon_usuario_pagina`
  MODIFY `id_pagina` mediumint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `aai_clbkofi_campania`
--
ALTER TABLE `aai_clbkofi_campania`
  MODIFY `id_clbkofi_campania` mediumint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;

--
-- AUTO_INCREMENT de la tabla `aai_clbkofi_productos`
--
ALTER TABLE `aai_clbkofi_productos`
  MODIFY `id_clbkofi_producto` mediumint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `aai_clbkofi_tipo_plan`
--
ALTER TABLE `aai_clbkofi_tipo_plan`
  MODIFY `id_clbkofi_tipo_plan` mediumint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `a365_buzon_archivos`
--
ALTER TABLE `a365_buzon_archivos`
  ADD CONSTRAINT `fk_usr_registro_archivos` FOREIGN KEY (`usr_registro`) REFERENCES `a365_buzon_usuario` (`id_buzon_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `a365_buzon_consultaxplan`
--
ALTER TABLE `a365_buzon_consultaxplan`
  ADD CONSTRAINT `fk_campania_consultaxplan` FOREIGN KEY (`id_campania`) REFERENCES `aai_clbkofi_campania` (`id_clbkofi_campania`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_consulta_consultaxplan` FOREIGN KEY (`id_buzon_consulta`) REFERENCES `a365_buzon_consulta` (`id_buzon_consulta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_consumo_consultaxplan` FOREIGN KEY (`id_tipo_consumo`) REFERENCES `a365_buzon_tipo_consumo` (`id_buzon_tipo_consumo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_familia_consultaxplan` FOREIGN KEY (`id_tipo_familia`) REFERENCES `a365_buzon_tipo_familia` (`id_buzon_tipo_familia`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_operador_consultaxplan` FOREIGN KEY (`id_operador`) REFERENCES `a365_buzon_operador` (`id_buzon_operador`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_plan_consultaxplan` FOREIGN KEY (`id_tipo_plan`) REFERENCES `aai_clbkofi_tipo_plan` (`id_clbkofi_tipo_plan`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_plazo_consultaxplan` FOREIGN KEY (`id_tipo_plazo`) REFERENCES `a365_buzon_tipo_plazo` (`id_buzon_tipo_plazo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_producto_consultaxplan` FOREIGN KEY (`id_producto`) REFERENCES `aai_clbkofi_productos` (`id_clbkofi_producto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_usr_consultaxplan` FOREIGN KEY (`id_usr_registro`) REFERENCES `a365_buzon_usuario` (`id_buzon_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `a365_buzon_consulta_bitacora`
--
ALTER TABLE `a365_buzon_consulta_bitacora`
  ADD CONSTRAINT `fk_consulta_mov` FOREIGN KEY (`id_buzon_consulta`) REFERENCES `a365_buzon_consulta` (`id_buzon_consulta`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `a365_buzon_motivo_consulta`
--
ALTER TABLE `a365_buzon_motivo_consulta`
  ADD CONSTRAINT `fk_estado_motivoconsulta` FOREIGN KEY (`id_estado_consulta`) REFERENCES `a365_buzon_estado_consulta` (`id_buzon_estado_consulta`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `a365_buzon_usuario`
--
ALTER TABLE `a365_buzon_usuario`
  ADD CONSTRAINT `fk_usuario_registro` FOREIGN KEY (`id_usr_registro`) REFERENCES `a365_buzon_usuario` (`id_buzon_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_usuario_tipodoc` FOREIGN KEY (`id_tipo_documento`) REFERENCES `a365_buzon_tipo_documento` (`id_buzon_tipo_doc`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_usuario_tipousuario` FOREIGN KEY (`id_tipo_usuario`) REFERENCES `a365_buzon_tipo_usuario` (`id_buzon_tipo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `a365_buzon_usuario_pagina`
--
ALTER TABLE `a365_buzon_usuario_pagina`
  ADD CONSTRAINT `fk_registro_pagina` FOREIGN KEY (`id_buzon_usuario`) REFERENCES `a365_buzon_usuario` (`id_buzon_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_usuario_buzon_pagina` FOREIGN KEY (`id_buzon_pagina`) REFERENCES `a365_buzon_pagina` (`id_buzon_pagina`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
