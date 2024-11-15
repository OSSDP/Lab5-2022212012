import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var DataGridComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponentViewmodelForm, _super);
    function DataGridComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'tid',
            name: "{{tid_57d810a3_p081}}",
            binding: 'tid',
            updateOn: 'blur',
            defaultI18nValue: '工号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "tid", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'name',
            name: "{{name_605611af_jxcb}}",
            binding: 'name',
            updateOn: 'blur',
            defaultI18nValue: '姓名',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'gender',
            name: "{{gender_e200f3b4_m7z7}}",
            binding: 'gender',
            updateOn: 'change',
            defaultI18nValue: '性别',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "gender", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'tel.phoneNumber',
            name: "{{tel_PhoneNumber_2b262162_6x3j}}",
            binding: 'tel.phoneNumber',
            updateOn: 'blur',
            defaultI18nValue: '联系方式',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "tel_PhoneNumber", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '教师',
            enableValidate: false
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
