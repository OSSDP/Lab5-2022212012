import * as tslib_1 from "tslib";
import { Pipe, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { of } from 'rxjs';
import { catchError, switchMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { BasePathService } from '@farris/rtf';
export function createTranslateLoader(http, version) {
    var versionSuffix = "";
    if (version) {
        versionSuffix = "?v=" + version;
    }
    return new TranslateHttpLoader(http, BasePathService.convertPath('/apps/studentsystem/basicdata/web/bo-teacher-front/teacherlist/i18n/'), '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "root-component": "", "root-layout": "", "query-scheme-section": "", "Section/query-scheme-section/mainTitle": "主标题", "Section/query-scheme-section/subTitle": "", "query-scheme-1": "默认筛选方案", "QueryScheme/query-scheme-1/filterText": "筛选", "QueryScheme/query-scheme-1/57d810a3-ceec-4ae3-92e2-6f6049a7506c": "工号", "QueryScheme/query-scheme-1/57d810a3-ceec-4ae3-92e2-6f6049a7506c/placeHolder": "", "QueryScheme/query-scheme-1/605611af-70c9-4efd-a948-696c3a907a57": "姓名", "QueryScheme/query-scheme-1/605611af-70c9-4efd-a948-696c3a907a57/placeHolder": "", "QueryScheme/query-scheme-1/e200f3b4-3eb9-4d60-8820-9d0264a844f3": "性别", "QueryScheme/query-scheme-1/e200f3b4-3eb9-4d60-8820-9d0264a844f3/placeHolder": "", "QueryScheme/query-scheme-1/e200f3b4-3eb9-4d60-8820-9d0264a844f3/control/enumValues/man": "男", "QueryScheme/query-scheme-1/e200f3b4-3eb9-4d60-8820-9d0264a844f3/control/enumValues/woman": "女", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "教师列表", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-view": "查看", "button-delete": "删除", "page-main": "", "data-grid-component-ref": "", "data-grid-component": "", "data-grid-section": "", "Section/data-grid-section/mainTitle": "", "Section/data-grid-section/subTitle": "", "dataGrid": "", "DataGrid/dataGrid/lineNumberTitle": "", "DataGrid/dataGrid/OperateEditButton": "编辑", "DataGrid/dataGrid/OperateDeleteButton": "删除", "DataGrid/dataGrid/OperateColumn": "操作", "tid_57d810a3_p081": "工号", "name_605611af_jxcb": "姓名", "gender_e200f3b4_m7z7": "性别", "GridField/gender_e200f3b4_m7z7/enumData/man": "男", "GridField/gender_e200f3b4_m7z7/enumData/woman": "女", "tel_PhoneNumber_2b262162_6x3j": "联系方式" } };
var LangPipe = /** @class */ (function () {
    function LangPipe(translate, http) {
        this.translate = translate;
        this.http = http;
    }
    LangPipe.prototype.transform = function (key, langCode, defaultValue) {
        var translateValue = this.translate.instant(key);
        if (translateValue == "JitI18nDefaultValue") {
            return defaultValue ? defaultValue : "";
        }
        return translateValue;
    };
    LangPipe = tslib_1.__decorate([
        Pipe({ name: 'lang' }),
        tslib_1.__metadata("design:paramtypes", [TranslateService, HttpClient])
    ], LangPipe);
    return LangPipe;
}());
export { LangPipe };
var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (url) {
        if (!url) {
            url = "";
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeHtmlPipe = tslib_1.__decorate([
        Pipe({ name: 'safeHtml' }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());
export { SafeHtmlPipe };
var LangService = /** @class */ (function () {
    function LangService(translate) {
        this.translate = translate;
    }
    LangService.prototype.transform = function (key, langCode, defaultValue) {
        var translateValue = this.translate.instant(key);
        if (translateValue == "JitI18nDefaultValue") {
            return defaultValue ? defaultValue : "";
        }
        return translateValue;
    };
    LangService.prototype.getCurrentLanguage = function () {
        return this.translate.currentLang;
    };
    LangService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService])
    ], LangService);
    return LangService;
}());
export { LangService };
var TranslateResolveService = /** @class */ (function () {
    function TranslateResolveService(translate, http) {
        this.translate = translate;
        this.http = http;
        translate.defaultLang = 'zh-CHS';
        translate.setTranslation('zh-CHS', lang['zh-CHS']);
    }
    TranslateResolveService.prototype.resolve = function (route, state) {
        var _this = this;
        var langCode = localStorage.getItem('languageCode');
        if (!langCode) {
            langCode = "zh-CHS";
        }
        if (langCode == "zh-CHS" || (this.translate.defaultLang === langCode && this.translate.currentLoader == createTranslateLoader(this.http, null))) {
            this.translate.setTranslation('zh-CHS', lang['zh-CHS']);
            return of(this.translate[langCode]);
        }
        else {
            var httpOb = this.http.get(BasePathService.getBasePath() + "/apps/studentsystem/basicdata/web/bo-teacher-front/version.json?v=" + new Date().getTime()).pipe(switchMap(function (data) {
                var currentVersion = null;
                if (data instanceof Array) {
                    var versionKey_1 = "teacherlist/" + langCode + ".json";
                    data.forEach(function (item) {
                        if (item.category == "i18n" && item.key == versionKey_1) {
                            currentVersion = item.value;
                        }
                    });
                }
                _this.translate.defaultLang = langCode;
                _this.translate.currentLang = langCode;
                _this.translate.currentLoader = createTranslateLoader(_this.http, currentVersion);
                var tran = _this.translate.getTranslation(langCode).pipe(catchError(function (err) {
                    console.error("read resource file failed,please check!!! " + err);
                    return of(err);
                }));
                return tran;
            }));
            return httpOb;
        }
    };
    TranslateResolveService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService, HttpClient])
    ], TranslateResolveService);
    return TranslateResolveService;
}());
export { TranslateResolveService };
