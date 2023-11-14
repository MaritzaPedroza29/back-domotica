/*
  Warnings:

  - Made the column `imagen` on table `usuarios` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `usuarios` MODIFY `imagen` VARCHAR(191) NOT NULL DEFAULT 'valor_predeterminado.jpg';
