import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var Teacher99f3Entity = /** @class */ (function (_super) {
    tslib_1.__extends(Teacher99f3Entity, _super);
    function Teacher99f3Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ClassTeacher',
            dataField: 'classTeacher',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ClassTeacher.ClassTeacher',
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
    ], Teacher99f3Entity.prototype, "classTeacher", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Name',
            dataField: 'classTeacher_Name',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ClassTeacher.ClassTeacher_Name',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Teacher99f3Entity.prototype, "classTeacher_Name", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'TID',
            dataField: 'classTeacher_TID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ClassTeacher.ClassTeacher_TID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Teacher99f3Entity.prototype, "classTeacher_TID", void 0);
    Teacher99f3Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "ClassTeacher",
            nodeCode: "classTeacher"
        })
    ], Teacher99f3Entity);
    return Teacher99f3Entity;
}(Entity));
export { Teacher99f3Entity };
