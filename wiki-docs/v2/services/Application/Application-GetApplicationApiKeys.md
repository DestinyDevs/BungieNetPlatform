<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/App/ApplicationApiKeys/{applicationId}/|https://www.bungie.net/Platform/App/ApplicationApiKeys/{applicationId}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Application|Endpoints#Application]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
applicationId | string | Yes | 

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/App/ApplicationApiKeys/{applicationId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Application.GetApplicationApiKeys]
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
