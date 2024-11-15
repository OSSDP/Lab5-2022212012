import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var PhoneNumber25d8Entity = /** @class */ (function (_super) {
    tslib_1.__extends(PhoneNumber25d8Entity, _super);
    function PhoneNumber25d8Entity() {
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
    ], PhoneNumber25d8Entity.prototype, "phoneNumber", void 0);
    PhoneNumber25d8Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Tel",
            nodeCode: "tel"
        })
    ], PhoneNumber25d8Entity);
    return PhoneNumber25d8Entity;
}(Entity));
export { PhoneNumber25d8Entity };
