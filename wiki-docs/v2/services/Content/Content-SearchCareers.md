<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/Content/Careers/Search/|https://www.bungie.net/Platform/Content/Careers/Search/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Content|Endpoints#Content]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
searchtext | string | No | 

## Example
### Request
GET https://www.bungie.net/Platform/Content/Careers/Search/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Content.SearchCareers]
    "Response": null,
    // Type: [[PlatformErrorCodes|Exceptions-PlatformErrorCodes]]:Enum
    "ErrorCode": 0,
    // Type: integer:int32
    "ThrottleSeconds": 0,
    // Type: string
    "ErrorStatus": "",
    // Type: string
    "Message": "",
    // Type: Dictionary&lt;string,string&gt;
    "MessageData": {
        "{string}": ""
    },
    // Type: object
}

```

## References
