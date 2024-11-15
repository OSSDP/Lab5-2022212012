import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var PhoneNumberD370Entity = /** @class */ (function (_super) {
    tslib_1.__extends(PhoneNumberD370Entity, _super);
    function PhoneNumberD370Entity() {
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
    ], PhoneNumberD370Entity.prototype, "phoneNumber", void 0);
    PhoneNumberD370Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Tel",
            nodeCode: "tel"
        })
    ], PhoneNumberD370Entity);
    return PhoneNumberD370Entity;
}(Entity));
export { PhoneNumberD370Entity };
