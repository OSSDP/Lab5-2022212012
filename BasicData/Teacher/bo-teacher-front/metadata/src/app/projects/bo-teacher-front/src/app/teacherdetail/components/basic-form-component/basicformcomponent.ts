
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

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { BasicFormViewmodel } from '../../viewmodels/basicformviewmodel';
import { TeacherRepository } from '../../models/teacherrepository';
import { LangService } from '../../lang/lang-pipe';

import { BasicFormViewmodelForm } from '../../viewmodels/form/basicformviewmodelform';
import { BasicFormViewmodelUIState } from '../../viewmodels/uistate/basicformviewmodeluistate';

@Component({
    selector: 'app-basicformcomponent',
    templateUrl: './basicformcomponent.html',
    styleUrls: ['./basicformcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'basic-form-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: TeacherRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },        
    
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: BasicFormViewmodelForm },
        { provide: UIState, useClass: BasicFormViewmodelUIState },
        { provide: ViewModel, useClass: BasicFormViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
        ]
})
export class BasicFormComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {

    @HostBinding('class')
    cls = 'f-struct-wrapper ';
    public viewModel: BasicFormViewmodel;
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
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        this.viewModel.verifycationChanged.subscribe((verifyInformations: any) => {
            this.focusInvalidService.focusInvalidInput(verifyInformations, this.rootElement);
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
    SectionbasicformsectionMainTitle = this.langService.transform("Section/basic-form-section/mainTitle", this.lang, "基本信息");
    SectionbasicformsectionSubTitle = this.langService.transform("Section/basic-form-section/subTitle", this.lang, "");
    gender_645728d5_3ap6EnumData = [
        {
            "name": this.langService.transform("EnumField/gender_645728d5_3ap6/enumData/man", this.lang, "男"),
            "value": "man",
            "disabled": false
        },
        {
            "name": this.langService.transform("EnumField/gender_645728d5_3ap6/enumData/woman", this.lang, "女"),
            "value": "woman",
            "disabled": false
        }
    ];
    gender_645728d5_3ap6_PlaceHolder = this.langService.transform("EnumField/gender_645728d5_3ap6/placeHolder", this.lang, "");
    tid_59ed851c_63mb_PlaceHolder = this.langService.transform("TextBox/tid_59ed851c_63mb/placeHolder", this.lang, "");
    name_eea2c83e_lenv_PlaceHolder = this.langService.transform("TextBox/name_eea2c83e_lenv/placeHolder", this.lang, "");
    tel_PhoneNumber_25d84e04_0iuz_PlaceHolder = this.langService.transform("TextBox/tel_PhoneNumber_25d84e04_0iuz/placeHolder", this.lang, "");
}