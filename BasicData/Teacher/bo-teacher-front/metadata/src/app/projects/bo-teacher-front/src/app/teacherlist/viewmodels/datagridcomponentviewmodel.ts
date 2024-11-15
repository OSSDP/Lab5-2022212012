
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class DataGridComponentViewmodel extends ViewModel {
    public bindingPath = '/';
    // farrisDataGrid列集合定义 在对应component中赋值
    public dataGridColumns:any;
    // datGrid 列集合名称 用以bindData使用
    public dataGridColumnsName:string;

    public dom = {
  "dataGrid": {
    "type": "DataGrid",
    "resourceId": "dataGrid",
    "visible": {
      "useQuote": false,
      "isExpression": false,
      "value": true
    },
    "id": "dataGrid",
    "size": {},
    "readonly": {
      "useQuote": false,
      "isExpression": false,
      "value": false
    },
    "fields": [
      {
        "type": "GridField",
        "resourceId": "tid_57d810a3_p081",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "tid_57d810a3_p081",
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
          "path": "tid",
          "fullPath": "TID",
          "isExpression": false,
          "value": "tid"
        },
        "dataField": "tid",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "工号",
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
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "name_605611af_jxcb",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "name_605611af_jxcb",
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
          "path": "name",
          "fullPath": "Name",
          "isExpression": false,
          "value": "name"
        },
        "dataField": "name",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "姓名",
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
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "gender_e200f3b4_m7z7",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "gender_e200f3b4_m7z7",
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
          "path": "gender",
          "fullPath": "Gender",
          "isExpression": false,
          "value": "gender"
        },
        "dataField": "gender",
        "dataType": "enum",
        "multiLanguage": false,
        "caption": "性别",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "enumData": [
          {
            "disabled": false,
            "name": "男",
            "value": "man"
          },
          {
            "disabled": false,
            "name": "女",
            "value": "woman"
          }
        ],
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
        "updateOn": "change",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "tel_PhoneNumber_2b262162_6x3j",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "tel_PhoneNumber_2b262162_6x3j",
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
          "path": "tel_PhoneNumber",
          "fullPath": "Tel.PhoneNumber",
          "isExpression": false,
          "value": "tel_PhoneNumber"
        },
        "dataField": "tel.phoneNumber",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "联系方式",
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
    "showLineNumber": false,
    "lineNumberTitle": "#",
    "groupTotalText": "Total",
    "filterable": false,
    "groupable": false,
    "rowClass": ""
  }
};
    @NgCommand({
        name: 'ChangePage1',
        params: {
            loadCommandName: 'Filter1',
            loadCommandFrameId: '#{root-component}'
        },
        paramDescriptions: {
            loadCommandName: { type: 'string' },
            loadCommandFrameId: { type: 'string' }
        }
    })
    public ChangePage1(commandParam?: any): Observable<any> { return; }

}