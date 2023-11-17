"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSaloneDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_salone_dto_1 = require("./create-salone.dto");
class UpdateSaloneDto extends (0, mapped_types_1.PartialType)(create_salone_dto_1.CreateSaloneDto) {
}
exports.UpdateSaloneDto = UpdateSaloneDto;
//# sourceMappingURL=update-salone.dto.js.map