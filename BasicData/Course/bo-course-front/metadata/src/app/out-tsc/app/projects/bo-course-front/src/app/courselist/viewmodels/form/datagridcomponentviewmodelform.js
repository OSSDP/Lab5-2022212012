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
            id: 'cid',
            name: "{{cid_1b390991_vcw5}}",
            binding: 'cid',
            updateOn: 'blur',
            defaultI18nValue: '课程编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "cid", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'name',
            name: "{{name_40c471b0_k303}}",
            binding: 'name',
            updateOn: 'blur',
            defaultI18nValue: '课程名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'sort',
            name: "{{sort_cf562a4b_vch3}}",
            binding: 'sort',
            updateOn: 'change',
            defaultI18nValue: '课程类型',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "sort", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'hour',
            name: "{{hour_9b190013_bya0}}",
            binding: 'hour',
            updateOn: 'blur',
            defaultI18nValue: '学时',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "hour", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'teacher',
            name: "{{teacher_b6068cf6_yrx0}}",
            binding: 'teacher',
            updateOn: 'blur',
            defaultI18nValue: '授课教师',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "teacher", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '课程',
            enableValidate: false
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
