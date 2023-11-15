-- CreateTable
CREATE TABLE `usuarios` (
    `idusuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `clave` VARCHAR(191) NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idusuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `salones` (
    `idsalon` INTEGER NOT NULL,
    `nombre_salon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idsalon`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dispositivos` (
    `iddispositivo` VARCHAR(191) NOT NULL,
    `nombre_dispositivo` VARCHAR(191) NOT NULL,
    `salonesIdsalon` INTEGER NOT NULL,

    PRIMARY KEY (`iddispositivo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `dispositivos` ADD CONSTRAINT `dispositivos_salonesIdsalon_fkey` FOREIGN KEY (`salonesIdsalon`) REFERENCES `salones`(`idsalon`) ON DELETE RESTRICT ON UPDATE CASCADE;
