
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { StudentEntity } from './studententity';

@NgEntity({
    originalCode: "Classes",
    nodeCode: "classess"
})
export class ClassesEntity extends Entity {

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
        originalDataField: 'Name',
        dataField: 'name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    name: string;

    @NgField({
        originalDataField: 'classTcher',
        dataField: 'classTcher',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'classTcher',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    classTcher: string;

    @NgList({
        dataField: 'students',
        originalDataField: '',
        type: StudentEntity

    })

    students: EntityList<StudentEntity>;
}