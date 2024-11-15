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
            id: 'cid_3ef59c5b_7twz',
            name: "{{cid_3ef59c5b_7twz}}",
            binding: 'cid',
            updateOn: 'blur',
            defaultI18nValue: '课程编号',
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
    ], BasicFormViewmodelForm.prototype, "cid", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'name_1afade1f_8y0g',
            name: "{{name_1afade1f_8y0g}}",
            binding: 'name',
            updateOn: 'blur',
            defaultI18nValue: '课程名称',
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
            id: 'sort_152aa80b_68wo',
            name: "{{sort_152aa80b_68wo}}",
            binding: 'sort',
            updateOn: 'change',
            defaultI18nValue: '课程类型',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "sort", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'hour_3bbe082f_6ngd',
            name: "{{hour_3bbe082f_6ngd}}",
            binding: 'hour',
            updateOn: 'blur',
            defaultI18nValue: '学时',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "hour", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'teacher_bab461b2_av4r',
            name: "{{teacher_bab461b2_av4r}}",
            binding: 'teacher',
            updateOn: 'blur',
            defaultI18nValue: '授课教师',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "teacher", void 0);
    BasicFormViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '课程',
            enableValidate: true
        }),
        Injectable()
    ], BasicFormViewmodelForm);
    return BasicFormViewmodelForm;
}(Form));
export { BasicFormViewmodelForm };
