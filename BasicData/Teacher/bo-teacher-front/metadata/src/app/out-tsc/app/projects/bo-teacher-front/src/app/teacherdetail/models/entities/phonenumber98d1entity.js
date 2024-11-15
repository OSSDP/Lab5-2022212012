import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var PhoneNumber98d1Entity = /** @class */ (function (_super) {
    tslib_1.__extends(PhoneNumber98d1Entity, _super);
    function PhoneNumber98d1Entity() {
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
    ], PhoneNumber98d1Entity.prototype, "phoneNumber", void 0);
    PhoneNumber98d1Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Tel",
            nodeCode: "tel"
        })
    ], PhoneNumber98d1Entity);
    return PhoneNumber98d1Entity;
}(Entity));
export { PhoneNumber98d1Entity };
