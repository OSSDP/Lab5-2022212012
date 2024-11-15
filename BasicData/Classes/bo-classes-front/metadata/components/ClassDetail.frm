{
  "Header" : {
    "Code" : "ClassDetail",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.StudentSystem.BasicData.Classes.Classes.Front",
    "CertId" : null,
    "Name" : "班级信息",
    "FileName" : "ClassDetail.frm",
    "BizobjectID" : "637b76f0-c3a6-58b9-15c5-f3d946cddd69",
    "Language" : null,
    "Extendable" : false,
    "ID" : "fc020308-d0c2-4aa6-a893-ac04da3800eb",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "ad581c18-5a31-4539-896b-cc5ea23b39b4",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.StudentSystem.BasicData.Classes.Classes.Front",
      "Code" : "ClassDetail.frm",
      "Name" : "ClassDetail.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "637b76f0-c3a6-58b9-15c5-f3d946cddd69"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Contents" : {
      "module" : {
        "id" : "ClassDetail",
        "code" : "ClassDetail",
        "name" : "班级信息",
        "caption" : "班级信息",
        "type" : "Module",
        "creator" : "dev",
        "creationDate" : "2024-11-10T17:35:30.762Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "card-template",
        "templateId" : "card-template",
        "schemas" : [ {
          "eapiId" : "baddfa1d-0e55-456f-b6f6-431eb19c8a17",
          "eapiCode" : "ClassDetail_frm",
          "eapiName" : "班级信息_frm",
          "eapiNameSpace" : "Inspur.GS.StudentSystem.BasicData.Classes.Classes.Front",
          "voPath" : "StudentSystem/BasicData/Classes/bo-classes-front/metadata/components",
          "voNameSpace" : "Inspur.GS.StudentSystem.BasicData.Classes.Classes.Front",
          "id" : "f9a5f1ff-f160-4d56-81bc-bc7aa4117981",
          "entities" : [ {
            "id" : "67601580-87d4-4162-b68d-bfaf5f0782b9",
            "type" : {
              "$type" : "EntityType",
              "fields" : [ {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "TextBox"
                },
                "require" : true,
                "multiLanguage" : false,
                "readonly" : false,
                "id" : "eb694b07-2f4a-4399-9ff7-5064356efac9",
                "path" : "ID",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "ID",
                "label" : "id",
                "bindingField" : "id",
                "bindingPath" : "id",
                "originalId" : "eb694b07-2f4a-4399-9ff7-5064356efac9",
                "name" : "主键"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "require" : false,
                "multiLanguage" : false,
                "readonly" : false,
                "id" : "b59f3bbb-e335-4217-bed7-24370b879c54",
                "path" : "Version",
                "type" : {
                  "$type" : "DateTimeType",
                  "displayName" : "日期时间",
                  "name" : "DateTime"
                },
                "code" : "Version",
                "label" : "version",
                "bindingField" : "version",
                "bindingPath" : "version",
                "originalId" : "b59f3bbb-e335-4217-bed7-24370b879c54",
                "name" : "版本"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "TextBox"
                },
                "require" : false,
                "multiLanguage" : false,
                "readonly" : false,
                "id" : "97531977-5cfe-4ea5-9d0b-785e19969e11",
                "path" : "Name",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "Name",
                "label" : "name",
                "bindingField" : "name",
                "bindingPath" : "name",
                "originalId" : "97531977-5cfe-4ea5-9d0b-785e19969e11",
                "name" : "班级名称"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "TextBox"
                },
                "require" : false,
                "multiLanguage" : false,
                "readonly" : false,
                "id" : "57706799-7ca6-4f4e-adf0-841de4e06079",
                "path" : "classTcher",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "classTcher",
                "label" : "classTcher",
                "bindingField" : "classTcher",
                "bindingPath" : "classTcher",
                "originalId" : "57706799-7ca6-4f4e-adf0-841de4e06079",
                "name" : "班主任"
              } ],
              "entities" : [ {
                "id" : "fc9fe52b-65fa-4b4a-bd7c-94eb5c295e2b",
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "require" : true,
                    "multiLanguage" : false,
                    "readonly" : false,
                    "id" : "741f970c-87a3-4e21-9254-65e38064322c",
                    "path" : "ID",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "code" : "ID",
                    "label" : "id",
                    "bindingField" : "id",
                    "bindingPath" : "id",
                    "originalId" : "741f970c-87a3-4e21-9254-65e38064322c",
                    "name" : "主键"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "require" : true,
                    "multiLanguage" : false,
                    "readonly" : false,
                    "id" : "90782f30-24a8-4375-b9b7-030255399e0f",
                    "path" : "ParentID",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "code" : "ParentID",
                    "label" : "parentID",
                    "bindingField" : "parentID",
                    "bindingPath" : "parentID",
                    "originalId" : "90782f30-24a8-4375-b9b7-030255399e0f",
                    "name" : "上级对象主键"
                  }, {
                    "$type" : "ComplexField",
                    "id" : "f1dd2a83-193d-4b77-bd26-bf8867b0ef09",
                    "path" : "Student",
                    "type" : {
                      "$type" : "EntityType",
                      "fields" : [ {
                        "$type" : "SimpleField",
                        "defaultValue" : "",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "require" : false,
                        "multiLanguage" : false,
                        "readonly" : false,
                        "id" : "a0ca9aef-cd9d-42e3-8c53-696ca1862a8c",
                        "path" : "Student.Student",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "code" : "Student",
                        "label" : "student",
                        "bindingField" : "student",
                        "bindingPath" : "student.student",
                        "originalId" : "a0ca9aef-cd9d-42e3-8c53-696ca1862a8c",
                        "name" : "学生"
                      }, {
                        "$type" : "SimpleField",
                        "defaultValue" : "",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "require" : false,
                        "multiLanguage" : false,
                        "readonly" : false,
                        "id" : "1f6f0446-3386-432c-aeef-0cabeab82fed",
                        "path" : "Student.Student_StuID",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "code" : "StuID",
                        "label" : "student_StuID",
                        "bindingField" : "student_Student_StuID",
                        "bindingPath" : "student.student_StuID",
                        "originalId" : "1f6f0446-3386-432c-aeef-0cabeab82fed",
                        "name" : "学号"
                      }, {
                        "$type" : "SimpleField",
                        "defaultValue" : "",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "require" : false,
                        "multiLanguage" : false,
                        "readonly" : false,
                        "id" : "7ba2c5c2-e932-4e26-89e0-12573e968a44",
                        "path" : "Student.Student_Name",
                        "type" : {
                          "$type" : "StringType",
                          "displayName" : "字符串",
                          "length" : 36,
                          "name" : "String"
                        },
                        "code" : "Name",
                        "label" : "student_Name",
                        "bindingField" : "student_Student_Name",
                        "bindingPath" : "student.student_Name",
                        "originalId" : "7ba2c5c2-e932-4e26-89e0-12573e968a44",
                        "name" : "姓名"
                      } ],
                      "entities" : [ ],
                      "primary" : "student",
                      "displayName" : "学生",
                      "name" : "StudentA0cA"
                    },
                    "code" : "Student",
                    "label" : "student",
                    "bindingField" : "student",
                    "bindingPath" : "student",
                    "originalId" : "f1dd2a83-193d-4b77-bd26-bf8867b0ef09",
                    "name" : "学生"
                  } ],
                  "entities" : [ ],
                  "primary" : "id",
                  "displayName" : "学生",
                  "name" : "Student"
                },
                "code" : "Student",
                "label" : "students",
                "name" : "学生"
              } ],
              "primary" : "id",
              "displayName" : "班级",
              "name" : "Classes"
            },
            "code" : "Classes",
            "label" : "classess",
            "name" : "班级"
          } ],
          "code" : "ClassDetail_frm",
          "sourceType" : "vo",
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "variables" : [ ],
          "sourceUri" : "api/studentsystem/basicdata/v1.0/ClassDetail_frm",
          "name" : "班级信息_frm"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "ClassDetail_state_machine",
          "name" : "班级信息_frm",
          "uri" : "48045c47-fa96-4781-a6b7-a0d9e2435003",
          "code" : "ClassDetail_frm",
          "nameSpace" : "Inspur.GS.StudentSystem.BasicData.Classes.Classes.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "班级",
          "fields" : [ ],
          "stateMachine" : "ClassDetail_state_machine",
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
          "name" : "班级",
          "fields" : [ {
            "type" : "Form",
            "id" : "97531977-5cfe-4ea5-9d0b-785e19969e11",
            "fieldName" : "name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "require" : true
            }
          }, {
            "type" : "Form",
            "id" : "57706799-7ca6-4f4e-adf0-841de4e06079",
            "fieldName" : "classTcher",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "Classes.classTcher",
                  "displayName" : "展示教师列表",
                  "idField" : "id",
                  "type" : "ViewObject",
                  "helpCode" : "listTeacher"
                },
                "valueField" : "id",
                "textField" : "name",
                "displayType" : "List",
                "mapFields" : "{'name':'classTcher'}",
                "helpId" : "5b79a1ed-a4ff-48b8-9481-e4263e82482b"
              },
              "name" : "班主任",
              "require" : false,
              "readonly" : false
            }
          } ],
          "serviceRefs" : [ ],
          "commands" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "enableValidation" : true
        }, {
          "id" : "student-component-viewmodel",
          "code" : "student-component-viewmodel",
          "name" : "学生",
          "fields" : [ {
            "type" : "Form",
            "id" : "1f6f0446-3386-432c-aeef-0cabeab82fed",
            "fieldName" : "student_Student_StuID",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "Student.student_Student_StuID",
                  "displayName" : "展示学生列表",
                  "idField" : "stuID",
                  "type" : "ViewObject",
                  "helpCode" : "listStudent"
                },
                "valueField" : "stuID",
                "textField" : "name",
                "displayType" : "List",
                "mapFields" : "{'stuID':'student.student_StuID','name':'student.student_Name'}",
                "helpId" : "b3dd6c59-a07b-4f6f-96c2-c7c648cc820f"
              },
              "name" : "学号",
              "require" : false,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "7ba2c5c2-e932-4e26-89e0-12573e968a44",
            "fieldName" : "student_Student_Name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          } ],
          "states" : [ ],
          "bindTo" : "/students",
          "parent" : "root-viewmodel",
          "commands" : [ {
            "id" : "6e881f71-c1e8-4b47-ac75-38785e0b2060",
            "code" : "studentAddItem1",
            "name" : "增加一条子表数据",
            "params" : [ ],
            "handlerName" : "AddItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "e48e8096-b190-4b7a-8c51-1421bec223d3",
            "code" : "studentRemoveItem1",
            "name" : "删除一条子表数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除子表数据的标识",
              "value" : "{DATA~/#{student-component}/students/id}"
            } ],
            "handlerName" : "RemoveItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "serviceRefs" : [ ],
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
                    "html" : "<span class=\"f-title-icon f-text-orna-bill\"><i class=\"f-icon f-icon-page-title-record\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'班级信息'}}</h4><div class=\"f-title-pagination\"><span class=\"f-icon f-icon-arrow-w\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem1()\"></span><span class=\"f-icon f-icon-arrow-e\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem2()\"></span></div>"
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
                }, {
                  "id" : "detail-container",
                  "type" : "ContentContainer",
                  "appearance" : {
                    "class" : "f-struct-wrapper"
                  },
                  "size" : null,
                  "contents" : [ {
                    "id" : "detail-section",
                    "type" : "Section",
                    "appearance" : {
                      "class" : "f-section-tabs f-section-in-mainsubcard"
                    },
                    "visible" : true,
                    "mainTitle" : "",
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
                    "enableAccordion" : true,
                    "accordionMode" : "default",
                    "showHeader" : false,
                    "headerTemplate" : "",
                    "titleTemplate" : "",
                    "extendedHeaderAreaTemplate" : "",
                    "toolbarTemplate" : "",
                    "extendedAreaTemplate" : "",
                    "contents" : [ {
                      "id" : "detail-tab",
                      "type" : "Tab",
                      "controlSource" : "Farris",
                      "appearance" : {
                        "class" : "f-component-tabs f-tabs-has-grid"
                      },
                      "selected" : "student-tab-page",
                      "size" : null,
                      "position" : "top",
                      "contents" : [ {
                        "id" : "student-tab-page",
                        "type" : "TabPage",
                        "controlSource" : "Farris",
                        "title" : "学生",
                        "appearance" : null,
                        "size" : null,
                        "removeable" : false,
                        "headerTemplate" : null,
                        "contents" : [ {
                          "id" : "student-component-ref",
                          "type" : "ComponentRef",
                          "component" : "student-component",
                          "visible" : true
                        } ],
                        "toolbar" : {
                          "id" : "student-tab-toolbar",
                          "type" : "TabToolbar",
                          "position" : "inHead",
                          "contents" : [ {
                            "id" : "studentAddButton",
                            "type" : "TabToolbarItem",
                            "title" : "新增",
                            "disable" : "!viewModel.stateMachine['canAddDetail']",
                            "appearance" : {
                              "class" : "btn btn-secondary f-btn-ml"
                            },
                            "visible" : true,
                            "click" : "root-viewmodel.student-component-viewmodel.studentAddItem1",
                            "items" : [ ],
                            "split" : false
                          }, {
                            "id" : "studentRemoveButton",
                            "type" : "TabToolbarItem",
                            "title" : "删除",
                            "disable" : "!viewModel.stateMachine['canRemoveDetail']",
                            "appearance" : {
                              "class" : "btn btn-secondary f-btn-ml"
                            },
                            "visible" : true,
                            "click" : "root-viewmodel.student-component-viewmodel.studentRemoveItem1",
                            "items" : [ ],
                            "split" : false
                          } ]
                        },
                        "visible" : true
                      } ],
                      "tabChange" : null,
                      "tabRemove" : null,
                      "contentFill" : false,
                      "autoTitleWidth" : false,
                      "titleWidth" : 0,
                      "titleLength" : 7,
                      "visible" : true,
                      "beforeSelect" : null
                    } ],
                    "isScrollSpyItem" : false,
                    "toolbar" : {
                      "id" : "detail-section-toolbar",
                      "type" : "SectionToolbar",
                      "position" : "inHead",
                      "contents" : [ ]
                    }
                  } ],
                  "visible" : true,
                  "isScrollspyContainer" : false,
                  "isLikeCardContainer" : false
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
            "enableAccordion" : true,
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
                "id" : "name_97531977_j5o1",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "班级名称",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "name",
                  "field" : "97531977-5cfe-4ea5-9d0b-785e19969e11",
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
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              }, {
                "id" : "classTcher_57706799_m5dz",
                "type" : "LookupEdit",
                "titleSourceType" : "static",
                "title" : "班主任",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "classTcher",
                  "field" : "57706799-7ca6-4f4e-adf0-841de4e06079",
                  "fullPath" : "classTcher"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "dataSource" : {
                  "uri" : "Classes.classTcher",
                  "displayName" : "展示教师列表",
                  "idField" : "id",
                  "type" : "ViewObject",
                  "helpCode" : "listTeacher"
                },
                "textField" : "name",
                "valueField" : "id",
                "displayType" : "List",
                "multiSelect" : false,
                "pageList" : "10,20,30,50",
                "pageSize" : 20,
                "pageIndex" : null,
                "pagination" : null,
                "dialogTitle" : "",
                "showMaxButton" : null,
                "showCloseButton" : null,
                "resizable" : null,
                "buttonAlign" : null,
                "mapFields" : "{'name':'classTcher'}",
                "lookupStyle" : "popup",
                "holdPlace" : false,
                "isTextArea" : true,
                "useTip" : false,
                "useFavorite" : true,
                "noSearch" : false,
                "maxSearchLength" : 36,
                "enableToSelect" : true,
                "isRecordSize" : false,
                "lookupPicking" : null,
                "lookupPicked" : null,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "enableExtendLoadMethod" : true,
                "editable" : false,
                "enableFullTree" : false,
                "enableClear" : true,
                "clear" : null,
                "loadTreeDataType" : "default",
                "expandLevel" : -1,
                "enableCascade" : false,
                "cascadeStatus" : "enable",
                "onShown" : null,
                "onHidden" : null,
                "beforeShow" : null,
                "beforeHide" : null,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "textAlign" : "left",
                "useExtendInfo" : false,
                "extInfoFields" : null,
                "extInfoFormatter" : null,
                "customFormatter" : null,
                "customNavFormatter" : null,
                "selectFirstInNav" : false,
                "loadDataWhenOpen" : true,
                "onlySelectLeaf" : "default",
                "viewType" : "text",
                "autoHeight" : false,
                "maxHeight" : 500,
                "autoWidth" : true,
                "showHeader" : true,
                "beforeSelectData" : null,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "enableContextMenu" : false,
                "quickSelect" : {
                  "enable" : false,
                  "showItemsCount" : 10,
                  "formatter" : null,
                  "showMore" : true
                },
                "treeToList" : false,
                "navTreeToList" : false,
                "showNavigation" : true,
                "showCascadeControl" : true,
                "linkConfig" : {
                  "enable" : false,
                  "config" : [ ]
                },
                "showSelected" : false,
                "useNewLayout" : false,
                "enableMultiFieldSearch" : false,
                "separator" : ",",
                "path" : "classTcher",
                "isRTControl" : false,
                "labelAutoOverflow" : false,
                "updateOn" : "blur",
                "helpId" : "5b79a1ed-a4ff-48b8-9481-e4263e82482b"
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
        }, {
          "id" : "student-component",
          "type" : "Component",
          "viewModel" : "student-component-viewmodel",
          "appearance" : {
            "class" : "f-struct-is-subgrid"
          },
          "contents" : [ {
            "id" : "student-component-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-grid-is-sub f-utils-flex-column"
            },
            "size" : null,
            "contents" : [ {
              "id" : "dataGrid_student",
              "type" : "DataGrid",
              "controlSource" : "Farris",
              "dataSource" : "students",
              "fields" : [ {
                "id" : "student_Student_StuID_1f6f0446_ez3t",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "学号",
                "captionTemplate" : null,
                "dataField" : "student.student_StuID",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "student_Student_StuID",
                  "field" : "1f6f0446-3386-432c-aeef-0cabeab82fed",
                  "fullPath" : "Student.Student_StuID"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "student_Student_StuID_1f6f0446_pr3u",
                  "type" : "LookupEdit",
                  "titleSourceType" : "static",
                  "title" : "学号",
                  "appearance" : {
                    "class" : ""
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "student_Student_StuID",
                    "field" : "1f6f0446-3386-432c-aeef-0cabeab82fed",
                    "fullPath" : "Student.Student_StuID"
                  },
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "dataSource" : {
                    "uri" : "Student.student_Student_StuID",
                    "displayName" : "展示学生列表",
                    "idField" : "stuID",
                    "type" : "ViewObject",
                    "helpCode" : "listStudent"
                  },
                  "textField" : "name",
                  "valueField" : "stuID",
                  "displayType" : "List",
                  "multiSelect" : false,
                  "pageList" : "10,20,30,50",
                  "pageSize" : 20,
                  "pageIndex" : null,
                  "pagination" : null,
                  "dialogTitle" : "",
                  "showMaxButton" : null,
                  "showCloseButton" : null,
                  "resizable" : null,
                  "buttonAlign" : null,
                  "mapFields" : "{'stuID':'student.student_StuID','name':'student.student_Name'}",
                  "lookupStyle" : "popup",
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "useTip" : false,
                  "useFavorite" : true,
                  "noSearch" : false,
                  "maxSearchLength" : 36,
                  "enableToSelect" : true,
                  "isRecordSize" : false,
                  "lookupPicking" : null,
                  "lookupPicked" : null,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "enableExtendLoadMethod" : true,
                  "editable" : false,
                  "enableFullTree" : false,
                  "enableClear" : true,
                  "clear" : null,
                  "loadTreeDataType" : "default",
                  "expandLevel" : -1,
                  "enableCascade" : false,
                  "cascadeStatus" : "enable",
                  "onShown" : null,
                  "onHidden" : null,
                  "beforeShow" : null,
                  "beforeHide" : null,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "textAlign" : "left",
                  "useExtendInfo" : false,
                  "extInfoFields" : null,
                  "extInfoFormatter" : null,
                  "customFormatter" : null,
                  "customNavFormatter" : null,
                  "selectFirstInNav" : false,
                  "loadDataWhenOpen" : true,
                  "onlySelectLeaf" : "default",
                  "viewType" : "text",
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "autoWidth" : true,
                  "showHeader" : true,
                  "beforeSelectData" : null,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "enableContextMenu" : false,
                  "quickSelect" : {
                    "enable" : false,
                    "showItemsCount" : 10,
                    "formatter" : null,
                    "showMore" : true
                  },
                  "treeToList" : false,
                  "navTreeToList" : false,
                  "showNavigation" : true,
                  "showCascadeControl" : true,
                  "linkConfig" : {
                    "enable" : false,
                    "config" : [ ]
                  },
                  "showSelected" : false,
                  "useNewLayout" : false,
                  "enableMultiFieldSearch" : false,
                  "separator" : ",",
                  "path" : "student.student_StuID",
                  "isRTControl" : false,
                  "updateOn" : "blur",
                  "helpId" : "b3dd6c59-a07b-4f6f-96c2-c7c648cc820f"
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "enableBatchEdit" : false,
                "localizationType" : "Date"
              }, {
                "id" : "student_Student_Name_7ba2c5c2_y7wg",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "姓名",
                "captionTemplate" : null,
                "dataField" : "student.student_Name",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "student_Student_Name",
                  "field" : "7ba2c5c2-e932-4e26-89e0-12573e968a44",
                  "fullPath" : "Student.Student_Name"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "student_Student_Name_7ba2c5c2_6bax",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "姓名",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "student_Student_Name",
                    "field" : "7ba2c5c2-e932-4e26-89e0-12573e968a44"
                  },
                  "readonly" : false,
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
                  "path" : "student.student_Name",
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
                  "updateOn" : "blur"
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "enableBatchEdit" : false,
                "localizationType" : "Date"
              } ],
              "appearance" : {
                "class" : "f-component-grid f-utils-fill"
              },
              "size" : null,
              "disable" : false,
              "focusedItem" : null,
              "focusedIndex" : null,
              "pagination" : true,
              "lockPagination" : "viewModel.stateMachine&&viewModel.stateMachine['editable']",
              "showPageList" : false,
              "identifyField" : null,
              "multiSelect" : false,
              "showCheckbox" : false,
              "showAllCheckbox" : false,
              "checkOnSelect" : false,
              "selectOnCheck" : false,
              "selectable" : null,
              "itemTemplate" : null,
              "toolBar" : null,
              "summary" : null,
              "groupable" : false,
              "group" : null,
              "showGroupColumn" : true,
              "groupFormatter" : null,
              "groupStyler" : null,
              "groupFooter" : false,
              "editable" : "viewModel.stateMachine['editable']",
              "fieldEditable" : true,
              "fitColumns" : false,
              "autoFitColumns" : false,
              "multiSort" : false,
              "showBorder" : false,
              "striped" : true,
              "onSelectionChange" : "",
              "styler" : "",
              "showLineNumber" : false,
              "appendRow" : "studentAddItem1",
              "pageChange" : null,
              "disableRow" : null,
              "beforeSelect" : null,
              "beforeUnSelect" : null,
              "beforeCheck" : null,
              "beforeUnCheck" : null,
              "dblClickRow" : null,
              "virtualized" : false,
              "showFooter" : false,
              "footerTemplate" : "",
              "footerDataFrom" : "client",
              "footerDataCommand" : null,
              "footerHeight" : 29,
              "enableFilterRow" : false,
              "remoteFilter" : false,
              "showFilterBar" : false,
              "useControlPanel" : false,
              "autoHeight" : false,
              "rowClick" : null,
              "showSelectedList" : false,
              "selectedItemFormatter" : null,
              "lineNumberWidth" : 36,
              "enableMorePageSelect" : false,
              "headerWrap" : false,
              "emptyTemplate" : null,
              "emptyDataHeight" : 240,
              "rowHeight" : 30,
              "showPageSize" : false,
              "fixedColumns" : [ ],
              "enableCommandColumn" : false,
              "onEditClicked" : "",
              "onDeleteClicked" : "",
              "commandColumnWidth" : 120,
              "showCommandColumn" : true,
              "checkedChange" : null,
              "filterType" : "none",
              "enableSmartFilter" : false,
              "lineNumberTitle" : "",
              "maxHeight" : 300,
              "enableHighlightCell" : false,
              "enableEditCellStyle" : false,
              "showRowGroupPanel" : false,
              "enableDragColumn" : false,
              "groupSummaryPosition" : "groupFooterRow",
              "clearSelectionsWhenDataIsEmpty" : true,
              "keepSelect" : true,
              "enableEditByCard" : "none",
              "pageSizeChanged" : null,
              "visible" : true,
              "showGotoInput" : false,
              "scrollBarShowMode" : "auto",
              "showScrollArrow" : false,
              "footerPosition" : "bottom",
              "footerStyler" : null,
              "selectOnEditing" : false,
              "selectionMode" : "default",
              "enableContextMenu" : false,
              "disableGroupOnEditing" : true,
              "enableSimpleMode" : false,
              "enableScheme" : false,
              "beforeEdit" : null,
              "nowrap" : true,
              "mergeCell" : false,
              "remoteSort" : false,
              "columnSorted" : null,
              "enableHeaderGroup" : false,
              "headerGroup" : null,
              "AutoColumnWidthUseDblclick" : true,
              "virtualizedAsyncLoad" : false,
              "scrollYLoad" : null,
              "pagerContentTemplate" : null,
              "expandGroupRows" : true,
              "useBlankWhenDataIsEmpty" : false,
              "checked" : null,
              "unChecked" : null,
              "checkAll" : null,
              "unCheckAll" : null,
              "filterChanged" : null,
              "enableEditStateFilterSorting" : false,
              "showConfirmWhenSchemeChanged" : false,
              "enableSetMultiHeaders" : false
            } ],
            "visible" : true,
            "isScrollspyContainer" : false,
            "isLikeCardContainer" : false
          } ],
          "componentType" : "dataGrid",
          "visible" : true,
          "onInit" : null,
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
          }, {
            "host" : "6e881f71-c1e8-4b47-ac75-38785e0b2060",
            "handler" : "AddItem"
          }, {
            "host" : "e48e8096-b190-4b7a-8c51-1421bec223d3",
            "handler" : "RemoveItem"
          } ],
          "code" : "CardController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-classes-front",
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
        "metadataId" : "fc020308-d0c2-4aa6-a893-ac04da3800eb",
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
            "id" : "studentAddButton",
            "viewModelId" : "student-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "student-component",
                "viewModelId" : "student-component-viewmodel"
              },
              "command" : {
                "id" : "6e881f71-c1e8-4b47-ac75-38785e0b2060",
                "label" : "studentAddItem1",
                "name" : "增加一条子表数据",
                "handlerName" : "AddItem",
                "params" : [ ],
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
            "id" : "studentRemoveButton",
            "viewModelId" : "student-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "student-component",
                "viewModelId" : "student-component-viewmodel"
              },
              "command" : {
                "id" : "e48e8096-b190-4b7a-8c51-1421bec223d3",
                "label" : "studentRemoveItem1",
                "name" : "删除一条子表数据",
                "handlerName" : "RemoveItem",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待删除子表数据的标识",
                  "value" : "{DATA~/#{student-component}/students/id}"
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
        }, {
          "sourceComponent" : {
            "id" : "dataGrid_student",
            "viewModelId" : "student-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "appendRow",
                "name" : "回车新增行事件"
              },
              "targetComponent" : {
                "id" : "student-component",
                "viewModelId" : "student-component-viewmodel"
              },
              "command" : {
                "id" : "6e881f71-c1e8-4b47-ac75-38785e0b2060",
                "label" : "studentAddItem1",
                "name" : "增加一条子表数据",
                "handlerName" : "AddItem",
                "params" : [ ],
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
    "Id" : "fc020308-d0c2-4aa6-a893-ac04da3800eb",
    "CreationDate" : null
  },
  "ExtendRule" : null,
  "RelativePath" : "StudentSystem/BasicData/Classes/bo-classes-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}