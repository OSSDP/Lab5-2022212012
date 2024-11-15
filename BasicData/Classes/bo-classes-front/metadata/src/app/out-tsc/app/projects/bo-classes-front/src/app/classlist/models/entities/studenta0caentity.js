import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var StudentA0cAEntity = /** @class */ (function (_super) {
    tslib_1.__extends(StudentA0cAEntity, _super);
    function StudentA0cAEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Student',
            dataField: 'student',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Student.Student',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], StudentA0cAEntity.prototype, "student", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'StuID',
            dataField: 'student_StuID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Student.Student_StuID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], StudentA0cAEntity.prototype, "student_StuID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Name',
            dataField: 'student_Name',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Student.Student_Name',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], StudentA0cAEntity.prototype, "student_Name", void 0);
    StudentA0cAEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Student",
            nodeCode: "student"
        })
    ], StudentA0cAEntity);
    return StudentA0cAEntity;
}(Entity));
export { StudentA0cAEntity };
