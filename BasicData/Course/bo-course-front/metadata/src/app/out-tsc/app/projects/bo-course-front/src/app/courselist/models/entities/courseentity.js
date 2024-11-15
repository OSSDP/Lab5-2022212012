import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var CourseEntity = /** @class */ (function (_super) {
    tslib_1.__extends(CourseEntity, _super);
    function CourseEntity() {
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
    ], CourseEntity.prototype, "id", void 0);
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
    ], CourseEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'CID',
            dataField: 'cid',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'CID',
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
    ], CourseEntity.prototype, "cid", void 0);
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
    ], CourseEntity.prototype, "name", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Sort',
            dataField: 'sort',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'basic',
            path: 'Sort',
        }),
        tslib_1.__metadata("design:type", Object)
    ], CourseEntity.prototype, "sort", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Hour',
            dataField: 'hour',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'Hour',
        }),
        tslib_1.__metadata("design:type", Object)
    ], CourseEntity.prototype, "hour", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Teacher',
            dataField: 'teacher',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Teacher',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], CourseEntity.prototype, "teacher", void 0);
    CourseEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Course",
            nodeCode: "courses"
        })
    ], CourseEntity);
    return CourseEntity;
}(Entity));
export { CourseEntity };
