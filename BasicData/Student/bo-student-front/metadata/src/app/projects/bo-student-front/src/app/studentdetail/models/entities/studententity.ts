
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { PhoneNumberD370Entity } from './phonenumberd370entity';

@NgEntity({
    originalCode: "Student",
    nodeCode: "students"
})
export class StudentEntity extends Entity {

    @NgField({
        originalDataField: 'ID',
        dataField: 'id',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ID',

        validRules: [
            {
                type: 'required',
                constraints: [true],
            },
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    id: string;

    @NgField({
        originalDataField: 'Version',
        dataField: 'version',
        originalDataFieldType: 'DateTime',
        initValue: '0001-01-01T00:00:00',
        path: 'Version',
        enableTimeZone: true,
    })
    version: string;

    @NgField({
        originalDataField: 'StuID',
        dataField: 'stuID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'StuID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    stuID: string;

    @NgField({
        originalDataField: 'Name',
        dataField: 'name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Name',

        validRules: [
            {
                type: 'required',
                constraints: [true],
            },
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    name: string;

    @NgField({
        originalDataField: 'Gender',
        dataField: 'gender',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'man',
        path: 'Gender',
    })
    gender: any;

    @NgObject({
        dataField: 'tel',
        originalDataField: 'Tel',
        type: PhoneNumberD370Entity
    })
    tel: PhoneNumberD370Entity;
}