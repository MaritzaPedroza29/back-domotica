-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `imagen` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `salones` (
    `idsalon` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_salon` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `salones_idsalon_key`(`idsalon`),
    PRIMARY KEY (`idsalon`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dispositivosdomoticos` (
    `iddispositivo` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_dispositivo` VARCHAR(191) NOT NULL,
    `estado` BOOLEAN NOT NULL,
    `salonesIdsalon` INTEGER NOT NULL,

    UNIQUE INDEX `dispositivosdomoticos_iddispositivo_key`(`iddispositivo`),
    PRIMARY KEY (`iddispositivo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `dispositivosdomoticos` ADD CONSTRAINT `dispositivosdomoticos_salonesIdsalon_fkey` FOREIGN KEY (`salonesIdsalon`) REFERENCES `salones`(`idsalon`) ON DELETE RESTRICT ON UPDATE CASCADE;
