
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '教师',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'tid',
        name: "{{tid_57d810a3_p081}}",
        binding: 'tid',
        updateOn: 'blur',
        defaultI18nValue: '工号',
    })
    tid: FormControl;

    @NgFormControl({
        id: 'name',
        name: "{{name_605611af_jxcb}}",
        binding: 'name',
        updateOn: 'blur',
        defaultI18nValue: '姓名',
    })
    name: FormControl;

    @NgFormControl({
        id: 'gender',
        name: "{{gender_e200f3b4_m7z7}}",
        binding: 'gender',
        updateOn: 'change',
        defaultI18nValue: '性别',
    })
    gender: FormControl;

    @NgFormControl({
        id: 'tel.phoneNumber',
        name: "{{tel_PhoneNumber_2b262162_6x3j}}",
        binding: 'tel.phoneNumber',
        updateOn: 'blur',
        defaultI18nValue: '联系方式',
    })
    tel_PhoneNumber: FormControl;

}