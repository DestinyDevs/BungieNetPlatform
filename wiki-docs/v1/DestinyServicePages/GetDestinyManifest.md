<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns the current version of the [[manifest|Manifest]] as a json object.
* **URI:** [[/Destiny/Manifest/|https://www.bungie.net/Platform/Destiny/Manifest/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
None

### Query String Parameters
None

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Manifest/
```javascript
{
    "Response": {
        "version": "45194.15.05.13.1136-2",
        "mobileAssetContentPath": "\/common\/destiny_content\/sqlite\/asset\/asset_sql_content_7c23eefeaa0003dbc141793135dae141.content",
        "mobileGearAssetDataBases": [
            {
                "version": 0,
                "path": "\/common\/destiny_content\/sqlite\/asset\/asset_sql_content_7c23eefeaa0003dbc141793135dae141.content"
            },
            {
                "version": 1,
                "path": "\/common\/destiny_content\/sqlite\/asset\/asset_sql_content_039b4a64b68a7ae75a1d349c301e494c.content"
            }
        ],
        "mobileWorldContentPaths": {
            "en": "\/common\/destiny_content\/sqlite\/en\/world_sql_content_bafce26a4daec6ba6932e93bb5bd200c.content",
            "fr": "\/common\/destiny_content\/sqlite\/fr\/world_sql_content_50895b556dfee93a1f3d5a3817c18b19.content",
            "es": "\/common\/destiny_content\/sqlite\/es\/world_sql_content_d016ba5a8d83b1526212bddaefbd96c6.content",
            "de": "\/common\/destiny_content\/sqlite\/de\/world_sql_content_52fbe64346a0110511a86238aec07310.content",
            "it": "\/common\/destiny_content\/sqlite\/it\/world_sql_content_bd613d541a690aa21896eb4ce761e42f.content",
            "ja": "\/common\/destiny_content\/sqlite\/ja\/world_sql_content_884749c1a137aa80b701fb175eb9620d.content",
            "pt-br": "\/common\/destiny_content\/sqlite\/pt-br\/world_sql_content_7a0cc97e802c88dee6a0ecff953194f2.content"
        },
        "mobileGearCDN": {
            "Geometry": "\/common\/destiny_content\/geometry\/platform\/mobile\/geometry",
            "Texture": "\/common\/destiny_content\/geometry\/platform\/mobile\/textures",
            "PlateRegion": "\/common\/destiny_content\/geometry\/platform\/mobile\/plated_textures",
            "Gear": "\/common\/destiny_content\/geometry\/gear"
        }
    },
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {

    }
}
```

## References
1. http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Manifest%2f
