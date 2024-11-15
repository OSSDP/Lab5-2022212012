
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '课程',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'cid',
        name: "{{cid_1b390991_vcw5}}",
        binding: 'cid',
        updateOn: 'blur',
        defaultI18nValue: '课程编号',
    })
    cid: FormControl;

    @NgFormControl({
        id: 'name',
        name: "{{name_40c471b0_k303}}",
        binding: 'name',
        updateOn: 'blur',
        defaultI18nValue: '课程名称',
    })
    name: FormControl;

    @NgFormControl({
        id: 'sort',
        name: "{{sort_cf562a4b_vch3}}",
        binding: 'sort',
        updateOn: 'change',
        defaultI18nValue: '课程类型',
    })
    sort: FormControl;

    @NgFormControl({
        id: 'hour',
        name: "{{hour_9b190013_bya0}}",
        binding: 'hour',
        updateOn: 'blur',
        defaultI18nValue: '学时',
    })
    hour: FormControl;

    @NgFormControl({
        id: 'teacher',
        name: "{{teacher_b6068cf6_yrx0}}",
        binding: 'teacher',
        updateOn: 'blur',
        defaultI18nValue: '授课教师',
    })
    teacher: FormControl;

}