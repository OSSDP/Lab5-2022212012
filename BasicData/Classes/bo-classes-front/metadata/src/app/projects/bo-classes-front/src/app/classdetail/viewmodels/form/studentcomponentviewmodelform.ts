
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '学生',
    enableValidate: true
})

@Injectable()
export class StudentComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'student.student_StuID',
        name: "{{student_Student_StuID_1f6f0446_ez3t}}",
        binding: 'student.student_StuID',
        updateOn: 'blur',
        defaultI18nValue: '学号',
    })
    student_Student_StuID: FormControl;

    @NgFormControl({
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
    })
    student_Student_Name: FormControl;

}