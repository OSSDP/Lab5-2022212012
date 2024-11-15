
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Course",
    nodeCode: "courses"
})
export class CourseEntity extends Entity {

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
        originalDataField: 'CID',
        dataField: 'cid',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'CID',

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
    cid: string;

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
        originalDataField: 'Sort',
        dataField: 'sort',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'basic',
        path: 'Sort',
    })
    sort: any;

    @NgField({
        originalDataField: 'Hour',
        dataField: 'hour',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'Hour',
    })
    hour: any;

    @NgField({
        originalDataField: 'Teacher',
        dataField: 'teacher',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Teacher',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    teacher: string;

}