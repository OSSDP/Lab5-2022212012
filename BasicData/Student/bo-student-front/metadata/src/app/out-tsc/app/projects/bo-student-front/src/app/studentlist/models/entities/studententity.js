import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { PhoneNumber8ab0Entity } from './phonenumber8ab0entity';
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
            originalDataField: 'Version',
            dataField: 'version',
            originalDataFieldType: 'DateTime',
            initValue: '0001-01-01T00:00:00',
            path: 'Version',
            enableTimeZone: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], StudentEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'StuID',
            dataField: 'stuID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'StuID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], StudentEntity.prototype, "stuID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Name',
            dataField: 'name',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Name',
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
    ], StudentEntity.prototype, "name", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Gender',
            dataField: 'gender',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'man',
            path: 'Gender',
        }),
        tslib_1.__metadata("design:type", Object)
    ], StudentEntity.prototype, "gender", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'tel',
            originalDataField: 'Tel',
            type: PhoneNumber8ab0Entity
        }),
        tslib_1.__metadata("design:type", PhoneNumber8ab0Entity)
    ], StudentEntity.prototype, "tel", void 0);
    StudentEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Student",
            nodeCode: "students",
            allowEmpty: true
        })
    ], StudentEntity);
    return StudentEntity;
}(Entity));
export { StudentEntity };
