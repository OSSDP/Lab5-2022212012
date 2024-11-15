
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class StudentComponentViewmodel extends ViewModel {
    public bindingPath = '/students';
    // farrisDataGrid列集合定义 在对应component中赋值
    public dataGrid_studentColumns:any;
    // datGrid 列集合名称 用以bindData使用
    public dataGridColumnsName:string;

    public dom = {
  "dataGrid_student": {
    "type": "DataGrid",
    "resourceId": "dataGrid_student",
    "visible": {
      "useQuote": false,
      "isExpression": false,
      "value": true
    },
    "id": "dataGrid_student",
    "size": {},
    "readonly": {
      "useQuote": false,
      "isExpression": false,
      "value": false
    },
    "fields": [
      {
        "type": "GridField",
        "resourceId": "student_Student_StuID_1f6f0446_ez3t",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "student_Student_StuID_1f6f0446_ez3t",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "student_Student_StuID",
          "fullPath": "Student.Student_StuID",
          "isExpression": false,
          "value": "student_Student_StuID"
        },
        "dataField": "student.student_StuID",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "学号",
        "editor": {
          "type": "LookupEdit",
          "isTextArea": true,
          "resourceId": "student_Student_StuID_1f6f0446_pr3u",
          "defaultI18nValue": "学号",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "student_Student_StuID_1f6f0446_pr3u",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "student_Student_StuID",
            "fullPath": "Student.Student_StuID",
            "isExpression": false,
            "value": "student_Student_StuID"
          },
          "disable": false,
          "dataSource": {
            "uri": "Student.student_Student_StuID",
            "displayName": "展示学生列表",
            "idField": "stuID",
            "type": "ViewObject",
            "helpCode": "listStudent"
          },
          "valueField": "stuID",
          "textField": "name",
          "multiSelect": false,
          "pageSize": 20,
          "mapFields": {
            "stuID": "student.student_StuID",
            "name": "student.student_Name"
          },
          "displayType": "List",
          "enableExtendLoadMethod": true,
          "editable": false,
          "noSearch": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "useTip": false,
          "useFavorite": true,
          "enableToSelect": true,
          "isRecordSize": false,
          "expandLevel": -1,
          "enableFullTree": false,
          "context": {
            "enableExtendLoadMethod": true
          },
          "loadTreeDataType": "default",
          "enableClear": true,
          "enableCascade": false
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "student_Student_Name_7ba2c5c2_y7wg",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "student_Student_Name_7ba2c5c2_y7wg",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "student_Student_Name",
          "fullPath": "Student.Student_Name",
          "isExpression": false,
          "value": "student_Student_Name"
        },
        "dataField": "student.student_Name",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "姓名",
        "editor": {
          "type": "TextBox",
          "isTextArea": true,
          "resourceId": "student_Student_Name_7ba2c5c2_6bax",
          "defaultI18nValue": "姓名",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "student_Student_Name_7ba2c5c2_6bax",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "student_Student_Name",
            "isExpression": false,
            "value": "student_Student_Name"
          },
          "disable": false,
          "maxLength": 36,
          "isPassword": false,
          "enableViewPassword": false
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "formatter": {
          "type": "none"
        }
      }
    ],
    "multiSelect": false,
    "editable": "viewModel.stateMachine['editable']",
    "showLineNumber": false,
    "lineNumberTitle": "#",
    "groupTotalText": "Total",
    "filterable": false,
    "groupable": false,
    "rowClass": ""
  }
};
    @NgCommand({
        name: 'studentAddItem1',
        params: {
        }
    })
    public studentAddItem1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'studentRemoveItem1',
        params: {
            id: '{DATA~/#{student-component}/students/id}'
        },
        paramDescriptions: {
            id: { type: 'string' }
        }
    })
    public studentRemoveItem1(commandParam?: any): Observable<any> { return; }

}