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
            id: 'tid_59ed851c_63mb',
            name: "{{tid_59ed851c_63mb}}",
            binding: 'tid',
            updateOn: 'blur',
            defaultI18nValue: '工号',
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
    ], BasicFormViewmodelForm.prototype, "tid", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'name_eea2c83e_lenv',
            name: "{{name_eea2c83e_lenv}}",
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
            id: 'gender_645728d5_3ap6',
            name: "{{gender_645728d5_3ap6}}",
            binding: 'gender',
            updateOn: 'change',
            defaultI18nValue: '性别',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "gender", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'tel_PhoneNumber_25d84e04_0iuz',
            name: "{{tel_PhoneNumber_25d84e04_0iuz}}",
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
            formGroupName: '教师',
            enableValidate: true
        }),
        Injectable()
    ], BasicFormViewmodelForm);
    return BasicFormViewmodelForm;
}(Form));
export { BasicFormViewmodelForm };
