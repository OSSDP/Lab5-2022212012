{
  "Header" : {
    "Code" : "Course",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.StudentSystem.BasicData.Course.Course.Back",
    "CertId" : null,
    "Name" : "课程",
    "FileName" : "Course.be",
    "BizobjectID" : "8dfb9025-2ca3-bf39-a387-675ee2fa073f",
    "Language" : null,
    "Extendable" : false,
    "ID" : "6a5b37af-f670-43fb-aa11-d590c2561eb5",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "bf246655-86dc-4efa-968c-9a3b76975c30",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.StudentSystem.BasicData.Course.Course.Back",
      "Code" : "Course.be",
      "Name" : "Course.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "8dfb9025-2ca3-bf39-a387-675ee2fa073f"
    }
  } ],
  "Content" : {
    "ID" : "6a5b37af-f670-43fb-aa11-d590c2561eb5",
    "Code" : "Course",
    "Name" : "课程",
    "GeneratingAssembly" : "Inspur.GS.StudentSystem.BasicData.Course.Course.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "83b318ac-5c8b-47c4-b8ee-bb5f1f31b0bc"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "83258c9a-35d0-48f6-9607-7e77b7cac6fa",
      "Code" : "Course",
      "Name" : "课程",
      "I18nResourceInfoPrefix" : "Inspur.GS.StudentSystem.BasicData.Course.Course.Back.Course.Course",
      "ContainElements" : [ {
        "ID" : "18cd10f5-7865-40c4-a6bd-25b19e85953b",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "1ff90995-b1db-4dd0-87d5-99afd7908d0d",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "83b318ac-5c8b-47c4-b8ee-bb5f1f31b0bc",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "1d16177a-6d25-473d-97dd-33d5435fd791",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "6bcf8d01-564b-4bb2-8862-b962eccf3f6e",
        "LabelID" : "CID",
        "ChildAssociations" : [ ],
        "ColumnID" : "6782e524-25b1-48f5-a581-e28e00480ed0",
        "Code" : "CID",
        "Name" : "课程编号",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "38d4b76f-e4d3-41fc-b200-5a84ac212091",
        "LabelID" : "Name",
        "ChildAssociations" : [ ],
        "ColumnID" : "083f006c-7b71-48c2-b4a6-023545e941ec",
        "Code" : "Name",
        "Name" : "课程名称",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "6f0326bb-a948-4eac-9bc1-e65de592513e",
        "LabelID" : "Sort",
        "ChildAssociations" : [ ],
        "ColumnID" : "b5fc1d15-0471-44b8-a959-4d8175df0f2b",
        "Code" : "Sort",
        "Name" : "课程类型",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.StudentSystem.BasicData.Course.Course.Back.Course.Course.Sort.basic",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "StringIndex" : "basic",
          "Value" : "basic",
          "Name" : "基础课"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.StudentSystem.BasicData.Course.Course.Back.Course.Course.Sort.central",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "StringIndex" : "central",
          "Value" : "central",
          "Name" : "核心课"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.StudentSystem.BasicData.Course.Course.Back.Course.Course.Sort.selected",
          "Index" : 2,
          "IsDefaultEnum" : false,
          "StringIndex" : "selected",
          "Value" : "selected",
          "Name" : "选修课"
        } ]
      }, {
        "ID" : "ebcc2912-8e8b-48c9-ae7c-4b06d7c9e9bb",
        "LabelID" : "Hour",
        "ChildAssociations" : [ ],
        "ColumnID" : "2785a276-0209-4141-a4e3-f68ccb4dcc4d",
        "Code" : "Hour",
        "Name" : "学时",
        "MDataType" : "Integer",
        "EnableRtrim" : true
      }, {
        "ID" : "8184f4bd-35ae-49b3-b55b-6daef2f5494d",
        "LabelID" : "Teacher",
        "ChildAssociations" : [ ],
        "ColumnID" : "539fab3c-4325-48ef-8224-c0635551fda3",
        "Code" : "Teacher",
        "Name" : "授课教师",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      } ],
      "RefObjectName" : "36a28057-51bd-4872-9e53-82e37da98932",
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "18cd10f5-7865-40c4-a6bd-25b19e85953b",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "6a5b37af-f670-43fb-aa11-d590c2561eb5"
    },
    "Variables" : {
      "ID" : "225aee31-8dd8-4975-894e-4c19e368704c",
      "Code" : "CourseVariable",
      "Name" : "课程变量",
      "I18nResourceInfoPrefix" : ""
    },
    "ComponentAssemblyName" : "Inspur.GS.StudentSystem.BasicData.Course.Course.Back"
  },
  "ExtendRule" : null,
  "RelativePath" : "StudentSystem/BasicData/Course/bo-course-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}