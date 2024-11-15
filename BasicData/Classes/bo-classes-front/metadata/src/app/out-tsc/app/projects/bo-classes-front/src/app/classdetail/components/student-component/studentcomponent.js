import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild, HostBinding, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, BindingData, Repository, UIState, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusInvalidService } from '@farris/command-services';
import { EditorTypes } from '@farris/ui-datagrid-editors';
import { DatagridComponent, GRID_SETTINGS_HTTP } from '@farris/ui-datagrid';
import { CommonUtils } from '@farris/ui-common';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { StudentComponentViewmodel } from '../../viewmodels/studentcomponentviewmodel';
import { ClassesRepository } from '../../models/classesrepository';
import { LangService } from '../../lang/lang-pipe';
import { StudentComponentViewmodelForm } from '../../viewmodels/form/studentcomponentviewmodelform';
import { StudentComponentViewmodelUIState } from '../../viewmodels/uistate/studentcomponentviewmodeluistate';
import { studentAddItem1Handler } from '../../viewmodels/handlers/studentadditem1handler';
import { studentRemoveItem1Handler } from '../../viewmodels/handlers/studentremoveitem1handler';
var StudentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StudentComponent, _super);
    function StudentComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
        var _this = _super.call(this, injector) || this;
        _this.wizardSer = wizardSer;
        _this.keybindingService = keybindingService;
        _this.langService = langService;
        _this.route = route;
        _this.router = router;
        _this.rootElement = rootElement;
        _this.localizationService = localizationService;
        _this.frmI18nSettingService = frmI18nSettingService;
        _this.focusInvalidService = focusInvalidService;
        _this.farrisGridUtils = farrisGridUtils;
        _this.sanitizer = sanitizer;
        _this.injector = injector;
        _this.dataGrid_studentColumns = [];
        _this.cls = 'f-struct-is-subgrid ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.dataGrid_studentlineNumberTitle = _this.langService.transform("DataGrid/dataGrid_student/lineNumberTitle", _this.lang, "");
        _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
            _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGrid_studentDataGrid);
        });
        if (_this.frmI18nSettingService) {
            var i18nSetting = _this.frmI18nSettingService.getSetting();
            if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                i18nSetting.languages.forEach(function (item) {
                    _this.enabledLanguageList.push({
                        code: item.code,
                        name: item.name
                    });
                });
            }
            else {
                console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                _this.enabledLanguageList.push({ "code": "en", "name": "English" });
                _this.enabledLanguageList.push({ "code": "zh-CHS", "name": "中文简体" });
            }
        }
        return _this;
    }
    StudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.dataGrid_studentColumns = [
            [
                {
                    id: 'student_Student_StuID_1f6f0446_ez3t',
                    field: 'student.student_StuID',
                    width: 120,
                    title: this.langService.transform("student_Student_StuID_1f6f0446_ez3t", this.lang, "学号"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.LOOKUP,
                        options: {
                            "type": 'EditorTypes.LOOKUP',
                            "uri": 'Student.student_Student_StuID',
                            "readonly": false,
                            "idField": 'stuID',
                            "singleSelect": true,
                            "textField": 'name',
                            "valueField": 'stuID',
                            "pagination": null,
                            "pageSize": 20,
                            "pageIndex": null,
                            "displayType": 'List',
                            "mapFields": { 'stuID': 'student.student_StuID', 'name': 'student.student_Name' },
                            "expandLevel": -1,
                            "showNavigation": true,
                            "cascadeStatus": 'enable',
                            "multipleChoiceSeparator": ",",
                            "useNewLayout": false,
                            "enableMultiFieldSearch": false,
                            "navTreeToList": false,
                            "treeToList": false,
                            "editable": false,
                            "enableCascade": false,
                            "showSelected": false,
                            "quickSelect": {
                                "enable": false,
                                "showItemsCount": 10,
                                "showMore": true
                            },
                            "useFavorite": true,
                            "enableFullTree": false,
                            "enableClear": true,
                            "loadTreeDataType": 'default',
                            "useTip": false,
                            "selectFirstInNav": false,
                            "loadDataWhenOpen": true,
                            "title": this.langService.transform("GridField/student_Student_StuID_1f6f0446_ez3t/editor/LookupEdit/student_Student_StuID_1f6f0446_pr3u/dialogTitle", this.lang, ""),
                            "nosearch": false,
                            "context": {
                                "enableExtendLoadMethod": true
                            },
                            "isRecordSize": false,
                            "viewType": 'text'
                        }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'student_Student_Name_7ba2c5c2_y7wg',
                    field: 'student.student_Name',
                    width: 120,
                    title: this.langService.transform("student_Student_Name_7ba2c5c2_y7wg", this.lang, "姓名"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "student_Student_Name_7ba2c5c2_6bax", "title": "姓名", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                }
            ]
        ];
        this.viewModel.dataGrid_studentColumns = this.dataGrid_studentColumns;
        this.viewModel.dataGridColumnsName = "dataGrid_studentColumns";
        this.onFormLoad();
    };
    StudentComponent.prototype.ngAfterViewInit = function () {
    };
    StudentComponent.prototype.ngOnDestroy = function () {
        // 增加表单的自我销毁
        this.context.dispose && this.context.dispose();
        this.context = null;
        this.subscription = null;
        this.declaration = null;
        this.wizardSer = null;
        this.keybindingService = null;
        this.langService = null;
        this.route = null;
        this.router = null;
        this.rootElement = null;
        this.localizationService = null;
        this.frmI18nSettingService = null;
        this.focusInvalidService = null;
        this.farrisGridUtils = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];
    };
    StudentComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    StudentComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        ViewChild('dataGrid_studentDataGrid'),
        tslib_1.__metadata("design:type", DatagridComponent)
    ], StudentComponent.prototype, "dataGrid_studentDataGrid", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], StudentComponent.prototype, "cls", void 0);
    StudentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-studentcomponent',
            templateUrl: './studentcomponent.html',
            styleUrls: ['./studentcomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'student-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: ClassesRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                { provide: Form, useClass: StudentComponentViewmodelForm },
                { provide: UIState, useClass: StudentComponentViewmodelUIState },
                { provide: ViewModel, useClass: StudentComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: studentAddItem1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: studentRemoveItem1Handler, multi: true },
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [WizardService,
            KeybindingService,
            LangService,
            ActivatedRoute,
            Router,
            ElementRef,
            LocalizationService,
            FrmI18nSettingService,
            FocusInvalidService,
            CommonUtils,
            DomSanitizer,
            Injector])
    ], StudentComponent);
    return StudentComponent;
}(FrameComponent));
export { StudentComponent };
