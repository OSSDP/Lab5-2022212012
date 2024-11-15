import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var PhoneNumber87e7Entity = /** @class */ (function (_super) {
    tslib_1.__extends(PhoneNumber87e7Entity, _super);
    function PhoneNumber87e7Entity() {
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
    ], PhoneNumber87e7Entity.prototype, "phoneNumber", void 0);
    PhoneNumber87e7Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Tel",
            nodeCode: "tel"
        })
    ], PhoneNumber87e7Entity);
    return PhoneNumber87e7Entity;
}(Entity));
export { PhoneNumber87e7Entity };
