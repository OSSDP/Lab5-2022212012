
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '班级',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'name',
        name: "{{name_afd5e005_l32s}}",
        binding: 'name',
        updateOn: 'blur',
        defaultI18nValue: '班级名称',
    })
    name: FormControl;

    @NgFormControl({
        id: 'classTcher',
        name: "{{classTcher_06fe7f39_20ep}}",
        binding: 'classTcher',
        updateOn: 'blur',
        defaultI18nValue: '班主任',
    })
    classTcher: FormControl;

}