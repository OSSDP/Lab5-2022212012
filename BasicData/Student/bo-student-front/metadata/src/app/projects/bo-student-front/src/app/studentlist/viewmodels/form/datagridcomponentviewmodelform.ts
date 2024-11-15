
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '学生',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'stuID',
        name: "{{stuID_f33c54bb_werk}}",
        binding: 'stuID',
        updateOn: 'blur',
        defaultI18nValue: '学号',
    })
    stuID: FormControl;

    @NgFormControl({
        id: 'name',
        name: "{{name_0f343710_2cpc}}",
        binding: 'name',
        updateOn: 'blur',
        defaultI18nValue: '姓名',
    })
    name: FormControl;

    @NgFormControl({
        id: 'gender',
        name: "{{gender_0d948cbf_enne}}",
        binding: 'gender',
        updateOn: 'change',
        defaultI18nValue: '性别',
    })
    gender: FormControl;

}