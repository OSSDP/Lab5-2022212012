
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '教师',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
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
    })
    tid: FormControl;

    @NgFormControl({
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
    })
    name: FormControl;

    @NgFormControl({
        id: 'gender_645728d5_3ap6',
        name: "{{gender_645728d5_3ap6}}",
        binding: 'gender',
        updateOn: 'change',
        defaultI18nValue: '性别',
    })
    gender: FormControl;

    @NgFormControl({
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
    })
    tel_PhoneNumber: FormControl;

}