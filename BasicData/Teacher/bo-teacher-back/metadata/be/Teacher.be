{
  "Header" : {
    "Code" : "Teacher",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.StudentSystem.BasicData.Teacher.Teacher.Back",
    "CertId" : null,
    "Name" : "教师",
    "FileName" : "Teacher.be",
    "BizobjectID" : "7214725a-58db-e484-599b-52594682995b",
    "Language" : null,
    "Extendable" : false,
    "ID" : "fa9729e7-6c9f-4c0c-b3f8-67cdc3ab375c",
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
      "ID" : "28fe8327-1655-4fec-95d4-e87120c39dba",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.StudentSystem.BasicData.Teacher.Teacher.Back",
      "Code" : "Teacher.be",
      "Name" : "Teacher.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "7214725a-58db-e484-599b-52594682995b"
    }
  } ],
  "Content" : {
    "ID" : "fa9729e7-6c9f-4c0c-b3f8-67cdc3ab375c",
    "Code" : "Teacher",
    "Name" : "教师",
    "GeneratingAssembly" : "Inspur.GS.StudentSystem.BasicData.Teacher.Teacher.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "c1455657-5da0-4b4b-b7ab-6672033890a3"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "5530309d-e8d1-446f-a194-c1f73059c573",
      "Code" : "Teacher",
      "Name" : "教师",
      "I18nResourceInfoPrefix" : "Inspur.GS.StudentSystem.BasicData.Teacher.Teacher.Back.Teacher.Teacher",
      "ContainElements" : [ {
        "ID" : "34cbd04d-16d2-4f4e-922c-302718c72035",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "6410fe9d-1821-49b4-a5d8-5bb663fb5702",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "c1455657-5da0-4b4b-b7ab-6672033890a3",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "96e70002-638c-415b-b847-9c3c41d735c1",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "a2679fe0-8ff1-48cd-a6f6-fc7b98d3a141",
        "LabelID" : "TID",
        "ChildAssociations" : [ ],
        "ColumnID" : "1dc48514-7cd0-45bf-8db0-ebc117fe1201",
        "Code" : "TID",
        "Name" : "工号",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "88b47702-49e6-4c37-8612-be01baeaab4c",
        "LabelID" : "Name",
        "ChildAssociations" : [ ],
        "ColumnID" : "22014bc5-e8f5-4077-a462-937a47957122",
        "Code" : "Name",
        "Name" : "姓名",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "6096b316-ac0b-4be5-8d28-bbaa84abe031",
        "LabelID" : "Gender",
        "ChildAssociations" : [ ],
        "ColumnID" : "e236a313-3a92-40ee-8551-aa8cc76a2a7c",
        "Code" : "Gender",
        "Name" : "性别",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.StudentSystem.BasicData.Teacher.Teacher.Back.Teacher.Teacher.Gender.man",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "StringIndex" : "man",
          "Value" : "man",
          "Name" : "男"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.StudentSystem.BasicData.Teacher.Teacher.Back.Teacher.Teacher.Gender.woman",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "StringIndex" : "woman",
          "Value" : "woman",
          "Name" : "女"
        } ]
      }, {
        "ID" : "5f5d5742-b7a6-4c12-a649-4782aa9b8d00",
        "LabelID" : "Tel",
        "ChildAssociations" : [ ],
        "ChildElements" : [ {
          "ID" : "924c2ffd-9ce4-4b47-8dc1-b046d93be5c1",
          "LabelID" : "Tel_PhoneNumber",
          "I18nResourceInfoPrefix" : "",
          "ChildAssociations" : [ ],
          "ColumnID" : "03445b53-65c6-4963-ace3-4eb9c1903eae",
          "Code" : "Tel_PhoneNumber",
          "Name" : "手机电话号码",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        } ],
        "ColumnID" : "03445b53-65c6-4963-ace3-4eb9c1903eae",
        "Code" : "Tel",
        "Name" : "联系方式",
        "MDataType" : "String",
        "Length" : 36,
        "IsUdt" : true,
        "EnableRtrim" : true,
        "UdtID" : "b0c5529f-88d1-4769-bb7a-5490d92893fa",
        "UdtName" : "手机电话号码",
        "MappingRelation" : [ {
          "924c2ffd-9ce4-4b47-8dc1-b046d93be5c1" : "b0c5529f-88d1-4769-bb7a-5490d92893fa"
        } ]
      } ],
      "RefObjectName" : "888a15f1-c7b6-40f5-93ad-495003226285",
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "34cbd04d-16d2-4f4e-922c-302718c72035",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "fa9729e7-6c9f-4c0c-b3f8-67cdc3ab375c"
    },
    "Variables" : {
      "ID" : "abdb7c67-9e5a-4eac-bedb-f0dcb3cdce33",
      "Code" : "TeacherVariable",
      "Name" : "教师变量",
      "I18nResourceInfoPrefix" : ""
    },
    "ComponentAssemblyName" : "Inspur.GS.StudentSystem.BasicData.Teacher.Teacher.Back"
  },
  "ExtendRule" : null,
  "RelativePath" : "StudentSystem/BasicData/Teacher/bo-teacher-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}