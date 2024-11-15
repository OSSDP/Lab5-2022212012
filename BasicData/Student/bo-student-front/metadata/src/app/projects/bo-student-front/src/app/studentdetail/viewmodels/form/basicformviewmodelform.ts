
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
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
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
    })
    stuID: FormControl;

    @NgFormControl({
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
    })
    name: FormControl;

    @NgFormControl({
        id: 'gender_3b2b6667_pciv',
        name: "{{gender_3b2b6667_pciv}}",
        binding: 'gender',
        updateOn: 'change',
        defaultI18nValue: '性别',
    })
    gender: FormControl;

    @NgFormControl({
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
    })
    tel_PhoneNumber: FormControl;

}