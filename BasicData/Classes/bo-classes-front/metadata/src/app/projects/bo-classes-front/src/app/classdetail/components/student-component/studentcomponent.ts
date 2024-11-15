
import { Component, OnInit, Injector, AfterViewInit, OnDestroy, ViewChild, HostBinding, TemplateRef, ElementRef, ViewContainerRef, NgModuleFactory, Input, ComponentRef} from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Form, FrameEvent, FrameEventBus, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, StateMachine, BindingData, Repository, UIState, NgSubscription, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { WEBAPI_PREFIX_TOKEN } from '@farris/ui-common';

import { FocusInvalidService } from '@farris/command-services';

import { EditorTypes } from '@farris/ui-datagrid-editors';
import { CalculationType, DatagridComponent, GRID_SETTINGS_HTTP } from '@farris/ui-datagrid';
import { CommonUtils } from '@farris/ui-common';

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { StudentComponentViewmodel } from '../../viewmodels/studentcomponentviewmodel';
import { ClassesRepository } from '../../models/classesrepository';
import { LangService } from '../../lang/lang-pipe';

import { StudentComponentViewmodelForm } from '../../viewmodels/form/studentcomponentviewmodelform';
import { StudentComponentViewmodelUIState } from '../../viewmodels/uistate/studentcomponentviewmodeluistate';
import { studentAddItem1Handler } from '../../viewmodels/handlers/studentadditem1handler';
import { studentRemoveItem1Handler } from '../../viewmodels/handlers/studentremoveitem1handler';

@Component({
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
})
export class StudentComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('dataGrid_studentDataGrid')
    dataGrid_studentDataGrid: DatagridComponent;
    dataGrid_studentColumns =[];

    @HostBinding('class')
    cls = 'f-struct-is-subgrid ';
    public viewModel: StudentComponentViewmodel;
    lang: string ="";
    size: any = {};
    enabledLanguageList: any[] = [];
    constructor(
        private wizardSer: WizardService,
        private keybindingService: KeybindingService,
        private langService: LangService,
        private route: ActivatedRoute,
        private router: Router,
        private rootElement: ElementRef,
        private localizationService: LocalizationService,
        private frmI18nSettingService: FrmI18nSettingService,
        private focusInvalidService: FocusInvalidService,
        private farrisGridUtils: CommonUtils,
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        this.viewModel.verifycationChanged.subscribe((verifyInformations: any) => {
            this.focusInvalidService.focusGridCell(verifyInformations, this.dataGrid_studentDataGrid);
        });

        if (this.frmI18nSettingService) {
            const i18nSetting = this.frmI18nSettingService.getSetting();
            if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                i18nSetting.languages.forEach((item) => {
                    this.enabledLanguageList.push({
                        code: item.code,
                        name: item.name
                    });
                });
            } else {
                console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                this.enabledLanguageList.push({ "code": "en", "name": "English" });
                this.enabledLanguageList.push({ "code": "zh-CHS", "name": "中文简体" });
            }
        }
    }
    ngOnInit() {
            
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach((keyBinding, method) => {
                this.keybindingService.register(keyBinding, () => {
                    return this.viewModel[method]();
                });
            });
        }
        this.dataGrid_studentColumns =[
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
                            "mapFields": {'stuID':'student.student_StuID','name':'student.student_Name'},
                            "expandLevel":-1,
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
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
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
                        options: {"id":"student_Student_Name_7ba2c5c2_6bax","title":"姓名","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTBOX","isPassword":false,"maxLength":36}
                    },
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                }
            ]
        ]; 
        this.viewModel.dataGrid_studentColumns= this.dataGrid_studentColumns;
        this.viewModel.dataGridColumnsName= "dataGrid_studentColumns";
        this.onFormLoad(); 
    }

    ngAfterViewInit(): void {
    }

    ngOnDestroy(): void {
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

    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
    } 
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    dataGrid_studentlineNumberTitle = this.langService.transform("DataGrid/dataGrid_student/lineNumberTitle", this.lang, "");
}