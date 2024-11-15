import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var Teacher8175Entity = /** @class */ (function (_super) {
    tslib_1.__extends(Teacher8175Entity, _super);
    function Teacher8175Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'classTcher',
            dataField: 'classTcher',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'classTcher.classTcher',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Teacher8175Entity.prototype, "classTcher", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Name',
            dataField: 'classTeacher_Name',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'classTcher.classTeacher_Name',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Teacher8175Entity.prototype, "classTeacher_Name", void 0);
    Teacher8175Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "classTcher",
            nodeCode: "classTcher"
        })
    ], Teacher8175Entity);
    return Teacher8175Entity;
}(Entity));
export { Teacher8175Entity };
