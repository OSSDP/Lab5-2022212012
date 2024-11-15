import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var DataGridComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponentViewmodel, _super);
    function DataGridComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {
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
                        "resourceId": "cid_1b390991_vcw5",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "cid_1b390991_vcw5",
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
                            "path": "cid",
                            "fullPath": "CID",
                            "isExpression": false,
                            "value": "cid"
                        },
                        "dataField": "cid",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "课程编号",
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
                        "resourceId": "name_40c471b0_k303",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "name_40c471b0_k303",
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
                        "caption": "课程名称",
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
                        "resourceId": "sort_cf562a4b_vch3",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "sort_cf562a4b_vch3",
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
                            "path": "sort",
                            "fullPath": "Sort",
                            "isExpression": false,
                            "value": "sort"
                        },
                        "dataField": "sort",
                        "dataType": "enum",
                        "multiLanguage": false,
                        "caption": "课程类型",
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "enumData": [
                            {
                                "disabled": false,
                                "name": "基础课",
                                "value": "basic"
                            },
                            {
                                "disabled": false,
                                "name": "核心课",
                                "value": "central"
                            },
                            {
                                "disabled": false,
                                "name": "选修课",
                                "value": "selected"
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
                        "resourceId": "hour_9b190013_bya0",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "hour_9b190013_bya0",
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
                            "path": "hour",
                            "fullPath": "Hour",
                            "isExpression": false,
                            "value": "hour"
                        },
                        "dataField": "hour",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "学时",
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
                            "type": "number",
                            "precision": 0,
                            "thousand": ",",
                            "decimal": "."
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "teacher_b6068cf6_yrx0",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "teacher_b6068cf6_yrx0",
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
                            "path": "teacher",
                            "fullPath": "Teacher",
                            "isExpression": false,
                            "value": "teacher"
                        },
                        "dataField": "teacher",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "授课教师",
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
        return _this;
    }
    DataGridComponentViewmodel.prototype.ChangePage1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'ChangePage1',
            params: {
                loadCommandName: 'Filter1',
                loadCommandFrameId: '#{root-component}'
            },
            paramDescriptions: {
                loadCommandName: { type: 'string' },
                loadCommandFrameId: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "ChangePage1", null);
    DataGridComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], DataGridComponentViewmodel);
    return DataGridComponentViewmodel;
}(ViewModel));
export { DataGridComponentViewmodel };
