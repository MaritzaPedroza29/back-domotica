"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSwitchbotDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_switchbot_dto_1 = require("./create-switchbot.dto");
class UpdateSwitchbotDto extends (0, mapped_types_1.PartialType)(create_switchbot_dto_1.CreateSwitchbotDto) {
}
exports.UpdateSwitchbotDto = UpdateSwitchbotDto;
//# sourceMappingURL=update-switchbot.dto.js.map