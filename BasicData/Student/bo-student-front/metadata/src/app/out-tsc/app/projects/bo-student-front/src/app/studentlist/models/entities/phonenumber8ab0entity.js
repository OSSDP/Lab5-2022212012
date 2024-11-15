import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var PhoneNumber8ab0Entity = /** @class */ (function (_super) {
    tslib_1.__extends(PhoneNumber8ab0Entity, _super);
    function PhoneNumber8ab0Entity() {
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
    ], PhoneNumber8ab0Entity.prototype, "phoneNumber", void 0);
    PhoneNumber8ab0Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Tel",
            nodeCode: "tel"
        })
    ], PhoneNumber8ab0Entity);
    return PhoneNumber8ab0Entity;
}(Entity));
export { PhoneNumber8ab0Entity };
