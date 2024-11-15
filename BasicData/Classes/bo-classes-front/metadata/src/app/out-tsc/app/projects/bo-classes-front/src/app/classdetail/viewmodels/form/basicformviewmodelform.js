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
            id: 'name_97531977_j5o1',
            name: "{{name_97531977_j5o1}}",
            binding: 'name',
            updateOn: 'blur',
            defaultI18nValue: '班级名称',
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
            id: 'classTcher_57706799_m5dz',
            name: "{{classTcher_57706799_m5dz}}",
            binding: 'classTcher',
            updateOn: 'blur',
            defaultI18nValue: '班主任',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "classTcher", void 0);
    BasicFormViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '班级',
            enableValidate: true
        }),
        Injectable()
    ], BasicFormViewmodelForm);
    return BasicFormViewmodelForm;
}(Form));
export { BasicFormViewmodelForm };
