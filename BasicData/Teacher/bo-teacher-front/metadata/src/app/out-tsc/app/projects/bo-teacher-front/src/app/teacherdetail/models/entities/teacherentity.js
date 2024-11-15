import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { PhoneNumber25d8Entity } from './phonenumber25d8entity';
var TeacherEntity = /** @class */ (function (_super) {
    tslib_1.__extends(TeacherEntity, _super);
    function TeacherEntity() {
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
    ], TeacherEntity.prototype, "id", void 0);
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
    ], TeacherEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'TID',
            dataField: 'tid',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'TID',
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
    ], TeacherEntity.prototype, "tid", void 0);
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
    ], TeacherEntity.prototype, "name", void 0);
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
    ], TeacherEntity.prototype, "gender", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'tel',
            originalDataField: 'Tel',
            type: PhoneNumber25d8Entity
        }),
        tslib_1.__metadata("design:type", PhoneNumber25d8Entity)
    ], TeacherEntity.prototype, "tel", void 0);
    TeacherEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Teacher",
            nodeCode: "teachers"
        })
    ], TeacherEntity);
    return TeacherEntity;
}(Entity));
export { TeacherEntity };
