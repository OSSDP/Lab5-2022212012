import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var BasicFormViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(BasicFormViewmodelForm, _super);
    function BasicFormViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'stuID_4d7c2ff8_aona',
            name: "{{stuID_4d7c2ff8_aona}}",
            binding: 'stuID',
            updateOn: 'blur',
            defaultI18nValue: '学号',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                },
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "stuID", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'name_7c6610fd_1jji',
            name: "{{name_7c6610fd_1jji}}",
            binding: 'name',
            updateOn: 'blur',
            defaultI18nValue: '姓名',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                },
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'gender_3b2b6667_pciv',
            name: "{{gender_3b2b6667_pciv}}",
            binding: 'gender',
            updateOn: 'change',
            defaultI18nValue: '性别',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "gender", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'tel_PhoneNumber_d3709230_ghqd',
            name: "{{tel_PhoneNumber_d3709230_ghqd}}",
            binding: 'tel.phoneNumber',
            updateOn: 'blur',
            defaultI18nValue: '联系方式',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "tel_PhoneNumber", void 0);
    BasicFormViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '学生',
            enableValidate: true
        }),
        Injectable()
    ], BasicFormViewmodelForm);
    return BasicFormViewmodelForm;
}(Form));
export { BasicFormViewmodelForm };
