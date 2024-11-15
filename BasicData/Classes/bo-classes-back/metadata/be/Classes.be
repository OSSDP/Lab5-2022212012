{
  "Header" : {
    "Code" : "Classes",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.StudentSystem.BasicData.Classes.Classes.Back",
    "CertId" : null,
    "Name" : "班级",
    "FileName" : "Classes.be",
    "BizobjectID" : "637b76f0-c3a6-58b9-15c5-f3d946cddd69",
    "Language" : null,
    "Extendable" : false,
    "ID" : "e8368448-321d-4f6e-9cd3-f346386c0c2a",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "285482cb-3b3a-4253-ab08-d1e029fc63e9",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.StudentSystem.BasicData.Student.Student.Back",
      "Code" : "Student",
      "Name" : "学生",
      "Type" : "GSPBusinessEntity",
      "BizobjectID" : "8cdaade6-4237-abbf-5006-00e3aff41bfb"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "fe06ed0c-43d8-49fa-9da0-5478f3709d86",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.StudentSystem.BasicData.Classes.Classes.Back",
      "Code" : "Classes.be",
      "Name" : "Classes.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "637b76f0-c3a6-58b9-15c5-f3d946cddd69"
    }
  } ],
  "Content" : {
    "ID" : "e8368448-321d-4f6e-9cd3-f346386c0c2a",
    "Code" : "Classes",
    "Name" : "班级",
    "GeneratingAssembly" : "Inspur.GS.StudentSystem.BasicData.Classes.Classes.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "5d3442e1-5ffb-4cf5-a1b5-020c50fcec68"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "15cfce12-2fce-42cf-936e-75a7e517f201",
      "Code" : "Classes",
      "Name" : "班级",
      "I18nResourceInfoPrefix" : "Inspur.GS.StudentSystem.BasicData.Classes.Classes.Back.Classes.Classes",
      "ContainElements" : [ {
        "ID" : "e45b3f92-be64-46de-b25c-9d954143e623",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "b756aa55-dfe0-4245-adb3-60c9d9461ac5",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "5d3442e1-5ffb-4cf5-a1b5-020c50fcec68",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "26e39b67-27ce-4f9b-ac3b-e42b76110bc4",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "adc74e10-5980-4c9a-b900-199d95c6d2fc",
        "LabelID" : "Name",
        "ChildAssociations" : [ ],
        "ColumnID" : "f28e88cc-18a6-411d-9eff-2fe5e6aa289b",
        "Code" : "Name",
        "Name" : "班级名称",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "1d50e5b3-35fa-458b-ab8a-09c099eff410",
        "LabelID" : "classTcher",
        "ChildAssociations" : [ ],
        "ColumnID" : "a6c6a1c7-9e4b-44b7-ae07-0679e95c2f10",
        "Code" : "classTcher",
        "Name" : "班主任",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      } ],
      "ContainChildObjects" : [ {
        "ID" : "cc29c2a4-4fc7-4d94-b38e-1939f3cbd747",
        "Code" : "Student",
        "Name" : "学生",
        "I18nResourceInfoPrefix" : "Inspur.GS.StudentSystem.BasicData.Classes.Classes.Back.Classes.Student",
        "ContainElements" : [ {
          "ID" : "7d6adf1a-c6b6-47b9-9859-1e80e54e761d",
          "LabelID" : "ID",
          "ChildAssociations" : [ ],
          "ColumnID" : "f3a5a320-f1c9-415f-a5c3-8e03ac183851",
          "Code" : "ID",
          "Name" : "主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "5233b87f-149e-4278-aa25-3a34f1d79708",
          "LabelID" : "ParentID",
          "ChildAssociations" : [ ],
          "ColumnID" : "68801671-0f62-4395-a064-0580fe9bd3cc",
          "Code" : "ParentID",
          "Name" : "上级对象主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "378a17ed-bee1-46a8-aab5-6b74a75198ba",
          "LabelID" : "Student",
          "ChildAssociations" : [ {
            "ID" : "a0ca9aef-cd9d-42e3-8c53-696ca1862a8c",
            "RefElementCollection" : [ {
              "ID" : "2b6b3ae9-76f7-400d-bcfa-bd046c3f6bcc",
              "LabelID" : "Student_StuID",
              "ChildAssociations" : [ ],
              "ColumnID" : "64532354-2f7b-4f33-a47c-14c107bcfbf6",
              "Code" : "StuID",
              "Name" : "学号",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "a6b8264b-881a-4d80-977f-37319f711f06",
              "EnableRtrim" : true
            }, {
              "ID" : "8fea5632-a830-434c-a4a7-05d36e38f108",
              "LabelID" : "Student_Name",
              "ChildAssociations" : [ ],
              "ColumnID" : "3f0f3bda-86b9-44cd-be48-996412b3140b",
              "Code" : "Name",
              "Name" : "姓名",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "5becd676-0d2a-4ec6-97ac-f6b02f9c68db",
              "EnableRtrim" : true
            } ],
            "RefModelID" : "285482cb-3b3a-4253-ab08-d1e029fc63e9",
            "RefModelName" : "学生",
            "RefModelCode" : "Student",
            "RefObjectID" : "5a36a6f0-20a5-4c11-b2be-c4ba7024448d",
            "RefObjectCode" : "Student",
            "RefObjectName" : "学生",
            "KeyCollection" : [ {
              "RefDataModelName" : "",
              "SourceElement" : "d07999f3-2f0e-4411-ba2c-eadda7810e61",
              "SourceElementDisplay" : "主键",
              "TargetElement" : "378a17ed-bee1-46a8-aab5-6b74a75198ba",
              "TargetElementDisplay" : "学生"
            } ],
            "AssoModelInfo" : {
              "MainObjCode" : "Student",
              "ModelConfigId" : "Inspur.GS.StudentSystem.BasicData.Student.Student.Back.Student"
            }
          } ],
          "ColumnID" : "76e29ac5-9f16-410a-9745-14dd5e689670",
          "Code" : "Student",
          "Name" : "学生",
          "ObjectType" : "Association",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        } ],
        "RefObjectName" : "5002bdb5-1dc1-4cbd-9bcd-98e38b71b1e2",
        "ObjectType" : 1,
        "ColumnGenerateID" : {
          "ColumnParameters" : [ ],
          "ElementID" : "7d6adf1a-c6b6-47b9-9859-1e80e54e761d",
          "GenerateType" : "Guid"
        },
        "BelongModelID" : "e8368448-321d-4f6e-9cd3-f346386c0c2a",
        "Keys" : [ {
          "RefDataModelName" : "",
          "SourceElement" : "5233b87f-149e-4278-aa25-3a34f1d79708",
          "SourceElementDisplay" : "上级对象主键",
          "TargetElement" : "e45b3f92-be64-46de-b25c-9d954143e623",
          "TargetElementDisplay" : "主键"
        } ],
        "ParentObjectID" : "15cfce12-2fce-42cf-936e-75a7e517f201"
      } ],
      "RefObjectName" : "aecb704d-f31b-4cb3-9e78-edc216f27b2f",
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "e45b3f92-be64-46de-b25c-9d954143e623",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "e8368448-321d-4f6e-9cd3-f346386c0c2a"
    },
    "Variables" : {
      "ID" : "ce3594aa-f4d9-4a30-89fc-60b05e2c439e",
      "Code" : "ClassesVariable",
      "Name" : "班级变量",
      "I18nResourceInfoPrefix" : ""
    },
    "ComponentAssemblyName" : "Inspur.GS.StudentSystem.BasicData.Classes.Classes.Back"
  },
  "ExtendRule" : null,
  "RelativePath" : "StudentSystem/BasicData/Classes/bo-classes-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}