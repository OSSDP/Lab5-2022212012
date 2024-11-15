import * as tslib_1 from "tslib";
import { Entity, NgField, EntityList, NgList, NgEntity } from '@farris/devkit';
import { StudentEntity } from './studententity';
var ClassesEntity = /** @class */ (function (_super) {
    tslib_1.__extends(ClassesEntity, _super);
    function ClassesEntity() {
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
    ], ClassesEntity.prototype, "id", void 0);
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
    ], ClassesEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Name',
            dataField: 'name',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Name',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], ClassesEntity.prototype, "name", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'classTcher',
            dataField: 'classTcher',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'classTcher',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], ClassesEntity.prototype, "classTcher", void 0);
    tslib_1.__decorate([
        NgList({
            dataField: 'students',
            originalDataField: '',
            type: StudentEntity
        }),
        tslib_1.__metadata("design:type", EntityList)
    ], ClassesEntity.prototype, "students", void 0);
    ClassesEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Classes",
            nodeCode: "classess"
        })
    ], ClassesEntity);
    return ClassesEntity;
}(Entity));
export { ClassesEntity };
