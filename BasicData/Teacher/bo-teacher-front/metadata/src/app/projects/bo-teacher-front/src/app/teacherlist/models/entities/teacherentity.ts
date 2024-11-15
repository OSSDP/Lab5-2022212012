
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { PhoneNumber2b26Entity } from './phonenumber2b26entity';

@NgEntity({
    originalCode: "Teacher",
    nodeCode: "teachers"
})
export class TeacherEntity extends Entity {

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
        originalDataField: 'TID',
        dataField: 'tid',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'TID',

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
    tid: string;

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
        type: PhoneNumber2b26Entity
    })
    tel: PhoneNumber2b26Entity;
}