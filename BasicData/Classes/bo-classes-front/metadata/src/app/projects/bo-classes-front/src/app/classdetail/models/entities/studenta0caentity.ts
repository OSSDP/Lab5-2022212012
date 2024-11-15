
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Student",
    nodeCode: "student"
})
export class StudentA0cAEntity extends Entity {

    @NgField({
        originalDataField: 'Student',
        dataField: 'student',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Student.Student',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    student: string;

    @NgField({
        originalDataField: 'StuID',
        dataField: 'student_StuID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Student.Student_StuID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    student_StuID: string;

    @NgField({
        originalDataField: 'Name',
        dataField: 'student_Name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Student.Student_Name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    student_Name: string;

}