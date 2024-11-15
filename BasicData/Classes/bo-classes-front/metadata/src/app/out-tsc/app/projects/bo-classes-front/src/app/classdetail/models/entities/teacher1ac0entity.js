import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var Teacher1ac0Entity = /** @class */ (function (_super) {
    tslib_1.__extends(Teacher1ac0Entity, _super);
    function Teacher1ac0Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Teacher',
            dataField: 'teacher',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Teacher.Teacher',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Teacher1ac0Entity.prototype, "teacher", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Name',
            dataField: 'teacher_Name',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Teacher.Teacher_Name',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Teacher1ac0Entity.prototype, "teacher_Name", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'TID',
            dataField: 'teacher_TID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Teacher.Teacher_TID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Teacher1ac0Entity.prototype, "teacher_TID", void 0);
    Teacher1ac0Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Teacher",
            nodeCode: "teacher"
        })
    ], Teacher1ac0Entity);
    return Teacher1ac0Entity;
}(Entity));
export { Teacher1ac0Entity };
