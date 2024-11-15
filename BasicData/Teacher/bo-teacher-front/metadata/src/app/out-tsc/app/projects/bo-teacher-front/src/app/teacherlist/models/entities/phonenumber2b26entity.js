import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var PhoneNumber2b26Entity = /** @class */ (function (_super) {
    tslib_1.__extends(PhoneNumber2b26Entity, _super);
    function PhoneNumber2b26Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'PhoneNumber',
            dataField: 'phoneNumber',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Tel.PhoneNumber',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], PhoneNumber2b26Entity.prototype, "phoneNumber", void 0);
    PhoneNumber2b26Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Tel",
            nodeCode: "tel"
        })
    ], PhoneNumber2b26Entity);
    return PhoneNumber2b26Entity;
}(Entity));
export { PhoneNumber2b26Entity };
