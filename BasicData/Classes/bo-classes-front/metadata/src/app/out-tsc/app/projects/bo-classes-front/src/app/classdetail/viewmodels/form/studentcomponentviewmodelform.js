import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var StudentComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(StudentComponentViewmodelForm, _super);
    function StudentComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'student.student_StuID',
            name: "{{student_Student_StuID_1f6f0446_ez3t}}",
            binding: 'student.student_StuID',
            updateOn: 'blur',
            defaultI18nValue: '学号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], StudentComponentViewmodelForm.prototype, "student_Student_StuID", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'student.student_Name',
            name: "{{student_Student_Name_7ba2c5c2_y7wg}}",
            binding: 'student.student_Name',
            updateOn: 'blur',
            defaultI18nValue: '姓名',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], StudentComponentViewmodelForm.prototype, "student_Student_Name", void 0);
    StudentComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '学生',
            enableValidate: true
        }),
        Injectable()
    ], StudentComponentViewmodelForm);
    return StudentComponentViewmodelForm;
}(Form));
export { StudentComponentViewmodelForm };
