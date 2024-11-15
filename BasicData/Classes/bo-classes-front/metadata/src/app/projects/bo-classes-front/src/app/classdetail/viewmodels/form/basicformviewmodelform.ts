
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '班级',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
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
    })
    name: FormControl;

    @NgFormControl({
        id: 'classTcher_57706799_m5dz',
        name: "{{classTcher_57706799_m5dz}}",
        binding: 'classTcher',
        updateOn: 'blur',
        defaultI18nValue: '班主任',
    })
    classTcher: FormControl;

}