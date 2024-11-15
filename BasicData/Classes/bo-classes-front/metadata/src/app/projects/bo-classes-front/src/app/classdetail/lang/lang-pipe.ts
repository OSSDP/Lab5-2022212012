
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
  return new TranslateHttpLoader(http, BasePathService.convertPath('/apps/studentsystem/basicdata/web/bo-classes-front/classdetail/i18n/'), '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"root-component":"","root-layout":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","title":"班级信息","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-save":"保存","button-cancel":"取消","main-container":"","like-card-container":"","basic-form-component-ref":"","detail-container":"","detail-section":"","Section/detail-section/mainTitle":"","Section/detail-section/subTitle":"","detail-tab":"","student-tab-page":"学生","student-component-ref":"","student-tab-toolbar":"","studentAddButton":"新增","studentRemoveButton":"删除","basic-form-component":"","basic-form-section":"","Section/basic-form-section/mainTitle":"基本信息","Section/basic-form-section/subTitle":"","basic-form-layout":"","name_97531977_j5o1":"班级名称","TextBox/name_97531977_j5o1/placeHolder":"","classTcher_57706799_m5dz":"班主任","LookupEdit/classTcher_57706799_m5dz/placeHolder":"","LookupEdit/classTcher_57706799_m5dz/dialogTitle":"","student-component":"","student-component-layout":"","dataGrid_student":"","DataGrid/dataGrid_student/lineNumberTitle":"","DataGrid/dataGrid_student/OperateEditButton":"编辑","DataGrid/dataGrid_student/OperateDeleteButton":"删除","DataGrid/dataGrid_student/OperateColumn":"操作","student_Student_StuID_1f6f0446_ez3t":"学号","GridField/student_Student_StuID_1f6f0446_ez3t/editor/student_Student_StuID_1f6f0446_pr3u":"学号","GridField/student_Student_StuID_1f6f0446_ez3t/editor/LookupEdit/student_Student_StuID_1f6f0446_pr3u/placeHolder":"","GridField/student_Student_StuID_1f6f0446_ez3t/editor/LookupEdit/student_Student_StuID_1f6f0446_pr3u/dialogTitle":"","student_Student_Name_7ba2c5c2_y7wg":"姓名","GridField/student_Student_Name_7ba2c5c2_y7wg/editor/student_Student_Name_7ba2c5c2_6bax":"姓名","GridField/student_Student_Name_7ba2c5c2_y7wg/editor/TextBox/student_Student_Name_7ba2c5c2_6bax/placeHolder":""}};

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
      const httpOb = this.http.get(BasePathService.getBasePath() + "/apps/studentsystem/basicdata/web/bo-classes-front/version.json?v=" + new Date().getTime()).pipe(switchMap((data)=>{
        let currentVersion = null;
        if (data instanceof Array) {
          const versionKey = "classdetail/" + langCode + ".json";
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
