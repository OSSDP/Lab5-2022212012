
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
        "resourceId": "stuID_f33c54bb_werk",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "stuID_f33c54bb_werk",
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
          "path": "stuID",
          "fullPath": "StuID",
          "isExpression": false,
          "value": "stuID"
        },
        "dataField": "stuID",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "学号",
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
        "resourceId": "name_0f343710_2cpc",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "name_0f343710_2cpc",
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
        "resourceId": "gender_0d948cbf_enne",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "gender_0d948cbf_enne",
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