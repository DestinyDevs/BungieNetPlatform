<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The types of membership the Accounts system supports. This is the external facing enum used in place of the internal-only Bungie.SharedDefinitions.MembershipType.

## Schema
* **Schema Type:** Enum
* **Type:** integer
* **Format:** int32

## Enum Values
Identifier | Value | Description
---------- | ----- | -----------
None | 0 | 
TigerXbox | 1 | 
TigerPsn | 2 | 
TigerSteam | 3 | 
TigerBlizzard | 4 | 
TigerDemon | 10 | 
BungieNext | 254 | 
All | -1 | &quot;All&quot; is only valid for searching capabilities: you need to pass the actual matching BungieMembershipType for any query where you pass a known membershipId.

## References
1. https://bungie-net.github.io/multi/schema_BungieMembershipType.html#schema_BungieMembershipType
