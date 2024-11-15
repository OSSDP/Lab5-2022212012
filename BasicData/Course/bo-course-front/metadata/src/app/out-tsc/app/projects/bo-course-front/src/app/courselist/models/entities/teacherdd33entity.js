import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var TeacherDD33Entity = /** @class */ (function (_super) {
    tslib_1.__extends(TeacherDD33Entity, _super);
    function TeacherDD33Entity() {
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
    ], TeacherDD33Entity.prototype, "teacher", void 0);
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
    ], TeacherDD33Entity.prototype, "teacher_Name", void 0);
    TeacherDD33Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Teacher",
            nodeCode: "teacher"
        })
    ], TeacherDD33Entity);
    return TeacherDD33Entity;
}(Entity));
export { TeacherDD33Entity };
