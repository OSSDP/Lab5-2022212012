
import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';
import { BasePathService } from '@farris/rtf';
export function createTranslateLoader(http: HttpClient,version:string) {
  let versionSuffix = "";
  if (version) {
    versionSuffix = "?v=" + version;
  }
  return new TranslateHttpLoader(http, BasePathService.convertPath('/apps/studentsystem/basicdata/web/bo-student-front/studentlist/i18n/'), '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"root-component":"","root-layout":"","query-scheme-section":"","Section/query-scheme-section/mainTitle":"主标题","Section/query-scheme-section/subTitle":"","query-scheme-1":"默认筛选方案","QueryScheme/query-scheme-1/filterText":"筛选","QueryScheme/query-scheme-1/f33c54bb-a7a0-4955-ba1b-416596150616":"学号","QueryScheme/query-scheme-1/f33c54bb-a7a0-4955-ba1b-416596150616/placeHolder":"","QueryScheme/query-scheme-1/0f343710-1600-4d5c-a34c-f8bcf813fe4f":"姓名","QueryScheme/query-scheme-1/0f343710-1600-4d5c-a34c-f8bcf813fe4f/placeHolder":"","QueryScheme/query-scheme-1/0d948cbf-8228-4035-9561-58540494b564":"性别","QueryScheme/query-scheme-1/0d948cbf-8228-4035-9561-58540494b564/placeHolder":"","QueryScheme/query-scheme-1/0d948cbf-8228-4035-9561-58540494b564/control/enumValues/man":"男","QueryScheme/query-scheme-1/0d948cbf-8228-4035-9561-58540494b564/control/enumValues/woman":"女","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","title":"学生列表","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-view":"查看","button-delete":"删除","page-main":"","data-grid-component-ref":"","data-grid-component":"","data-grid-section":"","Section/data-grid-section/mainTitle":"","Section/data-grid-section/subTitle":"","dataGrid":"","DataGrid/dataGrid/lineNumberTitle":"","DataGrid/dataGrid/OperateEditButton":"编辑","DataGrid/dataGrid/OperateDeleteButton":"删除","DataGrid/dataGrid/OperateColumn":"操作","stuID_f33c54bb_werk":"学号","name_0f343710_2cpc":"姓名","gender_0d948cbf_enne":"性别","GridField/gender_0d948cbf_enne/enumData/man":"男","GridField/gender_0d948cbf_enne/enumData/woman":"女"}};

@Pipe({ name: 'lang' })
export class LangPipe implements PipeTransform {
  constructor(private translate: TranslateService, private http: HttpClient) { }
  transform(key: string, langCode: string, defaultValue?: string) {
      
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }
}
@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    if (!url) {
      url = "";
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Injectable()
export class LangService {
  constructor(private translate: TranslateService) { }
  transform(key: string, langCode: string, defaultValue?: string) {
    
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }

}

@Injectable()
export class TranslateResolveService implements Resolve<any>{

  constructor(private translate: TranslateService, private http: HttpClient) {
    translate.defaultLang = 'zh-CHS';
    translate.setTranslation('zh-CHS', lang['zh-CHS']);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let langCode = localStorage.getItem('languageCode');
    if (!langCode) {
      langCode = "zh-CHS";
    }
    if (langCode == "zh-CHS" || (this.translate.defaultLang === langCode && this.translate.currentLoader == createTranslateLoader(this.http,null))) {
      this.translate.setTranslation('zh-CHS', lang['zh-CHS']);
      return of(this.translate[langCode]);
    } else {
      const httpOb = this.http.get(BasePathService.getBasePath() + "/apps/studentsystem/basicdata/web/bo-student-front/version.json?v=" + new Date().getTime()).pipe(switchMap((data)=>{
        let currentVersion = null;
        if (data instanceof Array) {
          const versionKey = "studentlist/" + langCode + ".json";
          data.forEach((item) => {
            if (item.category == "i18n" && item.key == versionKey) {
              currentVersion = item.value;
            }
          });
        }

        this.translate.defaultLang = langCode;
        this.translate.currentLang = langCode;
        this.translate.currentLoader = createTranslateLoader(this.http, currentVersion);

    let tran = this.translate.getTranslation(langCode).pipe(catchError(err => {
      console.error("read resource file failed,please check!!! "+ err);
      return of(err);
    }));
    return tran;
      }));
      return httpOb;
    }
  }
}
