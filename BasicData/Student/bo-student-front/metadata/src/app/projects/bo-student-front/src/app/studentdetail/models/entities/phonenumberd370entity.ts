
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Tel",
    nodeCode: "tel"
})
export class PhoneNumberD370Entity extends Entity {

    @NgField({
        originalDataField: 'PhoneNumber',
        dataField: 'phoneNumber',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Tel.PhoneNumber',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    phoneNumber: string;

}