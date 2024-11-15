import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { Teacher1ac0Entity } from './teacher1ac0entity';
var ClassTeacherEntity = /** @class */ (function (_super) {
    tslib_1.__extends(ClassTeacherEntity, _super);
    function ClassTeacherEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ID',
            dataField: 'id',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ID',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                },
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], ClassTeacherEntity.prototype, "id", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ParentID',
            dataField: 'parentID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ParentID',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                },
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], ClassTeacherEntity.prototype, "parentID", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'teacher',
            originalDataField: 'Teacher',
            type: Teacher1ac0Entity
        }),
        tslib_1.__metadata("design:type", Teacher1ac0Entity)
    ], ClassTeacherEntity.prototype, "teacher", void 0);
    ClassTeacherEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "ClassTeacher",
            nodeCode: "classTeachers"
        })
    ], ClassTeacherEntity);
    return ClassTeacherEntity;
}(Entity));
export { ClassTeacherEntity };
