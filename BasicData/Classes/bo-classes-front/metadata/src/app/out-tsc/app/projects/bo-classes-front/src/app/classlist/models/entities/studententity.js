import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { StudentA0cAEntity } from './studenta0caentity';
var StudentEntity = /** @class */ (function (_super) {
    tslib_1.__extends(StudentEntity, _super);
    function StudentEntity() {
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
    ], StudentEntity.prototype, "id", void 0);
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
    ], StudentEntity.prototype, "parentID", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'student',
            originalDataField: 'Student',
            type: StudentA0cAEntity
        }),
        tslib_1.__metadata("design:type", StudentA0cAEntity)
    ], StudentEntity.prototype, "student", void 0);
    StudentEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Student",
            nodeCode: "students"
        })
    ], StudentEntity);
    return StudentEntity;
}(Entity));
export { StudentEntity };
