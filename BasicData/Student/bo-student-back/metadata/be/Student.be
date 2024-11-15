{
  "Header" : {
    "Code" : "Student",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.StudentSystem.BasicData.Student.Student.Back",
    "CertId" : null,
    "Name" : "学生",
    "FileName" : "Student.be",
    "BizobjectID" : "8cdaade6-4237-abbf-5006-00e3aff41bfb",
    "Language" : null,
    "Extendable" : false,
    "ID" : "285482cb-3b3a-4253-ab08-d1e029fc63e9",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "b0c5529f-88d1-4769-bb7a-5490d92893fa",
      "CertId" : null,
      "NameSpace" : "Inspur.Gsp.Common.CommonUdt",
      "Code" : "PhoneNumber",
      "Name" : "手机电话号码",
      "Type" : "UnifiedDataType",
      "BizobjectID" : "CommonUdt"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "39c2be48-bfdf-47e9-bc47-0a9e0ad87813",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.StudentSystem.BasicData.Student.Student.Back",
      "Code" : "Student.be",
      "Name" : "Student.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "8cdaade6-4237-abbf-5006-00e3aff41bfb"
    }
  } ],
  "Content" : {
    "ID" : "285482cb-3b3a-4253-ab08-d1e029fc63e9",
    "Code" : "Student",
    "Name" : "学生",
    "GeneratingAssembly" : "Inspur.GS.StudentSystem.BasicData.Student.Student.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "bdc81c12-4818-4aee-902d-79108ad97d45"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "5a36a6f0-20a5-4c11-b2be-c4ba7024448d",
      "Code" : "Student",
      "Name" : "学生",
      "I18nResourceInfoPrefix" : "Inspur.GS.StudentSystem.BasicData.Student.Student.Back.Student.Student",
      "ContainElements" : [ {
        "ID" : "d07999f3-2f0e-4411-ba2c-eadda7810e61",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "ab608a54-c3c4-4920-93db-2fe4ae77266b",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "bdc81c12-4818-4aee-902d-79108ad97d45",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "58dcc827-05ae-4f9d-81bd-a5abb94f6091",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "a6b8264b-881a-4d80-977f-37319f711f06",
        "LabelID" : "StuID",
        "ChildAssociations" : [ ],
        "ColumnID" : "64532354-2f7b-4f33-a47c-14c107bcfbf6",
        "Code" : "StuID",
        "Name" : "学号",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "5becd676-0d2a-4ec6-97ac-f6b02f9c68db",
        "LabelID" : "Name",
        "ChildAssociations" : [ ],
        "ColumnID" : "3f0f3bda-86b9-44cd-be48-996412b3140b",
        "Code" : "Name",
        "Name" : "姓名",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "4cc734d4-5d78-41c5-8b94-93acd6d9ef97",
        "LabelID" : "Gender",
        "ChildAssociations" : [ ],
        "ColumnID" : "eef6277c-9b6f-43a8-9a23-06f3bad1166b",
        "Code" : "Gender",
        "Name" : "性别",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.StudentSystem.BasicData.Student.Student.Back.Student.Student.Gender.man",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "StringIndex" : "man",
          "Value" : "man",
          "Name" : "男"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.StudentSystem.BasicData.Student.Student.Back.Student.Student.Gender.woman",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "StringIndex" : "woman",
          "Value" : "woman",
          "Name" : "女"
        } ]
      }, {
        "ID" : "11c741ab-4895-4e4c-adac-d223ecb5c211",
        "LabelID" : "Tel",
        "ChildAssociations" : [ ],
        "ChildElements" : [ {
          "ID" : "8da8d163-f0e1-480d-917f-67f6e7ce6c03",
          "LabelID" : "Tel_PhoneNumber",
          "I18nResourceInfoPrefix" : "",
          "ChildAssociations" : [ ],
          "ColumnID" : "cbab8239-145f-4819-8bf1-e3f731407ea9",
          "Code" : "Tel_PhoneNumber",
          "Name" : "手机电话号码",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        } ],
        "ColumnID" : "cbab8239-145f-4819-8bf1-e3f731407ea9",
        "Code" : "Tel",
        "Name" : "联系方式",
        "MDataType" : "String",
        "Length" : 36,
        "IsUdt" : true,
        "EnableRtrim" : true,
        "UdtID" : "b0c5529f-88d1-4769-bb7a-5490d92893fa",
        "UdtName" : "手机电话号码",
        "MappingRelation" : [ {
          "8da8d163-f0e1-480d-917f-67f6e7ce6c03" : "b0c5529f-88d1-4769-bb7a-5490d92893fa"
        } ]
      } ],
      "RefObjectName" : "be917c85-c442-41f6-8725-cdecbac1ee07",
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "d07999f3-2f0e-4411-ba2c-eadda7810e61",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "285482cb-3b3a-4253-ab08-d1e029fc63e9"
    },
    "Variables" : {
      "ID" : "e0a71169-310e-4812-aeea-7bf0dc03af97",
      "Code" : "StudentVariable",
      "Name" : "学生变量",
      "I18nResourceInfoPrefix" : ""
    },
    "ComponentAssemblyName" : "Inspur.GS.StudentSystem.BasicData.Student.Student.Back"
  },
  "ExtendRule" : null,
  "RelativePath" : "StudentSystem/BasicData/Student/bo-student-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}