var bungieNetPlatform = bungieNetPlatform || {},
	Globals, Cookies;
(function() {
	var n = bungieNetPlatform;
	n.jsonpService = {
		GetCurrentUser: function(t, i, r, u, f) {
			var e = "",
				o;
			return e = n.addParam(e, "callback", t), o = n.buildUrl("/JSONP/GetBungieNetUser/", e, u), n.pushGa("JSONP", "GetCurrentUser", o), n.serviceLibrary.get(o, i, r, f)
		}
	}
})(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.applicationService = {
			GetAccessTokensFromCode: function(t, i, r, u, f) {
				var e = n.buildUrl("/App/GetAccessTokensFromCode/", "", u);
				return n.pushGa("App", "GetAccessTokensFromCode", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			GetAccessTokensFromRefreshToken: function(t, i, r, u, f) {
				var e = n.buildUrl("/App/GetAccessTokensFromRefreshToken/", "", u);
				return n.pushGa("App", "GetAccessTokensFromRefreshToken", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			CreateApplication: function(t, i, r, u, f) {
				var e = n.buildUrl("/App/CreateApplication/", "", u);
				return n.pushGa("App", "CreateApplication", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			GetApplication: function(t, i, r, u, f) {
				var e = n.buildUrl("/App/Application/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("App", "GetApplication", e), n.serviceLibrary.get(e, i, r, f)
			},
			EditApplication: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/App/EditApplication/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("App", "EditApplication", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			GetApplicationApiKeys: function(t, i, r, u, f) {
				var e = n.buildUrl("/App/ApplicationApiKeys/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("App", "GetApplicationApiKeys", e), n.serviceLibrary.get(e, i, r, f)
			},
			ChangeApiKeyStatus: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/App/ChangeApiKeyState/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("App", "ChangeApiKeyStatus", o), n.serviceLibrary.post(o, null, r, u, e)
			},
			CreateApiKey: function(t, i, r, u, f) {
				var e = n.buildUrl("/App/CreateApiKey/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("App", "CreateApiKey", e), n.serviceLibrary.post(e, null, i, r, f)
			},
			GetAuthorizations: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "currentPage", i), s = n.buildUrl("/App/Authorizations/" + encodeURIComponent(t) + "/", o, f), n.pushGa("App", "GetAuthorizations", s), n.serviceLibrary.get(s, r, u, e)
			},
			GetAuthorizationForUserAndApplication: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/App/Authorization/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("App", "GetAuthorizationForUserAndApplication", o), n.serviceLibrary.get(o, r, u, e)
			},
			RevokeAuthorization: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/App/RevokeAuthorization/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("App", "RevokeAuthorization", o), n.serviceLibrary.post(o, null, r, u, e)
			},
			ApplicationSearch: function(t, i, r, u, f) {
				var e = n.buildUrl("/App/Search/", "", u);
				return n.pushGa("App", "ApplicationSearch", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			PrivateApplicationSearch: function(t, i, r, u, f) {
				var e = n.buildUrl("/App/PrivateSearch/", "", u);
				return n.pushGa("App", "PrivateApplicationSearch", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			GetOAuthTokens: function(t, i, r, u, f) {
				var e = n.buildUrl("/App/oauth/token/", "", u);
				return n.pushGa("App", "GetOAuthTokens", e), n.serviceLibrary.post(e, t, i, r, f)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.userService = {
			CreateUser: function(t, i, r, u, f) {
				var e = n.buildUrl("/User/CreateUser/", "", u);
				return n.pushGa("User", "CreateUser", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			UpdateUser: function(t, i, r, u, f) {
				var e = n.buildUrl("/User/UpdateUser/", "", u);
				return n.pushGa("User", "UpdateUser", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			UpdateDestinyEmblemAvatar: function(t, i, r, u, f) {
				var e = n.buildUrl("/User/UpdateDestinyEmblemAvatar/", "", u);
				return n.pushGa("User", "UpdateDestinyEmblemAvatar", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			UpdateUserAdmin: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/User/UpdateUserAdmin/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("User", "UpdateUserAdmin", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			UpdateNotificationSetting: function(t, i, r, u, f) {
				var e = n.buildUrl("/User/Notification/Update/", "", u);
				return n.pushGa("User", "UpdateNotificationSetting", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			EditSuccessMessageFlags: function(t, i, r, u, f) {
				var e = n.buildUrl("/User/MessageFlags/Success/Update/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("User", "EditSuccessMessageFlags", e), n.serviceLibrary.post(e, null, i, r, f)
			},
			GetCurrentUser: function(t, i, r, u) {
				var f = n.buildUrl("/User/GetBungieNetUser/", "", r);
				return n.pushGa("User", "GetCurrentUser", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetCountsForCurrentUser: function(t, i, r, u) {
				var f = n.buildUrl("/User/GetCounts/", "", r);
				return n.pushGa("User", "GetCountsForCurrentUser", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetCurrentBungieNetUser: function(t, i, r, u) {
				var f = n.buildUrl("/User/GetCurrentBungieNetUser/", "", r);
				return n.pushGa("User", "GetCurrentBungieNetUser", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetBungieNetUserById: function(t, i, r, u, f) {
				var e = n.buildUrl("/User/GetBungieNetUserById/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("User", "GetBungieNetUserById", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetUserAliases: function(t, i, r, u, f) {
				var e = n.buildUrl("/User/GetUserAliases/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("User", "GetUserAliases", e), n.serviceLibrary.get(e, i, r, f)
			},
			SearchUsers: function(t, i, r, u, f) {
				var e = "",
					o;
				return e = n.addParam(e, "q", t), o = n.buildUrl("/User/SearchUsers/", e, u), n.pushGa("User", "SearchUsers", o), n.serviceLibrary.get(o, i, r, f)
			},
			GetBungieAccount: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/User/GetBungieAccount/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("User", "GetBungieAccount", o), n.serviceLibrary.get(o, r, u, e)
			},
			GetCurrentBungieAccount: function(t, i, r, u) {
				var f = n.buildUrl("/User/GetCurrentBungieAccount/", "", r);
				return n.pushGa("User", "GetCurrentBungieAccount", f), n.serviceLibrary.get(f, t, i, u)
			},
			SearchUsersPagedV2: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/User/SearchUsersPaged/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("User", "SearchUsersPagedV2", s), n.serviceLibrary.get(s, u, f, o)
			},
			GetNotificationSettings: function(t, i, r, u) {
				var f = n.buildUrl("/User/GetNotificationSettings/", "", r);
				return n.pushGa("User", "GetNotificationSettings", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetCredentialTypesForAccount: function(t, i, r, u) {
				var f = n.buildUrl("/User/GetCredentialTypesForAccount/", "", r);
				return n.pushGa("User", "GetCredentialTypesForAccount", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetAvailableAvatars: function(t, i, r, u) {
				var f = n.buildUrl("/User/GetAvailableAvatars/", "", r);
				return n.pushGa("User", "GetAvailableAvatars", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetAvailableAvatarsAdmin: function(t, i, r, u, f) {
				var e = n.buildUrl("/User/GetAvailableAvatarsAdmin/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("User", "GetAvailableAvatarsAdmin", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetAvailableThemes: function(t, i, r, u) {
				var f = n.buildUrl("/User/GetAvailableThemes/", "", r);
				return n.pushGa("User", "GetAvailableThemes", f), n.serviceLibrary.get(f, t, i, u)
			},
			RegisterMobileAppPair: function(t, i, r, u) {
				var f = n.buildUrl("/User/RegisterMobileAppPair/", "", r);
				return n.pushGa("User", "RegisterMobileAppPair", f), n.serviceLibrary.post(f, null, t, i, u)
			},
			UnregisterMobileAppPair: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/User/UnregisterMobileAppPair/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("User", "UnregisterMobileAppPair", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			UpdateStateInfoForMobileAppPair: function(t, i, r, u, f) {
				var e = n.buildUrl("/User/UpdateStateInfoForMobileAppPair/", "", u);
				return n.pushGa("User", "UpdateStateInfoForMobileAppPair", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			GetMobileAppPairings: function(t, i, r, u) {
				var f = n.buildUrl("/User/GetMobileAppPairings/", "", r);
				return n.pushGa("User", "GetMobileAppPairings", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetMobileAppPairingsUncached: function(t, i, r, u) {
				var f = n.buildUrl("/User/GetMobileAppPairingsUncached/", "", r);
				return n.pushGa("User", "GetMobileAppPairingsUncached", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetSignOutUrl: function(t, i, r, u) {
				var f = n.buildUrl("/User/GetSignOutUrl/", "", r);
				return n.pushGa("User", "GetSignOutUrl", f), n.serviceLibrary.get(f, t, i, u)
			},
			LinkOverride: function(t, i, r, u, f) {
				var e = n.buildUrl("/User/LinkOverride/", "", u);
				return n.pushGa("User", "LinkOverride", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			GetUserMembershipIds: function(t, i, r, u, f) {
				var e = "",
					o;
				return e = n.addParam(e, "excludebungienet", t), o = n.buildUrl("/User/GetMembershipIds/", e, u), n.pushGa("User", "GetUserMembershipIds", o), n.serviceLibrary.get(o, i, r, f)
			},
			GetMembershipDataById: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/User/GetMembershipsById/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("User", "GetMembershipDataById", o), n.serviceLibrary.get(o, r, u, e)
			},
			GetMembershipDataForCurrentUser: function(t, i, r, u) {
				var f = n.buildUrl("/User/GetMembershipsForCurrentUser/", "", r);
				return n.pushGa("User", "GetMembershipDataForCurrentUser", f), n.serviceLibrary.get(f, t, i, u)
			},
			SetAcknowledged: function(t, i, r, u, f) {
				var e = n.buildUrl("/User/Acknowledged/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("User", "SetAcknowledged", e), n.serviceLibrary.post(e, null, i, r, f)
			},
			GetPlatformApiKeysForUser: function(t, i, r, u) {
				var f = n.buildUrl("/User/GetPlatformApiKeysForUser/", "", r);
				return n.pushGa("User", "GetPlatformApiKeysForUser", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetPartnerships: function(t, i, r, u, f) {
				var e = n.buildUrl("/User/" + encodeURIComponent(t) + "/Partnerships/", "", u);
				return n.pushGa("User", "GetPartnerships", e), n.serviceLibrary.get(e, i, r, f)
			},
			RemovePartnership: function(t, i, r, u, f) {
				var e = n.buildUrl("/User/Partnerships/" + encodeURIComponent(t) + "/Remove/", "", u);
				return n.pushGa("User", "RemovePartnership", e), n.serviceLibrary.post(e, null, i, r, f)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.messageService = {
			GetConversationByIdV2: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "format", i), s = n.buildUrl("/Message/GetConversationByIdV2/" + encodeURIComponent(t) + "/", o, f), n.pushGa("Message", "GetConversationByIdV2", s), n.serviceLibrary.get(s, r, u, e)
			},
			GetConversationWithMemberIdV2: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "format", i), s = n.buildUrl("/Message/GetConversationWithMemberV2/" + encodeURIComponent(t) + "/", o, f), n.pushGa("Message", "GetConversationWithMemberIdV2", s), n.serviceLibrary.get(s, r, u, e)
			},
			GetConversationThreadV3: function(t, i, r, u, f, e, o, s, h) {
				var c = "",
					l;
				return c = n.addParam(c, "format", r), c = n.addParam(c, "before", u), c = n.addParam(c, "after", f), l = n.buildUrl("/Message/GetConversationThreadV3/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", c, s), n.pushGa("Message", "GetConversationThreadV3", l), n.serviceLibrary.get(l, e, o, h)
			},
			SaveMessageV3: function(t, i, r, u, f) {
				var e = n.buildUrl("/Message/SaveMessageV3/", "", u);
				return n.pushGa("Message", "SaveMessageV3", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			SaveMessageV4: function(t, i, r, u, f) {
				var e = n.buildUrl("/Message/SaveMessageV4/", "", u);
				return n.pushGa("Message", "SaveMessageV4", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			UserIsTyping: function(t, i, r, u, f) {
				var e = n.buildUrl("/Message/UserIsTyping/", "", u);
				return n.pushGa("Message", "UserIsTyping", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			CreateConversation: function(t, i, r, u, f) {
				var e = n.buildUrl("/Message/CreateConversation/", "", u);
				return n.pushGa("Message", "CreateConversation", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			CreateConversationV2: function(t, i, r, u, f) {
				var e = n.buildUrl("/Message/CreateConversationV2/", "", u);
				return n.pushGa("Message", "CreateConversationV2", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			GetConversationsV5: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "format", i), s = n.buildUrl("/Message/GetConversationsV5/" + encodeURIComponent(t) + "/", o, f), n.pushGa("Message", "GetConversationsV5", s), n.serviceLibrary.get(s, r, u, e)
			},
			GetGroupConversations: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "format", i), s = n.buildUrl("/Message/GetGroupConversations/" + encodeURIComponent(t) + "/", o, f), n.pushGa("Message", "GetGroupConversations", s), n.serviceLibrary.get(s, r, u, e)
			},
			GetGroupConversationsV2: function(t, i, r, u, f, e, o) {
				var s = "",
					h;
				return s = n.addParam(s, "format", r), h = n.buildUrl("/Message/GetGroupConversationsV2/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", s, e), n.pushGa("Message", "GetGroupConversationsV2", h), n.serviceLibrary.get(h, u, f, o)
			},
			GetTotalConversationCount: function(t, i, r, u) {
				var f = n.buildUrl("/Message/GetTotalConversationCount/", "", r);
				return n.pushGa("Message", "GetTotalConversationCount", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetUnreadConversationCountV4: function(t, i, r, u) {
				var f = n.buildUrl("/Message/GetUnreadConversationCountV4/", "", r);
				return n.pushGa("Message", "GetUnreadConversationCountV4", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetUnreadGroupConversationCount: function(t, i, r, u) {
				var f = n.buildUrl("/Message/GetUnreadGroupConversationCount/", "", r);
				return n.pushGa("Message", "GetUnreadGroupConversationCount", f), n.serviceLibrary.get(f, t, i, u)
			},
			CheckGroupConversationReadState: function(t, i, r, u, f) {
				var e = n.buildUrl("/Message/CheckGroupConversationReadState/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Message", "CheckGroupConversationReadState", e), n.serviceLibrary.get(e, i, r, f)
			},
			LeaveConversation: function(t, i, r, u, f) {
				var e = n.buildUrl("/Message/LeaveConversation/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Message", "LeaveConversation", e), n.serviceLibrary.get(e, i, r, f)
			},
			ReviewInvitations: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Message/Invitations/ReviewListDirect/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Message", "ReviewInvitations", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			ReviewAllInvitations: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Message/Invitations/ReviewAllDirect/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Message", "ReviewAllInvitations", o), n.serviceLibrary.post(o, null, r, u, e)
			},
			ReviewInvitationDirect: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Message/Invitations/ReviewDirect/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Message", "ReviewInvitationDirect", o), n.serviceLibrary.post(o, null, r, u, e)
			},
			ReviewInvitation: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/Message/Invitations/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("Message", "ReviewInvitation", s), n.serviceLibrary.post(s, null, u, f, o)
			},
			GetAllianceJoinInvitations: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Message/AllianceInvitations/RequestsToJoinYourGroup/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Message", "GetAllianceJoinInvitations", o), n.serviceLibrary.get(o, r, u, e)
			},
			GetAllianceInvitedToJoinInvitations: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Message/AllianceInvitations/InvitationsToJoinAnotherGroup/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Message", "GetAllianceInvitedToJoinInvitations", o), n.serviceLibrary.get(o, r, u, e)
			},
			GetInvitationDetails: function(t, i, r, u, f) {
				var e = n.buildUrl("/Message/Invitations/" + encodeURIComponent(t) + "/Details/", "", u);
				return n.pushGa("Message", "GetInvitationDetails", e), n.serviceLibrary.get(e, i, r, f)
			},
			UpdateConversationLastViewedTimestamp: function(t, i, r, u) {
				var f = n.buildUrl("/Message/Conversations/UpdateLastViewedTimestamp/", "", r);
				return n.pushGa("Message", "UpdateConversationLastViewedTimestamp", f), n.serviceLibrary.post(f, null, t, i, u)
			},
			ModerateGroupWall: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Message/ModerateGroupWall/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Message", "ModerateGroupWall", o), n.serviceLibrary.post(o, null, r, u, e)
			},
			SetUserNotifyPreferenceForConversation: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Message/SetUserNotifyPreferenceForConversation/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Message", "SetUserNotifyPreferenceForConversation", o), n.serviceLibrary.post(o, null, r, u, e)
			},
			GetConversationsV4: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "format", i), s = n.buildUrl("/Message/GetConversationsV4/" + encodeURIComponent(t) + "/", o, f), n.pushGa("Message", "GetConversationsV4", s), n.serviceLibrary.get(s, r, u, e)
			},
			GetUnreadConversationCountV3: function(t, i, r, u) {
				var f = n.buildUrl("/Message/GetUnreadConversationCountV3/", "", r);
				return n.pushGa("Message", "GetUnreadConversationCountV3", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetUnreadConversationCountV2: function(t, i, r, u) {
				var f = n.buildUrl("/Message/GetUnreadPrivateConversationCount/", "", r);
				return n.pushGa("Message", "GetUnreadConversationCountV2", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetConversationById: function(t, i, r, u, f) {
				var e = n.buildUrl("/Message/GetConversationById/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Message", "GetConversationById", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetConversationWithMemberId: function(t, i, r, u, f) {
				var e = n.buildUrl("/Message/GetConversationWithMember/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Message", "GetConversationWithMemberId", e), n.serviceLibrary.get(e, i, r, f)
			},
			SaveMessageV2: function(t, i, r, u, f) {
				var e = n.buildUrl("/Message/SaveMessageV2/", "", u);
				return n.pushGa("Message", "SaveMessageV2", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			GetConversationsV2: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Message/GetConversationsV2/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Message", "GetConversationsV2", o), n.serviceLibrary.get(o, r, u, e)
			},
			GetConversationsV3: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Message/GetConversationsV3/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Message", "GetConversationsV3", o), n.serviceLibrary.get(o, r, u, e)
			},
			GetConversationThreadV2: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/Message/GetConversationThreadV2/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("Message", "GetConversationThreadV2", s), n.serviceLibrary.get(s, u, f, o)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.notificationService = {
			GetRecentNotifications: function(t, i, r, u, f) {
				var e = "",
					o;
				return e = n.addParam(e, "format", t), o = n.buildUrl("/Notification/GetRecent/", e, u), n.pushGa("Notification", "GetRecentNotifications", o), n.serviceLibrary.get(o, i, r, f)
			},
			GetRecentNotificationCount: function(t, i, r, u) {
				var f = n.buildUrl("/Notification/GetCount/", "", r);
				return n.pushGa("Notification", "GetRecentNotificationCount", f), n.serviceLibrary.get(f, t, i, u)
			},
			ResetNotification: function(t, i, r, u) {
				var f = n.buildUrl("/Notification/Reset/", "", r);
				return n.pushGa("Notification", "ResetNotification", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetRealTimeEvents: function(t, i, r, u, f, e, o) {
				var s = "",
					h;
				return s = n.addParam(s, "timeout", r), h = n.buildUrl("/Notification/Events/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", s, e), n.pushGa("Notification", "GetRealTimeEvents", h), n.serviceLibrary.get(h, u, f, o)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.contentService = {
			GetContentType: function(t, i, r, u, f) {
				var e = n.buildUrl("/Content/GetContentType/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Content", "GetContentType", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetContentById: function(t, i, r, u, f, e, o) {
				var s = "",
					h;
				return s = n.addParam(s, "head", r), h = n.buildUrl("/Content/GetContentById/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", s, e), n.pushGa("Content", "GetContentById", h), n.serviceLibrary.get(h, u, f, o)
			},
			GetContentByTagAndType: function(t, i, r, u, f, e, o, s) {
				var h = "",
					c;
				return h = n.addParam(h, "head", u), c = n.buildUrl("/Content/GetContentByTagAndType/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", h, o), n.pushGa("Content", "GetContentByTagAndType", c), n.serviceLibrary.get(c, f, e, s)
			},
			SearchContentEx: function(t, i, r, u, f, e, o) {
				var s = "",
					h;
				return s = n.addParam(s, "head", r), h = n.buildUrl("/Content/SearchEx/" + encodeURIComponent(i) + "/", s, e), n.pushGa("Content", "SearchContentEx", h), n.serviceLibrary.post(h, t, u, f, o)
			},
			SearchContentWithText: function(t, i, r, u, f, e, o, s, h, c) {
				var l = "",
					a;
				return l = n.addParam(l, "head", i), l = n.addParam(l, "ctype", r), l = n.addParam(l, "tag", u), l = n.addParam(l, "currentpage", f), l = n.addParam(l, "searchtext", e), a = n.buildUrl("/Content/Search/" + encodeURIComponent(t) + "/", l, h), n.pushGa("Content", "SearchContentWithText", a), n.serviceLibrary.get(a, o, s, c)
			},
			SearchContentByTagAndType: function(t, i, r, u, f, e, o, s, h, c) {
				var l = "",
					a;
				return l = n.addParam(l, "head", u), l = n.addParam(l, "currentpage", f), l = n.addParam(l, "itemsperpage", e), a = n.buildUrl("/Content/SearchContentByTagAndType/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", l, h), n.pushGa("Content", "SearchContentByTagAndType", a), n.serviceLibrary.get(a, o, s, c)
			},
			GetHomepageContent: function(t, i, r, u, f) {
				var e = n.buildUrl("/Content/Site/Homepage/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Content", "GetHomepageContent", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetHomepageContentV2: function(t, i, r, u) {
				var f = n.buildUrl("/Content/Site/Homepage/V2/", "", r);
				return n.pushGa("Content", "GetHomepageContentV2", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetJobs: function(t, i, r, u, f) {
				var e = n.buildUrl("/Content/Site/Jobs/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Content", "GetJobs", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetPublications: function(t, i, r, u, f) {
				var e = n.buildUrl("/Content/Site/Publications/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Content", "GetPublications", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetNews: function(t, i, r, u, f, e, o, s) {
				var h = "",
					c;
				return h = n.addParam(h, "itemsperpage", r), h = n.addParam(h, "currentpage", u), c = n.buildUrl("/Content/Site/News/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", h, o), n.pushGa("Content", "GetNews", c), n.serviceLibrary.get(c, f, e, s)
			},
			GetDestinyContent: function(t, i, r, u, f) {
				var e = n.buildUrl("/Content/Site/Destiny/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Content", "GetDestinyContent", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetDestinyContentV2: function(t, i, r, u, f) {
				var e = n.buildUrl("/Content/Site/Destiny/V2/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Content", "GetDestinyContentV2", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetPromoWidget: function(t, i, r, u) {
				var f = n.buildUrl("/Content/Site/Destiny/Promo/", "", r);
				return n.pushGa("Content", "GetPromoWidget", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetFeaturedArticle: function(t, i, r, u) {
				var f = n.buildUrl("/Content/Site/Featured/", "", r);
				return n.pushGa("Content", "GetFeaturedArticle", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetCareers: function(t, i, r, u) {
				var f = n.buildUrl("/Content/Careers/", "", r);
				return n.pushGa("Content", "GetCareers", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetCareer: function(t, i, r, u, f) {
				var e = n.buildUrl("/Content/Careers/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Content", "GetCareer", e), n.serviceLibrary.get(e, i, r, f)
			},
			SearchCareers: function(t, i, r, u, f) {
				var e = "",
					o;
				return e = n.addParam(e, "searchtext", t), o = n.buildUrl("/Content/Careers/Search/", e, u), n.pushGa("Content", "SearchCareers", o), n.serviceLibrary.get(o, i, r, f)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.externalSocialService = {
			GetAggregatedSocialFeed: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "types", i), s = n.buildUrl("/ExternalSocial/GetAggregatedSocialFeed/" + encodeURIComponent(t) + "/", o, f), n.pushGa("ExternalSocial", "GetAggregatedSocialFeed", s), n.serviceLibrary.get(s, r, u, e)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.surveyService = {
			GetSurvey: function(t, i, r, u) {
				var f = n.buildUrl("/Survey/GetSurvey/", "", r);
				return n.pushGa("Survey", "GetSurvey", f), n.serviceLibrary.get(f, t, i, u)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.forumService = {
			CreatePost: function(t, i, r, u, f) {
				var e = n.buildUrl("/Forum/CreatePost/", "", u);
				return n.pushGa("Forum", "CreatePost", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			CreateContentComment: function(t, i, r, u, f) {
				var e = n.buildUrl("/Forum/CreateContentComment/", "", u);
				return n.pushGa("Forum", "CreateContentComment", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			EditPost: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Forum/EditPost/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Forum", "EditPost", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			DeletePost: function(t, i, r, u, f) {
				var e = n.buildUrl("/Forum/DeletePost/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Forum", "DeletePost", e), n.serviceLibrary.post(e, null, i, r, f)
			},
			RatePost: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Forum/RatePost/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Forum", "RatePost", o), n.serviceLibrary.post(o, null, r, u, e)
			},
			ModeratePost: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Forum/Post/" + encodeURIComponent(i) + "/Moderate/", "", f);
				return n.pushGa("Forum", "ModeratePost", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			ModerateTag: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Forum/Tags/" + encodeURIComponent(i) + "/Moderate/", "", f);
				return n.pushGa("Forum", "ModerateTag", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			ModerateGroupPost: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/Forum/Post/" + encodeURIComponent(i) + "/GroupModerate/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("Forum", "ModerateGroupPost", s), n.serviceLibrary.post(s, t, u, f, o)
			},
			GetTopicsPaged: function(t, i, r, u, f, e, o, s, h, c, l, a) {
				var v = "",
					y;
				return v = n.addParam(v, "tagstring", o), v = n.addParam(v, "locales", s), y = n.buildUrl("/Forum/GetTopicsPaged/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/" + encodeURIComponent(f) + "/" + encodeURIComponent(e) + "/", v, l), n.pushGa("Forum", "GetTopicsPaged", y), n.serviceLibrary.get(y, h, c, a)
			},
			GetCoreTopicsPaged: function(t, i, r, u, f, e, o, s, h) {
				var c = "",
					l;
				return c = n.addParam(c, "locales", f), l = n.buildUrl("/Forum/GetCoreTopicsPaged/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", c, s), n.pushGa("Forum", "GetCoreTopicsPaged", l), n.serviceLibrary.get(l, e, o, h)
			},
			GetPostsThreadedPaged: function(t, i, r, u, f, e, o, s, h, c, l, a) {
				var v = "",
					y;
				return v = n.addParam(v, "showbanned", s), y = n.buildUrl("/Forum/GetPostsThreadedPaged/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/" + encodeURIComponent(f) + "/" + encodeURIComponent(e) + "/" + encodeURIComponent(o) + "/", v, l), n.pushGa("Forum", "GetPostsThreadedPaged", y), n.serviceLibrary.get(y, h, c, a)
			},
			GetPostsThreadedPagedFromChild: function(t, i, r, u, f, e, o, s, h, c, l) {
				var a = "",
					v;
				return a = n.addParam(a, "showbanned", o), v = n.buildUrl("/Forum/GetPostsThreadedPagedFromChild/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/" + encodeURIComponent(f) + "/" + encodeURIComponent(e) + "/", a, c), n.pushGa("Forum", "GetPostsThreadedPagedFromChild", v), n.serviceLibrary.get(v, s, h, l)
			},
			GetPostAndParent: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "showbanned", i), s = n.buildUrl("/Forum/GetPostAndParent/" + encodeURIComponent(t) + "/", o, f), n.pushGa("Forum", "GetPostAndParent", s), n.serviceLibrary.get(s, r, u, e)
			},
			GetPostAndParentAwaitingApproval: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "showbanned", i), s = n.buildUrl("/Forum/GetPostAndParentAwaitingApproval/" + encodeURIComponent(t) + "/", o, f), n.pushGa("Forum", "GetPostAndParentAwaitingApproval", s), n.serviceLibrary.get(s, r, u, e)
			},
			GetPopularTags: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "quantity", t), o = n.addParam(o, "tagsSinceDate", i), s = n.buildUrl("/Forum/GetPopularTags/", o, f), n.pushGa("Forum", "GetPopularTags", s), n.serviceLibrary.get(s, r, u, e)
			},
			GetForumTagCountEstimate: function(t, i, r, u, f) {
				var e = n.buildUrl("/Forum/GetForumTagCountEstimate/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Forum", "GetForumTagCountEstimate", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetTopicForContent: function(t, i, r, u, f) {
				var e = n.buildUrl("/Forum/GetTopicForContent/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Forum", "GetTopicForContent", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetForumTagSuggestions: function(t, i, r, u, f) {
				var e = "",
					o;
				return e = n.addParam(e, "partialtag", t), o = n.buildUrl("/Forum/GetForumTagSuggestions/", e, u), n.pushGa("Forum", "GetForumTagSuggestions", o), n.serviceLibrary.get(o, i, r, f)
			},
			MarkReplyAsAnswer: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Forum/MarkReplyAsAnswer/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Forum", "MarkReplyAsAnswer", o), n.serviceLibrary.post(o, null, r, u, e)
			},
			UnmarkReplyAsAnswer: function(t, i, r, u, f) {
				var e = n.buildUrl("/Forum/UnmarkReplyAsAnswer/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Forum", "UnmarkReplyAsAnswer", e), n.serviceLibrary.post(e, null, i, r, f)
			},
			PollVote: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Forum/Poll/Vote/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Forum", "PollVote", o), n.serviceLibrary.post(o, null, r, u, e)
			},
			GetPoll: function(t, i, r, u, f) {
				var e = n.buildUrl("/Forum/Poll/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Forum", "GetPoll", e), n.serviceLibrary.get(e, i, r, f)
			},
			ChangePinState: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Forum/ChangePinState/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Forum", "ChangePinState", o), n.serviceLibrary.post(o, null, r, u, e)
			},
			ChangeLockState: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Forum/ChangeLockState/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Forum", "ChangeLockState", o), n.serviceLibrary.post(o, null, r, u, e)
			},
			JoinFireteamThread: function(t, i, r, u, f) {
				var e = n.buildUrl("/Forum/Recruit/Join/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Forum", "JoinFireteamThread", e), n.serviceLibrary.post(e, null, i, r, f)
			},
			LeaveFireteamThread: function(t, i, r, u, f) {
				var e = n.buildUrl("/Forum/Recruit/Leave/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Forum", "LeaveFireteamThread", e), n.serviceLibrary.post(e, null, i, r, f)
			},
			KickBanFireteamApplicant: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Forum/Recruit/KickBan/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Forum", "KickBanFireteamApplicant", o), n.serviceLibrary.post(o, null, r, u, e)
			},
			ApproveFireteamThread: function(t, i, r, u, f) {
				var e = n.buildUrl("/Forum/Recruit/Approve/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Forum", "ApproveFireteamThread", e), n.serviceLibrary.post(e, null, i, r, f)
			},
			GetRecruitmentThreadSummaries: function(t, i, r, u, f) {
				var e = n.buildUrl("/Forum/Recruit/Summaries/", "", u);
				return n.pushGa("Forum", "GetRecruitmentThreadSummaries", e), n.serviceLibrary.post(e, t, i, r, f)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.activityService = {
			GetEntitiesFollowedByCurrentUser: function(t, i, r, u) {
				var f = n.buildUrl("/Activity/Following/", "", r);
				return n.pushGa("Activity", "GetEntitiesFollowedByCurrentUser", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetGroupsFollowedByCurrentUser: function(t, i, r, u) {
				var f = n.buildUrl("/Activity/Following/Groups/", "", r);
				return n.pushGa("Activity", "GetGroupsFollowedByCurrentUser", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetGroupsFollowedByUser: function(t, i, r, u, f) {
				var e = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Following/Groups/", "", u);
				return n.pushGa("Activity", "GetGroupsFollowedByUser", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetEntitiesFollowedByUser: function(t, i, r, u, f) {
				var e = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Following/", "", u);
				return n.pushGa("Activity", "GetEntitiesFollowedByUser", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetEntitiesFollowedByCurrentUserV2: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Activity/Following/V2/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Activity", "GetEntitiesFollowedByCurrentUserV2", o), n.serviceLibrary.get(o, r, u, e)
			},
			GetEntitiesFollowedByUserV2: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Following/V2/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("Activity", "GetEntitiesFollowedByUserV2", s), n.serviceLibrary.get(s, u, f, o)
			},
			GetGroupsFollowedPagedByCurrentUser: function(t, i, r, u, f) {
				var e = n.buildUrl("/Activity/Following/Groups/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Activity", "GetGroupsFollowedPagedByCurrentUser", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetGroupsFollowedPagedByUser: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Following/Groups/Paged/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Activity", "GetGroupsFollowedPagedByUser", o), n.serviceLibrary.get(o, r, u, e)
			},
			GetUsersFollowedByCurrentUser: function(t, i, r, u) {
				var f = n.buildUrl("/Activity/Following/Users/", "", r);
				return n.pushGa("Activity", "GetUsersFollowedByCurrentUser", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetFollowersOfUser: function(t, i, r, u, f, e, o) {
				var s = "",
					h;
				return s = n.addParam(s, "itemsperpage", i), s = n.addParam(s, "currentpage", r), h = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Followers/", s, e), n.pushGa("Activity", "GetFollowersOfUser", h), n.serviceLibrary.get(h, u, f, o)
			},
			FollowUser: function(t, i, r, u, f) {
				var e = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Follow/", "", u);
				return n.pushGa("Activity", "FollowUser", e), n.serviceLibrary.post(e, null, i, r, f)
			},
			UnfollowUser: function(t, i, r, u, f) {
				var e = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Unfollow/", "", u);
				return n.pushGa("Activity", "UnfollowUser", e), n.serviceLibrary.post(e, null, i, r, f)
			},
			GetLikeAndShareActivityForUser: function(t, i, r, u, f, e, o, s) {
				var h = "",
					c;
				return h = n.addParam(h, "itemsperpage", i), h = n.addParam(h, "currentpage", r), h = n.addParam(h, "format", u), c = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Activities/LikesAndShares/", h, o), n.pushGa("Activity", "GetLikeAndShareActivityForUser", c), n.serviceLibrary.get(c, f, e, s)
			},
			GetLikeAndShareActivityForUserV2: function(t, i, r, u, f, e, o) {
				var s = "",
					h;
				return s = n.addParam(s, "currentpage", i), s = n.addParam(s, "format", r), h = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Activities/LikesAndSharesV2/", s, e), n.pushGa("Activity", "GetLikeAndShareActivityForUserV2", h), n.serviceLibrary.get(h, u, f, o)
			},
			GetForumActivityForUser: function(t, i, r, u, f, e, o, s) {
				var h = "",
					c;
				return h = n.addParam(h, "itemsperpage", i), h = n.addParam(h, "currentpage", r), h = n.addParam(h, "format", u), c = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Activities/Forums/", h, o), n.pushGa("Activity", "GetForumActivityForUser", c), n.serviceLibrary.get(c, f, e, s)
			},
			GetForumActivityForUserV2: function(t, i, r, u, f, e, o) {
				var s = "",
					h;
				return s = n.addParam(s, "currentpage", i), s = n.addParam(s, "format", r), h = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Activities/ForumsV2/", s, e), n.pushGa("Activity", "GetForumActivityForUserV2", h), n.serviceLibrary.get(h, u, f, o)
			},
			GetLikeShareAndForumActivityForUser: function(t, i, r, u, f, e, o) {
				var s = "",
					h;
				return s = n.addParam(s, "currentpage", i), s = n.addParam(s, "format", r), h = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Activities/LikeShareAndForum/", s, e), n.pushGa("Activity", "GetLikeShareAndForumActivityForUser", h), n.serviceLibrary.get(h, u, f, o)
			},
			GetApplicationActivityForUser: function(t, i, r, u, f, e, o, s) {
				var h = "",
					c;
				return h = n.addParam(h, "currentpage", r), h = n.addParam(h, "format", u), c = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Activities/Application/" + encodeURIComponent(i) + "/", h, o), n.pushGa("Activity", "GetApplicationActivityForUser", c), n.serviceLibrary.get(c, f, e, s)
			},
			GetFollowersOfTag: function(t, i, r, u, f, e, o) {
				var s = "",
					h;
				return s = n.addParam(s, "tag", t), s = n.addParam(s, "itemsperpage", i), s = n.addParam(s, "currentpage", r), h = n.buildUrl("/Activity/Tag/Followers/", s, e), n.pushGa("Activity", "GetFollowersOfTag", h), n.serviceLibrary.get(h, u, f, o)
			},
			FollowTag: function(t, i, r, u, f) {
				var e = "",
					o;
				return e = n.addParam(e, "tag", t), o = n.buildUrl("/Activity/Tag/Follow/", e, u), n.pushGa("Activity", "FollowTag", o), n.serviceLibrary.post(o, null, i, r, f)
			},
			UnfollowTag: function(t, i, r, u, f) {
				var e = "",
					o;
				return e = n.addParam(e, "tag", t), o = n.buildUrl("/Activity/Tag/Unfollow/", e, u), n.pushGa("Activity", "UnfollowTag", o), n.serviceLibrary.post(o, null, i, r, f)
			},
			GetFriends: function(t, i, r, u) {
				var f = n.buildUrl("/Activity/Friends/", "", r);
				return n.pushGa("Activity", "GetFriends", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetFriendsAllNoPresence: function(t, i, r, u, f) {
				var e = n.buildUrl("/Activity/Friends/AllNoPresence/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Activity", "GetFriendsAllNoPresence", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetFriendsPaged: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Activity/Friends/Paged/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Activity", "GetFriendsPaged", o), n.serviceLibrary.get(o, r, u, e)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.groupV2Service = {
			GetAvailableAvatars: function(t, i, r, u) {
				var f = n.buildUrl("/GroupV2/GetAvailableAvatars/", "", r);
				return n.pushGa("GroupV2", "GetAvailableAvatars", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetAvailableThemes: function(t, i, r, u) {
				var f = n.buildUrl("/GroupV2/GetAvailableThemes/", "", r);
				return n.pushGa("GroupV2", "GetAvailableThemes", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetUserClanInviteSetting: function(t, i, r, u, f) {
				var e = n.buildUrl("/GroupV2/GetUserClanInviteSetting/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("GroupV2", "GetUserClanInviteSetting", e), n.serviceLibrary.get(e, i, r, f)
			},
			SetUserClanInviteSetting: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/GroupV2/SetUserClanInviteSetting/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("GroupV2", "SetUserClanInviteSetting", o), n.serviceLibrary.post(o, null, r, u, e)
			},
			GetRecommendedGroups: function(t, i, r, u, f) {
				var e = n.buildUrl("/GroupV2/Recommended/", "", u);
				return n.pushGa("GroupV2", "GetRecommendedGroups", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			GroupSearch: function(t, i, r, u, f) {
				var e = n.buildUrl("/GroupV2/Search/", "", u);
				return n.pushGa("GroupV2", "GroupSearch", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			GetGroup: function(t, i, r, u, f) {
				var e = n.buildUrl("/GroupV2/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("GroupV2", "GetGroup", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetGroupByName: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/GroupV2/Name/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("GroupV2", "GetGroupByName", o), n.serviceLibrary.get(o, r, u, e)
			},
			GetGroupOptionalConversations: function(t, i, r, u, f) {
				var e = n.buildUrl("/GroupV2/" + encodeURIComponent(t) + "/OptionalConversations/", "", u);
				return n.pushGa("GroupV2", "GetGroupOptionalConversations", e), n.serviceLibrary.get(e, i, r, f)
			},
			CreateGroup: function(t, i, r, u, f) {
				var e = n.buildUrl("/GroupV2/Create/", "", u);
				return n.pushGa("GroupV2", "CreateGroup", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			EditGroup: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Edit/", "", f);
				return n.pushGa("GroupV2", "EditGroup", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			EditClanBanner: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/EditClanBanner/", "", f);
				return n.pushGa("GroupV2", "EditClanBanner", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			EditFounderOptions: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/EditFounderOptions/", "", f);
				return n.pushGa("GroupV2", "EditFounderOptions", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			AddOptionalConversation: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/OptionalConversations/Add/", "", f);
				return n.pushGa("GroupV2", "AddOptionalConversation", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			EditOptionalConversation: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/OptionalConversations/Edit/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("GroupV2", "EditOptionalConversation", s), n.serviceLibrary.post(s, t, u, f, o)
			},
			GetMembersOfGroup: function(t, i, r, u, f, e, o, s) {
				var h = "",
					c;
				return h = n.addParam(h, "currentPage", i), h = n.addParam(h, "memberType", r), h = n.addParam(h, "nameSearch", u), c = n.buildUrl("/GroupV2/" + encodeURIComponent(t) + "/Members/", h, o), n.pushGa("GroupV2", "GetMembersOfGroup", c), n.serviceLibrary.get(c, f, e, s)
			},
			GetAdminsAndFounderOfGroup: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "currentPage", i), s = n.buildUrl("/GroupV2/" + encodeURIComponent(t) + "/AdminsAndFounder/", o, f), n.pushGa("GroupV2", "GetAdminsAndFounderOfGroup", s), n.serviceLibrary.get(s, r, u, e)
			},
			EditGroupMembership: function(t, i, r, u, f, e, o, s) {
				var h = n.buildUrl("/GroupV2/" + encodeURIComponent(t) + "/Members/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/SetMembershipType/" + encodeURIComponent(u) + "/", "", o);
				return n.pushGa("GroupV2", "EditGroupMembership", h), n.serviceLibrary.post(h, null, f, e, s)
			},
			KickMember: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/GroupV2/" + encodeURIComponent(t) + "/Members/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/Kick/", "", e);
				return n.pushGa("GroupV2", "KickMember", s), n.serviceLibrary.post(s, null, u, f, o)
			},
			BanMember: function(t, i, r, u, f, e, o, s) {
				var h = n.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Members/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/Ban/", "", o);
				return n.pushGa("GroupV2", "BanMember", h), n.serviceLibrary.post(h, t, f, e, s)
			},
			UnbanMember: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/GroupV2/" + encodeURIComponent(t) + "/Members/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/Unban/", "", e);
				return n.pushGa("GroupV2", "UnbanMember", s), n.serviceLibrary.post(s, null, u, f, o)
			},
			GetBannedMembersOfGroup: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "currentPage", i), s = n.buildUrl("/GroupV2/" + encodeURIComponent(t) + "/Banned/", o, f), n.pushGa("GroupV2", "GetBannedMembersOfGroup", s), n.serviceLibrary.get(s, r, u, e)
			},
			AbdicateFoundership: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/GroupV2/" + encodeURIComponent(t) + "/Admin/AbdicateFoundership/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("GroupV2", "AbdicateFoundership", s), n.serviceLibrary.post(s, null, u, f, o)
			},
			RequestGroupMembership: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Members/Apply/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("GroupV2", "RequestGroupMembership", s), n.serviceLibrary.post(s, t, u, f, o)
			},
			GetPendingMemberships: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "currentPage", i), s = n.buildUrl("/GroupV2/" + encodeURIComponent(t) + "/Members/Pending/", o, f), n.pushGa("GroupV2", "GetPendingMemberships", s), n.serviceLibrary.get(s, r, u, e)
			},
			GetInvitedIndividuals: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "currentPage", i), s = n.buildUrl("/GroupV2/" + encodeURIComponent(t) + "/Members/InvitedIndividuals/", o, f), n.pushGa("GroupV2", "GetInvitedIndividuals", s), n.serviceLibrary.get(s, r, u, e)
			},
			RescindGroupMembership: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/GroupV2/" + encodeURIComponent(t) + "/Members/Rescind/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("GroupV2", "RescindGroupMembership", o), n.serviceLibrary.post(o, null, r, u, e)
			},
			ApproveAllPending: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Members/ApproveAll/", "", f);
				return n.pushGa("GroupV2", "ApproveAllPending", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			DenyAllPending: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Members/DenyAll/", "", f);
				return n.pushGa("GroupV2", "DenyAllPending", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			ApprovePendingForList: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Members/ApproveList/", "", f);
				return n.pushGa("GroupV2", "ApprovePendingForList", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			ApprovePending: function(t, i, r, u, f, e, o, s) {
				var h = n.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Members/Approve/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", "", o);
				return n.pushGa("GroupV2", "ApprovePending", h), n.serviceLibrary.post(h, t, f, e, s)
			},
			DenyPendingForList: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Members/DenyList/", "", f);
				return n.pushGa("GroupV2", "DenyPendingForList", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			GetGroupsForMember: function(t, i, r, u, f, e, o, s) {
				var h = n.buildUrl("/GroupV2/User/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", "", o);
				return n.pushGa("GroupV2", "GetGroupsForMember", h), n.serviceLibrary.get(h, f, e, s)
			},
			GetPotentialGroupsForMember: function(t, i, r, u, f, e, o, s) {
				var h = n.buildUrl("/GroupV2/User/Potential/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", "", o);
				return n.pushGa("GroupV2", "GetPotentialGroupsForMember", h), n.serviceLibrary.get(h, f, e, s)
			},
			IndividualGroupInvite: function(t, i, r, u, f, e, o, s) {
				var h = n.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Members/IndividualInvite/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", "", o);
				return n.pushGa("GroupV2", "IndividualGroupInvite", h), n.serviceLibrary.post(h, t, f, e, s)
			},
			IndividualGroupInviteCancel: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/GroupV2/" + encodeURIComponent(t) + "/Members/IndividualInviteCancel/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("GroupV2", "IndividualGroupInviteCancel", s), n.serviceLibrary.post(s, null, u, f, o)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.ignoreService = {
			GetIgnoreStatusForPost: function(t, i, r, u, f) {
				var e = n.buildUrl("/Ignore/MyIgnores/Posts/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Ignore", "GetIgnoreStatusForPost", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetIgnoreStatusForUser: function(t, i, r, u, f) {
				var e = n.buildUrl("/Ignore/MyIgnores/Users/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Ignore", "GetIgnoreStatusForUser", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetIgnoresForUser: function(t, i, r, u, f) {
				var e = n.buildUrl("/Ignore/MyIgnores/", "", u);
				return n.pushGa("Ignore", "GetIgnoresForUser", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			IgnoreItem: function(t, i, r, u, f) {
				var e = n.buildUrl("/Ignore/Ignore/", "", u);
				return n.pushGa("Ignore", "IgnoreItem", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			UnignoreItem: function(t, i, r, u, f) {
				var e = n.buildUrl("/Ignore/Unignore/", "", u);
				return n.pushGa("Ignore", "UnignoreItem", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			MyLastReport: function(t, i, r, u) {
				var f = n.buildUrl("/Ignore/MyLastReport/", "", r);
				return n.pushGa("Ignore", "MyLastReport", f), n.serviceLibrary.get(f, t, i, u)
			},
			FlagItem: function(t, i, r, u, f) {
				var e = n.buildUrl("/Ignore/Flag/", "", u);
				return n.pushGa("Ignore", "FlagItem", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			GetReportContext: function(t, i, r, u, f) {
				var e = n.buildUrl("/Ignore/ReportContext/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Ignore", "GetReportContext", e), n.serviceLibrary.get(e, i, r, f)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.gameService = {
			GetPlayerGamesById: function(t, i, r, u, f) {
				var e = n.buildUrl("/Game/GetPlayerGamesById/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Game", "GetPlayerGamesById", e), n.serviceLibrary.get(e, i, r, f)
			},
			ReachModelSneakerNet: function(t, i, r, u, f) {
				var e = n.buildUrl("/Game/ReachModelSneakerNet/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Game", "ReachModelSneakerNet", e), n.serviceLibrary.post(e, null, i, r, f)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.adminService = {
			GetAssignedReports: function(t, i, r, u, f) {
				var e = n.buildUrl("/Admin/Assigned/", "", u);
				return n.pushGa("Admin", "GetAssignedReports", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			ReturnAssignedReports: function(t, i, r, u) {
				var f = n.buildUrl("/Admin/Assigned/ReturnAll", "", r);
				return n.pushGa("Admin", "ReturnAssignedReports", f), n.serviceLibrary.post(f, null, t, i, u)
			},
			ResolveReport: function(t, i, r, u, f) {
				var e = n.buildUrl("/Admin/Assigned/Resolve/", "", u);
				return n.pushGa("Admin", "ResolveReport", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			OverturnReport: function(t, i, r, u, f) {
				var e = n.buildUrl("/Admin/Reports/Overturn/", "", u);
				return n.pushGa("Admin", "OverturnReport", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			GetDisciplinedReportsForMember: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Admin/Member/" + encodeURIComponent(i) + "/Reports/", "", f);
				return n.pushGa("Admin", "GetDisciplinedReportsForMember", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			GetRecentDisciplineAndFlagHistoryForMember: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Admin/Member/" + encodeURIComponent(t) + "/RecentIncludingFlags/" + encodeURIComponent(i) + "", "", f);
				return n.pushGa("Admin", "GetRecentDisciplineAndFlagHistoryForMember", o), n.serviceLibrary.get(o, r, u, e)
			},
			GetResolvedReports: function(t, i, r, u, f) {
				var e = n.buildUrl("/Admin/Reports/", "", u);
				return n.pushGa("Admin", "GetResolvedReports", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			GloballyIgnoreItem: function(t, i, r, u, f) {
				var e = n.buildUrl("/Admin/Ignores/GloballyIgnore/", "", u);
				return n.pushGa("Admin", "GloballyIgnoreItem", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			OverrideBanOnUser: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Admin/Member/" + encodeURIComponent(i) + "/SetBan/", "", f);
				return n.pushGa("Admin", "OverrideBanOnUser", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			OverrideMsgBanOnUser: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Admin/Member/" + encodeURIComponent(i) + "/SetMsgBan/", "", f);
				return n.pushGa("Admin", "OverrideMsgBanOnUser", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			OverrideGroupWallBanOnUser: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Admin/Member/" + encodeURIComponent(i) + "/SetGroupWallBan/", "", f);
				return n.pushGa("Admin", "OverrideGroupWallBanOnUser", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			OverrideGlobalIgnore: function(t, i, r, u, f) {
				var e = n.buildUrl("/Admin/Ignores/OverrideGlobalIgnore/", "", u);
				return n.pushGa("Admin", "OverrideGlobalIgnore", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			AdminUserSearch: function(t, i, r, u, f) {
				var e = "",
					o;
				return e = n.addParam(e, "q", t), o = n.buildUrl("/Admin/Member/Search/", e, u), n.pushGa("Admin", "AdminUserSearch", o), n.serviceLibrary.get(o, i, r, f)
			},
			GetUserBanState: function(t, i, r, u, f) {
				var e = n.buildUrl("/Admin/Member/" + encodeURIComponent(t) + "/GetBanState/", "", u);
				return n.pushGa("Admin", "GetUserBanState", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetUserWebClientIpHistory: function(t, i, r, u, f) {
				var e = n.buildUrl("/Admin/Member/" + encodeURIComponent(t) + "/GetWebClientIpHistory/", "", u);
				return n.pushGa("Admin", "GetUserWebClientIpHistory", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetUserPostHistory: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Admin/Member/" + encodeURIComponent(t) + "/PostHistory/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Admin", "GetUserPostHistory", o), n.serviceLibrary.get(o, r, u, e)
			},
			GetAdminHistory: function(t, i, r, u, f, e, o, s, h) {
				var c = "",
					l;
				return c = n.addParam(c, "membershipFilter", r), c = n.addParam(c, "startdate", u), c = n.addParam(c, "enddate", f), l = n.buildUrl("/Admin/GlobalHistory/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", c, s), n.pushGa("Admin", "GetAdminHistory", l), n.serviceLibrary.get(l, e, o, h)
			},
			BulkEditPost: function(t, i, r, u, f) {
				var e = n.buildUrl("/Admin/BulkEditPost/", "", u);
				return n.pushGa("Admin", "BulkEditPost", e), n.serviceLibrary.post(e, t, i, r, f)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.tokensService = {
			ClaimAndApplyOnToken: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Tokens/ClaimAndApplyToken/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Tokens", "ClaimAndApplyOnToken", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			GetCurrentUserOfferHistory: function(t, i, r, u) {
				var f = n.buildUrl("/Tokens/OfferHistory/", "", r);
				return n.pushGa("Tokens", "GetCurrentUserOfferHistory", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetCurrentUserThrottleState: function(t, i, r, u) {
				var f = n.buildUrl("/Tokens/ThrottleState/", "", r);
				return n.pushGa("Tokens", "GetCurrentUserThrottleState", f), n.serviceLibrary.get(f, t, i, u)
			},
			ApplyOfferToCurrentDestinyMembership: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Tokens/ApplyOfferToCurrentDestinyMembership/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Tokens", "ApplyOfferToCurrentDestinyMembership", o), n.serviceLibrary.post(o, null, r, u, e)
			},
			VerifyAge: function(t, i, r, u) {
				var f = n.buildUrl("/Tokens/VerifyAge/", "", r);
				return n.pushGa("Tokens", "VerifyAge", f), n.serviceLibrary.post(f, null, t, i, u)
			},
			ClaimToken: function(t, i, r, u, f) {
				var e = n.buildUrl("/Tokens/Claim/", "", u);
				return n.pushGa("Tokens", "ClaimToken", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			ConsumeMarketplacePlatformCodeOffer: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/Tokens/ConsumeMarketplacePlatformCodeOffer/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("Tokens", "ConsumeMarketplacePlatformCodeOffer", s), n.serviceLibrary.post(s, null, u, f, o)
			},
			MarketplacePlatformCodeOfferHistory: function(t, i, r, u) {
				var f = n.buildUrl("/Tokens/MarketplacePlatformCodeOfferHistory/", "", r);
				return n.pushGa("Tokens", "MarketplacePlatformCodeOfferHistory", f), n.serviceLibrary.get(f, t, i, u)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.destiny2Service = {
			CopyCharactersInPreview: function(t, i, r, u, f) {
				var e = n.buildUrl("/Destiny2/7thColumnPreview/CopyCharacters/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Destiny2", "CopyCharactersInPreview", e), n.serviceLibrary.post(e, null, i, r, f)
			},
			GetDestinyManifest: function(t, i, r, u) {
				var f = n.buildUrl("/Destiny2/Manifest/", "", r);
				return n.pushGa("Destiny2", "GetDestinyManifest", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetDestinyEntityDefinition: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Destiny2/Manifest/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Destiny2", "GetDestinyEntityDefinition", o), n.serviceLibrary.get(o, r, u, e)
			},
			GetDestinyLiveTileContentItems: function(t, i, r, u) {
				var f = n.buildUrl("/Destiny2/LiveTiles/", "", r);
				return n.pushGa("Destiny2", "GetDestinyLiveTileContentItems", f), n.serviceLibrary.get(f, t, i, u)
			},
			SearchDestinyPlayer: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Destiny2/SearchDestinyPlayer/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Destiny2", "SearchDestinyPlayer", o), n.serviceLibrary.get(o, r, u, e)
			},
			GetProfile: function(t, i, r, u, f, e, o) {
				var s = "",
					h;
				return s = n.addParam(s, "components", r), h = n.buildUrl("/Destiny2/" + encodeURIComponent(t) + "/Profile/" + encodeURIComponent(i) + "/", s, e), n.pushGa("Destiny2", "GetProfile", h), n.serviceLibrary.get(h, u, f, o)
			},
			GetCharacter: function(t, i, r, u, f, e, o, s) {
				var h = "",
					c;
				return h = n.addParam(h, "components", u), c = n.buildUrl("/Destiny2/" + encodeURIComponent(t) + "/Profile/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/", h, o), n.pushGa("Destiny2", "GetCharacter", c), n.serviceLibrary.get(c, f, e, s)
			},
			GetClanWeeklyRewardState: function(t, i, r, u, f) {
				var e = n.buildUrl("/Destiny2/Clan/" + encodeURIComponent(t) + "/WeeklyRewardState/", "", u);
				return n.pushGa("Destiny2", "GetClanWeeklyRewardState", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetItem: function(t, i, r, u, f, e, o, s) {
				var h = "",
					c;
				return h = n.addParam(h, "components", u), c = n.buildUrl("/Destiny2/" + encodeURIComponent(t) + "/Profile/" + encodeURIComponent(i) + "/Item/" + encodeURIComponent(r) + "/", h, o), n.pushGa("Destiny2", "GetItem", c), n.serviceLibrary.get(c, f, e, s)
			},
			GetVendors: function(t, i, r, u, f, e, o, s) {
				var h = "",
					c;
				return h = n.addParam(h, "components", u), c = n.buildUrl("/Destiny2/" + encodeURIComponent(t) + "/Profile/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/Vendors/", h, o), n.pushGa("Destiny2", "GetVendors", c), n.serviceLibrary.get(c, f, e, s)
			},
			GetVendor: function(t, i, r, u, f, e, o, s, h) {
				var c = "",
					l;
				return c = n.addParam(c, "components", f), l = n.buildUrl("/Destiny2/" + encodeURIComponent(t) + "/Profile/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/Vendors/" + encodeURIComponent(u) + "/", c, s), n.pushGa("Destiny2", "GetVendor", l), n.serviceLibrary.get(l, e, o, h)
			},
			TransferItem: function(t, i, r, u, f) {
				var e = n.buildUrl("/Destiny2/Actions/Items/TransferItem/", "", u);
				return n.pushGa("Destiny2", "TransferItem", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			EquipItem: function(t, i, r, u, f) {
				var e = n.buildUrl("/Destiny2/Actions/Items/EquipItem/", "", u);
				return n.pushGa("Destiny2", "EquipItem", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			EquipItems: function(t, i, r, u, f) {
				var e = n.buildUrl("/Destiny2/Actions/Items/EquipItems/", "", u);
				return n.pushGa("Destiny2", "EquipItems", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			SetItemLockState: function(t, i, r, u, f) {
				var e = n.buildUrl("/Destiny2/Actions/Items/SetLockState/", "", u);
				return n.pushGa("Destiny2", "SetItemLockState", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			SetQuestTrackedState: function(t, i, r, u, f) {
				var e = n.buildUrl("/Destiny2/Actions/Items/SetTrackedState/", "", u);
				return n.pushGa("Destiny2", "SetQuestTrackedState", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			InsertSocketPlug: function(t, i, r, u, f) {
				var e = n.buildUrl("/Destiny2/Actions/Items/InsertSocketPlug/", "", u);
				return n.pushGa("Destiny2", "InsertSocketPlug", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			ActivateTalentNode: function(t, i, r, u, f) {
				var e = n.buildUrl("/Destiny2/Actions/Items/ActivateTalentNode/", "", u);
				return n.pushGa("Destiny2", "ActivateTalentNode", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			GetPostGameCarnageReport: function(t, i, r, u, f) {
				var e = n.buildUrl("/Destiny2/Stats/PostGameCarnageReport/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Destiny2", "GetPostGameCarnageReport", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetHistoricalStatsDefinition: function(t, i, r, u) {
				var f = n.buildUrl("/Destiny2/Stats/Definition/", "", r);
				return n.pushGa("Destiny2", "GetHistoricalStatsDefinition", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetActivityBlob: function(t, i, r, u, f) {
				var e = n.buildUrl("/Destiny2/Stats/ActivityBlob/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("Destiny2", "GetActivityBlob", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetClanLeaderboards: function(t, i, r, u, f, e, o, s) {
				var h = "",
					c;
				return h = n.addParam(h, "modes", i), h = n.addParam(h, "statid", r), h = n.addParam(h, "maxtop", u), c = n.buildUrl("/Destiny2/Stats/Leaderboards/Clans/" + encodeURIComponent(t) + "/", h, o), n.pushGa("Destiny2", "GetClanLeaderboards", c), n.serviceLibrary.get(c, f, e, s)
			},
			GetClanAggregateStats: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "modes", i), s = n.buildUrl("/Destiny2/Stats/AggregateClanStats/" + encodeURIComponent(t) + "/", o, f), n.pushGa("Destiny2", "GetClanAggregateStats", s), n.serviceLibrary.get(s, r, u, e)
			},
			GetLeaderboardsForPsn: function(t, i, r, u, f, e) {
				var o = "",
					s;
				return o = n.addParam(o, "modes", t), o = n.addParam(o, "code", i), s = n.buildUrl("/Destiny2/Stats/Leaderboards/Psn/", o, f), n.pushGa("Destiny2", "GetLeaderboardsForPsn", s), n.serviceLibrary.get(s, r, u, e)
			},
			GetLeaderboards: function(t, i, r, u, f, e, o, s, h) {
				var c = "",
					l;
				return c = n.addParam(c, "modes", r), c = n.addParam(c, "statid", u), c = n.addParam(c, "maxtop", f), l = n.buildUrl("/Destiny2/" + encodeURIComponent(t) + "/Account/" + encodeURIComponent(i) + "/Stats/Leaderboards/", c, s), n.pushGa("Destiny2", "GetLeaderboards", l), n.serviceLibrary.get(l, e, o, h)
			},
			GetLeaderboardsForCharacter: function(t, i, r, u, f, e, o, s, h, c) {
				var l = "",
					a;
				return l = n.addParam(l, "modes", u), l = n.addParam(l, "statid", f), l = n.addParam(l, "maxtop", e), a = n.buildUrl("/Destiny2/Stats/Leaderboards/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", l, h), n.pushGa("Destiny2", "GetLeaderboardsForCharacter", a), n.serviceLibrary.get(a, o, s, c)
			},
			GetArmoryItems: function(t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt) {
				var tt = "",
					it;
				return tt = n.addParam(tt, "page", t), tt = n.addParam(tt, "count", i), tt = n.addParam(tt, "name", r), tt = n.addParam(tt, "order", u), tt = n.addParam(tt, "orderstathash", f), tt = n.addParam(tt, "direction", e), tt = n.addParam(tt, "rarity", o), tt = n.addParam(tt, "step", s), tt = n.addParam(tt, "categories", h), tt = n.addParam(tt, "weaponPerformance", c), tt = n.addParam(tt, "impactEffects", l), tt = n.addParam(tt, "guardianAttributes", a), tt = n.addParam(tt, "lightAbilities", v), tt = n.addParam(tt, "damageTypes", y), tt = n.addParam(tt, "matchrandomsteps", p), tt = n.addParam(tt, "sourcecat", w), tt = n.addParam(tt, "sourcehash", b), it = n.buildUrl("/Destiny2/Armory/Items/", tt, g), n.pushGa("Destiny2", "GetArmoryItems", it), n.serviceLibrary.get(it, k, d, nt)
			},
			SearchDestinyEntities: function(t, i, r, u, f, e, o) {
				var s = "",
					h;
				return s = n.addParam(s, "page", r), h = n.buildUrl("/Destiny2/Armory/Search/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", s, e), n.pushGa("Destiny2", "SearchDestinyEntities", h), n.serviceLibrary.get(h, u, f, o)
			},
			GetHistoricalStats: function(t, i, r, u, f, e, o, s, h, c, l, a) {
				var v = "",
					y;
				return v = n.addParam(v, "periodType", u), v = n.addParam(v, "modes", f), v = n.addParam(v, "groups", e), v = n.addParam(v, "daystart", o), v = n.addParam(v, "dayend", s), y = n.buildUrl("/Destiny2/" + encodeURIComponent(t) + "/Account/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/Stats/", v, l), n.pushGa("Destiny2", "GetHistoricalStats", y), n.serviceLibrary.get(y, h, c, a)
			},
			GetHistoricalStatsForAccount: function(t, i, r, u, f, e, o) {
				var s = "",
					h;
				return s = n.addParam(s, "groups", r), h = n.buildUrl("/Destiny2/" + encodeURIComponent(t) + "/Account/" + encodeURIComponent(i) + "/Stats/", s, e), n.pushGa("Destiny2", "GetHistoricalStatsForAccount", h), n.serviceLibrary.get(h, u, f, o)
			},
			GetActivityHistory: function(t, i, r, u, f, e, o, s, h, c) {
				var l = "",
					a;
				return l = n.addParam(l, "mode", u), l = n.addParam(l, "count", f), l = n.addParam(l, "page", e), a = n.buildUrl("/Destiny2/" + encodeURIComponent(t) + "/Account/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/Stats/Activities/", l, h), n.pushGa("Destiny2", "GetActivityHistory", a), n.serviceLibrary.get(a, o, s, c)
			},
			GetUniqueWeaponHistory: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/Destiny2/" + encodeURIComponent(t) + "/Account/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/Stats/UniqueWeapons/", "", e);
				return n.pushGa("Destiny2", "GetUniqueWeaponHistory", s), n.serviceLibrary.get(s, u, f, o)
			},
			GetDestinyAggregateActivityStats: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/Destiny2/" + encodeURIComponent(t) + "/Account/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/Stats/AggregateActivityStats/", "", e);
				return n.pushGa("Destiny2", "GetDestinyAggregateActivityStats", s), n.serviceLibrary.get(s, u, f, o)
			},
			GetPublicMilestoneContent: function(t, i, r, u, f) {
				var e = n.buildUrl("/Destiny2/Milestones/" + encodeURIComponent(t) + "/Content/", "", u);
				return n.pushGa("Destiny2", "GetPublicMilestoneContent", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetPublicMilestones: function(t, i, r, u) {
				var f = n.buildUrl("/Destiny2/Milestones/", "", r);
				return n.pushGa("Destiny2", "GetPublicMilestones", f), n.serviceLibrary.get(f, t, i, u)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.communitycontentService = {
			GetCommunityContent: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/CommunityContent/Get/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("CommunityContent", "GetCommunityContent", s), n.serviceLibrary.get(s, u, f, o)
			},
			GetApprovalQueue: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/CommunityContent/Queue/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("CommunityContent", "GetApprovalQueue", s), n.serviceLibrary.get(s, u, f, o)
			},
			SubmitContent: function(t, i, r, u, f) {
				var e = n.buildUrl("/CommunityContent/Submit/", "", u);
				return n.pushGa("CommunityContent", "SubmitContent", e), n.serviceLibrary.post(e, t, i, r, f)
			},
			EditContent: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/CommunityContent/Edit/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("CommunityContent", "EditContent", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			AlterApprovalState: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/CommunityContent/AlterApprovalState/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("CommunityContent", "AlterApprovalState", o), n.serviceLibrary.post(o, t, r, u, e)
			},
			GetCommunityLiveStatuses: function(t, i, r, u, f, e, o, s, h) {
				var c = "",
					l;
				return c = n.addParam(c, "modeHash", u), c = n.addParam(c, "streamLocale", f), l = n.buildUrl("/CommunityContent/Live/All/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", c, s), n.pushGa("CommunityContent", "GetCommunityLiveStatuses", l), n.serviceLibrary.get(l, e, o, h)
			},
			GetCommunityLiveStatusesForClanmates: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/CommunityContent/Live/Clan/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("CommunityContent", "GetCommunityLiveStatusesForClanmates", s), n.serviceLibrary.get(s, u, f, o)
			},
			GetCommunityLiveStatusesForFriends: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/CommunityContent/Live/Friends/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("CommunityContent", "GetCommunityLiveStatusesForFriends", s), n.serviceLibrary.get(s, u, f, o)
			},
			GetAdminCommunityLiveStatuses: function(t, i, r, u, f, e, o, s) {
				var h = "",
					c;
				return h = n.addParam(h, "name", u), c = n.buildUrl("/CommunityContent/Live/Admin/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", h, o), n.pushGa("CommunityContent", "GetAdminCommunityLiveStatuses", c), n.serviceLibrary.get(c, f, e, s)
			},
			GetFeaturedCommunityLiveStatuses: function(t, i, r, u, f, e, o, s) {
				var h = "",
					c;
				return h = n.addParam(h, "streamLocale", u), c = n.buildUrl("/CommunityContent/Live/Featured/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", h, o), n.pushGa("CommunityContent", "GetFeaturedCommunityLiveStatuses", c), n.serviceLibrary.get(c, f, e, s)
			},
			GetStreamingStatusForMember: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/CommunityContent/Live/Users/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("CommunityContent", "GetStreamingStatusForMember", s), n.serviceLibrary.get(s, u, f, o)
			},
			AdminSetCommunityLiveMemberBanStatus: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/CommunityContent/Live/Partnerships/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/Ban/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("CommunityContent", "AdminSetCommunityLiveMemberBanStatus", s), n.serviceLibrary.post(s, null, u, f, o)
			},
			AdminSetCommunityLiveMemberFeatureStatus: function(t, i, r, u, f, e, o) {
				var s = n.buildUrl("/CommunityContent/Live/Partnerships/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/Feature/" + encodeURIComponent(r) + "/", "", e);
				return n.pushGa("CommunityContent", "AdminSetCommunityLiveMemberFeatureStatus", s), n.serviceLibrary.post(s, null, u, f, o)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.trendingService = {
			GetTrendingCategories: function(t, i, r, u) {
				var f = n.buildUrl("/Trending/Categories/", "", r);
				return n.pushGa("Trending", "GetTrendingCategories", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetTrendingCategory: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Trending/Categories/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Trending", "GetTrendingCategory", o), n.serviceLibrary.get(o, r, u, e)
			},
			GetTrendingEntryDetail: function(t, i, r, u, f, e) {
				var o = n.buildUrl("/Trending/Details/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
				return n.pushGa("Trending", "GetTrendingEntryDetail", o), n.serviceLibrary.get(o, r, u, e)
			}
		}
	}(jQuery),
	function() {
		var n = bungieNetPlatform;
		n.coreService = {
			HelloWorld: function(t, i, r, u) {
				var f = n.buildUrl("//HelloWorld/", "", r);
				return n.pushGa("", "HelloWorld", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetAvailableLocales: function(t, i, r, u) {
				var f = n.buildUrl("//GetAvailableLocales/", "", r);
				return n.pushGa("", "GetAvailableLocales", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetCommonSettings: function(t, i, r, u) {
				var f = n.buildUrl("//Settings/", "", r);
				return n.pushGa("", "GetCommonSettings", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetEssentialCommonSettings: function(t, i, r, u) {
				var f = n.buildUrl("//EssentialSettings/", "", r);
				return n.pushGa("", "GetEssentialCommonSettings", f), n.serviceLibrary.get(f, t, i, u)
			},
			GetSystemStatus: function(t, i, r, u, f) {
				var e = n.buildUrl("//Status/" + encodeURIComponent(t) + "/", "", u);
				return n.pushGa("", "GetSystemStatus", e), n.serviceLibrary.get(e, i, r, f)
			},
			GetGlobalAlerts: function(t, i, r, u, f) {
				var e = "",
					o;
				return e = n.addParam(e, "includestreaming", t), o = n.buildUrl("//GlobalAlerts/", e, u), n.pushGa("", "GetGlobalAlerts", o), n.serviceLibrary.get(o, i, r, f)
			},
			GetBroadcastNotifications: function(t, i, r, u) {
				var f = n.buildUrl("//BroadcastNotifications/", "", r);
				return n.pushGa("", "GetBroadcastNotifications", f), n.serviceLibrary.get(f, t, i, u)
			}
		}
	}(jQuery);
var CreateBungieProfileRequest = function(n, t, i, r, u, f, e, o, s) {
		this.displayName = t;
		this.email = i;
		this.emailUsage = r;
		this.credentialPublic = u;
		this.termsAccepted = f;
		this.authProviderType = e;
		this.locale = o;
		this.offer = s
	},
	CreatePostRequest = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k) {
		this.parentPostId = t;
		this.subTopicOverride = i;
		this.subject = r;
		this.body = u;
		this.tagInput = f;
		this.tagCategory = e;
		this.category = o;
		this.groupId = s;
		this.isGroupPrivate = h;
		this.urlLinkOrImage = c;
		this.metadata = l;
		this.playerSupportFlags = a;
		this.playerSupportMetadata = v;
		this.recruitMicrophoneRequired = y;
		this.recruitIntensity = p;
		this.recruitTone = w;
		this.recruitSlots = b;
		this.locale = k
	},
	EditPostRequest = function(n, t, i, r, u, f, e, o, s, h, c, l, a) {
		this.subject = t;
		this.body = i;
		this.tagInput = r;
		this.tagCategory = u;
		this.urlLinkOrImage = f;
		this.metadata = e;
		this.category = o;
		this.disableBits = s;
		this.isGroupPostPrivate = h;
		this.playerSupportFlags = c;
		this.playerSupportMetadata = l;
		this.locale = a
	},
	ModerationRequest = function(n, t, i, r, u, f, e) {
		this.moderatedItemId = t;
		this.moderatedItemType = i;
		this.comments = r;
		this.reason = u;
		this.requestedPunishment = f;
		this.requestedBlastBan = e
	},
	IgnoreItemRequest = function(n, t, i, r, u, f, e, o, s) {
		this.ignoredItemId = t;
		this.ignoredItemType = i;
		this.comment = r;
		this.reason = u;
		this.itemContextId = f;
		this.itemContextType = e;
		this.requestedPunishment = o;
		this.requestedBlastBan = s
	},
	UnignoreItemRequest = function(n, t, i) {
		this.ignoredItemId = t;
		this.ignoredItemType = i
	},
	BulkEditPostRequest = function(n, t) {
		this.PostsToEdit = t
	},
	CommunityContentSubmission = function(n, t, i, r) {
		this.sourceUrl = t;
		this.title = i;
		this.description = r
	},
	GeneralUser = {
		membershipId: 0,
		uniqueName: [],
		normalizedName: [],
		displayName: [],
		profilePicture: 0,
		profileTheme: 0,
		userTitle: 0,
		successMessageFlags: 0,
		isDeleted: !1,
		about: [],
		firstAccess: null,
		lastUpdate: null,
		legacyPortalUID: 0,
		context: {
			isFollowing: !1,
			ignoreStatus: {
				isIgnored: !1,
				ignoreFlags: 0
			},
			globalIgnoreEndDate: null
		},
		psnDisplayName: [],
		xboxDisplayName: [],
		fbDisplayName: [],
		showActivity: !1,
		locale: [],
		localeInheritDefault: !1,
		lastBanReportId: 0,
		showGroupMessaging: !1,
		profilePicturePath: [],
		profilePictureWidePath: [],
		profileThemeName: [],
		userTitleDisplay: [],
		statusText: [],
		statusDate: null,
		profileBanExpire: null,
		blizzardDisplayName: []
	},
	UserDetail = {
		user: {
			membershipId: 0,
			uniqueName: [],
			normalizedName: [],
			displayName: [],
			profilePicture: 0,
			profileTheme: 0,
			userTitle: 0,
			successMessageFlags: 0,
			isDeleted: !1,
			about: [],
			firstAccess: null,
			lastUpdate: null,
			legacyPortalUID: 0,
			context: {
				isFollowing: !1,
				ignoreStatus: {
					isIgnored: !1,
					ignoreFlags: 0
				},
				globalIgnoreEndDate: null
			},
			psnDisplayName: [],
			xboxDisplayName: [],
			fbDisplayName: [],
			showActivity: !1,
			locale: [],
			localeInheritDefault: !1,
			lastBanReportId: 0,
			showGroupMessaging: !1,
			profilePicturePath: [],
			profilePictureWidePath: [],
			profileThemeName: [],
			userTitleDisplay: [],
			statusText: [],
			statusDate: null,
			profileBanExpire: null,
			blizzardDisplayName: []
		},
		email: [],
		emailStatus: 0,
		emailUsage: 0,
		realName: [],
		gamerTag: [],
		psnId: [],
		facebookName: [],
		blizzardDisplayName: [],
		userAcls: [],
		showGamertagPublic: !1,
		showFacebookPublic: !1,
		showPsnPublic: !1,
		showBlizzardPublic: !1,
		publicCredentialTypes: [],
		isThemeLight: !1,
		adultMode: !1,
		userResearchStatusFlags: 0,
		lastViewedConversations: null,
		privacy: 0,
		hideDestinyData: !1,
		destinyEmblemMembershipType: 0,
		destinyEmblemMembershipId: 0,
		destinyEmblemCharacterId: 0,
		pmToastsEnabled: !1
	},
	LegacyConversationV2 = {
		conversationId: 0,
		memberFromId: 0,
		dateStarted: null,
		totalMessageCount: 0,
		lastMessageSent: null,
		lastMessageId: 0,
		isGlobal: !1,
		isLocked: !1,
		memberToId: 0,
		invitationId: 0,
		ownerEntityType: 0,
		ownerEntityId: 0,
		starter: 0,
		lastRead: null,
		status: 0,
		subject: [],
		body: [],
		isAutoResponse: !1,
		membersToId: [],
		usersTo: [],
		invitationDetail: {
			invitationId: 0,
			membershipId: 0,
			resolutionStatus: 0,
			expireDate: null,
			invitationType: 0,
			requestingObjectId: 0,
			targetObjectId: 0,
			targetState: 0,
			requestMessage: [],
			responseMessage: [],
			responseCode: [],
			hasExpired: !1,
			message: [],
			membershipIdCreated: 0,
			canRespond: !1
		},
		isRead: !1
	},
	SearchResultOfFollowerResponse = {
		results: [],
		totalResults: 0,
		hasMore: !1,
		query: {
			itemsPerPage: 0,
			currentPage: 0,
			requestContinuationToken: []
		},
		replacementContinuationToken: [],
		useTotalResults: !1
	},
	bungieNetPlatform = bungieNetPlatform || {},
	currentRequests = [];
(function(n) {
	var t = bungieNetPlatform;
	t.platformSettings = {
		initialize: function(i) {
			t.platformSettings = n.extend(t.platformSettings, n.extend({
				platformUrl: "/Platform",
				renderContentEditLinks: !1
			}, i))
		}
	}
})(jQuery),
	function(n) {
		function i(t, i, r, u, f) {
			if (t.ErrorCode == 1) i(t.Response, f.clientState), u.resolve(t.Response);
			else {
				t.ErrorCode == 99 && n(document).trigger("userLogOut");
				var e = {
					errorCode: t.ErrorCode,
					errorStatus: t.ErrorStatus,
					errorMessage: t.Message,
					messageData: t.MessageData,
					debug: t.Debug,
					clientState: f.clientState
				};
				r(e, t.Response, f);
				u.reject(e)
			}
			currentRequest = currentRequests.splice(n.inArray(f, currentRequests), 1)
		}

		function r(t, i, r, u, f) {
			var e = {
				errorCode: 2,
				errorStatus: "TransportException",
				errorMessage: Localizer.Messages.transportexception,
				messageData: [],
				clientState: t.clientState
			};
			u(e, null, t);
			f.reject(e);
			currentRequest = currentRequests.splice(n.inArray(t, currentRequests), 1)
		}
		var t = bungieNetPlatform;
		t.currentRequestsToThrottle = [];
		t.getCSRFHeader = function() {
			var n = Cookies.Get(ServerVars.SessionContextCookieName);
			return n ? {
				"x-csrf": n
			} : {}
		};
		t.getHeaders = function() {
			var n = t.getCSRFHeader();
			return n["X-API-Key"] = "10E792629C2A47E19356B8A79EEFA640", n
		};
		t.buildUrl = function(n, i, r) {
			var f = t.platformSettings.platformUrl + n,
				u = "?lc=" + t.platformSettings.currentLocale + "&fmt=true&lcin=" + t.platformSettings.locInherit;
			return typeof i != "undefined" && i !== "" && (u += "&" + i), typeof r != "undefined" && r != null && (u += r), f + u
		};
		t.addParam = function(n, t, i) {
			return typeof i != "undefined" && i !== null && (n.length > 0 && (n += "&"), n += t + "=" + encodeURIComponent(i)), n
		};
		t.pushGa = function(n, t) {
			var i = "-",
				r = Cookies.Get(ServerVars.WebMembershipCookieName);
			r != null && (i = "SignedIn");
			window.ga && ga("send", "event", {
				hitType: "event",
				eventCategory: "Platform",
				eventAction: n + "_" + t,
				eventLabel: i
			})
		};
		t.removeRequestFromThrottleList = function(i) {
			t.currentRequestsToThrottle.splice(n.inArray(i, t.currentRequestsToThrottle), 1)
		};
		t.requestIsActive = function(n) {
			var i = !1;
			return (ServerVars.Environment === "local" || ServerVars.Environment === "dev") && (i = t.currentRequestsToThrottle.indexOf(n) > -1, i && (this.logRequestWasDenied(n), i = !1)), i
		};
		t.logRequestWasDenied = function(n) {
			Bnet.error("DUPLICATE REQUEST: " + n)
		};
		t.serviceLibrary = {
			post: function(u, f, e, o, s) {
				var h = n.Deferred(),
					c;
				return t.requestIsActive(u) || (t.currentRequestsToThrottle.push(u), c = n.ajax({
					type: "POST",
					url: u,
					data: JSON.stringify(f),
					dataType: "json",
					contentType: "application/json; charset=utf-8;",
					processData: !1,
					headers: t.getHeaders(),
					success: function(n, r, f) {
						t.removeRequestFromThrottleList(u);
						i(n, e, o, h, f)
					},
					error: function(n, i, f) {
						t.removeRequestFromThrottleList(u);
						r(n, i, f, o, h)
					}
				}), c.clientState = s, currentRequests.push(c)), h.promise()
			},
			get: function(u, f, e, o) {
				var s = n.Deferred(),
					h;
				return t.requestIsActive(u) || (t.currentRequestsToThrottle.push(u), h = n.ajax({
					type: "GET",
					url: u,
					dataType: "json",
					headers: t.getHeaders(),
					success: function(n, r, o) {
						t.removeRequestFromThrottleList(u);
						i(n, f, e, s, o)
					},
					error: function(n, i, f) {
						t.removeRequestFromThrottleList(u);
						r(n, i, f, e, s)
					}
				}), h.clientState = o, currentRequests.push(h)), s.promise()
			},
			postForm: function(u, f, e, o, s, h) {
				var c = n.Deferred(),
					l;
				return t.requestIsActive(u) || (t.currentRequestsToThrottle.push(u), l = n.ajax({
					type: "POST",
					url: u,
					data: f,
					headers: t.getHeaders(),
					cache: !1,
					dataType: e ? "json" : null,
					contentType: !1,
					processData: !1,
					success: function(n, r, f) {
						if (t.removeRequestFromThrottleList(u), e) i(n, o, s, c, f);
						else {
							var h = JSON.parse(n);
							o(h);
							c.resolve(h)
						}
					},
					error: function(n, i, f) {
						t.removeRequestFromThrottleList(u);
						r(n, i, f, s, c)
					}
				}), l.clientState = h, currentRequests.push(l)), c.promise()
			}
		}
	}(jQuery),
	function(n) {
		var t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, vt, yt, pt, wt, bt, kt, dt, gt, ni, ti, ii, ri, ui, fi, ei, oi, si, hi, ci, li, ai, vi, yi, pi, wi, bi, ki, di, gi, nr, tr, ir, rr, ur, fr, er, or, sr, hr, cr, lr, ar, vr, yr, pr, wr, br, kr, dr, gr, nu, tu, iu, ru, uu, fu, eu, ou, su, hu, cu, lu, au, vu, yu, pu, wu, bu, ku, du, gu, nf, tf, rf, uf, ff, ef, of , sf, hf;
		(function(n) {
			n[n.Triumphs = 0] = "Triumphs";
			n[n.GearManager = 1] = "GearManager";
			n[n.Nux = 2] = "Nux";
			n[n.TwitchLink = 3] = "TwitchLink"
		})(t = n.GlobalAcknowledgementItem || (n.GlobalAcknowledgementItem = {})),
			function(n) {
				n[n.NotIgnored = 0] = "NotIgnored";
				n[n.IgnoredUser = 1] = "IgnoredUser";
				n[n.IgnoredGroup = 2] = "IgnoredGroup";
				n[n.IgnoredByGroup = 4] = "IgnoredByGroup";
				n[n.IgnoredPost = 8] = "IgnoredPost";
				n[n.IgnoredTag = 16] = "IgnoredTag";
				n[n.IgnoredGlobal = 32] = "IgnoredGlobal"
			}(i = n.IgnoreStatus || (n.IgnoreStatus = {})),
			function(n) {
				n[n.All = 0] = "All";
				n[n.Post = 1] = "Post";
				n[n.Group = 2] = "Group";
				n[n.User = 3] = "User";
				n[n.Tag = 4] = "Tag";
				n[n.GroupProfile = 5] = "GroupProfile";
				n[n.UserProfile = 6] = "UserProfile";
				n[n.UserPrivateMessage = 7] = "UserPrivateMessage";
				n[n.GroupWallPost = 8] = "GroupWallPost";
				n[n.PrivateMessage = 9] = "PrivateMessage"
			}(r = n.IgnoredItemType || (n.IgnoredItemType = {})),
			function(n) {
				n[n.Unknown = 0] = "Unknown";
				n[n.Warning = 1] = "Warning";
				n[n.SevenDayBan = 2] = "SevenDayBan";
				n[n.ThirtyDayBan = 3] = "ThirtyDayBan";
				n[n.PermanentBan = 255] = "PermanentBan"
			}(u = n.ModeratorRequestedPunishment || (n.ModeratorRequestedPunishment = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Week = 1] = "Week";
				n[n.TwoWeeks = 2] = "TwoWeeks";
				n[n.ThreeWeeks = 3] = "ThreeWeeks";
				n[n.Month = 4] = "Month";
				n[n.ThreeMonths = 5] = "ThreeMonths";
				n[n.SixMonths = 6] = "SixMonths";
				n[n.Year = 7] = "Year";
				n[n.Forever = 8] = "Forever";
				n[n.ThreeMinutes = 9] = "ThreeMinutes";
				n[n.Hour = 10] = "Hour";
				n[n.ThirtyDays = 11] = "ThirtyDays"
			}(f = n.IgnoreLength || (n.IgnoreLength = {})),
			function(n) {
				n[n.Unresolved = 0] = "Unresolved";
				n[n.Innocent = 1] = "Innocent";
				n[n.GuiltyBan = 2] = "GuiltyBan";
				n[n.GuiltyBlastBan = 3] = "GuiltyBlastBan";
				n[n.GuiltyWarn = 4] = "GuiltyWarn";
				n[n.GuiltyAlias = 5] = "GuiltyAlias";
				n[n.ResolveNoAction = 6] = "ResolveNoAction"
			}(e = n.ReportResolutionStatus || (n.ReportResolutionStatus = {})),
			function(n) {
				n[n.ReadBasicUserProfile = 1] = "ReadBasicUserProfile";
				n[n.ReadGroups = 2] = "ReadGroups";
				n[n.WriteGroups = 4] = "WriteGroups";
				n[n.AdminGroups = 8] = "AdminGroups";
				n[n.BnetWrite = 16] = "BnetWrite";
				n[n.MoveEquipDestinyItems = 32] = "MoveEquipDestinyItems";
				n[n.ReadDestinyInventoryAndVault = 64] = "ReadDestinyInventoryAndVault";
				n[n.ReadUserData = 128] = "ReadUserData";
				n[n.EditUserData = 256] = "EditUserData";
				n[n.ReadDestinyVendorsAndAdvisors = 512] = "ReadDestinyVendorsAndAdvisors";
				n[n.ReadAndApplyTokens = 1024] = "ReadAndApplyTokens"
			}(o = n.ApplicationScopes || (n.ApplicationScopes = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Confidential = 1] = "Confidential";
				n[n.Public = 2] = "Public"
			}(s = n.OAuthApplicationType || (n.OAuthApplicationType = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Private = 1] = "Private";
				n[n.Public = 2] = "Public";
				n[n.Disabled = 3] = "Disabled";
				n[n.Blocked = 4] = "Blocked"
			}(h = n.ApplicationStatus || (n.ApplicationStatus = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Owner = 1] = "Owner";
				n[n.TeamMember = 2] = "TeamMember"
			}(c = n.DeveloperRole || (n.DeveloperRole = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Active = 1] = "Active";
				n[n.Disabled = 2] = "Disabled";
				n[n.Deleted = 3] = "Deleted"
			}(l = n.ApiKeyStatus || (n.ApiKeyStatus = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Active = 1] = "Active";
				n[n.Revoked = 2] = "Revoked"
			}(a = n.AuthorizationStatus || (n.AuthorizationStatus = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.TigerXbox = 1] = "TigerXbox";
				n[n.TigerPsn = 2] = "TigerPsn";
				n[n.TigerSteam = 3] = "TigerSteam";
				n[n.TigerBlizzard = 4] = "TigerBlizzard";
				n[n.TigerStadia = 5] = "TigerStadia";
				n[n.TigerDemon = 10] = "TigerDemon";
				n[n.BungieNext = 254] = "BungieNext";
				n[n.All = -1] = "All"
			}(v = n.BungieMembershipType || (n.BungieMembershipType = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Xuid = 1] = "Xuid";
				n[n.Psnid = 2] = "Psnid";
				n[n.Wlid = 3] = "Wlid";
				n[n.Fake = 4] = "Fake";
				n[n.Facebook = 5] = "Facebook";
				n[n.Google = 8] = "Google";
				n[n.Windows = 9] = "Windows";
				n[n.DemonId = 10] = "DemonId";
				n[n.BattleNetId = 14] = "BattleNetId"
			}(y = n.BungieCredentialType || (n.BungieCredentialType = {})),
			function(n) {
				n[n.Unknown = 0] = "Unknown";
				n[n.Xbox360 = 1] = "Xbox360";
				n[n.Playstation3 = 2] = "Playstation3";
				n[n.AndroidPhone = 3] = "AndroidPhone";
				n[n.AndroidTablet = 4] = "AndroidTablet";
				n[n.ApplePhone = 5] = "ApplePhone";
				n[n.AppleTablet = 6] = "AppleTablet";
				n[n.WebBrowser = 7] = "WebBrowser";
				n[n.NativeWindows = 8] = "NativeWindows";
				n[n.NativeMac = 9] = "NativeMac";
				n[n.WindowsPhone = 10] = "WindowsPhone";
				n[n.WindowsTablet = 11] = "WindowsTablet";
				n[n.XboxOne = 12] = "XboxOne";
				n[n.Playstation4 = 13] = "Playstation4";
				n[n.BattleNet = 14] = "BattleNet";
				n[n.Fake = 255] = "Fake"
			}(p = n.ClientDeviceType || (n.ClientDeviceType = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Twitter = 1] = "Twitter";
				n[n.Facebook = 2] = "Facebook";
				n[n.TwitterHelp = 4] = "TwitterHelp"
			}(w = n.ExternalService || (n.ExternalService = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Bungie = 1] = "Bungie";
				n[n.PlayerSupport = 2] = "PlayerSupport";
				n[n.Mentor = 4] = "Mentor";
				n[n.Ninja = 8] = "Ninja";
				n[n.GroupAdmin = 16] = "GroupAdmin";
				n[n.GroupFounder = 32] = "GroupFounder";
				n[n.FounderInAllGroups = 64] = "FounderInAllGroups"
			}(b = n.AdminHistoryMembershipFlags || (n.AdminHistoryMembershipFlags = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.ForumPostBan = 1] = "ForumPostBan";
				n[n.UserBan = 2] = "UserBan";
				n[n.UserWarning = 3] = "UserWarning";
				n[n.ForumTopicPost = 4] = "ForumTopicPost";
				n[n.ForumReply = 5] = "ForumReply";
				n[n.MarkAsAnswer = 6] = "MarkAsAnswer";
				n[n.UserProfileEdit = 7] = "UserProfileEdit";
				n[n.UnmarkAsAnswer = 8] = "UnmarkAsAnswer";
				n[n.CommunityContentApproved = 9] = "CommunityContentApproved";
				n[n.CommunityContentRejected = 10] = "CommunityContentRejected";
				n[n.GroupPostBan = 11] = "GroupPostBan";
				n[n.ForumPostUnban = 12] = "ForumPostUnban";
				n[n.TagAlias = 13] = "TagAlias";
				n[n.TagUnalias = 14] = "TagUnalias";
				n[n.GroupProfileBan = 15] = "GroupProfileBan";
				n[n.ForumPostEdit = 16] = "ForumPostEdit";
				n[n.EditedPlayerSupportFlags = 17] = "EditedPlayerSupportFlags";
				n[n.EditedPlayerSupportText = 18] = "EditedPlayerSupportText";
				n[n.GroupSettingsEdit = 19] = "GroupSettingsEdit";
				n[n.GroupFounderChange = 20] = "GroupFounderChange";
				n[n.GroupMemberPromotionToAdmin = 21] = "GroupMemberPromotionToAdmin";
				n[n.GroupAdminDemotionToMember = 22] = "GroupAdminDemotionToMember";
				n[n.GroupKickBan = 23] = "GroupKickBan";
				n[n.GroupKick = 24] = "GroupKick";
				n[n.GroupUnban = 25] = "GroupUnban";
				n[n.ForumDeleteTopic = 26] = "ForumDeleteTopic";
				n[n.UserProfileBan = 27] = "UserProfileBan";
				n[n.UserMessageBan = 28] = "UserMessageBan";
				n[n.GroupWallModerate = 29] = "GroupWallModerate";
				n[n.GroupWallBan = 30] = "GroupWallBan"
			}(k = n.AdminHistoryType || (n.AdminHistoryType = {})),
			function(n) {
				n[n.None = 0] = "None"
			}(d = n.AdminHistoryItemFlags || (n.AdminHistoryItemFlags = {})),
			function(n) {
				n[n.Global = 0] = "Global";
				n[n.USA = 1] = "USA";
				n[n.Europe = 2] = "Europe";
				n[n.Japan = 3] = "Japan"
			}(g = n.MarketplaceCodeRegion || (n.MarketplaceCodeRegion = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.BNextForumNinja = 1] = "BNextForumNinja";
				n[n.BNextUnlimitedGroups = 2] = "BNextUnlimitedGroups";
				n[n.BNextFounderInAllGroups = 3] = "BNextFounderInAllGroups";
				n[n.BNextBungieGold = 4] = "BNextBungieGold";
				n[n.BNextNinjaColors = 5] = "BNextNinjaColors";
				n[n.BNextMakeOfficialTopics = 6] = "BNextMakeOfficialTopics";
				n[n.BNextMakeNinjaTopics = 7] = "BNextMakeNinjaTopics";
				n[n.BNextDeleteForumTopics = 8] = "BNextDeleteForumTopics";
				n[n.BNextOverturnReports = 9] = "BNextOverturnReports";
				n[n.BNextBrowseReports = 10] = "BNextBrowseReports";
				n[n.BNextGlobalIgnore = 11] = "BNextGlobalIgnore";
				n[n.BNextEditAnyPublicPost = 12] = "BNextEditAnyPublicPost";
				n[n.BNextEditUsers = 13] = "BNextEditUsers";
				n[n.BNextUltraBan = 14] = "BNextUltraBan";
				n[n.BNextForumMentor = 15] = "BNextForumMentor";
				n[n.TigerBan = 16] = "TigerBan";
				n[n.BNextForumCurator = 17] = "BNextForumCurator";
				n[n.BNextBigLikes = 18] = "BNextBigLikes";
				n[n.BNextPlayerSupport = 19] = "BNextPlayerSupport";
				n[n.BNextPinTopics = 20] = "BNextPinTopics";
				n[n.BNextLockTopics = 21] = "BNextLockTopics";
				n[n.BNextCommunityContentCurator = 22] = "BNextCommunityContentCurator";
				n[n.BNextAdminHistory = 23] = "BNextAdminHistory";
				n[n.BNextPrivateUserDataReader = 24] = "BNextPrivateUserDataReader";
				n[n.BNextDiagnosticsDataReader = 25] = "BNextDiagnosticsDataReader";
				n[n.BNextOverrideLinkPrivacy = 26] = "BNextOverrideLinkPrivacy";
				n[n.BNextDiscountSupport = 27] = "BNextDiscountSupport";
				n[n.BNextApplicationSupervision = 28] = "BNextApplicationSupervision";
				n[n.BNextMentorColors = 29] = "BNextMentorColors"
			}(nt = n.AclEnum || (n.AclEnum = {})),
			function(n) {
				n[n.Default = 0] = "Default";
				n[n.ShowDestinyInventory = 1] = "ShowDestinyInventory";
				n[n.HideDestinyActivityHistoryFeed = 2] = "HideDestinyActivityHistoryFeed";
				n[n.HideDestinyProgression = 4] = "HideDestinyProgression";
				n[n.HideFollowers = 8] = "HideFollowers"
			}(tt = n.BNetAccountPrivacy || (n.BNetAccountPrivacy = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.EMAIL = 1] = "EMAIL";
				n[n.MOBILE_PUSH = 2] = "MOBILE_PUSH";
				n[n.WEB_ONLY = 4] = "WEB_ONLY"
			}(it = n.NotificationMethods || (n.NotificationMethods = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.USER = 1] = "USER";
				n[n.GROUPS = 2] = "GROUPS";
				n[n.COMMUNITY = 3] = "COMMUNITY"
			}(rt = n.NotificationGrouping || (n.NotificationGrouping = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.MESSAGE = 1] = "MESSAGE";
				n[n.FORUM_REPLY = 2] = "FORUM_REPLY";
				n[n.NEW_ACTIVITY_ROLLUP = 3] = "NEW_ACTIVITY_ROLLUP";
				n[n.SETTINGS_CHANGE = 4] = "SETTINGS_CHANGE";
				n[n.GROUP_ACCEPTANCE = 5] = "GROUP_ACCEPTANCE";
				n[n.GROUP_JOIN_REQUEST = 6] = "GROUP_JOIN_REQUEST";
				n[n.FOLLOW_USER_ACTIVITY = 7] = "FOLLOW_USER_ACTIVITY";
				n[n.FRIEND_USER_ACTIVITY = 8] = "FRIEND_USER_ACTIVITY";
				n[n.FORUM_LIKE = 9] = "FORUM_LIKE";
				n[n.FOLLOWED = 10] = "FOLLOWED";
				n[n.GROUP_BANNED = 11] = "GROUP_BANNED";
				n[n.BANNED = 12] = "BANNED";
				n[n.UNBANNED = 13] = "UNBANNED";
				n[n.GROUP_OPEN_JOIN = 14] = "GROUP_OPEN_JOIN";
				n[n.GROUP_ALLIANCE_JOIN_REQUESTED = 15] = "GROUP_ALLIANCE_JOIN_REQUESTED";
				n[n.GROUP_ALLIANCE_JOIN_REJECTED = 16] = "GROUP_ALLIANCE_JOIN_REJECTED";
				n[n.GROUP_ALLIANCE_JOIN_APPROVED = 17] = "GROUP_ALLIANCE_JOIN_APPROVED";
				n[n.GROUP_ALLIANCE_BROKEN = 18] = "GROUP_ALLIANCE_BROKEN";
				n[n.GROUP_DENIAL = 19] = "GROUP_DENIAL";
				n[n.WARNED = 20] = "WARNED";
				n[n.CLAN_DISABLED = 21] = "CLAN_DISABLED";
				n[n.GROUP_ALLIANCE_INVITE_REQUESTED = 22] = "GROUP_ALLIANCE_INVITE_REQUESTED";
				n[n.GROUP_ALLIANCE_INVITE_REJECTED = 23] = "GROUP_ALLIANCE_INVITE_REJECTED";
				n[n.GROUP_ALLIANCE_INVITE_APPROVED = 24] = "GROUP_ALLIANCE_INVITE_APPROVED";
				n[n.GROUP_FOLLOWED_BY_GROUP = 25] = "GROUP_FOLLOWED_BY_GROUP";
				n[n.GRIMOIRE_UNOBSERVED_CARDS = 26] = "GRIMOIRE_UNOBSERVED_CARDS";
				n[n.COMMUNITY_CONTENT_LIKE = 27] = "COMMUNITY_CONTENT_LIKE";
				n[n.COMMUNITY_CONTENT_APPROVED = 28] = "COMMUNITY_CONTENT_APPROVED";
				n[n.USER_PROFILE_BANNED = 29] = "USER_PROFILE_BANNED";
				n[n.USER_MESSAGE_BANNED = 30] = "USER_MESSAGE_BANNED";
				n[n.SUPPORT_FORM_RECEIVED = 31] = "SUPPORT_FORM_RECEIVED";
				n[n.RAF_NEWBIE_NEEDS_TO_PLAY_TTK = 32] = "RAF_NEWBIE_NEEDS_TO_PLAY_TTK";
				n[n.RAF_TTK_QUEST_READY = 33] = "RAF_TTK_QUEST_READY";
				n[n.RECRUIT_THREAD_READY = 34] = "RECRUIT_THREAD_READY";
				n[n.RECRUIT_THREAD_KICKED = 35] = "RECRUIT_THREAD_KICKED";
				n[n.RECRUIT_THREAD_CANCELED = 36] = "RECRUIT_THREAD_CANCELED";
				n[n.GROUP_WALL_BANNED = 37] = "GROUP_WALL_BANNED";
				n[n.BANNED_PERMANENT = 38] = "BANNED_PERMANENT";
				n[n.USER_PROFILE_BANNED_PERMANENT = 39] = "USER_PROFILE_BANNED_PERMANENT";
				n[n.USER_MESSAGE_BANNED_PERMANENT = 40] = "USER_MESSAGE_BANNED_PERMANENT";
				n[n.GROUP_WALL_BANNED_PERMANENT = 41] = "GROUP_WALL_BANNED_PERMANENT";
				n[n.APPLICATION_AUTHORIZED = 42] = "APPLICATION_AUTHORIZED";
				n[n.GROUP_INDIVIDUAL_INVITE = 43] = "GROUP_INDIVIDUAL_INVITE";
				n[n.GROUP_SYSTEM_CHAT_MESSAGE = 44] = "GROUP_SYSTEM_CHAT_MESSAGE";
				n[n.GROUP_CHAT_MESSAGE = 45] = "GROUP_CHAT_MESSAGE";
				n[n.GROUP_PROFILE_WARNED = 46] = "GROUP_PROFILE_WARNED";
				n[n.GROUP_PROFILE_BANNED = 47] = "GROUP_PROFILE_BANNED";
				n[n.GROUP_PROFILE_BANNED_PERMANENT = 48] = "GROUP_PROFILE_BANNED_PERMANENT"
			}(ut = n.NotificationType || (n.NotificationType = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.ConversationChanged = 1] = "ConversationChanged";
				n[n.Typing = 2] = "Typing";
				n[n.NotificationsChanged = 3] = "NotificationsChanged";
				n[n.MessageCounts = 4] = "MessageCounts";
				n[n.FriendCounts = 5] = "FriendCounts";
				n[n.Announcements = 6] = "Announcements";
				n[n.RecruitThreadUpdate = 7] = "RecruitThreadUpdate"
			}(ft = n.RealTimeEventType || (n.RealTimeEventType = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Private = 1] = "Private";
				n[n.Group = 2] = "Group";
				n[n.Clan = 3] = "Clan"
			}(et = n.EventConversationType || (n.EventConversationType = {})),
			function(n) {
				n[n.BNet = 0] = "BNet";
				n[n.Plain = 1] = "Plain"
			}(ot = n.ActivityOutputFormat || (n.ActivityOutputFormat = {})),
			function(n) {
				n[n.Good = 0] = "Good";
				n[n.TooHigh = 1] = "TooHigh";
				n[n.TooLow = 2] = "TooLow";
				n[n.WrongName = 4] = "WrongName"
			}(st = n.StatFeedbackState || (n.StatFeedbackState = {})),
			function(n) {
				n[n.Off = 0] = "Off";
				n[n.Unlock = 1] = "Unlock";
				n[n.Platform = 2] = "Platform";
				n[n.Expired = 3] = "Expired";
				n[n.Consumable = 4] = "Consumable";
				n[n.PlatformUnlock = 5] = "PlatformUnlock"
			}(ht = n.OfferRedeemMode || (n.OfferRedeemMode = {})),
			function(n) {
				n[n.Unknown = 0] = "Unknown";
				n[n.Blue = 1] = "Blue";
				n[n.Yellow = 2] = "Yellow";
				n[n.Red = 3] = "Red"
			}(ct = n.GlobalAlertLevel || (n.GlobalAlertLevel = {})),
			function(n) {
				n[n.GlobalAlert = 0] = "GlobalAlert";
				n[n.StreamingAlert = 1] = "StreamingAlert"
			}(lt = n.GlobalAlertType || (n.GlobalAlertType = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Twitch = 1] = "Twitch"
			}(at = n.PartnershipType || (n.PartnershipType = {})),
			function(n) {
				n[n.BNet = 0] = "BNet";
				n[n.Plain = 1] = "Plain";
				n[n.EMail = 2] = "EMail";
				n[n.Push = 3] = "Push"
			}(vt = n.TemplateFormat || (n.TemplateFormat = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Plaintext = 1] = "Plaintext";
				n[n.Html = 2] = "Html";
				n[n.Dropdown = 3] = "Dropdown";
				n[n.List = 4] = "List";
				n[n.Json = 5] = "Json";
				n[n.Content = 6] = "Content";
				n[n.Representation = 7] = "Representation";
				n[n.Set = 8] = "Set";
				n[n.File = 9] = "File";
				n[n.FolderSet = 10] = "FolderSet";
				n[n.Date = 11] = "Date";
				n[n.MultilinePlaintext = 12] = "MultilinePlaintext";
				n[n.DestinyContent = 13] = "DestinyContent"
			}(yt = n.ContentPropertyDataTypeEnum || (n.ContentPropertyDataTypeEnum = {})),
			function(n) {
				n[n.Create = 0] = "Create";
				n[n.Edit = 1] = "Edit";
				n[n.Delete = 2] = "Delete";
				n[n.Rate = 3] = "Rate";
				n[n.Follow = 4] = "Follow";
				n[n.Unfollow = 5] = "Unfollow";
				n[n.Apply = 6] = "Apply";
				n[n.Rescind = 7] = "Rescind";
				n[n.Approve = 8] = "Approve";
				n[n.Deny = 9] = "Deny";
				n[n.Kick = 10] = "Kick";
				n[n.EditMembershipType = 11] = "EditMembershipType";
				n[n.Like = 12] = "Like";
				n[n.Unlike = 13] = "Unlike";
				n[n.Share = 14] = "Share";
				n[n.TaggedGroup = 15] = "TaggedGroup";
				n[n.TaggedTopic = 16] = "TaggedTopic";
				n[n.AvatarChanged = 17] = "AvatarChanged";
				n[n.DisplayNameChanged = 18] = "DisplayNameChanged";
				n[n.TitleChanged = 19] = "TitleChanged";
				n[n.TitleUnlocked = 20] = "TitleUnlocked";
				n[n.GroupTopicCreate = 21] = "GroupTopicCreate";
				n[n.GroupReplyCreate = 22] = "GroupReplyCreate";
				n[n.Reply = 23] = "Reply";
				n[n.ChangeGroupName = 24] = "ChangeGroupName";
				n[n.GroupAllianceRejected = 26] = "GroupAllianceRejected";
				n[n.GroupAllianceApproved = 27] = "GroupAllianceApproved";
				n[n.GroupAllianceBroken = 28] = "GroupAllianceBroken";
				n[n.TransferFromVault = 1e3] = "TransferFromVault";
				n[n.TransferToVault = 1001] = "TransferToVault";
				n[n.TrackQuest = 1002] = "TrackQuest";
				n[n.UntrackQuest = 1003] = "UntrackQuest";
				n[n.EquipItem = 1004] = "EquipItem";
				n[n.BuyItem = 1005] = "BuyItem";
				n[n.LockItem = 1008] = "LockItem";
				n[n.UnlockItem = 1009] = "UnlockItem";
				n[n.RefundItem = 1010] = "RefundItem";
				n[n.Authorize = 2e3] = "Authorize";
				n[n.Revoke = 2001] = "Revoke";
				n[n.None = -1] = "None"
			}(pt = n.ActivityType || (n.ActivityType = {})),
			function(n) {
				n[n.User = 0] = "User";
				n[n.Post = 1] = "Post";
				n[n.Topic = 2] = "Topic";
				n[n.Group = 3] = "Group";
				n[n.Tag = 4] = "Tag";
				n[n.CommunityContent = 5] = "CommunityContent";
				n[n.Destiny = 6] = "Destiny";
				n[n.Application = 7] = "Application";
				n[n.None = -1] = "None"
			}(wt = n.AffectedItemType || (n.AffectedItemType = {})),
			function(n) {
				n[n.Following = 1] = "Following";
				n[n.Unfollowing = 2] = "Unfollowing";
				n[n.ManagingGroupMembers = 8] = "ManagingGroupMembers";
				n[n.UpdatingSettings = 16] = "UpdatingSettings";
				n[n.ManagingGroups = 32] = "ManagingGroups"
			}(bt = n.SuccessMessages || (n.SuccessMessages = {})),
			function(n) {
				n[n.Newsletter = 1] = "Newsletter";
				n[n.System = 2] = "System";
				n[n.Marketing = 4] = "Marketing";
				n[n.UserResearch = 8] = "UserResearch";
				n[n.CustomerService = 16] = "CustomerService"
			}(kt = n.OptInFlags || (n.OptInFlags = {})),
			function(n) {
				n[n.Unreviewed = 0] = "Unreviewed";
				n[n.Approved = 1] = "Approved";
				n[n.Rejected = 2] = "Rejected"
			}(dt = n.InvitationResponseState || (n.InvitationResponseState = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.GroupAllianceJoinFromChild = 1] = "GroupAllianceJoinFromChild";
				n[n.ClanJoinInvite = 2] = "ClanJoinInvite";
				n[n.GroupAllianceInviteFromOwner = 3] = "GroupAllianceInviteFromOwner";
				n[n.GroupJoinInvite = 4] = "GroupJoinInvite";
				n[n.ClanJoinRequest = 5] = "ClanJoinRequest";
				n[n.GroupJoinRequest = 6] = "GroupJoinRequest"
			}(gt = n.InvitationType || (n.InvitationType = {})),
			function(n) {
				n[n.General = 0] = "General";
				n[n.Clan = 1] = "Clan"
			}(ni = n.GroupType || (n.GroupType = {})),
			function(n) {
				n[n.Group = 0] = "Group";
				n[n.Admins = 1] = "Admins"
			}(ti = n.ChatSecuritySetting || (n.ChatSecuritySetting = {})),
			function(n) {
				n[n.Wall = 0] = "Wall";
				n[n.Forum = 1] = "Forum";
				n[n.AllianceForum = 2] = "AllianceForum"
			}(ii = n.GroupHomepage || (n.GroupHomepage = {})),
			function(n) {
				n[n.Reviewed = 0] = "Reviewed";
				n[n.Open = 1] = "Open";
				n[n.Closed = 2] = "Closed"
			}(ri = n.MembershipOption || (n.MembershipOption = {})),
			function(n) {
				n[n.Public = 0] = "Public";
				n[n.Alliance = 1] = "Alliance";
				n[n.Private = 2] = "Private"
			}(ui = n.GroupPostPublicity || (n.GroupPostPublicity = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Leaderboards = 1] = "Leaderboards";
				n[n.Callsign = 2] = "Callsign";
				n[n.OptionalConversations = 4] = "OptionalConversations";
				n[n.ClanBanner = 8] = "ClanBanner";
				n[n.D2InvestmentData = 16] = "D2InvestmentData";
				n[n.Tags = 32] = "Tags";
				n[n.Alliances = 64] = "Alliances"
			}(fi = n.Capabilities || (n.Capabilities = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Beginner = 1] = "Beginner";
				n[n.Member = 2] = "Member"
			}(ei = n.HostGuidedGamesPermissionLevel || (n.HostGuidedGamesPermissionLevel = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Beginner = 1] = "Beginner";
				n[n.Member = 2] = "Member";
				n[n.Admin = 3] = "Admin";
				n[n.ActingFounder = 4] = "ActingFounder";
				n[n.Founder = 5] = "Founder"
			}(oi = n.RuntimeGroupMemberType || (n.RuntimeGroupMemberType = {})),
			function(n) {
				n[n.Unallied = 0] = "Unallied";
				n[n.Parent = 1] = "Parent";
				n[n.Child = 2] = "Child"
			}(si = n.GroupAllianceStatus || (n.GroupAllianceStatus = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Applicant = 1] = "Applicant";
				n[n.Invitee = 2] = "Invitee"
			}(hi = n.GroupPotentialMemberStatus || (n.GroupPotentialMemberStatus = {})),
			function(n) {
				n[n.All = 0] = "All";
				n[n.PastDay = 1] = "PastDay";
				n[n.PastWeek = 2] = "PastWeek";
				n[n.PastMonth = 3] = "PastMonth";
				n[n.PastYear = 4] = "PastYear"
			}(ci = n.GroupDateRange || (n.GroupDateRange = {})),
			function(n) {
				n[n.Name = 0] = "Name";
				n[n.Date = 1] = "Date";
				n[n.Popularity = 2] = "Popularity";
				n[n.Id = 3] = "Id"
			}(li = n.GroupSortBy || (n.GroupSortBy = {})),
			function(n) {
				n[n.All = 0] = "All";
				n[n.OneToTen = 1] = "OneToTen";
				n[n.ElevenToOneHundred = 2] = "ElevenToOneHundred";
				n[n.GreaterThanOneHundred = 3] = "GreaterThanOneHundred"
			}(ai = n.GroupMemberCountFilter || (n.GroupMemberCountFilter = {})),
			function(n) {
				n[n.Unresolved = 0] = "Unresolved";
				n[n.Accepted = 1] = "Accepted";
				n[n.Denied = 2] = "Denied";
				n[n.Rescinded = 3] = "Rescinded"
			}(vi = n.GroupApplicationResolveState || (n.GroupApplicationResolveState = {})),
			function(n) {
				n[n.All = 0] = "All";
				n[n.Founded = 1] = "Founded";
				n[n.NonFounded = 2] = "NonFounded"
			}(yi = n.GroupsForMemberFilter || (n.GroupsForMemberFilter = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Profiles = 100] = "Profiles";
				n[n.VendorReceipts = 101] = "VendorReceipts";
				n[n.ProfileInventories = 102] = "ProfileInventories";
				n[n.ProfileCurrencies = 103] = "ProfileCurrencies";
				n[n.Characters = 200] = "Characters";
				n[n.CharacterInventories = 201] = "CharacterInventories";
				n[n.CharacterProgressions = 202] = "CharacterProgressions";
				n[n.CharacterRenderData = 203] = "CharacterRenderData";
				n[n.CharacterActivities = 204] = "CharacterActivities";
				n[n.CharacterEquipment = 205] = "CharacterEquipment";
				n[n.ItemInstances = 300] = "ItemInstances";
				n[n.ItemObjectives = 301] = "ItemObjectives";
				n[n.ItemPerks = 302] = "ItemPerks";
				n[n.ItemRenderData = 303] = "ItemRenderData";
				n[n.ItemStats = 304] = "ItemStats";
				n[n.ItemSockets = 305] = "ItemSockets";
				n[n.ItemTalentGrids = 306] = "ItemTalentGrids";
				n[n.ItemCommonData = 307] = "ItemCommonData";
				n[n.ItemPlugStates = 308] = "ItemPlugStates";
				n[n.Vendors = 400] = "Vendors";
				n[n.VendorCategories = 401] = "VendorCategories";
				n[n.VendorSales = 402] = "VendorSales";
				n[n.Kiosks = 500] = "Kiosks"
			}(pi = n.DestinyComponentType || (n.DestinyComponentType = {})),
			function(n) {
				n[n.NotRefundable = 0] = "NotRefundable";
				n[n.DeletesItem = 1] = "DeletesItem";
				n[n.RevokesLicense = 2] = "RevokesLicense"
			}(wi = n.DestinyVendorItemRefundPolicy || (n.DestinyVendorItemRefundPolicy = {})),
			function(n) {
				n[n.NotBound = 0] = "NotBound";
				n[n.BoundToCharacter = 1] = "BoundToCharacter";
				n[n.BoundToAccount = 2] = "BoundToAccount";
				n[n.BoundToGuild = 3] = "BoundToGuild"
			}(bi = n.ItemBindStatus || (n.ItemBindStatus = {})),
			function(n) {
				n[n.Unknown = 0] = "Unknown";
				n[n.Inventory = 1] = "Inventory";
				n[n.Vault = 2] = "Vault";
				n[n.Vendor = 3] = "Vendor";
				n[n.Postmaster = 4] = "Postmaster"
			}(ki = n.ItemLocation || (n.ItemLocation = {})),
			function(n) {
				n[n.CanTransfer = 0] = "CanTransfer";
				n[n.ItemIsEquipped = 1] = "ItemIsEquipped";
				n[n.NotTransferrable = 2] = "NotTransferrable";
				n[n.NoRoomInDestination = 4] = "NoRoomInDestination"
			}(di = n.TransferStatuses || (n.TransferStatuses = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Locked = 1] = "Locked";
				n[n.Tracked = 2] = "Tracked"
			}(gi = n.ItemState || (n.ItemState = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Destiny2 = 1] = "Destiny2"
			}(nr = n.DestinyGameVersions || (n.DestinyGameVersions = {})),
			function(n) {
				n[n.Human = 0] = "Human";
				n[n.Awoken = 1] = "Awoken";
				n[n.Exo = 2] = "Exo";
				n[n.Unknown = 3] = "Unknown"
			}(tr = n.DestinyRace || (n.DestinyRace = {})),
			function(n) {
				n[n.Titan = 0] = "Titan";
				n[n.Hunter = 1] = "Hunter";
				n[n.Warlock = 2] = "Warlock";
				n[n.Unknown = 3] = "Unknown"
			}(ir = n.DestinyClass || (n.DestinyClass = {})),
			function(n) {
				n[n.Male = 0] = "Male";
				n[n.Female = 1] = "Female";
				n[n.Unknown = 2] = "Unknown"
			}(rr = n.DestinyGender || (n.DestinyGender = {})),
			function(n) {
				n[n.Trivial = 0] = "Trivial";
				n[n.Easy = 1] = "Easy";
				n[n.Normal = 2] = "Normal";
				n[n.Challenging = 3] = "Challenging";
				n[n.Hard = 4] = "Hard";
				n[n.Brave = 5] = "Brave";
				n[n.AlmostImpossible = 6] = "AlmostImpossible";
				n[n.Impossible = 7] = "Impossible"
			}(ur = n.DestinyActivityDifficultyTier || (n.DestinyActivityDifficultyTier = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Kinetic = 1] = "Kinetic";
				n[n.Arc = 2] = "Arc";
				n[n.Thermal = 3] = "Thermal";
				n[n.Void = 4] = "Void";
				n[n.Raid = 5] = "Raid"
			}(fr = n.DamageType || (n.DamageType = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.ItemUnequippable = 1] = "ItemUnequippable";
				n[n.ItemUniqueEquipRestricted = 2] = "ItemUniqueEquipRestricted";
				n[n.ItemFailedUnlockCheck = 4] = "ItemFailedUnlockCheck";
				n[n.ItemFailedLevelCheck = 8] = "ItemFailedLevelCheck";
				n[n.ItemNotOnCharacter = 16] = "ItemNotOnCharacter"
			}(er = n.EquipFailureReason || (n.EquipFailureReason = {})),
			function(n) {
				n[n.Invalid = 0] = "Invalid";
				n[n.CanUpgrade = 1] = "CanUpgrade";
				n[n.NoPoints = 2] = "NoPoints";
				n[n.NoPrerequisites = 3] = "NoPrerequisites";
				n[n.NoSteps = 4] = "NoSteps";
				n[n.NoUnlock = 5] = "NoUnlock";
				n[n.NoMaterial = 6] = "NoMaterial";
				n[n.NoGridLevel = 7] = "NoGridLevel";
				n[n.SwappingLocked = 8] = "SwappingLocked";
				n[n.MustSwap = 9] = "MustSwap";
				n[n.Complete = 10] = "Complete";
				n[n.Unknown = 11] = "Unknown";
				n[n.CreationOnly = 12] = "CreationOnly";
				n[n.Hidden = 13] = "Hidden"
			}(or = n.DestinyTalentNodeState || (n.DestinyTalentNodeState = {})),
			function(n) {
				n[n.Success = 0] = "Success";
				n[n.NoInventorySpace = 1] = "NoInventorySpace";
				n[n.NoFunds = 2] = "NoFunds";
				n[n.NoProgression = 4] = "NoProgression";
				n[n.NoUnlock = 8] = "NoUnlock";
				n[n.NoQuantity = 16] = "NoQuantity";
				n[n.OutsidePurchaseWindow = 32] = "OutsidePurchaseWindow";
				n[n.NotAvailable = 64] = "NotAvailable";
				n[n.UniquenessViolation = 128] = "UniquenessViolation";
				n[n.UnknownError = 256] = "UnknownError";
				n[n.AlreadySelling = 512] = "AlreadySelling";
				n[n.Unsellable = 1024] = "Unsellable";
				n[n.SellingInhibited = 2048] = "SellingInhibited";
				n[n.AlreadyOwned = 4096] = "AlreadyOwned"
			}(sr = n.VendorItemStatus || (n.VendorItemStatus = {})),
			function(n) {
				n[n.Unknown = 0] = "Unknown";
				n[n.Currency = 1] = "Currency";
				n[n.Basic = 2] = "Basic";
				n[n.Common = 3] = "Common";
				n[n.Rare = 4] = "Rare";
				n[n.Superior = 5] = "Superior";
				n[n.Exotic = 6] = "Exotic"
			}(hr = n.TierType || (n.TierType = {})),
			function(n) {
				n[n.Automatic = 0] = "Automatic";
				n[n.Fraction = 1] = "Fraction";
				n[n.Checkbox = 2] = "Checkbox";
				n[n.Percentage = 3] = "Percentage";
				n[n.DateTime = 4] = "DateTime";
				n[n.FractionFloat = 5] = "FractionFloat";
				n[n.Integer = 6] = "Integer";
				n[n.TimeDuration = 7] = "TimeDuration";
				n[n.Hidden = 8] = "Hidden"
			}(cr = n.DestinyUnlockValueUIStyle || (n.DestinyUnlockValueUIStyle = {})),
			function(n) {
				n[n.Incomplete = 0] = "Incomplete";
				n[n.RewardAvailable = 1] = "RewardAvailable";
				n[n.Complete = 2] = "Complete"
			}(lr = n.DestinyProfileRecordState || (n.DestinyProfileRecordState = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.User = 1] = "User";
				n[n.Group = 2] = "Group";
				n[n.Post = 3] = "Post";
				n[n.Invitation = 4] = "Invitation";
				n[n.Report = 5] = "Report";
				n[n.Activity = 6] = "Activity";
				n[n.Conversation = 7] = "Conversation";
				n[n.Tag = 8] = "Tag";
				n[n.Application = 9] = "Application"
			}(ar = n.EntityType || (n.EntityType = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Success = 1] = "Success";
				n[n.TransportException = 2] = "TransportException";
				n[n.UnhandledException = 3] = "UnhandledException";
				n[n.NotImplemented = 4] = "NotImplemented";
				n[n.SystemDisabled = 5] = "SystemDisabled";
				n[n.FailedToLoadAvailableLocalesConfiguration = 6] = "FailedToLoadAvailableLocalesConfiguration";
				n[n.ParameterParseFailure = 7] = "ParameterParseFailure";
				n[n.ParameterInvalidRange = 8] = "ParameterInvalidRange";
				n[n.BadRequest = 9] = "BadRequest";
				n[n.AuthenticationInvalid = 10] = "AuthenticationInvalid";
				n[n.DataNotFound = 11] = "DataNotFound";
				n[n.InsufficientPrivileges = 12] = "InsufficientPrivileges";
				n[n.Duplicate = 13] = "Duplicate";
				n[n.UnknownSqlResult = 14] = "UnknownSqlResult";
				n[n.ValidationError = 15] = "ValidationError";
				n[n.ValidationMissingFieldError = 16] = "ValidationMissingFieldError";
				n[n.ValidationInvalidInputError = 17] = "ValidationInvalidInputError";
				n[n.InvalidParameters = 18] = "InvalidParameters";
				n[n.ParameterNotFound = 19] = "ParameterNotFound";
				n[n.UnhandledHttpException = 20] = "UnhandledHttpException";
				n[n.NotFound = 21] = "NotFound";
				n[n.WebAuthModuleAsyncFailed = 22] = "WebAuthModuleAsyncFailed";
				n[n.InvalidReturnValue = 23] = "InvalidReturnValue";
				n[n.UserBanned = 24] = "UserBanned";
				n[n.InvalidPostBody = 25] = "InvalidPostBody";
				n[n.MissingPostBody = 26] = "MissingPostBody";
				n[n.ExternalServiceTimeout = 27] = "ExternalServiceTimeout";
				n[n.ValidationLengthError = 28] = "ValidationLengthError";
				n[n.ValidationRangeError = 29] = "ValidationRangeError";
				n[n.JsonDeserializationError = 30] = "JsonDeserializationError";
				n[n.ThrottleLimitExceeded = 31] = "ThrottleLimitExceeded";
				n[n.ValidationTagError = 32] = "ValidationTagError";
				n[n.ValidationProfanityError = 33] = "ValidationProfanityError";
				n[n.ValidationUrlFormatError = 34] = "ValidationUrlFormatError";
				n[n.ThrottleLimitExceededMinutes = 35] = "ThrottleLimitExceededMinutes";
				n[n.ThrottleLimitExceededMomentarily = 36] = "ThrottleLimitExceededMomentarily";
				n[n.ThrottleLimitExceededSeconds = 37] = "ThrottleLimitExceededSeconds";
				n[n.ExternalServiceUnknown = 38] = "ExternalServiceUnknown";
				n[n.ValidationWordLengthError = 39] = "ValidationWordLengthError";
				n[n.ValidationInvisibleUnicode = 40] = "ValidationInvisibleUnicode";
				n[n.ValidationBadNames = 41] = "ValidationBadNames";
				n[n.ExternalServiceFailed = 42] = "ExternalServiceFailed";
				n[n.ServiceRetired = 43] = "ServiceRetired";
				n[n.UnknownSqlException = 44] = "UnknownSqlException";
				n[n.UnsupportedLocale = 45] = "UnsupportedLocale";
				n[n.InvalidPageNumber = 46] = "InvalidPageNumber";
				n[n.MaximumPageSizeExceeded = 47] = "MaximumPageSizeExceeded";
				n[n.ServiceUnsupported = 48] = "ServiceUnsupported";
				n[n.ValidationMaximumUnicodeCombiningCharacters = 49] = "ValidationMaximumUnicodeCombiningCharacters";
				n[n.ValidationMaximumSequentialCarriageReturns = 50] = "ValidationMaximumSequentialCarriageReturns";
				n[n.PerEndpointRequestThrottleExceeded = 51] = "PerEndpointRequestThrottleExceeded";
				n[n.AuthContextCacheAssertion = 52] = "AuthContextCacheAssertion";
				n[n.ObsoleteCredentialType = 89] = "ObsoleteCredentialType";
				n[n.UnableToUnPairMobileApp = 90] = "UnableToUnPairMobileApp";
				n[n.UnableToPairMobileApp = 91] = "UnableToPairMobileApp";
				n[n.CannotUseMobileAuthWithNonMobileProvider = 92] = "CannotUseMobileAuthWithNonMobileProvider";
				n[n.MissingDeviceCookie = 93] = "MissingDeviceCookie";
				n[n.FacebookTokenExpired = 94] = "FacebookTokenExpired";
				n[n.AuthTicketRequired = 95] = "AuthTicketRequired";
				n[n.CookieContextRequired = 96] = "CookieContextRequired";
				n[n.UnknownAuthenticationError = 97] = "UnknownAuthenticationError";
				n[n.BungieNetAccountCreationRequired = 98] = "BungieNetAccountCreationRequired";
				n[n.WebAuthRequired = 99] = "WebAuthRequired";
				n[n.ContentUnknownSqlResult = 100] = "ContentUnknownSqlResult";
				n[n.ContentNeedUniquePath = 101] = "ContentNeedUniquePath";
				n[n.ContentSqlException = 102] = "ContentSqlException";
				n[n.ContentNotFound = 103] = "ContentNotFound";
				n[n.ContentSuccessWithTagAddFail = 104] = "ContentSuccessWithTagAddFail";
				n[n.ContentSearchMissingParameters = 105] = "ContentSearchMissingParameters";
				n[n.ContentInvalidId = 106] = "ContentInvalidId";
				n[n.ContentPhysicalFileDeletionError = 107] = "ContentPhysicalFileDeletionError";
				n[n.ContentPhysicalFileCreationError = 108] = "ContentPhysicalFileCreationError";
				n[n.ContentPerforceSubmissionError = 109] = "ContentPerforceSubmissionError";
				n[n.ContentPerforceInitializationError = 110] = "ContentPerforceInitializationError";
				n[n.ContentDeploymentPackageNotReadyError = 111] = "ContentDeploymentPackageNotReadyError";
				n[n.ContentUploadFailed = 112] = "ContentUploadFailed";
				n[n.ContentTooManyResults = 113] = "ContentTooManyResults";
				n[n.ContentInvalidState = 115] = "ContentInvalidState";
				n[n.ContentNavigationParentNotFound = 116] = "ContentNavigationParentNotFound";
				n[n.ContentNavigationParentUpdateError = 117] = "ContentNavigationParentUpdateError";
				n[n.DeploymentPackageNotEditable = 118] = "DeploymentPackageNotEditable";
				n[n.ContentValidationError = 119] = "ContentValidationError";
				n[n.ContentPropertiesValidationError = 120] = "ContentPropertiesValidationError";
				n[n.ContentTypeNotFound = 121] = "ContentTypeNotFound";
				n[n.DeploymentPackageNotFound = 122] = "DeploymentPackageNotFound";
				n[n.ContentSearchInvalidParameters = 123] = "ContentSearchInvalidParameters";
				n[n.ContentItemPropertyAggregationError = 124] = "ContentItemPropertyAggregationError";
				n[n.DeploymentPackageFileNotFound = 125] = "DeploymentPackageFileNotFound";
				n[n.ContentPerforceFileHistoryNotFound = 126] = "ContentPerforceFileHistoryNotFound";
				n[n.ContentAssetZipCreationFailure = 127] = "ContentAssetZipCreationFailure";
				n[n.ContentAssetZipCreationBusy = 128] = "ContentAssetZipCreationBusy";
				n[n.ContentProjectNotFound = 129] = "ContentProjectNotFound";
				n[n.ContentFolderNotFound = 130] = "ContentFolderNotFound";
				n[n.ContentPackagesInconsistent = 131] = "ContentPackagesInconsistent";
				n[n.ContentPackagesInvalidState = 132] = "ContentPackagesInvalidState";
				n[n.ContentPackagesInconsistentType = 133] = "ContentPackagesInconsistentType";
				n[n.ContentCannotDeletePackage = 134] = "ContentCannotDeletePackage";
				n[n.ContentLockedForChanges = 135] = "ContentLockedForChanges";
				n[n.ContentFileUploadFailed = 136] = "ContentFileUploadFailed";
				n[n.ContentNotReviewed = 137] = "ContentNotReviewed";
				n[n.ContentPermissionDenied = 138] = "ContentPermissionDenied";
				n[n.ContentInvalidExternalUrl = 139] = "ContentInvalidExternalUrl";
				n[n.ContentExternalFileCannotBeImportedLocally = 140] = "ContentExternalFileCannotBeImportedLocally";
				n[n.ContentTagSaveFailure = 141] = "ContentTagSaveFailure";
				n[n.ContentPerforceUnmatchedFileError = 142] = "ContentPerforceUnmatchedFileError";
				n[n.ContentPerforceChangelistResultNotFound = 143] = "ContentPerforceChangelistResultNotFound";
				n[n.ContentPerforceChangelistFileItemsNotFound = 144] = "ContentPerforceChangelistFileItemsNotFound";
				n[n.ContentPerforceInvalidRevisionError = 145] = "ContentPerforceInvalidRevisionError";
				n[n.ContentUnloadedSaveResult = 146] = "ContentUnloadedSaveResult";
				n[n.ContentPropertyInvalidNumber = 147] = "ContentPropertyInvalidNumber";
				n[n.ContentPropertyInvalidUrl = 148] = "ContentPropertyInvalidUrl";
				n[n.ContentPropertyInvalidDate = 149] = "ContentPropertyInvalidDate";
				n[n.ContentPropertyInvalidSet = 150] = "ContentPropertyInvalidSet";
				n[n.ContentPropertyCannotDeserialize = 151] = "ContentPropertyCannotDeserialize";
				n[n.ContentRegexValidationFailOnProperty = 152] = "ContentRegexValidationFailOnProperty";
				n[n.ContentMaxLengthFailOnProperty = 153] = "ContentMaxLengthFailOnProperty";
				n[n.ContentPropertyUnexpectedDeserializationError = 154] = "ContentPropertyUnexpectedDeserializationError";
				n[n.ContentPropertyRequired = 155] = "ContentPropertyRequired";
				n[n.ContentCannotCreateFile = 156] = "ContentCannotCreateFile";
				n[n.ContentInvalidMigrationFile = 157] = "ContentInvalidMigrationFile";
				n[n.ContentMigrationAlteringProcessedItem = 158] = "ContentMigrationAlteringProcessedItem";
				n[n.ContentPropertyDefinitionNotFound = 159] = "ContentPropertyDefinitionNotFound";
				n[n.ContentReviewDataChanged = 160] = "ContentReviewDataChanged";
				n[n.ContentRollbackRevisionNotInPackage = 161] = "ContentRollbackRevisionNotInPackage";
				n[n.ContentItemNotBasedOnLatestRevision = 162] = "ContentItemNotBasedOnLatestRevision";
				n[n.ContentUnauthorized = 163] = "ContentUnauthorized";
				n[n.ContentCannotCreateDeploymentPackage = 164] = "ContentCannotCreateDeploymentPackage";
				n[n.ContentUserNotFound = 165] = "ContentUserNotFound";
				n[n.ContentLocalePermissionDenied = 166] = "ContentLocalePermissionDenied";
				n[n.ContentInvalidLinkToInternalEnvironment = 167] = "ContentInvalidLinkToInternalEnvironment";
				n[n.ContentInvalidBlacklistedContent = 168] = "ContentInvalidBlacklistedContent";
				n[n.ContentMacroMalformedNoContentId = 169] = "ContentMacroMalformedNoContentId";
				n[n.ContentMacroMalformedNoTemplateType = 170] = "ContentMacroMalformedNoTemplateType";
				n[n.ContentIllegalBNetMembershipId = 171] = "ContentIllegalBNetMembershipId";
				n[n.ContentLocaleDidNotMatchExpected = 172] = "ContentLocaleDidNotMatchExpected";
				n[n.ContentBabelCallFailed = 173] = "ContentBabelCallFailed";
				n[n.ContentEnglishPostLiveForbidden = 174] = "ContentEnglishPostLiveForbidden";
				n[n.ContentLocaleEditPermissionDenied = 175] = "ContentLocaleEditPermissionDenied";
				n[n.UserNonUniqueName = 200] = "UserNonUniqueName";
				n[n.UserManualLinkingStepRequired = 201] = "UserManualLinkingStepRequired";
				n[n.UserCreateUnknownSqlResult = 202] = "UserCreateUnknownSqlResult";
				n[n.UserCreateUnknownSqlException = 203] = "UserCreateUnknownSqlException";
				n[n.UserMalformedMembershipId = 204] = "UserMalformedMembershipId";
				n[n.UserCannotFindRequestedUser = 205] = "UserCannotFindRequestedUser";
				n[n.UserCannotLoadAccountCredentialLinkInfo = 206] = "UserCannotLoadAccountCredentialLinkInfo";
				n[n.UserInvalidMobileAppType = 207] = "UserInvalidMobileAppType";
				n[n.UserMissingMobilePairingInfo = 208] = "UserMissingMobilePairingInfo";
				n[n.UserCannotGenerateMobileKeyWhileUsingMobileCredential = 209] = "UserCannotGenerateMobileKeyWhileUsingMobileCredential";
				n[n.UserGenerateMobileKeyExistingSlotCollision = 210] = "UserGenerateMobileKeyExistingSlotCollision";
				n[n.UserDisplayNameMissingOrInvalid = 211] = "UserDisplayNameMissingOrInvalid";
				n[n.UserCannotLoadAccountProfileData = 212] = "UserCannotLoadAccountProfileData";
				n[n.UserCannotSaveUserProfileData = 213] = "UserCannotSaveUserProfileData";
				n[n.UserEmailMissingOrInvalid = 214] = "UserEmailMissingOrInvalid";
				n[n.UserTermsOfUseRequired = 215] = "UserTermsOfUseRequired";
				n[n.UserCannotCreateNewAccountWhileLoggedIn = 216] = "UserCannotCreateNewAccountWhileLoggedIn";
				n[n.UserCannotResolveCentralAccount = 217] = "UserCannotResolveCentralAccount";
				n[n.UserInvalidAvatar = 218] = "UserInvalidAvatar";
				n[n.UserMissingCreatedUserResult = 219] = "UserMissingCreatedUserResult";
				n[n.UserCannotChangeUniqueNameYet = 220] = "UserCannotChangeUniqueNameYet";
				n[n.UserCannotChangeDisplayNameYet = 221] = "UserCannotChangeDisplayNameYet";
				n[n.UserCannotChangeEmail = 222] = "UserCannotChangeEmail";
				n[n.UserUniqueNameMustStartWithLetter = 223] = "UserUniqueNameMustStartWithLetter";
				n[n.UserNoLinkedAccountsSupportFriendListings = 224] = "UserNoLinkedAccountsSupportFriendListings";
				n[n.UserAcknowledgmentTableFull = 225] = "UserAcknowledgmentTableFull";
				n[n.UserCreationDestinyMembershipRequired = 226] = "UserCreationDestinyMembershipRequired";
				n[n.UserFriendsTokenNeedsRefresh = 227] = "UserFriendsTokenNeedsRefresh";
				n[n.MessagingUnknownError = 300] = "MessagingUnknownError";
				n[n.MessagingSelfError = 301] = "MessagingSelfError";
				n[n.MessagingSendThrottle = 302] = "MessagingSendThrottle";
				n[n.MessagingNoBody = 303] = "MessagingNoBody";
				n[n.MessagingTooManyUsers = 304] = "MessagingTooManyUsers";
				n[n.MessagingCanNotLeaveConversation = 305] = "MessagingCanNotLeaveConversation";
				n[n.MessagingUnableToSend = 306] = "MessagingUnableToSend";
				n[n.MessagingDeletedUserForbidden = 307] = "MessagingDeletedUserForbidden";
				n[n.MessagingCannotDeleteExternalConversation = 308] = "MessagingCannotDeleteExternalConversation";
				n[n.MessagingGroupChatDisabled = 309] = "MessagingGroupChatDisabled";
				n[n.MessagingMustIncludeSelfInPrivateMessage = 310] = "MessagingMustIncludeSelfInPrivateMessage";
				n[n.MessagingSenderIsBanned = 311] = "MessagingSenderIsBanned";
				n[n.MessagingGroupOptionalChatExceededMaximum = 312] = "MessagingGroupOptionalChatExceededMaximum";
				n[n.AddSurveyAnswersUnknownSqlException = 400] = "AddSurveyAnswersUnknownSqlException";
				n[n.ForumBodyCannotBeEmpty = 500] = "ForumBodyCannotBeEmpty";
				n[n.ForumSubjectCannotBeEmptyOnTopicPost = 501] = "ForumSubjectCannotBeEmptyOnTopicPost";
				n[n.ForumCannotLocateParentPost = 502] = "ForumCannotLocateParentPost";
				n[n.ForumThreadLockedForReplies = 503] = "ForumThreadLockedForReplies";
				n[n.ForumUnknownSqlResultDuringCreatePost = 504] = "ForumUnknownSqlResultDuringCreatePost";
				n[n.ForumUnknownTagCreationError = 505] = "ForumUnknownTagCreationError";
				n[n.ForumUnknownSqlResultDuringTagItem = 506] = "ForumUnknownSqlResultDuringTagItem";
				n[n.ForumUnknownExceptionCreatePost = 507] = "ForumUnknownExceptionCreatePost";
				n[n.ForumQuestionMustBeTopicPost = 508] = "ForumQuestionMustBeTopicPost";
				n[n.ForumExceptionDuringTagSearch = 509] = "ForumExceptionDuringTagSearch";
				n[n.ForumExceptionDuringTopicRetrieval = 510] = "ForumExceptionDuringTopicRetrieval";
				n[n.ForumAliasedTagError = 511] = "ForumAliasedTagError";
				n[n.ForumCannotLocateThread = 512] = "ForumCannotLocateThread";
				n[n.ForumUnknownExceptionEditPost = 513] = "ForumUnknownExceptionEditPost";
				n[n.ForumCannotLocatePost = 514] = "ForumCannotLocatePost";
				n[n.ForumUnknownExceptionGetOrCreateTags = 515] = "ForumUnknownExceptionGetOrCreateTags";
				n[n.ForumEditPermissionDenied = 516] = "ForumEditPermissionDenied";
				n[n.ForumUnknownSqlResultDuringTagIdRetrieval = 517] = "ForumUnknownSqlResultDuringTagIdRetrieval";
				n[n.ForumCannotGetRating = 518] = "ForumCannotGetRating";
				n[n.ForumUnknownExceptionGetRating = 519] = "ForumUnknownExceptionGetRating";
				n[n.ForumRatingsAccessError = 520] = "ForumRatingsAccessError";
				n[n.ForumRelatedPostAccessError = 521] = "ForumRelatedPostAccessError";
				n[n.ForumLatestReplyAccessError = 522] = "ForumLatestReplyAccessError";
				n[n.ForumUserStatusAccessError = 523] = "ForumUserStatusAccessError";
				n[n.ForumAuthorAccessError = 524] = "ForumAuthorAccessError";
				n[n.ForumGroupAccessError = 525] = "ForumGroupAccessError";
				n[n.ForumUrlExpectedButMissing = 526] = "ForumUrlExpectedButMissing";
				n[n.ForumRepliesCannotBeEmpty = 527] = "ForumRepliesCannotBeEmpty";
				n[n.ForumRepliesCannotBeInDifferentGroups = 528] = "ForumRepliesCannotBeInDifferentGroups";
				n[n.ForumSubTopicCannotBeCreatedAtThisThreadLevel = 529] = "ForumSubTopicCannotBeCreatedAtThisThreadLevel";
				n[n.ForumCannotCreateContentTopic = 530] = "ForumCannotCreateContentTopic";
				n[n.ForumTopicDoesNotExist = 531] = "ForumTopicDoesNotExist";
				n[n.ForumContentCommentsNotAllowed = 532] = "ForumContentCommentsNotAllowed";
				n[n.ForumUnknownSqlResultDuringEditPost = 533] = "ForumUnknownSqlResultDuringEditPost";
				n[n.ForumUnknownSqlResultDuringGetPost = 534] = "ForumUnknownSqlResultDuringGetPost";
				n[n.ForumPostValidationBadUrl = 535] = "ForumPostValidationBadUrl";
				n[n.ForumBodyTooLong = 536] = "ForumBodyTooLong";
				n[n.ForumSubjectTooLong = 537] = "ForumSubjectTooLong";
				n[n.ForumAnnouncementNotAllowed = 538] = "ForumAnnouncementNotAllowed";
				n[n.ForumCannotShareOwnPost = 539] = "ForumCannotShareOwnPost";
				n[n.ForumEditNoOp = 540] = "ForumEditNoOp";
				n[n.ForumUnknownDatabaseErrorDuringGetPost = 541] = "ForumUnknownDatabaseErrorDuringGetPost";
				n[n.ForumExceeedMaximumRowLimit = 542] = "ForumExceeedMaximumRowLimit";
				n[n.ForumCannotSharePrivatePost = 543] = "ForumCannotSharePrivatePost";
				n[n.ForumCannotCrossPostBetweenGroups = 544] = "ForumCannotCrossPostBetweenGroups";
				n[n.ForumIncompatibleCategories = 555] = "ForumIncompatibleCategories";
				n[n.ForumCannotUseTheseCategoriesOnNonTopicPost = 556] = "ForumCannotUseTheseCategoriesOnNonTopicPost";
				n[n.ForumCanOnlyDeleteTopics = 557] = "ForumCanOnlyDeleteTopics";
				n[n.ForumDeleteSqlException = 558] = "ForumDeleteSqlException";
				n[n.ForumDeleteSqlUnknownResult = 559] = "ForumDeleteSqlUnknownResult";
				n[n.ForumTooManyTags = 560] = "ForumTooManyTags";
				n[n.ForumCanOnlyRateTopics = 561] = "ForumCanOnlyRateTopics";
				n[n.ForumBannedPostsCannotBeEdited = 562] = "ForumBannedPostsCannotBeEdited";
				n[n.ForumThreadRootIsBanned = 563] = "ForumThreadRootIsBanned";
				n[n.ForumCannotUseOfficialTagCategoryAsTag = 564] = "ForumCannotUseOfficialTagCategoryAsTag";
				n[n.ForumAnswerCannotBeMadeOnCreatePost = 565] = "ForumAnswerCannotBeMadeOnCreatePost";
				n[n.ForumAnswerCannotBeMadeOnEditPost = 566] = "ForumAnswerCannotBeMadeOnEditPost";
				n[n.ForumAnswerPostIdIsNotADirectReplyOfQuestion = 567] = "ForumAnswerPostIdIsNotADirectReplyOfQuestion";
				n[n.ForumAnswerTopicIdIsNotAQuestion = 568] = "ForumAnswerTopicIdIsNotAQuestion";
				n[n.ForumUnknownExceptionDuringMarkAnswer = 569] = "ForumUnknownExceptionDuringMarkAnswer";
				n[n.ForumUnknownSqlResultDuringMarkAnswer = 570] = "ForumUnknownSqlResultDuringMarkAnswer";
				n[n.ForumCannotRateYourOwnPosts = 571] = "ForumCannotRateYourOwnPosts";
				n[n.ForumPollsMustBeTheFirstPostInTopic = 572] = "ForumPollsMustBeTheFirstPostInTopic";
				n[n.ForumInvalidPollInput = 573] = "ForumInvalidPollInput";
				n[n.ForumGroupAdminEditNonMember = 574] = "ForumGroupAdminEditNonMember";
				n[n.ForumCannotEditModeratorEditedPost = 575] = "ForumCannotEditModeratorEditedPost";
				n[n.ForumRequiresDestinyMembership = 576] = "ForumRequiresDestinyMembership";
				n[n.ForumUnexpectedError = 577] = "ForumUnexpectedError";
				n[n.ForumAgeLock = 578] = "ForumAgeLock";
				n[n.ForumMaxPages = 579] = "ForumMaxPages";
				n[n.ForumMaxPagesOldestFirst = 580] = "ForumMaxPagesOldestFirst";
				n[n.ForumCannotApplyForumIdWithoutTags = 581] = "ForumCannotApplyForumIdWithoutTags";
				n[n.ForumCannotApplyForumIdToNonTopics = 582] = "ForumCannotApplyForumIdToNonTopics";
				n[n.ForumCannotDownvoteCommunityCreations = 583] = "ForumCannotDownvoteCommunityCreations";
				n[n.ForumTopicsMustHaveOfficialCategory = 584] = "ForumTopicsMustHaveOfficialCategory";
				n[n.ForumRecruitmentTopicMalformed = 585] = "ForumRecruitmentTopicMalformed";
				n[n.ForumRecruitmentTopicNotFound = 586] = "ForumRecruitmentTopicNotFound";
				n[n.ForumRecruitmentTopicNoSlotsRemaining = 587] = "ForumRecruitmentTopicNoSlotsRemaining";
				n[n.ForumRecruitmentTopicKickBan = 588] = "ForumRecruitmentTopicKickBan";
				n[n.ForumRecruitmentTopicRequirementsNotMet = 589] = "ForumRecruitmentTopicRequirementsNotMet";
				n[n.ForumRecruitmentTopicNoPlayers = 590] = "ForumRecruitmentTopicNoPlayers";
				n[n.ForumRecruitmentApproveFailMessageBan = 591] = "ForumRecruitmentApproveFailMessageBan";
				n[n.ForumRecruitmentGlobalBan = 592] = "ForumRecruitmentGlobalBan";
				n[n.ForumUserBannedFromThisTopic = 593] = "ForumUserBannedFromThisTopic";
				n[n.ForumRecruitmentFireteamMembersOnly = 594] = "ForumRecruitmentFireteamMembersOnly";
				n[n.GroupMembershipApplicationAlreadyResolved = 601] = "GroupMembershipApplicationAlreadyResolved";
				n[n.GroupMembershipAlreadyApplied = 602] = "GroupMembershipAlreadyApplied";
				n[n.GroupMembershipInsufficientPrivileges = 603] = "GroupMembershipInsufficientPrivileges";
				n[n.GroupIdNotReturnedFromCreation = 604] = "GroupIdNotReturnedFromCreation";
				n[n.GroupSearchInvalidParameters = 605] = "GroupSearchInvalidParameters";
				n[n.GroupMembershipPendingApplicationNotFound = 606] = "GroupMembershipPendingApplicationNotFound";
				n[n.GroupInvalidId = 607] = "GroupInvalidId";
				n[n.GroupInvalidMembershipId = 608] = "GroupInvalidMembershipId";
				n[n.GroupInvalidMembershipType = 609] = "GroupInvalidMembershipType";
				n[n.GroupMissingTags = 610] = "GroupMissingTags";
				n[n.GroupMembershipNotFound = 611] = "GroupMembershipNotFound";
				n[n.GroupInvalidRating = 612] = "GroupInvalidRating";
				n[n.GroupUserFollowingAccessError = 613] = "GroupUserFollowingAccessError";
				n[n.GroupUserMembershipAccessError = 614] = "GroupUserMembershipAccessError";
				n[n.GroupCreatorAccessError = 615] = "GroupCreatorAccessError";
				n[n.GroupAdminAccessError = 616] = "GroupAdminAccessError";
				n[n.GroupPrivatePostNotViewable = 617] = "GroupPrivatePostNotViewable";
				n[n.GroupMembershipNotLoggedIn = 618] = "GroupMembershipNotLoggedIn";
				n[n.GroupNotDeleted = 619] = "GroupNotDeleted";
				n[n.GroupUnknownErrorUndeletingGroup = 620] = "GroupUnknownErrorUndeletingGroup";
				n[n.GroupDeleted = 621] = "GroupDeleted";
				n[n.GroupNotFound = 622] = "GroupNotFound";
				n[n.GroupMemberBanned = 623] = "GroupMemberBanned";
				n[n.GroupMembershipClosed = 624] = "GroupMembershipClosed";
				n[n.GroupPrivatePostOverrideError = 625] = "GroupPrivatePostOverrideError";
				n[n.GroupNameTaken = 626] = "GroupNameTaken";
				n[n.GroupDeletionGracePeriodExpired = 627] = "GroupDeletionGracePeriodExpired";
				n[n.GroupCannotCheckBanStatus = 628] = "GroupCannotCheckBanStatus";
				n[n.GroupMaximumMembershipCountReached = 629] = "GroupMaximumMembershipCountReached";
				n[n.NoDestinyAccountForClanPlatform = 630] = "NoDestinyAccountForClanPlatform";
				n[n.AlreadyRequestingMembershipForClanPlatform = 631] = "AlreadyRequestingMembershipForClanPlatform";
				n[n.AlreadyClanMemberOnPlatform = 632] = "AlreadyClanMemberOnPlatform";
				n[n.GroupJoinedCannotSetClanName = 633] = "GroupJoinedCannotSetClanName";
				n[n.GroupLeftCannotClearClanName = 634] = "GroupLeftCannotClearClanName";
				n[n.GroupRelationshipRequestPending = 635] = "GroupRelationshipRequestPending";
				n[n.GroupRelationshipRequestBlocked = 636] = "GroupRelationshipRequestBlocked";
				n[n.GroupRelationshipRequestNotFound = 637] = "GroupRelationshipRequestNotFound";
				n[n.GroupRelationshipBlockNotFound = 638] = "GroupRelationshipBlockNotFound";
				n[n.GroupRelationshipNotFound = 639] = "GroupRelationshipNotFound";
				n[n.GroupAlreadyAllied = 641] = "GroupAlreadyAllied";
				n[n.GroupAlreadyMember = 642] = "GroupAlreadyMember";
				n[n.GroupRelationshipAlreadyExists = 643] = "GroupRelationshipAlreadyExists";
				n[n.InvalidGroupTypesForRelationshipRequest = 644] = "InvalidGroupTypesForRelationshipRequest";
				n[n.GroupAtMaximumAlliances = 646] = "GroupAtMaximumAlliances";
				n[n.GroupCannotSetClanOnlySettings = 647] = "GroupCannotSetClanOnlySettings";
				n[n.ClanCannotSetTwoDefaultPostTypes = 648] = "ClanCannotSetTwoDefaultPostTypes";
				n[n.GroupMemberInvalidMemberType = 649] = "GroupMemberInvalidMemberType";
				n[n.GroupInvalidPlatformType = 650] = "GroupInvalidPlatformType";
				n[n.GroupMemberInvalidSort = 651] = "GroupMemberInvalidSort";
				n[n.GroupInvalidResolveState = 652] = "GroupInvalidResolveState";
				n[n.ClanAlreadyEnabledForPlatform = 653] = "ClanAlreadyEnabledForPlatform";
				n[n.ClanNotEnabledForPlatform = 654] = "ClanNotEnabledForPlatform";
				n[n.ClanEnabledButCouldNotJoinNoAccount = 655] = "ClanEnabledButCouldNotJoinNoAccount";
				n[n.ClanEnabledButCouldNotJoinAlreadyMember = 656] = "ClanEnabledButCouldNotJoinAlreadyMember";
				n[n.ClanCannotJoinNoCredential = 657] = "ClanCannotJoinNoCredential";
				n[n.NoClanMembershipForPlatform = 658] = "NoClanMembershipForPlatform";
				n[n.GroupToGroupFollowLimitReached = 659] = "GroupToGroupFollowLimitReached";
				n[n.ChildGroupAlreadyInAlliance = 660] = "ChildGroupAlreadyInAlliance";
				n[n.OwnerGroupAlreadyInAlliance = 661] = "OwnerGroupAlreadyInAlliance";
				n[n.AllianceOwnerCannotJoinAlliance = 662] = "AllianceOwnerCannotJoinAlliance";
				n[n.GroupNotInAlliance = 663] = "GroupNotInAlliance";
				n[n.ChildGroupCannotInviteToAlliance = 664] = "ChildGroupCannotInviteToAlliance";
				n[n.GroupToGroupAlreadyFollowed = 665] = "GroupToGroupAlreadyFollowed";
				n[n.GroupToGroupNotFollowing = 666] = "GroupToGroupNotFollowing";
				n[n.ClanMaximumMembershipReached = 667] = "ClanMaximumMembershipReached";
				n[n.ClanNameNotValid = 668] = "ClanNameNotValid";
				n[n.ClanNameNotValidError = 669] = "ClanNameNotValidError";
				n[n.AllianceOwnerNotDefined = 670] = "AllianceOwnerNotDefined";
				n[n.AllianceChildNotDefined = 671] = "AllianceChildNotDefined";
				n[n.ClanCultureIllegalCharacters = 672] = "ClanCultureIllegalCharacters";
				n[n.ClanTagIllegalCharacters = 673] = "ClanTagIllegalCharacters";
				n[n.ClanRequiresInvitation = 674] = "ClanRequiresInvitation";
				n[n.ClanMembershipClosed = 675] = "ClanMembershipClosed";
				n[n.ClanInviteAlreadyMember = 676] = "ClanInviteAlreadyMember";
				n[n.GroupInviteAlreadyMember = 677] = "GroupInviteAlreadyMember";
				n[n.GroupJoinApprovalRequired = 678] = "GroupJoinApprovalRequired";
				n[n.ClanTagRequired = 679] = "ClanTagRequired";
				n[n.GroupNameCannotStartOrEndWithWhiteSpace = 680] = "GroupNameCannotStartOrEndWithWhiteSpace";
				n[n.ClanCallsignCannotStartOrEndWithWhiteSpace = 681] = "ClanCallsignCannotStartOrEndWithWhiteSpace";
				n[n.ClanMigrationFailed = 682] = "ClanMigrationFailed";
				n[n.ClanNotEnabledAlreadyMemberOfAnotherClan = 683] = "ClanNotEnabledAlreadyMemberOfAnotherClan";
				n[n.GroupModerationNotPermittedOnNonMembers = 684] = "GroupModerationNotPermittedOnNonMembers";
				n[n.ClanCreationInWorldServerFailed = 685] = "ClanCreationInWorldServerFailed";
				n[n.ClanNotFound = 686] = "ClanNotFound";
				n[n.ClanMembershipLevelDoesNotPermitThatAction = 687] = "ClanMembershipLevelDoesNotPermitThatAction";
				n[n.ClanMemberNotFound = 688] = "ClanMemberNotFound";
				n[n.ClanMissingMembershipApprovers = 689] = "ClanMissingMembershipApprovers";
				n[n.ClanInWrongStateForRequestedAction = 690] = "ClanInWrongStateForRequestedAction";
				n[n.ClanNameAlreadyUsed = 691] = "ClanNameAlreadyUsed";
				n[n.ClanTooFewMembers = 692] = "ClanTooFewMembers";
				n[n.ClanInfoCannotBeWhitespace = 693] = "ClanInfoCannotBeWhitespace";
				n[n.GroupCultureThrottle = 694] = "GroupCultureThrottle";
				n[n.ClanTargetDisallowsInvites = 695] = "ClanTargetDisallowsInvites";
				n[n.ClanInvalidOperation = 696] = "ClanInvalidOperation";
				n[n.ClanFounderCannotLeaveWithoutAbdication = 697] = "ClanFounderCannotLeaveWithoutAbdication";
				n[n.ClanNameReserved = 698] = "ClanNameReserved";
				n[n.ClanApplicantInClanSoNowInvited = 699] = "ClanApplicantInClanSoNowInvited";
				n[n.ActivitiesUnknownException = 701] = "ActivitiesUnknownException";
				n[n.ActivitiesParameterNull = 702] = "ActivitiesParameterNull";
				n[n.ActivityCountsDiabled = 703] = "ActivityCountsDiabled";
				n[n.ActivitySearchInvalidParameters = 704] = "ActivitySearchInvalidParameters";
				n[n.ActivityPermissionDenied = 705] = "ActivityPermissionDenied";
				n[n.ShareAlreadyShared = 706] = "ShareAlreadyShared";
				n[n.ActivityLoggingDisabled = 707] = "ActivityLoggingDisabled";
				n[n.ItemAlreadyFollowed = 801] = "ItemAlreadyFollowed";
				n[n.ItemNotFollowed = 802] = "ItemNotFollowed";
				n[n.CannotFollowSelf = 803] = "CannotFollowSelf";
				n[n.GroupFollowLimitExceeded = 804] = "GroupFollowLimitExceeded";
				n[n.TagFollowLimitExceeded = 805] = "TagFollowLimitExceeded";
				n[n.UserFollowLimitExceeded = 806] = "UserFollowLimitExceeded";
				n[n.FollowUnsupportedEntityType = 807] = "FollowUnsupportedEntityType";
				n[n.NoValidTagsInList = 900] = "NoValidTagsInList";
				n[n.BelowMinimumSuggestionLength = 901] = "BelowMinimumSuggestionLength";
				n[n.CannotGetSuggestionsOnMultipleTagsSimultaneously = 902] = "CannotGetSuggestionsOnMultipleTagsSimultaneously";
				n[n.NotAValidPartialTag = 903] = "NotAValidPartialTag";
				n[n.TagSuggestionsUnknownSqlResult = 904] = "TagSuggestionsUnknownSqlResult";
				n[n.TagsUnableToLoadPopularTagsFromDatabase = 905] = "TagsUnableToLoadPopularTagsFromDatabase";
				n[n.TagInvalid = 906] = "TagInvalid";
				n[n.TagNotFound = 907] = "TagNotFound";
				n[n.SingleTagExpected = 908] = "SingleTagExpected";
				n[n.TagsExceededMaximumPerItem = 909] = "TagsExceededMaximumPerItem";
				n[n.IgnoreInvalidParameters = 1e3] = "IgnoreInvalidParameters";
				n[n.IgnoreSqlException = 1001] = "IgnoreSqlException";
				n[n.IgnoreErrorRetrievingGroupPermissions = 1002] = "IgnoreErrorRetrievingGroupPermissions";
				n[n.IgnoreErrorInsufficientPermission = 1003] = "IgnoreErrorInsufficientPermission";
				n[n.IgnoreErrorRetrievingItem = 1004] = "IgnoreErrorRetrievingItem";
				n[n.IgnoreCannotIgnoreSelf = 1005] = "IgnoreCannotIgnoreSelf";
				n[n.IgnoreIllegalType = 1006] = "IgnoreIllegalType";
				n[n.IgnoreNotFound = 1007] = "IgnoreNotFound";
				n[n.IgnoreUserGloballyIgnored = 1008] = "IgnoreUserGloballyIgnored";
				n[n.IgnoreUserIgnored = 1009] = "IgnoreUserIgnored";
				n[n.NotificationSettingInvalid = 1100] = "NotificationSettingInvalid";
				n[n.PsnApiExpiredAccessToken = 1204] = "PsnApiExpiredAccessToken";
				n[n.PSNExForbidden = 1205] = "PSNExForbidden";
				n[n.PSNExSystemDisabled = 1218] = "PSNExSystemDisabled";
				n[n.PsnApiErrorCodeUnknown = 1223] = "PsnApiErrorCodeUnknown";
				n[n.PsnApiErrorWebException = 1224] = "PsnApiErrorWebException";
				n[n.PsnApiBadRequest = 1225] = "PsnApiBadRequest";
				n[n.PsnApiAccessTokenRequired = 1226] = "PsnApiAccessTokenRequired";
				n[n.PsnApiInvalidAccessToken = 1227] = "PsnApiInvalidAccessToken";
				n[n.PsnApiBannedUser = 1229] = "PsnApiBannedUser";
				n[n.PsnApiAccountUpgradeRequired = 1230] = "PsnApiAccountUpgradeRequired";
				n[n.PsnApiServiceTemporarilyUnavailable = 1231] = "PsnApiServiceTemporarilyUnavailable";
				n[n.PsnApiServerBusy = 1232] = "PsnApiServerBusy";
				n[n.PsnApiUnderMaintenance = 1233] = "PsnApiUnderMaintenance";
				n[n.PsnApiProfileUserNotFound = 1234] = "PsnApiProfileUserNotFound";
				n[n.PsnApiProfilePrivacyRestriction = 1235] = "PsnApiProfilePrivacyRestriction";
				n[n.PsnApiProfileUnderMaintenance = 1236] = "PsnApiProfileUnderMaintenance";
				n[n.PsnApiAccountAttributeMissing = 1237] = "PsnApiAccountAttributeMissing";
				n[n.XblExSystemDisabled = 1300] = "XblExSystemDisabled";
				n[n.XblExUnknownError = 1301] = "XblExUnknownError";
				n[n.XblApiErrorWebException = 1302] = "XblApiErrorWebException";
				n[n.XblStsTokenInvalid = 1303] = "XblStsTokenInvalid";
				n[n.XblStsMissingToken = 1304] = "XblStsMissingToken";
				n[n.XblStsExpiredToken = 1305] = "XblStsExpiredToken";
				n[n.XblAccessToTheSandboxDenied = 1306] = "XblAccessToTheSandboxDenied";
				n[n.XblMsaResponseMissing = 1307] = "XblMsaResponseMissing";
				n[n.XblMsaAccessTokenExpired = 1308] = "XblMsaAccessTokenExpired";
				n[n.XblMsaInvalidRequest = 1309] = "XblMsaInvalidRequest";
				n[n.XblMsaFriendsRequireSignIn = 1310] = "XblMsaFriendsRequireSignIn";
				n[n.XblUserActionRequired = 1311] = "XblUserActionRequired";
				n[n.XblParentalControls = 1312] = "XblParentalControls";
				n[n.XblDeveloperAccount = 1313] = "XblDeveloperAccount";
				n[n.XblUserTokenExpired = 1314] = "XblUserTokenExpired";
				n[n.XblUserTokenInvalid = 1315] = "XblUserTokenInvalid";
				n[n.XblOffline = 1316] = "XblOffline";
				n[n.XblUnknownErrorCode = 1317] = "XblUnknownErrorCode";
				n[n.XblMsaInvalidGrant = 1318] = "XblMsaInvalidGrant";
				n[n.ReportNotYetResolved = 1400] = "ReportNotYetResolved";
				n[n.ReportOverturnDoesNotChangeDecision = 1401] = "ReportOverturnDoesNotChangeDecision";
				n[n.ReportNotFound = 1402] = "ReportNotFound";
				n[n.ReportAlreadyReported = 1403] = "ReportAlreadyReported";
				n[n.ReportInvalidResolution = 1404] = "ReportInvalidResolution";
				n[n.ReportNotAssignedToYou = 1405] = "ReportNotAssignedToYou";
				n[n.LegacyGameStatsSystemDisabled = 1500] = "LegacyGameStatsSystemDisabled";
				n[n.LegacyGameStatsUnknownError = 1501] = "LegacyGameStatsUnknownError";
				n[n.LegacyGameStatsMalformedSneakerNetCode = 1502] = "LegacyGameStatsMalformedSneakerNetCode";
				n[n.DestinyAccountAcquisitionFailure = 1600] = "DestinyAccountAcquisitionFailure";
				n[n.DestinyAccountNotFound = 1601] = "DestinyAccountNotFound";
				n[n.DestinyBuildStatsDatabaseError = 1602] = "DestinyBuildStatsDatabaseError";
				n[n.DestinyCharacterStatsDatabaseError = 1603] = "DestinyCharacterStatsDatabaseError";
				n[n.DestinyPvPStatsDatabaseError = 1604] = "DestinyPvPStatsDatabaseError";
				n[n.DestinyPvEStatsDatabaseError = 1605] = "DestinyPvEStatsDatabaseError";
				n[n.DestinyGrimoireStatsDatabaseError = 1606] = "DestinyGrimoireStatsDatabaseError";
				n[n.DestinyStatsParameterMembershipTypeParseError = 1607] = "DestinyStatsParameterMembershipTypeParseError";
				n[n.DestinyStatsParameterMembershipIdParseError = 1608] = "DestinyStatsParameterMembershipIdParseError";
				n[n.DestinyStatsParameterRangeParseError = 1609] = "DestinyStatsParameterRangeParseError";
				n[n.DestinyStringItemHashNotFound = 1610] = "DestinyStringItemHashNotFound";
				n[n.DestinyStringSetNotFound = 1611] = "DestinyStringSetNotFound";
				n[n.DestinyContentLookupNotFoundForKey = 1612] = "DestinyContentLookupNotFoundForKey";
				n[n.DestinyContentItemNotFound = 1613] = "DestinyContentItemNotFound";
				n[n.DestinyContentSectionNotFound = 1614] = "DestinyContentSectionNotFound";
				n[n.DestinyContentPropertyNotFound = 1615] = "DestinyContentPropertyNotFound";
				n[n.DestinyContentConfigNotFound = 1616] = "DestinyContentConfigNotFound";
				n[n.DestinyContentPropertyBucketValueNotFound = 1617] = "DestinyContentPropertyBucketValueNotFound";
				n[n.DestinyUnexpectedError = 1618] = "DestinyUnexpectedError";
				n[n.DestinyInvalidAction = 1619] = "DestinyInvalidAction";
				n[n.DestinyCharacterNotFound = 1620] = "DestinyCharacterNotFound";
				n[n.DestinyInvalidFlag = 1621] = "DestinyInvalidFlag";
				n[n.DestinyInvalidRequest = 1622] = "DestinyInvalidRequest";
				n[n.DestinyItemNotFound = 1623] = "DestinyItemNotFound";
				n[n.DestinyInvalidCustomizationChoices = 1624] = "DestinyInvalidCustomizationChoices";
				n[n.DestinyVendorItemNotFound = 1625] = "DestinyVendorItemNotFound";
				n[n.DestinyInternalError = 1626] = "DestinyInternalError";
				n[n.DestinyVendorNotFound = 1627] = "DestinyVendorNotFound";
				n[n.DestinyRecentActivitiesDatabaseError = 1628] = "DestinyRecentActivitiesDatabaseError";
				n[n.DestinyItemBucketNotFound = 1629] = "DestinyItemBucketNotFound";
				n[n.DestinyInvalidMembershipType = 1630] = "DestinyInvalidMembershipType";
				n[n.DestinyVersionIncompatibility = 1631] = "DestinyVersionIncompatibility";
				n[n.DestinyItemAlreadyInInventory = 1632] = "DestinyItemAlreadyInInventory";
				n[n.DestinyBucketNotFound = 1633] = "DestinyBucketNotFound";
				n[n.DestinyCharacterNotInTower = 1634] = "DestinyCharacterNotInTower";
				n[n.DestinyCharacterNotLoggedIn = 1635] = "DestinyCharacterNotLoggedIn";
				n[n.DestinyDefinitionsNotLoaded = 1636] = "DestinyDefinitionsNotLoaded";
				n[n.DestinyInventoryFull = 1637] = "DestinyInventoryFull";
				n[n.DestinyItemFailedLevelCheck = 1638] = "DestinyItemFailedLevelCheck";
				n[n.DestinyItemFailedUnlockCheck = 1639] = "DestinyItemFailedUnlockCheck";
				n[n.DestinyItemUnequippable = 1640] = "DestinyItemUnequippable";
				n[n.DestinyItemUniqueEquipRestricted = 1641] = "DestinyItemUniqueEquipRestricted";
				n[n.DestinyNoRoomInDestination = 1642] = "DestinyNoRoomInDestination";
				n[n.DestinyServiceFailure = 1643] = "DestinyServiceFailure";
				n[n.DestinyServiceRetired = 1644] = "DestinyServiceRetired";
				n[n.DestinyTransferFailed = 1645] = "DestinyTransferFailed";
				n[n.DestinyTransferNotFoundForSourceBucket = 1646] = "DestinyTransferNotFoundForSourceBucket";
				n[n.DestinyUnexpectedResultInVendorTransferCheck = 1647] = "DestinyUnexpectedResultInVendorTransferCheck";
				n[n.DestinyUniquenessViolation = 1648] = "DestinyUniquenessViolation";
				n[n.DestinyErrorDeserializationFailure = 1649] = "DestinyErrorDeserializationFailure";
				n[n.DestinyValidAccountTicketRequired = 1650] = "DestinyValidAccountTicketRequired";
				n[n.DestinyShardRelayClientTimeout = 1651] = "DestinyShardRelayClientTimeout";
				n[n.DestinyShardRelayProxyTimeout = 1652] = "DestinyShardRelayProxyTimeout";
				n[n.DestinyPGCRNotFound = 1653] = "DestinyPGCRNotFound";
				n[n.DestinyAccountMustBeOffline = 1654] = "DestinyAccountMustBeOffline";
				n[n.DestinyCanOnlyEquipInGame = 1655] = "DestinyCanOnlyEquipInGame";
				n[n.DestinyCannotPerformActionOnEquippedItem = 1656] = "DestinyCannotPerformActionOnEquippedItem";
				n[n.DestinyQuestAlreadyCompleted = 1657] = "DestinyQuestAlreadyCompleted";
				n[n.DestinyQuestAlreadyTracked = 1658] = "DestinyQuestAlreadyTracked";
				n[n.DestinyTrackableQuestsFull = 1659] = "DestinyTrackableQuestsFull";
				n[n.DestinyItemNotTransferrable = 1660] = "DestinyItemNotTransferrable";
				n[n.DestinyVendorPurchaseNotAllowed = 1661] = "DestinyVendorPurchaseNotAllowed";
				n[n.DestinyContentVersionMismatch = 1662] = "DestinyContentVersionMismatch";
				n[n.DestinyItemActionForbidden = 1663] = "DestinyItemActionForbidden";
				n[n.DestinyRefundInvalid = 1664] = "DestinyRefundInvalid";
				n[n.DestinyPrivacyRestriction = 1665] = "DestinyPrivacyRestriction";
				n[n.DestinyActionInsufficientPrivileges = 1666] = "DestinyActionInsufficientPrivileges";
				n[n.DestinyInvalidClaimException = 1667] = "DestinyInvalidClaimException";
				n[n.DestinyLegacyPlatformRestricted = 1668] = "DestinyLegacyPlatformRestricted";
				n[n.DestinyLegacyPlatformInUse = 1669] = "DestinyLegacyPlatformInUse";
				n[n.DestinyLegacyPlatformInaccessible = 1670] = "DestinyLegacyPlatformInaccessible";
				n[n.DestinyCannotPerformActionAtThisLocation = 1671] = "DestinyCannotPerformActionAtThisLocation";
				n[n.DestinyThrottledByGameServer = 1672] = "DestinyThrottledByGameServer";
				n[n.FbInvalidRequest = 1800] = "FbInvalidRequest";
				n[n.FbRedirectMismatch = 1801] = "FbRedirectMismatch";
				n[n.FbAccessDenied = 1802] = "FbAccessDenied";
				n[n.FbUnsupportedResponseType = 1803] = "FbUnsupportedResponseType";
				n[n.FbInvalidScope = 1804] = "FbInvalidScope";
				n[n.FbUnsupportedGrantType = 1805] = "FbUnsupportedGrantType";
				n[n.FbInvalidGrant = 1806] = "FbInvalidGrant";
				n[n.InvitationExpired = 1900] = "InvitationExpired";
				n[n.InvitationUnknownType = 1901] = "InvitationUnknownType";
				n[n.InvitationInvalidResponseStatus = 1902] = "InvitationInvalidResponseStatus";
				n[n.InvitationInvalidType = 1903] = "InvitationInvalidType";
				n[n.InvitationAlreadyPending = 1904] = "InvitationAlreadyPending";
				n[n.InvitationInsufficientPermission = 1905] = "InvitationInsufficientPermission";
				n[n.InvitationInvalidCode = 1906] = "InvitationInvalidCode";
				n[n.InvitationInvalidTargetState = 1907] = "InvitationInvalidTargetState";
				n[n.InvitationCannotBeReactivated = 1908] = "InvitationCannotBeReactivated";
				n[n.InvitationNoRecipients = 1910] = "InvitationNoRecipients";
				n[n.InvitationGroupCannotSendToSelf = 1911] = "InvitationGroupCannotSendToSelf";
				n[n.InvitationTooManyRecipients = 1912] = "InvitationTooManyRecipients";
				n[n.InvitationInvalid = 1913] = "InvitationInvalid";
				n[n.InvitationNotFound = 1914] = "InvitationNotFound";
				n[n.TokenInvalid = 2e3] = "TokenInvalid";
				n[n.TokenBadFormat = 2001] = "TokenBadFormat";
				n[n.TokenAlreadyClaimed = 2002] = "TokenAlreadyClaimed";
				n[n.TokenAlreadyClaimedSelf = 2003] = "TokenAlreadyClaimedSelf";
				n[n.TokenThrottling = 2004] = "TokenThrottling";
				n[n.TokenUnknownRedemptionFailure = 2005] = "TokenUnknownRedemptionFailure";
				n[n.TokenPurchaseClaimFailedAfterTokenClaimed = 2006] = "TokenPurchaseClaimFailedAfterTokenClaimed";
				n[n.TokenUserAlreadyOwnsOffer = 2007] = "TokenUserAlreadyOwnsOffer";
				n[n.TokenInvalidOfferKey = 2008] = "TokenInvalidOfferKey";
				n[n.TokenEmailNotValidated = 2009] = "TokenEmailNotValidated";
				n[n.TokenProvisioningBadVendorOrOffer = 2010] = "TokenProvisioningBadVendorOrOffer";
				n[n.TokenPurchaseHistoryUnknownError = 2011] = "TokenPurchaseHistoryUnknownError";
				n[n.TokenThrottleStateUnknownError = 2012] = "TokenThrottleStateUnknownError";
				n[n.TokenUserAgeNotVerified = 2013] = "TokenUserAgeNotVerified";
				n[n.TokenExceededOfferMaximum = 2014] = "TokenExceededOfferMaximum";
				n[n.TokenNoAvailableUnlocks = 2015] = "TokenNoAvailableUnlocks";
				n[n.TokenMarketplaceInvalidPlatform = 2016] = "TokenMarketplaceInvalidPlatform";
				n[n.TokenNoMarketplaceCodesFound = 2017] = "TokenNoMarketplaceCodesFound";
				n[n.TokenOfferNotAvailableForRedemption = 2018] = "TokenOfferNotAvailableForRedemption";
				n[n.TokenUnlockPartialFailure = 2019] = "TokenUnlockPartialFailure";
				n[n.TokenMarketplaceInvalidRegion = 2020] = "TokenMarketplaceInvalidRegion";
				n[n.TokenOfferExpired = 2021] = "TokenOfferExpired";
				n[n.RAFExceededMaximumReferrals = 2022] = "RAFExceededMaximumReferrals";
				n[n.RAFDuplicateBond = 2023] = "RAFDuplicateBond";
				n[n.RAFNoValidVeteranDestinyMembershipsFound = 2024] = "RAFNoValidVeteranDestinyMembershipsFound";
				n[n.RAFNotAValidVeteranUser = 2025] = "RAFNotAValidVeteranUser";
				n[n.RAFCodeAlreadyClaimedOrNotFound = 2026] = "RAFCodeAlreadyClaimedOrNotFound";
				n[n.RAFMismatchedDestinyMembershipType = 2027] = "RAFMismatchedDestinyMembershipType";
				n[n.RAFUnableToAccessPurchaseHistory = 2028] = "RAFUnableToAccessPurchaseHistory";
				n[n.RAFUnableToCreateBond = 2029] = "RAFUnableToCreateBond";
				n[n.RAFUnableToFindBond = 2030] = "RAFUnableToFindBond";
				n[n.RAFUnableToRemoveBond = 2031] = "RAFUnableToRemoveBond";
				n[n.RAFCannotBondToSelf = 2032] = "RAFCannotBondToSelf";
				n[n.RAFInvalidPlatform = 2033] = "RAFInvalidPlatform";
				n[n.RAFGenerateThrottled = 2034] = "RAFGenerateThrottled";
				n[n.RAFUnableToCreateBondVersionMismatch = 2035] = "RAFUnableToCreateBondVersionMismatch";
				n[n.RAFUnableToRemoveBondVersionMismatch = 2036] = "RAFUnableToRemoveBondVersionMismatch";
				n[n.RAFRedeemThrottled = 2037] = "RAFRedeemThrottled";
				n[n.NoAvailableDiscountCode = 2038] = "NoAvailableDiscountCode";
				n[n.DiscountAlreadyClaimed = 2039] = "DiscountAlreadyClaimed";
				n[n.DiscountClaimFailure = 2040] = "DiscountClaimFailure";
				n[n.DiscountConfigurationFailure = 2041] = "DiscountConfigurationFailure";
				n[n.DiscountGenerationFailure = 2042] = "DiscountGenerationFailure";
				n[n.DiscountAlreadyExists = 2043] = "DiscountAlreadyExists";
				n[n.TokenRequiresCredentialXuid = 2044] = "TokenRequiresCredentialXuid";
				n[n.TokenRequiresCredentialPsnid = 2045] = "TokenRequiresCredentialPsnid";
				n[n.OfferRequired = 2046] = "OfferRequired";
				n[n.ApiExceededMaxKeys = 2100] = "ApiExceededMaxKeys";
				n[n.ApiInvalidOrExpiredKey = 2101] = "ApiInvalidOrExpiredKey";
				n[n.ApiKeyMissingFromRequest = 2102] = "ApiKeyMissingFromRequest";
				n[n.ApplicationDisabled = 2103] = "ApplicationDisabled";
				n[n.ApplicationExceededMax = 2104] = "ApplicationExceededMax";
				n[n.ApplicationDisallowedByScope = 2105] = "ApplicationDisallowedByScope";
				n[n.AuthorizationCodeInvalid = 2106] = "AuthorizationCodeInvalid";
				n[n.OriginHeaderDoesNotMatchKey = 2107] = "OriginHeaderDoesNotMatchKey";
				n[n.AccessNotPermittedByApplicationScope = 2108] = "AccessNotPermittedByApplicationScope";
				n[n.ApplicationNameIsTaken = 2109] = "ApplicationNameIsTaken";
				n[n.RefreshTokenNotYetValid = 2110] = "RefreshTokenNotYetValid";
				n[n.AccessTokenHasExpired = 2111] = "AccessTokenHasExpired";
				n[n.ApplicationTokenFormatNotValid = 2112] = "ApplicationTokenFormatNotValid";
				n[n.ApplicationNotConfiguredForBungieAuth = 2113] = "ApplicationNotConfiguredForBungieAuth";
				n[n.ApplicationNotConfiguredForOAuth = 2114] = "ApplicationNotConfiguredForOAuth";
				n[n.OAuthAccessTokenExpired = 2115] = "OAuthAccessTokenExpired";
				n[n.PartnershipInvalidType = 2200] = "PartnershipInvalidType";
				n[n.PartnershipValidationError = 2201] = "PartnershipValidationError";
				n[n.PartnershipValidationTimeout = 2202] = "PartnershipValidationTimeout";
				n[n.PartnershipAccessFailure = 2203] = "PartnershipAccessFailure";
				n[n.PartnershipAccountInvalid = 2204] = "PartnershipAccountInvalid";
				n[n.PartnershipGetAccountInfoFailure = 2205] = "PartnershipGetAccountInfoFailure";
				n[n.PartnershipDisabled = 2206] = "PartnershipDisabled";
				n[n.PartnershipAlreadyExists = 2207] = "PartnershipAlreadyExists";
				n[n.CommunityStreamingUnavailable = 2300] = "CommunityStreamingUnavailable";
				n[n.TwitchNotLinked = 2500] = "TwitchNotLinked";
				n[n.TwitchAccountNotFound = 2501] = "TwitchAccountNotFound";
				n[n.TwitchCouldNotLoadDestinyInfo = 2502] = "TwitchCouldNotLoadDestinyInfo";
				n[n.TrendingCategoryNotFound = 2600] = "TrendingCategoryNotFound";
				n[n.TrendingEntryTypeNotSupported = 2601] = "TrendingEntryTypeNotSupported"
			}(vr = n.PlatformErrorCodes || (n.PlatformErrorCodes = {})),
			function(n) {
				n[n.Member = 0] = "Member";
				n[n.Admin = 1] = "Admin";
				n[n.Founder = 2] = "Founder";
				n[n.None = -1] = "None"
			}(yr = n.GroupMemberType || (n.GroupMemberType = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.DeleteClan = 1] = "DeleteClan";
				n[n.ConvertToClanKeepContent = 2] = "ConvertToClanKeepContent";
				n[n.ConvertToClanNoContent = 3] = "ConvertToClanNoContent"
			}(pr = n.MigrationSelection || (n.MigrationSelection = {})),
			function(n) {
				n[n.Offline = 0] = "Offline";
				n[n.Online = 1] = "Online";
				n[n.Idle = 2] = "Idle"
			}(wr = n.FriendOnlineStatus || (n.FriendOnlineStatus = {})),
			function(n) {
				n[n.CreationDate = 0] = "CreationDate";
				n[n.CmsPath = 1] = "CmsPath";
				n[n.ModifiedDate = 2] = "ModifiedDate"
			}(br = n.ContentSortBy || (n.ContentSortBy = {})),
			function(n) {
				n[n.All = 0] = "All";
				n[n.Today = 1] = "Today";
				n[n.Yesterday = 2] = "Yesterday";
				n[n.ThisMonth = 3] = "ThisMonth";
				n[n.ThisYear = 4] = "ThisYear";
				n[n.LastYear = 5] = "LastYear";
				n[n.EarlierThanLastYear = 6] = "EarlierThanLastYear"
			}(kr = n.ContentDateRange || (n.ContentDateRange = {})),
			function(n) {
				n[n.Specific = 0] = "Specific";
				n[n.MonthOnly = 1] = "MonthOnly";
				n[n.Custom = 2] = "Custom"
			}(dr = n.ContentDateType || (n.ContentDateType = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Image = 1] = "Image";
				n[n.Video = 2] = "Video";
				n[n.Youtube = 3] = "Youtube"
			}(gr = n.ForumMediaType || (n.ForumMediaType = {})),
			function(n) {
				n[n.Empty = 0] = "Empty";
				n[n.Default = 1] = "Default";
				n[n.Discussed = 2] = "Discussed";
				n[n.CoolStory = 3] = "CoolStory";
				n[n.HeatingUp = 4] = "HeatingUp";
				n[n.Hot = 5] = "Hot"
			}(nu = n.ForumPostPopularity || (n.ForumPostPopularity = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.TextOnly = 1] = "TextOnly";
				n[n.Media = 2] = "Media";
				n[n.Link = 4] = "Link";
				n[n.Poll = 8] = "Poll";
				n[n.Question = 16] = "Question";
				n[n.Answered = 32] = "Answered";
				n[n.Announcement = 64] = "Announcement";
				n[n.ContentComment = 128] = "ContentComment";
				n[n.BungieOfficial = 256] = "BungieOfficial";
				n[n.NinjaOfficial = 512] = "NinjaOfficial";
				n[n.Recruitment = 1024] = "Recruitment"
			}(tu = n.ForumPostCategoryEnums || (n.ForumPostCategoryEnums = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.BungieStaffPost = 1] = "BungieStaffPost";
				n[n.ForumNinjaPost = 2] = "ForumNinjaPost";
				n[n.ForumMentorPost = 4] = "ForumMentorPost";
				n[n.TopicBungieStaffPosted = 8] = "TopicBungieStaffPosted";
				n[n.TopicBungieVolunteerPosted = 16] = "TopicBungieVolunteerPosted";
				n[n.QuestionAnsweredByBungie = 32] = "QuestionAnsweredByBungie";
				n[n.QuestionAnsweredByNinja = 64] = "QuestionAnsweredByNinja";
				n[n.CommunityContent = 128] = "CommunityContent"
			}(iu = n.ForumFlagsEnum || (n.ForumFlagsEnum = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Casual = 1] = "Casual";
				n[n.Professional = 2] = "Professional"
			}(ru = n.ForumRecruitmentIntensityLabel || (n.ForumRecruitmentIntensityLabel = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.FamilyFriendly = 1] = "FamilyFriendly";
				n[n.Rowdy = 2] = "Rowdy"
			}(uu = n.ForumRecruitmentToneLabel || (n.ForumRecruitmentToneLabel = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Links = 1] = "Links";
				n[n.Questions = 2] = "Questions";
				n[n.AnsweredQuestions = 4] = "AnsweredQuestions";
				n[n.Media = 8] = "Media";
				n[n.TextOnly = 16] = "TextOnly";
				n[n.Announcement = 32] = "Announcement";
				n[n.BungieOfficial = 64] = "BungieOfficial";
				n[n.Polls = 128] = "Polls"
			}(fu = n.ForumTopicsCategoryFiltersEnum || (n.ForumTopicsCategoryFiltersEnum = {})),
			function(n) {
				n[n.All = 0] = "All";
				n[n.LastYear = 1] = "LastYear";
				n[n.LastMonth = 2] = "LastMonth";
				n[n.LastWeek = 3] = "LastWeek";
				n[n.LastDay = 4] = "LastDay"
			}(eu = n.ForumTopicsQuickDateEnum || (n.ForumTopicsQuickDateEnum = {})),
			function(n) {
				n[n.Default = 0] = "Default";
				n[n.LastReplied = 1] = "LastReplied";
				n[n.MostReplied = 2] = "MostReplied";
				n[n.Popularity = 3] = "Popularity";
				n[n.Controversiality = 4] = "Controversiality";
				n[n.Liked = 5] = "Liked";
				n[n.HighestRated = 6] = "HighestRated";
				n[n.MostUpvoted = 7] = "MostUpvoted"
			}(ou = n.ForumTopicsSortEnum || (n.ForumTopicsSortEnum = {})),
			function(n) {
				n[n.Default = 0] = "Default";
				n[n.OldestFirst = 1] = "OldestFirst"
			}(su = n.ForumPostSortEnum || (n.ForumPostSortEnum = {})),
			function(n) {
				n[n.Trending = 0] = "Trending";
				n[n.Latest = 1] = "Latest";
				n[n.HighestRated = 2] = "HighestRated"
			}(hu = n.CommunityContentSortMode || (n.CommunityContentSortMode = {})),
			function(n) {
				n[n.Public = 0] = "Public";
				n[n.News = 1] = "News";
				n[n.Group = 2] = "Group";
				n[n.Alliance = 3] = "Alliance";
				n[n.RelatedPosts = 4] = "RelatedPosts";
				n[n.Clan = 5] = "Clan"
			}(cu = n.ForumTypeEnum || (n.ForumTypeEnum = {})),
			function(n) {
				n[n.Error = 0] = "Error";
				n[n.NotFound = 1] = "NotFound";
				n[n.Success = 2] = "Success";
				n[n.Unknown = 3] = "Unknown"
			}(lu = n.GameServiceStatus || (n.GameServiceStatus = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Story = 2] = "Story";
				n[n.Strike = 3] = "Strike";
				n[n.Raid = 4] = "Raid";
				n[n.AllPvP = 5] = "AllPvP";
				n[n.Patrol = 6] = "Patrol";
				n[n.AllPvE = 7] = "AllPvE";
				n[n.Reserved9 = 9] = "Reserved9";
				n[n.Control = 10] = "Control";
				n[n.Reserved11 = 11] = "Reserved11";
				n[n.Clash = 12] = "Clash";
				n[n.Reserved13 = 13] = "Reserved13";
				n[n.Reserved15 = 15] = "Reserved15";
				n[n.Nightfall = 16] = "Nightfall";
				n[n.HeroicNightfall = 17] = "HeroicNightfall";
				n[n.AllStrikes = 18] = "AllStrikes";
				n[n.IronBanner = 19] = "IronBanner";
				n[n.Reserved20 = 20] = "Reserved20";
				n[n.Reserved21 = 21] = "Reserved21";
				n[n.Reserved22 = 22] = "Reserved22";
				n[n.Reserved24 = 24] = "Reserved24";
				n[n.Reserved25 = 25] = "Reserved25";
				n[n.Reserved26 = 26] = "Reserved26";
				n[n.Reserved27 = 27] = "Reserved27";
				n[n.Reserved28 = 28] = "Reserved28";
				n[n.Reserved29 = 29] = "Reserved29";
				n[n.Reserved30 = 30] = "Reserved30";
				n[n.Supremacy = 31] = "Supremacy";
				n[n.Reserved32 = 32] = "Reserved32";
				n[n.Survival = 37] = "Survival";
				n[n.Countdown = 38] = "Countdown";
				n[n.TrialsOfTheNine = 39] = "TrialsOfTheNine";
				n[n.Social = 40] = "Social"
			}(au = n.DestinyActivityModeType || (n.DestinyActivityModeType = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.General = 1] = "General";
				n[n.Weapons = 2] = "Weapons";
				n[n.Medals = 3] = "Medals";
				n[n.ReservedGroups = 100] = "ReservedGroups";
				n[n.Leaderboard = 101] = "Leaderboard";
				n[n.Activity = 102] = "Activity";
				n[n.UniqueWeapon = 103] = "UniqueWeapon";
				n[n.Internal = 104] = "Internal"
			}(vu = n.DestinyStatsGroupType || (n.DestinyStatsGroupType = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Daily = 1] = "Daily";
				n[n.AllTime = 2] = "AllTime";
				n[n.Activity = 3] = "Activity"
			}(yu = n.PeriodType || (n.PeriodType = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Kills = 1] = "Kills";
				n[n.Assists = 2] = "Assists";
				n[n.Deaths = 3] = "Deaths";
				n[n.Criticals = 4] = "Criticals";
				n[n.KDa = 5] = "KDa";
				n[n.KD = 6] = "KD";
				n[n.Score = 7] = "Score";
				n[n.Entered = 8] = "Entered";
				n[n.TimePlayed = 9] = "TimePlayed";
				n[n.MedalWins = 10] = "MedalWins";
				n[n.MedalGame = 11] = "MedalGame";
				n[n.MedalSpecialKills = 12] = "MedalSpecialKills";
				n[n.MedalSprees = 13] = "MedalSprees";
				n[n.MedalMultiKills = 14] = "MedalMultiKills";
				n[n.MedalAbilities = 15] = "MedalAbilities"
			}(pu = n.DestinyStatsCategoryType || (n.DestinyStatsCategoryType = {})),
			function(n) {
				n[n.None = 0] = "None";
				n[n.Count = 1] = "Count";
				n[n.PerGame = 2] = "PerGame";
				n[n.Seconds = 3] = "Seconds";
				n[n.Points = 4] = "Points";
				n[n.Team = 5] = "Team";
				n[n.Distance = 6] = "Distance";
				n[n.Percent = 7] = "Percent";
				n[n.Ratio = 8] = "Ratio";
				n[n.Boolean = 9] = "Boolean";
				n[n.WeaponType = 10] = "WeaponType";
				n[n.Standing = 11] = "Standing";
				n[n.Milliseconds = 12] = "Milliseconds"
			}(wu = n.UnitType || (n.UnitType = {})),
			function(n) {
				n[n.Add = 0] = "Add";
				n[n.Min = 1] = "Min";
				n[n.Max = 2] = "Max"
			}(bu = n.DestinyStatsMergeMethod || (n.DestinyStatsMergeMethod = {})),
		function(n) {
			n[n.None = 0] = "None";
			n[n.Kinetic = 1] = "Kinetic";
			n[n.Arc = 2] = "Arc";
			n[n.Solar = 4] = "Solar";
			n[n.Void = 8] = "Void";
			n[n.All = 15] = "All"
		}(ku = n.DestinyTalentNodeStepDamageTypes || (n.DestinyTalentNodeStepDamageTypes = {})),
		function(n) {
			n[n.None = 0] = "None";
			n[n.Stats = 1] = "Stats";
			n[n.Shields = 2] = "Shields";
			n[n.Health = 4] = "Health";
			n[n.Revive = 8] = "Revive";
			n[n.AimUnderFire = 16] = "AimUnderFire";
			n[n.Radar = 32] = "Radar";
			n[n.Invisibility = 64] = "Invisibility";
			n[n.Reputations = 128] = "Reputations";
			n[n.All = 255] = "All"
		}(du = n.DestinyTalentNodeStepGuardianAttributes || (n.DestinyTalentNodeStepGuardianAttributes = {})),
		function(n) {
			n[n.None = 0] = "None";
			n[n.ArmorPiercing = 1] = "ArmorPiercing";
			n[n.Ricochet = 2] = "Ricochet";
			n[n.Flinch = 4] = "Flinch";
			n[n.CollateralDamage = 8] = "CollateralDamage";
			n[n.Disorient = 16] = "Disorient";
			n[n.HighlightTarget = 32] = "HighlightTarget";
			n[n.All = 63] = "All"
		}(gu = n.DestinyTalentNodeStepImpactEffects || (n.DestinyTalentNodeStepImpactEffects = {})),
		function(n) {
			n[n.None = 0] = "None";
			n[n.Grenades = 1] = "Grenades";
			n[n.Melee = 2] = "Melee";
			n[n.MovementModes = 4] = "MovementModes";
			n[n.Orbs = 8] = "Orbs";
			n[n.SuperEnergy = 16] = "SuperEnergy";
			n[n.SuperMods = 32] = "SuperMods";
			n[n.All = 63] = "All"
		}(nf = n.DestinyTalentNodeStepLightAbilities || (n.DestinyTalentNodeStepLightAbilities = {})),
		function(n) {
			n[n.None = 0] = "None";
			n[n.Activity = 1] = "Activity";
			n[n.Vendor = 2] = "Vendor";
			n[n.Aggregate = 3] = "Aggregate"
		}(tf = n.DestinyRewardSourceCategory || (n.DestinyRewardSourceCategory = {})),
		function(n) {
			n[n.None = 0] = "None";
			n[n.RateOfFire = 1] = "RateOfFire";
			n[n.Damage = 2] = "Damage";
			n[n.Accuracy = 4] = "Accuracy";
			n[n.Range = 8] = "Range";
			n[n.Zoom = 16] = "Zoom";
			n[n.Recoil = 32] = "Recoil";
			n[n.Ready = 64] = "Ready";
			n[n.Reload = 128] = "Reload";
			n[n.HairTrigger = 256] = "HairTrigger";
			n[n.AmmoAndMagazine = 512] = "AmmoAndMagazine";
			n[n.TrackingAndDetonation = 1024] = "TrackingAndDetonation";
			n[n.ShotgunSpread = 2048] = "ShotgunSpread";
			n[n.ChargeTime = 4096] = "ChargeTime";
			n[n.All = 8191] = "All"
		}(rf = n.DestinyTalentNodeStepWeaponPerformances || (n.DestinyTalentNodeStepWeaponPerformances = {})),
		function(n) {
			n[n.None = 0] = "None";
			n[n.Ascending = 1] = "Ascending";
			n[n.Descending = 2] = "Descending"
		}(uf = n.DestinyExplorerOrderDirection || (n.DestinyExplorerOrderDirection = {})),
		function(n) {
			n[n.None = 0] = "None";
			n[n.Name = 1] = "Name";
			n[n.ItemType = 2] = "ItemType";
			n[n.Rarity = 3] = "Rarity";
			n[n.ItemTypeName = 4] = "ItemTypeName";
			n[n.ItemStatHash = 5] = "ItemStatHash";
			n[n.MinimumRequiredLevel = 6] = "MinimumRequiredLevel";
			n[n.MaximumRequiredLevel = 7] = "MaximumRequiredLevel"
		}(ff = n.DestinyExplorerOrderBy || (n.DestinyExplorerOrderBy = {})),
		function(n) {
			n[n.Viewers = 0] = "Viewers";
			n[n.Trending = 1] = "Trending";
			n[n.OverallViewers = 2] = "OverallViewers";
			n[n.Followers = 3] = "Followers"
		}(ef = n.CommunityStatusSort || (n.CommunityStatusSort = {})),
		function(n) {
			n[n.News = 0] = "News";
			n[n.DestinyItem = 1] = "DestinyItem";
			n[n.DestinyActivity = 2] = "DestinyActivity";
			n[n.DestinyRitual = 3] = "DestinyRitual";
			n[n.SupportArticle = 4] = "SupportArticle";
			n[n.Creation = 5] = "Creation";
			n[n.Stream = 6] = "Stream";
			n[n.Update = 7] = "Update";
			n[n.Link = 8] = "Link";
			n[n.ForumTag = 9] = "ForumTag"
		}( of = n.TrendingEntryType || (n.TrendingEntryType = {})),
		function(n) {
			n[n.None = 0] = "None";
			n[n.UserResearchWebPageOne = 1] = "UserResearchWebPageOne";
			n[n.UserResearchWebPageTwo = 2] = "UserResearchWebPageTwo"
		}(sf = n.SurveyCompletionFlags || (n.SurveyCompletionFlags = {})),
		function(n) {
			n[n.None = 0] = "None";
			n[n.Public = 1] = "Public";
			n[n.Private = 2] = "Private"
		}(hf = n.ComponentPrivacySetting || (n.ComponentPrivacySetting = {}))
	}(Globals || (Globals = {})),
	function(n) {
		bungieNetPlatform.assetRenderer = {
			renderAsset: function(t) {
				var i = n.extend({
						path: "",
						width: "auto",
						height: "auto",
						fixedRatioHeight: "auto",
						hasAgeGate: !1,
						minimumAge: 0,
						ratingImagePath: "",
						display: "auto"
					}, t),
					e, c, s, p, h, b, k, d, a, u, r, v, f, y;
				if (n(".ageGateTemplate").length != 0 && typeof viewModels != "undefined" && viewModels.userMinimumAge || (i.hasAgeGate = !1), typeof viewModels != "undefined" && viewModels.loggedInUserModelIsLoaded() && viewModels.loggedInUserModel().adultMode() && (i.hasAgeGate = !1), s = "", i.display != "auto" && (s = "display: " + i.display + ";"), p = Utility.urlToLinkObject(i.path), c = p.pathname.match(/\.(jpg|jpeg|png|gif)$/i)) u = i.width == "auto" ? "" : "width: " + i.width + "; ", r = i.height == "auto" ? "" : "height: " + i.height + "; ", e = "<img src='" + Utility.ContentVersioned(i.path) + "' style='" + u + r + s + "' />";
				else if (c = p.pathname.match(/\.(mov|avi|mp4)$/i)) u = i.width == "auto" ? "" : "width='" + i.width + "' ", r = i.height == "auto" ? "" : "height='" + i.height + "' ", e = "<video " + u + r + " style='" + s + "'><source src='" + Utility.ContentVersioned(i.path) + "' type='video/" + c[1] + "' /><\/video>";
				else if (c = i.path.match(/^(?:https?:\/\/)?(?:(www|m)\.)?(youtube\.com|youtu\.be)+(\/\w)/i))
					if (i.path.toLowerCase().indexOf("playlist") > -1) e = "<a class='externalLink' href='" + i.path + "' style='" + s + "'>" + i.path + "<\/a>";
					else {
						var o = i.path,
							l, w = {},
							g = Utility.getYouTubeId(i.path);
						o.indexOf("?") > -1 && (w = Utility.parseQueryString(o));
						(i.path.indexOf("#t=") > -1 || i.path.indexOf("?t=") > -1) && (h = i.path.match(/[#|\?]t=((\d+m)?(\d+[s]?)?)/i), h.length > 1 && (h = h[0].split("=")[1]), b = h.match("m") ? h.split("m")[0] : 0, k = b.length ? h.split("m")[1].split("s")[0] : h.split("s")[0], l = parseInt(b * 60) + parseInt(k ? k : 0));
						o = "https://youtube.com/embed/" + g + "/";
						typeof w.start != "undefined" && (l = w.start);
						window.location.protocol.indexOf("https") > -1 && o.indexOf("https") === -1 && (o = o.replace("http", "https"));
						l && (o = o + "?start=" + l);
						u = i.width == "auto" ? "" : "width='" + i.width + "' ";
						r = i.height == "auto" ? "" : "height='" + i.height + "' ";
						i.fixedRatioHeight != "auto" && (r = "height='" + i.fixedRatioHeight + "' ");
						d = l ? "&" : "?";
						e = "<iframe class='youtube-player' style='" + s + "' type='text/html' " + u + r + " src='" + o + d + "wmode=transparent&rel=0&fs=1' frameborder='0' allowfullscreen><\/iframe>"
					}
				else {
					if (c = i.path.match(/player\.ooyala\.com/i)) return u = i.width == "auto" ? "" : "width='" + i.width + "' ", r = i.height == "auto" ? "" : "height='" + i.height + "' ", i.fixedRatioHeight != "auto" && (r = "height='" + i.fixedRatioHeight + "' "), "<iframe src='" + i.path + "' " + u + r + " style='" + s + "' frameBorder='0'><\/iframe>";
					(c = i.path.match(/soundcloud\.com/i)) ? (a = i.path.replace("http://soundcloud.com", "http://api.soundcloud.com"), a = encodeURIComponent(a.replace("http://www.soundcloud.com", "http://api.soundcloud.com")), u = i.width == "auto" ? "" : "width='" + i.width + "' ", r = i.height == "auto" ? "" : "height='" + i.height + "' ", i.fixedRatioHeight != "auto" && (r = "height='" + i.fixedRatioHeight + "' "), v = "https://w.soundcloud.com/player/?url=" + a + "&buying=false&sharing=false&download=false&show_bpm=false&show_playcount=false&auto_play=false&show_artwork=false&show_comments=false&show_user=false", v = n("<div />").text(v).html(), e = "<iframe " + u + r + " scrolling='no' frameborder='no' src='" + v + "'><\/iframe>") : e = i.path.match(/^http/i) ? "<a class='externalLink' href='" + i.path + "' style='" + s + "'>" + i.path + "<\/a>" : ""
				}
				return i.hasAgeGate && (f = n("<div>" + n(".ageGateTemplate").html() + "<\/div>"), y = f.find(".ageGateContents"), y.attr("data-minimumAge", i.minimumAge), f.find(".ageGatePrompt").attr("data-minimumAge", i.minimumAge), i.width && i.width != "auto" && f.find(".ageGatePrompt").css("width", i.width + "px"), i.height && i.height != "auto" && f.find(".ageGatePrompt").css("height", i.height + "px"), f.find(".ratingImage").attr("src", i.ratingImagePath), f.find(".ratingImage").css("width", "auto"), f.find(".ratingAllowed li").each(function() {
					var t = n(this);
					t.html(t.html().replace("#AGE", i.minimumAge))
				}), y.html(e), i.minimumAge <= viewModels.userMinimumAge() && (f.find(".ageGatePrompt").addClass("hide"), y.removeClass("hide")), e = "<div class='ageGate'>" + f.html() + "<\/div>"), e
			},
			getYoutubeId: function(n) {
				return (matches = n.match(/youtube\.com|youtu\.be/i)) ? n.indexOf("v=") > -1 ? n.replace(/^([\s\S]*)(youtube\.com|youtu\.be)[\s\S]*?v=([0-9A-Za-z\_\-]+)((&[\s\S]+)|$)/i, "$3") : n.replace(/^([\s\S]*)(youtube\.com|youtu\.be)[\s\S]*\/([0-9A-Za-z\_\-]+)((&[\s\S]+)|$)/i, "$3") : ""
			},
			renderAssetThumbnail: function(t) {
				var i = n.extend({
						path: "",
						width: "auto",
						height: "auto",
						quality: "default"
					}, t),
					r = "",
					u, s = !1,
					e = "",
					f, o;
				if (i.width != "auto" && (e = "width: " + i.width + ";"), f = "", i.height != "auto" && (f = "height: " + i.height + ";"), u = i.path.match(/\.(jpg|jpeg|png|bmp|gif|tiff)(\?(.)*){0,1}$/i)) r = i.path;
				else if (u = i.path.match(/youtube\.com|youtu\.be/i)) s = !0, o = bungieNetPlatform.assetRenderer.getYoutubeId(i.path), o != "" && (r = "http://i2.ytimg.com/vi/" + o + "/" + i.quality + ".jpg");
				else {
					if (u = i.path.match(/player\.ooyala\.com/i)) return "<div style='" + e + f + " padding: 10px; border: solid 1px black; overflow: hide;'><iframe src='" + i.path + "' frameBorder='0'><\/iframe><\/div>";
					if (u = i.path.match(/\.mp4/i)) return "<div style='" + e + f + " padding: 10px; border: solid 1px black; overflow: hide;'><video src='" + i.path + "' width='" + i.width + "'><\/video><\/div>"
				}
				return r != "" ? s ? "<img draggable='false' src='" + Utility.ContentVersioned(r) + "' class='thumbnailImages youtubeVideo' />" : i.path.indexOf("http://") > -1 ? "<img draggable='false' src='" + r + "' class='thumbnailImages' />" : "<img draggable='false' src='" + Utility.ContentVersioned(r) + "' class='thumbnailImages' />" : ""
			}
		}
	}(jQuery),
	function(n) {
		function t(t, i, r, u) {
			var e = n.extend({
					templateType: "",
					isTypeAgnostic: !1,
					headOnly: !1,
					itemRenderedCallback: function() {},
					renderCompleteCallback: function() {},
					errorCallback: function() {},
					renderAttributes: []
				}, t),
				f, o, s;
			e.query = n.extend(i, t.query);
			f = {
				results: [],
				query: {
					itemsPerPage: 10,
					currentPage: 1
				}
			};
			for (o in bungieNetPlatform.contentCache)
				if (r(bungieNetPlatform.contentCache[o], e)) {
					f.results.push(bungieNetPlatform.contentCache[o]);
					break
				}
			f.results.length > 0 ? (f.query.itemsPerPage = f.results.length, f.totalResults = f.results.length, f.hasMore = !1, bungieNetPlatform.contentRenderer.renderContentItemList(f, e)) : (s = u(e), n.when(s).done(function(n) {
				bungieNetPlatform.contentRenderer.renderContentItemList(n, e)
			}))
		}
		bungieNetPlatform.contentRenderer = {
			renderContentItemList: function(t, i) {
				var r, f, u, e = t.results,
					o = i;
				e.length > 0 ? i.firstResultCallback() : i.renderCompleteCallback(e.length, u, t);
				n.each(e, function() {
					var i = this,
						t;
					r ? (t = n.Deferred(), n.when(r).done(function() {
						n.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(i, o)).done(function(n) {
							u = u + n;
							t.resolve()
						}).fail(function() {
							console.log("renderContentItemList: LoadTemplateDeferred Failed.");
							t.resolve()
						})
					}), r = t) : (f = n.Deferred(), r = f, n.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(i, o)).done(function(n) {
						u = u + n;
						f.resolve()
					}).fail(function() {
						console.log("renderContentItemList: LoadTemplateDeferred Failed.");
						f.resolve()
					}))
				});
				r && n.when(r).done(function() {
					o.renderCompleteCallback(e.length, u, t)
				}).fail(function() {
					console.log("renderContentItemList: renderCompleteCallback Failed.")
				})
			},
			loadTemplateDeferred: function(t, i) {
				var r = t.cType,
					u;
				return i.isTypeAgnostic && (r = "generic"), u = "/Scripts/templates/", u += i.templateType + "/" + r + ".js", templateEngine.getTemplate(u, i.templateType + "/" + r, t, i.parents, i.renderAttributes, function(r) {
					if (bungieNetPlatform.platformSettings.renderContentEditLinks) {
						var f = n(r),
							u = "<div class='firehoseEditLink'><a href='/Firehose/Content/EditWithNewPackage/" + t.contentId + "'>(Edit this item)<\/a><\/div>";
						f.prepend(u);
						r = r.trim()[0] == "<" ? r.slice(0, r.indexOf(">") + 1) + u + r.slice(r.indexOf(">") + 1) : u + r
					}
					i.itemRenderedCallback(t, r)
				})
			},
			renderContentFromId: function(t) {
				var i = n.extend({
						contentId: 0,
						locale: bungieNetPlatform.platformSettings.currentLocale,
						templateType: "",
						isTypeAgnostic: !1,
						headOnly: !1,
						itemRenderedCallback: function() {},
						renderCompleteCallback: function() {},
						errorCallback: function() {},
						renderAttributes: []
					}, t),
					r;
				if (typeof bungieNetPlatform.contentCache[i.contentId] != "undefined") n.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(bungieNetPlatform.contentCache[i.contentId], i)).done(function(n) {
					i.renderCompleteCallback(1, n, bungieNetPlatform.contentCache[i.contentId])
				});
				else {
					if (isNaN(i.contentId) || i.contentId <= 0) {
						i.renderCompleteCallback(0, "", null);
						return
					}
					r = bungieNetPlatform.previewableContentServices.getForId({
						contentId: i.contentId,
						locale: i.locale,
						headOnly: i.headOnly,
						callback: function() {},
						errorCallback: function(n) {
							console.log("renderContentFromId: Failed (" + n + ")");
							i.errorCallback(n)
						}
					});
					n.when(r).done(function(t) {
						n.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(t, i)).done(function(n) {
							i.renderCompleteCallback(1, n, t)
						})
					})
				}
			},
			renderContent: function(t) {
				var i = n.extend({
					contentObject: null,
					templateType: "",
					isTypeAgnostic: !1,
					itemRenderedCallback: function() {},
					renderCompleteCallback: function() {},
					errorCallback: function() {},
					renderAttributes: []
				}, t);
				if (!i.contentObject) {
					i.renderCompleteCallback(0, "", null);
					return
				}
				n.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(i.contentObject, i)).done(function(n) {
					i.renderCompleteCallback(1, n, i.contentObject)
				})
			},
			renderNewsContent: function(n) {
				t(n, {
					contentType: "",
					newsType: "",
					locale: bungieNetPlatform.platformSettings.currentLocale,
					itemsPerPage: 10,
					currentPage: 1
				}, function(n, t) {
					return n.cType == t.query.contentType
				}, function(n) {
					return bungieNetPlatform.contentService.GetNews(n.query.newsType, n.query.locale, n.query.itemsPerPage, n.query.currentPage, function() {}, function(t) {
						console.log("renderNewsContent: Search Failed (" + t + ")");
						n.errorCallback(t)
					})
				})
			},
			renderContentFromQuery: function(n) {
				t(n, {
					contentTypes: [],
					tag: "",
					notTag: "",
					locale: bungieNetPlatform.platformSettings.currentLocale,
					itemsPerPage: 100,
					currentPage: 1,
					sortBy: Globals.ContentSortBy.CreationDate,
					creationDate: Globals.ContentDateRange.All,
					modifiedDate: Globals.ContentDateRange.All
				}, function(n, t) {
					return n.cType == t.query.contentTypes[contentType]
				}, function(n) {
					return bungieNetPlatform.contentService.SearchContentEx(n.query, n.query.locale, n.headOnly, function() {}, function(t) {
						console.log("renderContentFromQuery: Search Failed (" + t + ")");
						n.errorCallback(t)
					})
				})
			},
			renderPromoWidget: function(t) {
				var i = n.extend({
						locale: bungieNetPlatform.platformSettings.currentLocale,
						templateType: "",
						isTypeAgnostic: !1,
						headOnly: !1,
						itemRenderedCallback: function() {},
						renderCompleteCallback: function() {},
						errorCallback: function() {},
						renderAttributes: []
					}, t),
					r = bungieNetPlatform.contentService.GetPromoWidget(function() {}, function(n) {
						console.log("renderContentFromId: Failed (" + n + ")");
						i.errorCallback(n)
					});
				n.when(r).done(function(t) {
					n.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(t, i)).done(function(n) {
						i.renderCompleteCallback(1, n, t)
					})
				})
			},
			renderContentFromTagAndType: function(n) {
				t(n, {
					contentType: "",
					tag: "",
					locale: bungieNetPlatform.platformSettings.currentLocale,
					itemsPerPage: 10,
					currentPage: 1
				}, function(n, t) {
					return n.cType == t.query.contentType
				}, function(n) {
					return bungieNetPlatform.previewableContentServices.searchForTagAndType({
						tag: n.query.tag,
						contentType: n.query.contentType,
						locale: n.query.locale,
						headOnly: n.headOnly,
						currentPage: n.query.currentPage,
						itemsPerPage: n.query.itemsPerPage,
						callback: function() {},
						errorCallback: function(t) {
							console.log("renderContentFromTagAndType: Search Failed (" + t + ")");
							n.errorCallback(t)
						},
						headOnly: !1
					})
				})
			},
			renderContentItemFromTagAndType: function(t) {
				var i = n.extend({
						contentType: "",
						tag: "",
						locale: bungieNetPlatform.platformSettings.currentLocale,
						templateType: "",
						isTypeAgnostic: !1,
						headOnly: !1,
						renderCompleteCallback: function() {},
						errorCallback: function() {},
						renderAttributes: []
					}, t),
					r = bungieNetPlatform.previewableContentServices.getForTagAndType({
						tag: i.tag,
						contentType: i.contentType,
						locale: i.locale,
						callback: function() {},
						errorCallback: function(n) {
							console.log("renderContentItemFromTagAndType: Search Failed (" + n + ")");
							i.errorCallback(n)
						},
						headOnly: i.headOnly
					});
				n.when(r).done(function(t) {
					n.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(t, i)).done(function(n) {
						i.renderCompleteCallback(1, n, t)
					})
				})
			},
			renderContentData: function(t) {
				var i = n.extend({
						content: "",
						width: "auto",
						height: "auto",
						templateType: ""
					}, t),
					r = "",
					f, u;
				if (i.content == "") return "(blank)";
				if (typeof i.content == "object") {
					for (u = 0; u < i.content.length; u++) r += "Item " + u + ": " + bungieNetPlatform.contentRenderer.renderContentData(n.extend(n.extend({}, i), {
							content: i.content[u]
						})), r += "<br />";
					return r
				}
				return isNaN(i.content) ? (f = i.content.match(/\<\//)) ? "<div style='width: " + i.width + "; height: " + i.height + ";'>" + i.content + "<\/div>" : (r = bungieNetPlatform.assetRenderer.renderAsset({
					path: i.content,
					width: i.width,
					height: i.height
				}), r != "") ? r + ("<div data-asset-path='" + i.content + "'><\/div><div><strong>Stored URL:<\/strong>" + i.content + "<\/div>\n") : i.content : "(Content Item Reference #" + i.content + ")<br /> [[data-content-id='" + i.content + "' data-template-type='" + i.templateType + "']]"
			}
		}
	}(jQuery),
	function() {
		function t(t) {
			var i = t.split("[[").join("<div class='MacroProcess' ").split("]]").join("><\/div>");
			return n(i).trim()
		}

		function n(n) {
			for (var u = new RegExp(/\{\{url=\'([^\}]+)\'\}\}([^\{]+)\{\{\/url\}\}/g), t, r;
				 (t = u.exec(n)) != null;) {
				var f = t[0],
					i = t[1],
					e = t[2];
				i[0] == "/" && (i = "/" + bungieNetPlatform.platformSettings.currentLocale + i);
				r = "<a href='" + i + "'>" + e + "<\/a>";
				n = n.split(f).join(r)
			}
			return n
		}

		function i(n) {
			return n[0] == "/" && (n = "/" + bungieNetPlatform.platformSettings.currentLocale + n), n
		}
		bungieNetPlatform.macroProcessor = {
			getNormalizedHtml: function(n) {
				return t(n)
			},
			renderWithHints: function(n, t) {
				return n = n.replace(/\{\{more\}\}[\s\S]*/g, ""), n = n.replace(/\{\{([^}]*)\}\}/g, ""), bungieNetPlatform.macroProcessor.processTemplateOverride(n, t)
			},
			renderIgnoreHints: function(n, t) {
				return n = n.replace(/\{\{([^}]*)\}\}/g, ""), bungieNetPlatform.macroProcessor.processTemplateOverride(n, t)
			},
			renderWithHintDebug: function(t, i) {
				return t = n(t), t = t.replace(/\{\{([^}]*)\}\}/g, "<br /><strong><i>&lt;-- $1 --&gt;<\/i><\/strong><br />"), bungieNetPlatform.macroProcessor.processTemplateOverride(t, i)
			},
			processUrls: n,
			convertRelativeUrl: i,
			processTemplateOverride: function(n, t) {
				return typeof t != "undefined" && t != null && t != "" ? n.replace(/data\-template\-type\=\'([^\']+)\'/g, "data-template-type='" + t + "'") : n
			}
		}
	}(jQuery),
	function(n) {
		bungieNetPlatform.contentRepresentationServices = {
			dataStore: [],
			data: {
				get: function(n, t) {
					return bungieNetPlatform.contentRepresentationServices.dataStore[n + "_" + t]
				},
				set: function(n, t, i) {
					bungieNetPlatform.contentRepresentationServices.dataStore[n + "_" + t] = i
				}
			},
			getRepresentationsForType: function(t) {
				var i = n.extend({
						contentType: "",
						locale: bungieNetPlatform.platformSettings.currentLocale,
						callback: function() {},
						errorCallback: function() {}
					}, t),
					r = bungieNetPlatform.contentRepresentationServices.data.get(i.contentType, i.locale),
					u;
				return r ? n.Deferred(function(n) {
					i.callback(r);
					n.resolve(r)
				}).promise() : (u = bungieNetPlatform.platformSettings.platformUrl + "/Content/Representation/GetRepresentationsForType/" + i.contentType + "/" + i.locale + "/", bungieNetPlatform.serviceLibrary.get(u, function(n) {
					bungieNetPlatform.contentRepresentationServices.data.set(i.contentType, i.locale, n);
					i.callback(n)
				}, i.errorCallback))
			}
		}
	}(jQuery),
	function(n) {
		bungieNetPlatform.previewableContentServices = {
			dataStore: [],
			contentData: {
				getContent: function(n, t) {
					return bungieNetPlatform.previewableContentServices.dataStore[n + "_" + t]
				},
				setContent: function(n) {
					bungieNetPlatform.previewableContentServices.dataStore[n.contentId + "_" + n.locale] = n
				}
			},
			getCachedResultsForQuery: function(n) {
				var t = {
						results: [],
						query: n,
						totalResults: 0
					},
					i, r;
				for (i in bungieNetPlatform.contentCache)
					for (r in n.contentTypes)
						if (bungieNetPlatform.contentCache[i].cType == n.contentTypes[r]) {
							t.results.push(bungieNetPlatform.contentCache[i]);
							break
						}
				return t.totalResults = t.results.length, t
			},
			getCachedResultsForType: function(n) {
				var t = {
						results: [],
						query: {
							contentType: n
						},
						totalResults: 0
					},
					i;
				for (i in bungieNetPlatform.contentCache) bungieNetPlatform.contentCache[i].cType == n && t.results.push(bungieNetPlatform.contentCache[i]);
				return t.totalResults = t.results.length, t
			},
			search: function(t) {
				var i = n.extend({
						callback: function() {},
						errorCallback: function() {},
						headOnly: !1
					}, t),
					u = n.extend({
						contentTypes: [""],
						tag: "",
						notTag: "",
						locale: bungieNetPlatform.platformSettings.currentLocale,
						itemsPerPage: 100,
						currentPage: 1,
						sortBy: Globals.ContentSortBy.CreationDate,
						creationDate: Globals.ContentDateRange.All,
						modifiedDate: Globals.ContentDateRange.All
					}, t.query),
					f = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery(i.query),
					r;
				return f.results.length > 0 ? (r = n.Deferred(), i.callback(f), r.resolve(), r) : bungieNetPlatform.contentService.SearchContentEx(u, u.locale, i.headOnly, i.callback, i.errorCallback)
			},
			getHomepageContent: function(t) {
				var r = n.extend({
						locale: bungieNetPlatform.platformSettings.currentLocale,
						callback: function() {},
						errorCallback: function() {}
					}, t),
					i = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery({
						contentTypes: ["ContentSet"]
					}),
					f = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery({
						contentTypes: ["News"]
					}),
					u, e;
				return i.results.length > 0 || f.results.length > 0 ? (u = n.Deferred(), e = {
					rotator: {
						ErrorCode: 1,
						ErrorStatus: i.results.length > 0 ? "Success" : "Fail",
						Message: "Ok",
						Response: i.results.length > 0 ? i.results[0] : null
					},
					blog: {
						ErrorCode: 1,
						ErrorStatus: "Success",
						Message: "Ok",
						Response: f.results
					},
					calloutSet: {
						ErrorCode: 1,
						ErrorStatus: i.results.length > 0 ? "Success" : "Fail",
						Message: "Ok",
						Response: i.results.length > 0 ? i.results[0] : null
					}
				}, r.callback(e), u.resolve(), u) : bungieNetPlatform.contentService.GetHomepageContent(r.locale, r.callback, r.errorCallback)
			},
			getForId: function(t) {
				var i = n.extend({
						contentId: 0,
						locale: bungieNetPlatform.platformSettings.currentLocale,
						callback: function() {},
						errorCallback: function() {},
						headOnly: !1
					}, t),
					u, r;
				return typeof bungieNetPlatform.contentCache[i.contentId] != "undefined" ? (u = n.Deferred(), i.callback(bungieNetPlatform.contentCache[i.contentId]), u.resolve(), u) : (r = null, r = bungieNetPlatform.previewableContentServices.contentData.getContent(i.contentId, i.locale), r ? n.Deferred(function(n) {
					i.callback(r);
					n.resolve(r)
				}).promise() : bungieNetPlatform.contentService.GetContentById(i.contentId, i.locale, i.headOnly, function(n) {
					bungieNetPlatform.previewableContentServices.contentData.setContent(n);
					i.callback(n)
				}, i.errorCallback))
			},
			getForTagAndType: function(t) {
				var i = n.extend({
						tag: "",
						contentType: "",
						locale: bungieNetPlatform.platformSettings.currentLocale,
						callback: function() {},
						errorCallback: function() {},
						headOnly: !1
					}, t),
					r = bungieNetPlatform.previewableContentServices.getCachedResultsForType(t.contentType);
				return r.results.length ? n.Deferred(function(n) {
					i.callback(r.results[0]);
					n.resolve(r.results[0])
				}).promise() : bungieNetPlatform.contentService.GetContentByTagAndType(i.tag, i.contentType, i.locale, i.headOnly, i.callback, i.errorCallback)
			},
			searchForTagAndType: function(t) {
				var i = n.extend({
						tag: "",
						contentType: "",
						locale: bungieNetPlatform.platformSettings.currentLocale,
						currentPage: 1,
						itemsPerPage: 10,
						callback: function() {},
						errorCallback: function() {},
						headOnly: !1
					}, t),
					r = bungieNetPlatform.previewableContentServices.getCachedResultsForType(t.contentType);
				return r.results.length ? n.Deferred(function(n) {
					i.callback(r);
					n.resolve(r)
				}).promise() : bungieNetPlatform.contentService.SearchContentByTagAndType(i.tag, i.contentType, i.locale, i.headOnly, i.currentPage, i.itemsPerPage, i.callback, i.errorCallback)
			},
			getJobs: function(t) {
				var i = n.extend({
						locale: bungieNetPlatform.platformSettings.currentLocale,
						callback: function() {},
						errorCallback: function() {}
					}, t),
					u = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery({
						contentTypes: ["ContentSet"]
					}),
					r;
				if (u.results.length > 0) return r = n.Deferred(), i.callback(u), r.resolve(), r;
				bungieNetPlatform.contentService.GetJobs(i.locale, i.callback, i.errorCallback)
			},
			getPublications: function(t) {
				var i = n.extend({
						locale: bungieNetPlatform.platformSettings.currentLocale,
						callback: function() {},
						errorCallback: function() {}
					}, t),
					u = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery({
						contentTypes: ["ContentSet"]
					}),
					r;
				if (u.results.length > 0) return r = n.Deferred(), i.callback(u), r.resolve(), r;
				bungieNetPlatform.contentService.GetPublications(i.locale, i.callback, i.errorCallback)
			}
		}
	}(jQuery);
this.templateEngine = {
	version: "cv=0&av=0"
},
	function() {
		var n = {},
			t;
		templateEngine.template = function(t) {
			var r, i;
			return t.identifier = t.identifier || t.str, n[t.identifier] ? i = n[t.identifier] : (r = "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');", i = !/\W/.test(t.str) && t.str != "" ? templateEngine.template({
				str: document.getElementById(t.str).innerHTML,
				identifier: t.identifier
			}) : new Function("obj", "parents", "renderAttributes", r), /\W/.test(t.identifier) || (n[t.identifier] = i)), t.data ? i(t.data, t.parents, t.renderAttributes) : i
		};
		t = 1;
		templateEngine.getTemplate = function(t, i, r, u, f, e, o) {
			return n[i] ? $.Deferred(function(t) {
				var o = n[i](r, u, f);
				o = bungieNetPlatform.macroProcessor.getNormalizedHtml(o);
				e && e(o);
				t.resolve(o)
			}).promise() : $.Deferred(function(n) {
				$.ajax({
					type: "GET",
					url: t + "?" + templateEngine.version,
					dataType: "text",
					success: function(t) {
						var o = templateEngine.template({
							str: t,
							identifier: i,
							data: r,
							parents: u,
							renderAttributes: f
						});
						o = bungieNetPlatform.macroProcessor.getNormalizedHtml(o);
						e && e(o);
						n.resolve(o)
					},
					error: function(i, r, u) {
						o && o(i, r, u);
						console.log("templateEngine.getTemplate: template not found at '" + t + "'.");
						n.reject()
					}
				})
			}).promise()
		}
	}(),
	function(n) {
		function r(n, i) {
			var r = t(n);
			if (r.length < i) return !1
		}

		function t(n) {
			return i(n).pop()
		}

		function i(n) {
			return n.split(/,\s*/)
		}
		n.fn.tagAutocomplete = function(u) {
			var f = n.extend({
				minimumChars: "1",
				multiple: !1,
				onSelect: function() {}
			}, u);
			return this.each(function() {
				var u = n(this);
				u.autocomplete({
					source: function(i, r) {
						var u = i.term;
						f.multiple && t(i.term);
						bungieNetPlatform.tagServices.search({
							phrase: u,
							callback: function(t) {
								r(n.map(t, function(n) {
									return n.tagText
								}))
							},
							errorCallback: function() {
								r([])
							}
						})
					},
					search: function() {
						return r(this.value, f.minimumChars)
					},
					focus: function() {
						return !1
					},
					select: function(n, t) {
						var r = t.item.value;
						f.multiple ? (r = i(this.value), r.pop(), r.push(t.item.value), r.push(""), this.value = r.join(", ")) : this.value = r;
						u.trigger("tagSelect", r);
						f.onSelect(r);
						return !1
					}
				})
			})
		}
	}(jQuery),
	function(n) {
		function t(t) {
			var i = n.extend({
				content: "",
				parents: [],
				itemRenderedCallback: function() {},
				renderCompleteCallback: function() {}
			}, t);
			return i.parents = n.merge([], i.parents), i
		}

		function i(t, i) {
			return t.hasClass("MacroProcess") ? n.when(t.renderContentFromAttributes(i), t.find(".MacroProcess").renderContentFromAttributes(i)) : n.when(t.find(".MacroProcess").renderContentFromAttributes(i))
		}
		n.fn.htmlWithMacroProcessing = function(r) {
			var u = bungieNetPlatform.macroProcessor.getNormalizedHtml(r.content);
			return this.each(function() {
				var f = n(this);
				f.html(u);
				f.each(function() {
					var u = t(r);
					i(n(this), u)
				})
			})
		};
		n.fn.appendWithMacroProcessing = function(r) {
			var u = bungieNetPlatform.macroProcessor.getNormalizedHtml(r.content);
			if (u != "") return this.each(function() {
				var e = n(this),
					f = n(u);
				e.append(f);
				f.each(function() {
					var u = t(r);
					i(n(this), u)
				})
			})
		};
		n.fn.MacroProcess = function(r) {
			return this.each(function() {
				var u = n(this),
					f = t(r);
				i(u, f)
			})
		}
	}(jQuery),
	function(n) {
		n.fn.renderAsset = function(t) {
			var i = n.extend({
				path: "",
				width: "auto",
				height: "auto",
				onComplete: function() {}
			}, t);
			return this.each(function() {
				var t = n(this),
					r = {
						path: t.attr("data-asset-path") ? t.attr("data-asset-path") : i.path,
						width: t.attr("data-asset-width") ? t.attr("data-asset-width") : i.width,
						height: t.attr("data-asset-height") ? t.attr("data-asset-height") : i.height
					},
					u = bungieNetPlatform.assetRenderer.renderAsset(r);
				t.append(u);
				i.onComplete(t)
			})
		};
		n.fn.renderAssetThumbnail = function(t) {
			var i = n.extend({
				path: "",
				width: "auto",
				height: "auto",
				onComplete: function() {}
			}, t);
			return this.each(function() {
				var t = n(this),
					r = {
						path: t.attr("data-asset-path") ? t.attr("data-asset-path") : i.path,
						width: t.attr("data-asset-width") ? t.attr("data-asset-width") : i.width,
						height: t.attr("data-asset-height") ? t.attr("data-asset-height") : i.height
					},
					u = bungieNetPlatform.assetRenderer.renderAssetThumbnail(r);
				t.append(u);
				i.onComplete(t)
			})
		}
	}(jQuery),
	function(n) {
		function o(n, t, i, r, u, f) {
			var e = n.children();
			n.hasClass("MacroProcess") && n.replaceWith(e);
			f(t, i, r);
			u.transaction.popCall(u.identifier);
			u.transaction.actions.length == 0 && u.traversalCompleteCallback(u.transaction.count)
		}

		function s(t, i, r, u, f) {
			var e;
			e = i ? n.merge(n.merge([], u.parents), [i]) : n.merge([], u.parents);
			t.appendWithMacroProcessing({
				content: r,
				parents: e,
				templateType: u.templateType,
				transaction: u.transaction,
				traversalCompleteCallback: u.traversalCompleteCallback
			});
			f(i, r)
		}

		function r(n, t) {
			var u = t[0],
				r, i;
			for (n.renderAttributes = [], r = 0; r < u.attributes.length; r++) i = u.attributes[r], i && i.name.indexOf("data-") > -1 && (n.renderAttributes[i.name] = i.value)
		}

		function u(t, i) {
			var u = t.itemRenderedCallback,
				f = t.renderCompleteCallback,
				r = n.extend({}, t, {
					path: i.attr("data-content-path") ? i.attr("data-content-path") : t.contentPath,
					contentId: i.attr("data-content-id") ? i.attr("data-content-id") : t.contentId,
					locale: i.attr("data-content-locale") ? i.attr("data-content-locale") : t.locale,
					templateType: i.attr("data-template-type") ? i.attr("data-template-type") : t.templateType,
					propertyName: i.attr("data-property-name") ? i.attr("data-property-name") : t.propertyName,
					isTypeAgnostic: i.attr("data-is-type-agnostic") ? i.attr("data-is-type-agnostic").toLowerCase() == "true" : t.isTypeAgnostic
				});
			return r.itemRenderedCallback = function(n, t) {
				s(i, n, t, r, u)
			}, r.renderCompleteCallback = function(n, t, u) {
				o(i, n, t, u, r, f)
			}, r.firstResultCallback = function() {
				i.html("")
			}, r
		}

		function f(i, f, e, o, s, h) {
			var c = n.extend({
				templateType: "",
				isTypeAgnostic: !1,
				itemRenderedCallback: function() {},
				renderCompleteCallback: function() {},
				traversalCompleteCallback: function() {},
				errorCallback: function() {},
				parents: [],
				transaction: new t,
				headOnly: !1,
				renderAttributes: []
			}, e);
			return h.each(function() {
				var h = n(this),
					t = u(c, h),
					e;
				t.query = n.extend(o, c.query);
				for (e in o) typeof s[e] != "undefined" && (t.query[e] = h.attr(s[e]) ? h.attr(s[e]) : t.query[e]);
				t.identifier = t.transaction.pushCall(i);
				r(t, h);
				f(t)
			})
		}

		function e(i, f, e, o, s, h) {
			var c = n.extend({
				templateType: "",
				isTypeAgnostic: !1,
				itemRenderedCallback: function() {},
				renderCompleteCallback: function() {},
				traversalCompleteCallback: function() {},
				errorCallback: function() {},
				parents: [],
				transaction: new t,
				headOnly: !1,
				renderAttributes: []
			}, e);
			return h.each(function() {
				var h = n(this),
					t, e;
				c.identifier = c.transaction.pushCall(i);
				t = u(c, h);
				t = n.extend(o, t);
				for (e in o) typeof s[e] != "undefined" && (t[e] = h.attr(s[e]) ? h.attr(s[e]) : t[e]);
				r(t, h);
				f(t)
			})
		}
		var t = function() {
			var n = this;
			n.count = 0;
			n.identifiers = 0;
			n.actions = [];
			n.pushCall = function(t) {
				n.count++;
				var i = n.identifiers;
				return n.identifiers++, n.actions.push({
					command: t,
					identifier: i
				}), i
			};
			n.popCall = function(t) {
				for (i = 0; i < n.actions.length; i++)
					if (n.actions[i].identifier == t) return n.actions.splice(i, 1), !0;
				console.log("Transaction: No Identifier for popped call " + t + "!")
			}
		};
		n.fn.renderContentFromId = function(i) {
			var f = n.extend({
				contentId: 0,
				locale: bungieNetPlatform.platformSettings.currentLocale,
				templateType: "",
				isTypeAgnostic: !1,
				itemRenderedCallback: function() {},
				renderCompleteCallback: function() {},
				traversalCompleteCallback: function() {},
				errorCallback: function() {},
				parents: [],
				transaction: new t,
				headOnly: !1,
				renderAttributes: []
			}, i);
			return this.each(function() {
				var i = n(this),
					t = u(f, i);
				t.identifier = t.transaction.pushCall("renderContentFromId");
				r(t, i);
				bungieNetPlatform.contentRenderer.renderContentFromId(t)
			})
		};
		n.fn.renderContentItemFromTagAndType = function(n) {
			e("renderContentItemFromTagAndType", bungieNetPlatform.contentRenderer.renderContentItemFromTagAndType, n, {
				tag: "",
				contentType: "",
				locale: bungieNetPlatform.platformSettings.currentLocale
			}, {
				contentType: "data-content-type",
				tag: "data-content-tag",
				locale: "data-content-locale"
			}, this)
		};
		n.fn.renderPromoWidget = function(n) {
			e("renderPromoWidget", bungieNetPlatform.contentRenderer.renderPromoWidget, n, {}, {}, this)
		};
		n.fn.renderContent = function(i) {
			var f = n.extend({
				contentObject: null,
				templateType: "",
				isTypeAgnostic: !1,
				itemRenderedCallback: function() {},
				renderCompleteCallback: function() {},
				traversalCompleteCallback: function() {},
				errorCallback: function() {},
				parents: [],
				transaction: new t,
				headOnly: !1,
				renderAttributes: []
			}, i);
			return this.each(function() {
				var i = n(this),
					t = u(f, i);
				t.identifier = t.transaction.pushCall("renderContent");
				r(t, i);
				bungieNetPlatform.contentRenderer.renderContent(t)
			})
		};
		n.fn.renderContentList = function(i) {
			var f = n.extend({
				contentList: [],
				templateType: "",
				isTypeAgnostic: !1,
				itemRenderedCallback: function() {},
				renderCompleteCallback: function() {},
				traversalCompleteCallback: function() {},
				errorCallback: function() {},
				parents: [],
				transaction: new t,
				headOnly: !1,
				renderAttributes: []
			}, i);
			return this.each(function() {
				var i = n(this),
					t = u(f, i),
					e;
				t.identifier = t.transaction.pushCall("renderContentList");
				r(t, i);
				e = {
					hasMore: !1,
					query: {
						contentTypes: [],
						creationDate: 0,
						currentPage: 1,
						itemsPerPage: t.contentList.length,
						modifiedDate: 0,
						sortBy: 0,
						tag: ""
					},
					results: t.contentList,
					totalResults: t.contentList.length
				};
				bungieNetPlatform.contentRenderer.renderContentItemList(e, t)
			})
		};
		n.fn.renderContentFromAttributes = function(i) {
			var r = n.extend({
				templateType: "",
				locale: bungieNetPlatform.platformSettings.currentLocale,
				itemRenderedCallback: function() {},
				renderCompleteCallback: function() {},
				traversalCompleteCallback: function() {},
				errorCallback: function() {},
				parents: [],
				transaction: new t,
				headOnly: !1,
				renderAttributes: []
			}, i);
			return this.each(function() {
				var t = n(this),
					i = "id";
				t.attr("data-render-command") && (i = t.attr("data-render-command"));
				switch (i) {
					case "id":
						t.renderContentFromId(r);
						break;
					case "query":
						t.renderContentFromQuery(r)
				}
			})
		};
		n.fn.renderContentFromQuery = function(n) {
			f("renderContentFromQuery", bungieNetPlatform.contentRenderer.renderContentFromQuery, n, {
				contentTypes: [],
				tag: "",
				notTag: "",
				locale: bungieNetPlatform.platformSettings.currentLocale,
				itemsPerPage: 100,
				currentPage: 1,
				sortBy: Globals.ContentSortBy.CreationDate,
				creationDate: Globals.ContentDateRange.All,
				modifiedDate: Globals.ContentDateRange.All
			}, {
				contentTypes: "data-content-types",
				tag: "data-content-tag",
				notTag: "data-content-not-tag",
				locale: "data-content-locale",
				itemsPerPage: "data-content-items-per-page",
				currentPage: "data-content-current-page",
				sortBy: "data-content-sort-by"
			}, this)
		};
		n.fn.renderContentFromTagAndType = function(n) {
			f("renderContentFromTagAndType", bungieNetPlatform.contentRenderer.renderContentFromTagAndType, n, {
				contentType: "",
				tag: "",
				locale: bungieNetPlatform.platformSettings.currentLocale,
				itemsPerPage: 10,
				currentPage: 1
			}, {
				contentType: "data-content-type",
				tag: "data-content-tag",
				locale: "data-content-locale",
				itemsPerPage: "data-content-items-per-page",
				currentPage: "data-content-current-page"
			}, this)
		};
		n.fn.renderNewsContent = function(n) {
			f("renderNewsContent", bungieNetPlatform.contentRenderer.renderNewsContent, n, {
				contentTypes: "",
				newsType: "",
				locale: bungieNetPlatform.platformSettings.currentLocale,
				itemsPerPage: 10,
				currentPage: 1
			}, {
				contentType: "data-content-type",
				newsType: "data-content-news-type",
				locale: "data-content-locale",
				itemsPerPage: "data-content-items-per-page",
				currentPage: "data-content-current-page"
			}, this)
		}
	}(jQuery);
Cookies = {
	Path: "/",
	Set: function(n, t) {
		document.cookie = n + "=" + encodeURIComponent(t) + ";path=" + this.Path
	},
	SetWithExpires: function(n, t, i) {
		document.cookie = n + "=" + encodeURIComponent(t) + ";path=" + this.Path + ";expires=" + i.toUTCString()
	},
	Get: function(n) {
		var t = document.cookie.match(n + "=(.*?)(;|$)");
		return t ? decodeURIComponent(t[1]) : null
	},
	GetMulti: function(n, t) {
		var r = document.cookie.match(n + "=(.*?)(;|$)"),
			u, i, f;
		if (r && r.length >= 1)
			for (u = r[1].split("&"), i = 0; i < u.length; i++)
				if (f = u[i].split("="), f[0] == t) return decodeURIComponent(f[1]);
		return null
	},
	GetMultiDictionary: function(n) {
		var t = {},
			r = document.cookie.match(n + "=(.*?)(;|$)"),
			u, i, f;
		if (r && r.length >= 1)
			for (u = r[1].split("&"), i = 0; i < u.length; i++) f = u[i].split("="), t[f[0]] = f[1];
		return t == null && (t = {}), t
	},
	SetMulti: function(n, t) {
		var i = "",
			r;
		for (r in t) i += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]) + "&";
		i.length > 0 && (i = i.substr(0, i.length - 1));
		document.cookie = n + "=" + i + ";path=" + this.Path
	},
	SetMultiWithExpires: function(n, t, i) {
		var r = "",
			u;
		for (u in i) r += encodeURIComponent(u) + "=" + encodeURIComponent(i[u]) + "&";
		r.length > 0 && (r = r.substr(0, r.length - 1));
		document.cookie = n + "=" + r + ";path=" + this.Path + ";expires=" + t.toUTCString()
	},
	GetInMulti: function(n, t) {
		var i = Cookies.GetMultiDictionary(n);
		return i[t]
	},
	SetInMulti: function(n, t, i) {
		var r = Cookies.GetMultiDictionary(n);
		r[t] = i;
		Cookies.SetMulti(n, r)
	},
	SetInMultiWithExpires: function(n, t, i, r) {
		var u = Cookies.GetMultiDictionary(n);
		u[t] = i;
		Cookies.SetMultiWithExpires(n, r, u)
	},
	SetInMultiFromDictionary: function(n, t) {
		var r = Cookies.GetMultiDictionary(n),
			i;
		for (i in t) r[i] = t[i];
		Cookies.SetMulti(n, r)
	},
	SetInMultiFromDictionaryWithExpires: function(n, t, i) {
		var u = Cookies.GetMultiDictionary(n),
			r;
		for (r in i) u[r] = i[r];
		Cookies.SetMultiWithExpires(n, t, u)
	},
	Delete: function(n) {
		if (this.Get(n)) {
			var t = new Date;
			t.setTime(t.getTime() - 1);
			document.cookie = n + "=;path=" + this.Path + ";expires=" + t.toUTCString()
		}
		return !0
	}
};
bungieNetPlatform.dateUtility = {
	formatShortDate: function(n) {
		return n.getMonth() + 1 + "/" + n.getDate() + "/" + n.getFullYear()
	},
	formatTime: function(n) {
		var t = n.getHours() % 12,
			i = n.getMinutes();
		return t + ":" + i
	},
	getAmPm: function(n) {
		return n.getHours() / 12 >= 1 ? "PM" : "AM"
	}
},
	function() {
		bungieNetPlatform.linkHelper = {
			linkRegex: new RegExp(/([\s\(\>]|^|>)((http|https)\:\/\/([^\s\<\[]*))((?=[\,\.\!\:\;\-\"\)]([\s\<]|$)))/gi),
			linkFineRegex: new RegExp(/([\s]|^|>)((http|https)\:\/\/([^\"\s\<]*))/gi),
			injectLinks: function(n) {
				var t = "";
				return typeof n != "undefined" && (t = n.replace(bungieNetPlatform.linkHelper.linkRegex, '$1<a href="$2" rel="nofollow" class="externalLink">$2<\/a>'), t = t.replace(bungieNetPlatform.linkHelper.linkFineRegex, '$1<a href="$2" rel="nofollow" class="externalLink">$2<\/a>')), t
			}
		}
	}(),
	function() {
		bungieNetPlatform.tagHelper = {
			hashRegex: new RegExp(/(\#([a-zA-Z\u00C0-\u017F\u01FA-\u0217][a-zA-Z\u00C0-\u017F\u01FA-\u0217_0-9]{2,29}))(?!.*?\[\/(url|google)\])/gi),
			injectSpans: function(n) {
				return n.replace(bungieNetPlatform.tagHelper.hashRegex, '<span data-tag="$2">$1<\/span>')
			}
		}
	}()
