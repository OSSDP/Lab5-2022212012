{
  "Header" : {
    "Code" : "StudentDetail",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.StudentSystem.BasicData.Student.Student.Front",
    "CertId" : null,
    "Name" : "学生信息",
    "FileName" : "StudentDetail.frm",
    "BizobjectID" : "8cdaade6-4237-abbf-5006-00e3aff41bfb",
    "Language" : null,
    "Extendable" : false,
    "ID" : "94332519-f7e7-43d9-9b0b-d9dd8deeb7a1",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "baf2de6c-429a-4808-9be4-44a0e05ef608",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.StudentSystem.BasicData.Student.Student.Front",
      "Code" : "StudentDetail.frm",
      "Name" : "StudentDetail.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "8cdaade6-4237-abbf-5006-00e3aff41bfb"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Contents" : {
      "module" : {
        "id" : "StudentDetail",
        "code" : "StudentDetail",
        "name" : "学生信息",
        "caption" : "学生信息",
        "type" : "Module",
        "creator" : "dev",
        "creationDate" : "2024-11-09T13:29:31.971Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "card-template",
        "templateId" : "card-template",
        "schemas" : [ {
          "eapiId" : "c8b0d557-1365-473b-bd37-992d54a2410d",
          "eapiCode" : "StudentDetail_frm",
          "eapiName" : "学生信息_frm",
          "eapiNameSpace" : "Inspur.GS.StudentSystem.BasicData.Student.Student.Front",
          "voPath" : "StudentSystem/BasicData/Student/bo-student-front/metadata/components",
          "voNameSpace" : "Inspur.GS.StudentSystem.BasicData.Student.Student.Front",
          "id" : "93b7f4bb-10ac-4449-a61e-993d5edfd579",
          "variables" : [ ],
          "sourceUri" : "api/studentsystem/basicdata/v1.0/StudentDetail_frm",
          "entities" : [ {
            "id" : "05ed0f3a-700d-4287-aa59-e5fdcff9e2bd",
            "type" : {
              "$type" : "EntityType",
              "fields" : [ {
                "$type" : "SimpleField",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "multiLanguage" : false,
                "require" : true,
                "path" : "ID",
                "bindingField" : "id",
                "bindingPath" : "id",
                "id" : "6fbbfd26-18db-45c9-81aa-400adc26fb99",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "originalId" : "6fbbfd26-18db-45c9-81aa-400adc26fb99",
                "label" : "id",
                "code" : "ID",
                "name" : "主键"
              }, {
                "$type" : "SimpleField",
                "readonly" : false,
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "defaultValue" : "",
                "multiLanguage" : false,
                "require" : false,
                "path" : "Version",
                "bindingField" : "version",
                "bindingPath" : "version",
                "id" : "ce95ee41-d3eb-4b58-860c-ea1e329cd3ae",
                "type" : {
                  "$type" : "DateTimeType",
                  "displayName" : "日期时间",
                  "name" : "DateTime"
                },
                "originalId" : "ce95ee41-d3eb-4b58-860c-ea1e329cd3ae",
                "label" : "version",
                "code" : "Version",
                "name" : "版本"
              }, {
                "$type" : "SimpleField",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "multiLanguage" : false,
                "require" : false,
                "path" : "StuID",
                "bindingField" : "stuID",
                "bindingPath" : "stuID",
                "id" : "4d7c2ff8-3d22-498c-b4a2-9f00de413882",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "originalId" : "4d7c2ff8-3d22-498c-b4a2-9f00de413882",
                "label" : "stuID",
                "code" : "StuID",
                "name" : "学号"
              }, {
                "$type" : "SimpleField",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "multiLanguage" : false,
                "require" : true,
                "path" : "Name",
                "bindingField" : "name",
                "bindingPath" : "name",
                "id" : "7c6610fd-3435-400e-88de-499a3f3a5f7a",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "originalId" : "7c6610fd-3435-400e-88de-499a3f3a5f7a",
                "label" : "name",
                "code" : "Name",
                "name" : "姓名"
              }, {
                "$type" : "SimpleField",
                "readonly" : false,
                "editor" : {
                  "$type" : "EnumField"
                },
                "defaultValue" : "",
                "multiLanguage" : false,
                "require" : false,
                "path" : "Gender",
                "bindingField" : "gender",
                "bindingPath" : "gender",
                "id" : "3b2b6667-0890-4ae8-9427-68e049da9a52",
                "type" : {
                  "$type" : "EnumType",
                  "displayName" : "枚举",
                  "valueType" : {
                    "$type" : "StringType",
                    "displayName" : "字符串",
                    "length" : 36,
                    "name" : "String"
                  },
                  "enumValues" : [ {
                    "disabled" : false,
                    "name" : "男",
                    "value" : "man"
                  }, {
                    "disabled" : false,
                    "name" : "女",
                    "value" : "woman"
                  } ],
                  "name" : "Enum"
                },
                "originalId" : "3b2b6667-0890-4ae8-9427-68e049da9a52",
                "label" : "gender",
                "code" : "Gender",
                "name" : "性别"
              }, {
                "$type" : "ComplexField",
                "path" : "Tel",
                "bindingField" : "tel",
                "bindingPath" : "tel",
                "id" : "d3709230-3bde-4271-90cf-487da8296026",
                "type" : {
                  "$type" : "ObjectType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "multiLanguage" : false,
                    "require" : false,
                    "path" : "Tel.PhoneNumber",
                    "bindingField" : "tel_PhoneNumber",
                    "bindingPath" : "tel.phoneNumber",
                    "id" : "d3709230-88d1-4769-bb7a-5490d92893fa",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "originalId" : "b0c5529f-88d1-4769-bb7a-5490d92893fa",
                    "label" : "phoneNumber",
                    "code" : "PhoneNumber",
                    "name" : "手机电话号码"
                  } ],
                  "name" : "PhoneNumberD370",
                  "displayName" : "手机电话号码"
                },
                "originalId" : "d3709230-3bde-4271-90cf-487da8296026",
                "label" : "tel",
                "code" : "Tel",
                "name" : "联系方式"
              } ],
              "primary" : "id",
              "entities" : [ ],
              "displayName" : "学生",
              "name" : "Student"
            },
            "label" : "students",
            "code" : "Student",
            "name" : "学生"
          } ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "sourceType" : "vo",
          "code" : "StudentDetail_frm",
          "name" : "学生信息_frm"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "StudentDetail_state_machine",
          "name" : "学生信息_frm",
          "uri" : "6174ee92-0c6e-40e1-bfa4-e3de13755e39",
          "code" : "StudentDetail_frm",
          "nameSpace" : "Inspur.GS.StudentSystem.BasicData.Student.Student.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "学生",
          "fields" : [ ],
          "stateMachine" : "StudentDetail_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "e05264fb-796d-43fb-b83b-9e2f3866c328",
            "code" : "Load1",
            "name" : "执行加载页面后初始方法",
            "params" : [ {
              "name" : "action",
              "shownName" : "初始方法",
              "value" : "{UISTATE~/#{root-component}/action}"
            } ],
            "handlerName" : "Load",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "246a275c-88c9-4c8a-aa82-be6a950a4325",
            "code" : "LoadAndAdd1",
            "name" : "新增一条数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Create"
            } ],
            "handlerName" : "LoadAndAdd",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "70acc053-fa15-45be-851c-cf694e1bcaf7",
            "code" : "LoadAndView1",
            "name" : "查看一条数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待查看数据的标识",
              "value" : "{UISTATE~/#{root-component}/id}"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "LoadAndView",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "3e72ee6f-8f7b-4f29-aa0e-5887f2861117",
            "code" : "LoadAndEdit1",
            "name" : "编辑当前数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待编辑数据的标识",
              "value" : "{UISTATE~/#{root-component}/id}"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Edit"
            } ],
            "handlerName" : "LoadAndEdit",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "f90aadfa-988c-4da5-a5db-1416c3333794",
            "code" : "Add1",
            "name" : "新增一条数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Create"
            } ],
            "handlerName" : "Add",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "a323e27b-b9c6-4848-93b9-f117403a94ff",
            "code" : "Edit1",
            "name" : "编辑当前数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Edit"
            } ],
            "handlerName" : "Edit",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "31b814db-01e4-407d-8fad-0f08dbb01999",
            "code" : "Save1",
            "name" : "保存变更",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "Save",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "4f5ed2ec-8def-4a3c-8e7b-397ea93010e8",
            "code" : "Cancel1",
            "name" : "取消变更",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "Cancel",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "c8504c24-33e8-487a-91ce-2218b803fe01",
            "code" : "ChangeItem1",
            "name" : "切换上一条或下一条1",
            "params" : [ {
              "name" : "id",
              "shownName" : "当前数据标识",
              "value" : "{DATA~/#{root-component}/id}"
            }, {
              "name" : "type",
              "shownName" : "切换类型(prev|next)",
              "value" : "prev"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "ChangeItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "4a0cfb1a-1262-41a2-aeb9-c8edd5c09683",
            "code" : "ChangeItem2",
            "name" : "切换上一条或下一条2",
            "params" : [ {
              "name" : "id",
              "shownName" : "当前数据标识",
              "value" : "{DATA~/#{root-component}/id}"
            }, {
              "name" : "type",
              "shownName" : "切换类型(prev|next)",
              "value" : "next"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "ChangeItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "states" : [ ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "basic-form-viewmodel",
          "code" : "basic-form-viewmodel",
          "name" : "学生",
          "fields" : [ {
            "type" : "Form",
            "id" : "4d7c2ff8-3d22-498c-b4a2-9f00de413882",
            "fieldName" : "stuID",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "require" : true
            }
          }, {
            "type" : "Form",
            "id" : "7c6610fd-3435-400e-88de-499a3f3a5f7a",
            "fieldName" : "name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "3b2b6667-0890-4ae8-9427-68e049da9a52",
            "fieldName" : "gender",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "d3709230-88d1-4769-bb7a-5490d92893fa",
            "fieldName" : "tel_PhoneNumber",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "联系方式"
            }
          } ],
          "serviceRefs" : [ ],
          "commands" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "enableValidation" : true
        } ],
        "components" : [ {
          "id" : "root-component",
          "type" : "Component",
          "viewModel" : "root-viewmodel",
          "componentType" : "Frame",
          "onInit" : "Load1",
          "contents" : [ {
            "id" : "root-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-page f-page-card f-page-is-mainsubcard"
            },
            "size" : null,
            "contents" : [ {
              "id" : "page-header",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-header"
              },
              "size" : null,
              "contents" : [ {
                "id" : "header-nav",
                "type" : "ContentContainer",
                "appearance" : {
                  "class" : "f-page-header-base"
                },
                "size" : null,
                "contents" : [ {
                  "id" : "header-title-container",
                  "type" : "ContentContainer",
                  "appearance" : {
                    "class" : "f-title"
                  },
                  "size" : null,
                  "contents" : [ {
                    "id" : "page-header-title",
                    "type" : "HtmlTemplate",
                    "html" : "<span class=\"f-title-icon f-text-orna-bill\"><i class=\"f-icon f-icon-page-title-record\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'学生信息'}}</h4><div class=\"f-title-pagination\"><span class=\"f-icon f-icon-arrow-w\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem1()\"></span><span class=\"f-icon f-icon-arrow-e\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem2()\"></span></div>"
                  } ],
                  "visible" : true,
                  "isScrollspyContainer" : false,
                  "isLikeCardContainer" : false
                }, {
                  "id" : "page-header-toolbar",
                  "type" : "ToolBar",
                  "appearance" : {
                    "class" : "col-7 f-toolbar"
                  },
                  "size" : null,
                  "items" : [ {
                    "id" : "button-add",
                    "type" : "ToolBarItem",
                    "text" : "新增",
                    "appearance" : {
                      "class" : "btn-primary"
                    },
                    "disable" : "!viewModel.stateMachine['canAdd']",
                    "visible" : true,
                    "click" : "Add1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-edit",
                    "type" : "ToolBarItem",
                    "text" : "编辑",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canEdit']",
                    "visible" : true,
                    "click" : "Edit1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-save",
                    "type" : "ToolBarItem",
                    "text" : "保存",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canSave']",
                    "visible" : true,
                    "click" : "Save1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-cancel",
                    "type" : "ToolBarItem",
                    "text" : "取消",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canCancel']",
                    "visible" : true,
                    "click" : "Cancel1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  } ],
                  "visible" : true,
                  "buttonSize" : "default",
                  "popDirection" : "default"
                } ],
                "visible" : true,
                "isScrollspyContainer" : false,
                "isLikeCardContainer" : false
              } ],
              "visible" : true,
              "isScrollspyContainer" : false,
              "isLikeCardContainer" : false
            }, {
              "id" : "main-container",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-main"
              },
              "size" : null,
              "contents" : [ {
                "id" : "like-card-container",
                "type" : "ContentContainer",
                "appearance" : {
                  "class" : "f-struct-like-card"
                },
                "size" : null,
                "contents" : [ {
                  "id" : "basic-form-component-ref",
                  "type" : "ComponentRef",
                  "component" : "basic-form-component",
                  "visible" : true
                } ],
                "visible" : true,
                "draggable" : false,
                "isLikeCardContainer" : true,
                "isScrollspyContainer" : false
              } ],
              "visible" : true,
              "isScrollspyContainer" : false,
              "isLikeCardContainer" : false
            } ],
            "visible" : true,
            "isScrollspyContainer" : false,
            "isLikeCardContainer" : false
          } ],
          "appearance" : null,
          "visible" : true,
          "afterViewInit" : null
        }, {
          "id" : "basic-form-component",
          "type" : "Component",
          "viewModel" : "basic-form-viewmodel",
          "componentType" : "form-col-4",
          "appearance" : {
            "class" : "f-struct-wrapper"
          },
          "onInit" : "",
          "contents" : [ {
            "id" : "basic-form-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-form f-section-in-mainsubcard"
            },
            "visible" : true,
            "mainTitle" : "基本信息",
            "subTitle" : "",
            "headerClass" : "",
            "titleClass" : "",
            "extendedHeaderAreaClass" : "",
            "toolbarClass" : "",
            "extendedAreaClass" : "",
            "contentTemplateClass" : "",
            "fill" : false,
            "expanded" : true,
            "enableMaximize" : false,
            "enableAccordion" : false,
            "accordionMode" : "default",
            "showHeader" : true,
            "headerTemplate" : "",
            "titleTemplate" : "",
            "extendedHeaderAreaTemplate" : "",
            "toolbarTemplate" : "",
            "extendedAreaTemplate" : "",
            "contents" : [ {
              "id" : "basic-form-layout",
              "type" : "Form",
              "appearance" : {
                "class" : "f-form-layout farris-form farris-form-controls-inline"
              },
              "size" : null,
              "contents" : [ {
                "id" : "stuID_4d7c2ff8_aona",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "学号",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "stuID",
                  "field" : "4d7c2ff8-3d22-498c-b4a2-9f00de413882",
                  "fullPath" : "StuID"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : true,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 36,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "holdPlace" : false,
                "isTextArea" : true,
                "isPassword" : false,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "enableTips" : true,
                "path" : "stuID",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "formatValidation" : {
                  "type" : "none",
                  "expression" : "",
                  "message" : ""
                },
                "autoHeight" : false,
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              }, {
                "id" : "name_7c6610fd_1jji",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "姓名",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "name",
                  "field" : "7c6610fd-3435-400e-88de-499a3f3a5f7a",
                  "fullPath" : "Name"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : true,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 36,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "holdPlace" : false,
                "isTextArea" : true,
                "isPassword" : false,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "enableTips" : true,
                "path" : "name",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "formatValidation" : {
                  "type" : "none",
                  "expression" : "",
                  "message" : ""
                },
                "autoHeight" : false,
                "maxHeight" : 500
              }, {
                "id" : "gender_3b2b6667_pciv",
                "type" : "EnumField",
                "titleSourceType" : "static",
                "title" : "性别",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "gender",
                  "field" : "3b2b6667-0890-4ae8-9427-68e049da9a52",
                  "fullPath" : "Gender"
                },
                "placeHolder" : "",
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "enumData" : [ {
                  "disabled" : false,
                  "name" : "男",
                  "value" : "man"
                }, {
                  "disabled" : false,
                  "name" : "女",
                  "value" : "woman"
                } ],
                "holdPlace" : false,
                "isTextArea" : true,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "idField" : "value",
                "textField" : "name",
                "multiSelect" : false,
                "uri" : "",
                "autoWidth" : true,
                "enableClear" : false,
                "onClear" : null,
                "valueChanged" : null,
                "onShown" : null,
                "onHidden" : null,
                "editable" : false,
                "enableCancelSelected" : false,
                "beforeShow" : null,
                "beforeHide" : null,
                "dataSourceType" : "static",
                "path" : "gender",
                "viewType" : "text",
                "noSearch" : false,
                "maxSearchLength" : null,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "autoHeight" : false,
                "maxHeight" : 500,
                "showDisabledItem" : true
              }, {
                "id" : "tel_PhoneNumber_d3709230_ghqd",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "联系方式",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "tel_PhoneNumber",
                  "field" : "d3709230-88d1-4769-bb7a-5490d92893fa",
                  "fullPath" : "Tel.PhoneNumber"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 36,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "holdPlace" : false,
                "isTextArea" : true,
                "isPassword" : false,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "enableTips" : true,
                "path" : "tel.phoneNumber",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "formatValidation" : {
                  "type" : "none",
                  "expression" : "",
                  "message" : ""
                },
                "autoHeight" : false,
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              } ],
              "controlsInline" : true,
              "formAutoIntl" : true,
              "visible" : true,
              "labelAutoOverflow" : false
            } ],
            "isScrollSpyItem" : false,
            "toolbar" : {
              "type" : "SectionToolbar",
              "position" : "inHead",
              "contents" : [ ]
            }
          } ],
          "visible" : true,
          "afterViewInit" : null
        } ],
        "webcmds" : [ {
          "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
          "path" : "/projects/packages/Inspur.GS.Gsp.Web.WebCmp/webcmd",
          "name" : "CardController.webcmd",
          "refedHandlers" : [ {
            "host" : "e05264fb-796d-43fb-b83b-9e2f3866c328",
            "handler" : "Load"
          }, {
            "host" : "246a275c-88c9-4c8a-aa82-be6a950a4325",
            "handler" : "LoadAndAdd"
          }, {
            "host" : "70acc053-fa15-45be-851c-cf694e1bcaf7",
            "handler" : "LoadAndView"
          }, {
            "host" : "3e72ee6f-8f7b-4f29-aa0e-5887f2861117",
            "handler" : "LoadAndEdit"
          }, {
            "host" : "f90aadfa-988c-4da5-a5db-1416c3333794",
            "handler" : "Add"
          }, {
            "host" : "a323e27b-b9c6-4848-93b9-f117403a94ff",
            "handler" : "Edit"
          }, {
            "host" : "31b814db-01e4-407d-8fad-0f08dbb01999",
            "handler" : "Save"
          }, {
            "host" : "4f5ed2ec-8def-4a3c-8e7b-397ea93010e8",
            "handler" : "Cancel"
          }, {
            "host" : "c8504c24-33e8-487a-91ce-2218b803fe01",
            "handler" : "ChangeItem"
          }, {
            "host" : "4a0cfb1a-1262-41a2-aeb9-c8edd5c09683",
            "handler" : "ChangeItem"
          } ],
          "code" : "CardController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-student-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "declarations" : {
          "events" : [ ],
          "commands" : [ ],
          "states" : [ ]
        },
        "subscriptions" : [ ],
        "extraImports" : [ ],
        "expressions" : [ ],
        "metadataId" : "94332519-f7e7-43d9-9b0b-d9dd8deeb7a1",
        "actions" : [ {
          "sourceComponent" : {
            "id" : "button-add",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "f90aadfa-988c-4da5-a5db-1416c3333794",
                "label" : "Add1",
                "name" : "新增一条数据",
                "handlerName" : "Add",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Create"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-edit",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "a323e27b-b9c6-4848-93b9-f117403a94ff",
                "label" : "Edit1",
                "name" : "编辑当前数据",
                "handlerName" : "Edit",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Edit"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-save",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "31b814db-01e4-407d-8fad-0f08dbb01999",
                "label" : "Save1",
                "name" : "保存变更",
                "handlerName" : "Save",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Cancel"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-cancel",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "4f5ed2ec-8def-4a3c-8e7b-397ea93010e8",
                "label" : "Cancel1",
                "name" : "取消变更",
                "handlerName" : "Cancel",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Cancel"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "root-component",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "onInit",
                "name" : "初始化事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "e05264fb-796d-43fb-b83b-9e2f3866c328",
                "label" : "Load1",
                "name" : "执行加载页面后初始方法",
                "handlerName" : "Load",
                "params" : [ {
                  "name" : "action",
                  "shownName" : "初始方法",
                  "value" : "{UISTATE~/#{root-component}/action}"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
              }
            } ]
          }
        } ]
      },
      "options" : {
        "enableTextArea" : true,
        "renderMode" : "compile",
        "enableDeleteSourceCode" : true,
        "changeSetPolicy" : "valid",
        "enableServerSideChangeDetection" : true
      }
    },
    "Id" : "94332519-f7e7-43d9-9b0b-d9dd8deeb7a1",
    "CreationDate" : null
  },
  "ExtendRule" : null,
  "RelativePath" : "StudentSystem/BasicData/Student/bo-student-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}