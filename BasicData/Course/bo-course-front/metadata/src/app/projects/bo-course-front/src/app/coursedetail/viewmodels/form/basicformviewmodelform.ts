
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '课程',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
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
    })
    cid: FormControl;

    @NgFormControl({
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
    })
    name: FormControl;

    @NgFormControl({
        id: 'sort_152aa80b_68wo',
        name: "{{sort_152aa80b_68wo}}",
        binding: 'sort',
        updateOn: 'change',
        defaultI18nValue: '课程类型',
    })
    sort: FormControl;

    @NgFormControl({
        id: 'hour_3bbe082f_6ngd',
        name: "{{hour_3bbe082f_6ngd}}",
        binding: 'hour',
        updateOn: 'blur',
        defaultI18nValue: '学时',
    })
    hour: FormControl;

    @NgFormControl({
        id: 'teacher_bab461b2_av4r',
        name: "{{teacher_bab461b2_av4r}}",
        binding: 'teacher',
        updateOn: 'blur',
        defaultI18nValue: '授课教师',
    })
    teacher: FormControl;

}