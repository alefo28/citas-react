-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 19-04-2024 a las 17:59:28
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `kontroleApi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PlcsSlotAlarms`
--

CREATE TABLE `PlcsSlotAlarms` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `value` int(11) DEFAULT NULL,
  `dateService` varchar(255) DEFAULT NULL,
  `varOne` varchar(255) DEFAULT NULL,
  `varTwo` varchar(255) DEFAULT NULL,
  `varThree` varchar(255) DEFAULT NULL,
  `plcSlotId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `first` tinyint(1) NOT NULL,
  `conditionValue` int(11) NOT NULL,
  `conditionStart` varchar(255) NOT NULL,
  `isChecked` tinyint(1) NOT NULL DEFAULT 0,
  `name` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `PlcsSlotAlarms`
--

INSERT INTO `PlcsSlotAlarms` (`id`, `value`, `dateService`, `varOne`, `varTwo`, `varThree`, `plcSlotId`, `createdAt`, `updatedAt`, `first`, `conditionValue`, `conditionStart`, `isChecked`, `name`, `message`) VALUES
('045f233d-fe05-46b5-84cf-d4b9db5dcfbc', 45, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:33:17', '2024-04-18 17:43:30', 1, 20, '>', 0, NULL, NULL),
('06f426d8-f94b-438d-8e51-994f65558e2a', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:39:01', '2024-04-18 21:01:34', 0, 5, '<', 0, NULL, NULL),
('08dd156c-b7e1-4a5c-aab6-2ac36d622209', 95, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:33:27', '2024-04-18 17:44:02', 1, 20, '>', 0, NULL, NULL),
('0ab794bb-82cb-4095-b232-17901de52c82', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 17:28:50', '2024-04-18 17:43:41', 1, 5, '<', 0, NULL, NULL),
('0b686e19-6837-43d1-b94d-99044d50e2f1', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:24:01', '2024-04-18 18:32:26', 0, 5, '<', 0, NULL, NULL),
('0d8218e9-a06f-4133-afb0-a3afb299e6a2', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:36:01', '2024-04-18 21:12:31', 0, 5, '<', 0, NULL, NULL),
('14ffb7a6-e9c2-4c5f-8bd9-010a5a5f62e7', 60, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:33:20', '2024-04-18 17:43:30', 1, 20, '>', 0, NULL, NULL),
('2bae85ec-3f11-4a57-976c-d74e22894134', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:25:01', '2024-04-18 18:32:27', 0, 5, '<', 0, NULL, NULL),
('2e470529-57de-42e5-aa09-11f9c08aa36b', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 21:46:01', '2024-04-18 22:34:24', 0, 5, '<', 0, NULL, NULL),
('3396db71-9a11-462a-b6db-813742e664cf', 40, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:33:16', '2024-04-18 17:43:30', 1, 20, '>', 0, NULL, NULL),
('35002fa6-f78b-4f34-8b49-c5cd5982c43d', 70, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:35:01', '2024-04-18 17:56:25', 0, 20, '>', 0, NULL, NULL),
('36dce357-5c4e-4462-b826-bb254bab08c7', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:41:01', '2024-04-18 21:01:33', 0, 5, '<', 0, NULL, NULL),
('38298aec-a9c9-4d98-acf7-3e74b9dda56f', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:30:01', '2024-04-18 21:01:17', 0, 5, '<', 0, NULL, NULL),
('38fdc0bf-65b6-4169-8307-d78a0fc10438', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:17:01', '2024-04-18 18:23:15', 0, 5, '<', 0, NULL, NULL),
('4159c276-92ca-4378-a8eb-a5e08161218d', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:34:01', '2024-04-18 21:01:16', 0, 5, '<', 0, NULL, NULL),
('41942813-d32b-4e88-9e84-76433b8a9dc4', 70, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:33:22', '2024-04-18 17:43:49', 1, 20, '>', 0, NULL, NULL),
('464f733f-68d9-4054-bb59-6743a12cfe54', 25, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:33:33', '2024-04-18 17:44:01', 1, 20, '>', 0, NULL, NULL),
('47a4a51c-074f-4a91-9b7a-923799fd0e6d', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 21:36:01', '2024-04-18 22:34:24', 0, 5, '<', 0, NULL, NULL),
('4a4d9463-8f6f-44b1-9624-b9d0c5fc97e9', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:23:01', '2024-04-18 18:23:39', 0, 5, '<', 0, NULL, NULL),
('4b88850f-7c01-45c2-bd4f-f2c0f8d90d76', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:32:01', '2024-04-18 21:01:17', 0, 5, '<', 0, NULL, NULL),
('51eedf56-802c-43b9-9983-eb538607c6de', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:40:01', '2024-04-18 21:01:40', 0, 5, '<', 0, NULL, NULL),
('52203460-9b7c-4cbb-8923-03bd1e7cb7ae', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:16:01', '2024-04-18 18:23:15', 0, 5, '<', 0, NULL, NULL),
('5d86ce0a-e275-4054-846d-f8eae8a4e48d', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:12:01', '2024-04-18 18:15:25', 0, 5, '<', 0, NULL, NULL),
('604ae09b-d20b-483a-862c-5e8191989b69', 85, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:33:25', '2024-04-18 17:43:51', 1, 20, '>', 0, NULL, NULL),
('6306214e-a406-496b-a092-bd3e38989bfc', 30, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:33:34', '2024-04-18 17:44:00', 1, 20, '>', 0, NULL, NULL),
('68eb87ad-840e-4635-8e6b-052ce25bfec9', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:38:01', '2024-04-18 21:12:30', 0, 5, '<', 0, NULL, NULL),
('69618364-b7da-4a3c-a540-977ed1728cff', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:11:01', '2024-04-18 18:15:28', 0, 5, '<', 0, NULL, NULL),
('6b762b5e-9dad-4e7f-8b05-efadbf2ad98a', 35, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:33:15', '2024-04-18 17:43:31', 1, 20, '>', 0, NULL, NULL),
('7546ebd5-7cc7-4ce8-8d09-c74a16ac39be', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:10:01', '2024-04-18 18:15:29', 0, 5, '<', 0, NULL, NULL),
('777205bb-7d6b-4871-9860-301082ba6f9c', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:26:01', '2024-04-18 18:32:35', 0, 5, '<', 0, NULL, NULL),
('77994ad4-e189-48d5-a594-c9240e0631ab', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:19:01', '2024-04-18 18:23:23', 0, 5, '<', 0, NULL, NULL),
('78d1203d-b71e-428f-b5e3-a4d951c92f2a', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 17:29:01', '2024-04-18 17:43:40', 0, 5, '<', 0, NULL, NULL),
('7c659f01-a65f-4773-8635-245dec3265ed', 90, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:33:26', '2024-04-18 17:43:52', 1, 20, '>', 0, NULL, NULL),
('7faa815a-19e4-4f52-88ed-3858397aa2fa', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 21:00:01', '2024-04-18 21:34:41', 0, 5, '<', 0, NULL, NULL),
('808397f4-8c45-4706-9749-f98c8640e41d', 55, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:33:19', '2024-04-18 17:43:30', 1, 20, '>', 0, NULL, NULL),
('85ccb9fe-2fcc-41ba-8d99-2ca6998c4d47', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:14:01', '2024-04-18 18:15:54', 0, 5, '<', 0, NULL, NULL),
('8a60a1e7-c631-4fd5-98e9-fb2fef2f67da', 65, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:33:21', '2024-04-18 17:43:30', 1, 20, '>', 0, NULL, NULL),
('8ea38ed4-eabe-4360-ba91-4e7a94e1a104', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:35:01', '2024-04-18 21:12:32', 0, 5, '<', 0, NULL, NULL),
('923f06c0-9188-493b-9e0f-2281e76d6533', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:13:01', '2024-04-18 18:15:24', 0, 5, '<', 0, NULL, NULL),
('9b0dd320-ec22-4499-adfd-4fd446e4c6c3', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:15:01', '2024-04-18 18:15:53', 0, 5, '<', 0, NULL, NULL),
('9d4443d2-b4a5-4582-aeac-8fc2f6e5e878', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:20:01', '2024-04-18 18:23:24', 0, 5, '<', 0, NULL, NULL),
('9e51be24-7b81-4151-bb7d-1ccec20dfb88', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 17:35:01', '2024-04-18 17:56:24', 0, 5, '<', 0, NULL, NULL),
('9ef483e8-b2bd-427e-8e69-0de7cf58a261', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 17:34:01', '2024-04-18 17:39:57', 0, 5, '<', 0, NULL, NULL),
('a065d5fb-bb1a-4ce9-942f-07c17c38daae', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 21:35:01', '2024-04-18 21:35:28', 0, 5, '<', 0, NULL, NULL),
('a23e45db-1b39-456b-9239-4e848ed7fa72', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:42:01', '2024-04-18 21:01:28', 0, 5, '<', 0, NULL, NULL),
('a69b9e1d-53f6-4604-ac9d-69d936683e95', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:28:01', '2024-04-18 18:32:36', 0, 5, '<', 0, NULL, NULL),
('aaee6558-2e29-4c1f-b4cd-cdf481cdd559', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 21:45:01', '2024-04-18 22:34:24', 0, 5, '<', 0, NULL, NULL),
('af37c3d4-dfdf-42e9-9514-6bc0bbc2b959', 70, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:34:01', '2024-04-18 17:44:00', 0, 20, '>', 0, NULL, NULL),
('b5e702e7-54ad-4164-a5de-1e01461f073a', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:22:01', '2024-04-18 18:23:35', 0, 5, '<', 0, NULL, NULL),
('b5f60df9-984f-496b-ac77-7805654a07f5', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:29:01', '2024-04-18 18:32:37', 0, 5, '<', 0, NULL, NULL),
('b73cb7c7-6b05-42e6-9cf5-48a3f016ae2e', 75, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:33:23', '2024-04-18 17:43:50', 1, 20, '>', 0, NULL, NULL),
('be039b01-5473-4984-a27b-a459b446fe6f', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 21:34:01', '2024-04-18 21:35:22', 0, 5, '<', 0, NULL, NULL),
('bf9b5aa5-2f4a-4bd6-aea8-521274a2b8ef', 80, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:33:24', '2024-04-18 17:43:50', 1, 20, '>', 0, NULL, NULL),
('c2ad264a-1d5c-4a85-b5f3-768e13d3f280', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:21:01', '2024-04-18 18:23:32', 0, 5, '<', 0, NULL, NULL),
('cfbf5d5a-ba98-424c-84bb-1c4616138cb8', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:37:01', '2024-04-18 21:01:41', 0, 5, '<', 0, NULL, NULL),
('d0862ba5-3ed8-4f74-8d0d-3a290204769a', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:27:01', '2024-04-18 18:32:35', 0, 5, '<', 0, NULL, NULL),
('d152cab7-4a7d-45dc-8f2f-345a923e4cad', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:31:01', '2024-04-18 21:01:17', 0, 5, '<', 0, NULL, NULL),
('dd253306-ae8f-49bf-9e95-22ec224d606b', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:43:01', '2024-04-18 21:01:27', 0, 5, '<', 0, NULL, NULL),
('e42139c1-0f21-4364-b1ba-bac503c32600', 50, NULL, NULL, NULL, NULL, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-18 17:33:18', '2024-04-18 17:43:30', 1, 20, '>', 0, NULL, NULL),
('e7915bab-7cee-4634-8895-d47918d70bc5', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 21:25:01', '2024-04-18 21:34:42', 0, 5, '<', 0, NULL, NULL),
('e7cae57c-4539-499e-b64e-00fa28cbea96', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 17:33:01', '2024-04-18 17:43:31', 0, 5, '<', 0, NULL, NULL),
('e9e3a515-cba6-4632-83cf-f14521d67c74', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 21:33:01', '2024-04-18 21:34:43', 0, 5, '<', 0, NULL, NULL),
('f457e035-6a03-46f4-8b33-a473f836cd96', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:33:01', '2024-04-18 21:01:17', 0, 5, '<', 0, NULL, NULL),
('f6f95920-eb7a-4310-8bf1-931011e1701e', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 18:18:01', '2024-04-18 18:23:23', 0, 5, '<', 0, NULL, NULL),
('ffa08355-a1fa-4169-ad28-954536d4d8e7', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-18 21:44:01', '2024-04-18 22:34:24', 0, 5, '<', 0, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `PlcsSlotAlarms`
--
ALTER TABLE `PlcsSlotAlarms`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
