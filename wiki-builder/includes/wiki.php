<?php
define('LN', "\n");

$wikiBuilderInfo = '<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>'.LN.LN;

$paramDetails = array(
	'membershipType' => array('enum' => 'BungieMembershipType', 'desc' => 'A valid Bungie.net membershipType.'),
	'invitationResponseState' => array('enum' => 'InvitationResponseState', 'desc' => 'How to respond to the invitation.'),
	'page' => array('desc' => 'The current page to return. Starts at 1.'),
	'currentPage' => array('desc' => 'The current page to return. Starts at 1.'),
	'currentpage' => array('desc' => 'The current page to return. Starts at 1.'),
	//'itemsPerPage' => array('desc' => 'Items per page. Default is 10.'),
	//'itemsperpage' => array('desc' => 'Items per page. Default is 10.'),
	'groupId' => array('desc' => 'A valid groupId.'),
	'groupMembershipType' => array('desc' => 'A valid group membershipType. 0=Member, 1=Admin, 2=Founder (probably will throw an error)'),
	'clanMembershipType' => array('enum' => 'BungieMembershipType', 'desc' => 'A valid clan membership type. 1=Xbox, 2=PSN, 10=Demon'),
	'ignoredItemType' => array('enum' => 'IgnoredItemType', 'desc' => 'The type of item to ignore.'),
	'ignoredItemId' => array('desc' => 'A valid ignoredItemId.'),
	'destinyMembershipId' => array('desc' => 'A valid destinyMembershipId.'),
	'accountId' => array('desc' => 'A valid destinyMembershipId.'),
	'characterId' => array('desc' => 'A valid characterId that is associated with the given account.'),
	'definitions' => array('desc' => 'Include definitions in the response. Use while testing.'),
	'definitionType' => array('enum' => 'DestinyDefinitionType', 'desc' => 'The type of definition to return.'),
	'definitionId' => array('desc' => 'A valid definitionId.'),

	'partnershipType' => array('enum' => 'PartnershipType', 'desc' => 'The type of partnership. 0=None, 1=Twitch'),
	'communityStatusSort' => array('enum' => 'CommunityStatusSort', 'desc' => 'Sort by status.'),
	'modeHash' => array('enum' => 'DestinyActivityModeType', 'desc' => 'Filter by ActivityModeType.')
);

function update($path, $markdown) {
	global $wikiBuilderInfo;
	if (strpos($markdown, 'wiki-builder') === false) $markdown = $wikiBuilderInfo.$markdown;
	if (!file_exists($path) || file_get_contents($path) != $markdown) {
		echo 'Updated: '.$path.LN;
		if (!file_exists(dirname($path))) mkdir(dirname($path), 0777, true);
		file_put_contents($path, $markdown);
	}
}

function getParams($header, $markdown) {
	$pathStart = strpos($markdown, $header)+strlen($header)+1;
	$pathEnd = strpos($markdown, "\n\n##", $pathStart);
	$pathEnd = $pathEnd === false ? strlen($markdown) : $pathEnd+1;

	$section = substr($markdown, $pathStart, $pathEnd-$pathStart);
	preg_match_all('/(.+ \| .*)\n/m', $section, $rowMatches, PREG_SET_ORDER);

	$params = array();
	if (count($rowMatches) > 0) {
		//echo $header.LN;
		//echo $section.LN;
		$keys = explode(' | ', $rowMatches[0][1]);
		unset($rowMatches[0]);
		unset($rowMatches[1]);

		foreach($rowMatches as $rowMatch) {
			$row = explode(' | ', $rowMatch[1]);
			$name = $row[0];
			$link = '';
			preg_match('/\[\[([^\|]+)\|([^\]]+)\]\]/', $name, $linkMatch);

			//echo $rowMatch[1].' | '.$name.' | '.var_export($linkMatch, true).LN;
			if (count($linkMatch) > 0) {
				$name = $linkMatch[1];
				$link = $linkMatch[2];
			}
			$desc = $row[1];
			$params[$name] = array('desc' => $desc, 'link' => $link);
		}
		//echo var_export($params, true).LN;
	}
	return $params;
}

function updateSection($header, $new, &$markdown) {
	$pathStart = strpos($markdown, $header);
	$pathEnd = strpos($markdown, "\n\n##", $pathStart);
	$pathEnd = $pathEnd === false ? strlen($markdown) : $pathEnd+1;
	$old = substr($markdown, $pathStart, $pathEnd-$pathStart);
	//echo '['.$old.']';
	$markdown = str_replace($old, $header.LN.$new, $markdown);
}

function buildParam($name, $params) {
	global $paramDetails;
	$name = trim(str_replace(']', '', str_replace('[', '.', $name)), '.');
	$paramName = $name;
	$paramDesc = '';

	if (isset($params[$name])) {
		if ($params[$paramName]['link']) $paramName = '[['.$paramName.'|'.$params[$name]['link'].']]';
		$paramDesc = $params[$name]['desc'];
	}

	if (isset($paramDetails[$name])) {
		$details = $paramDetails[$name];
		if (isset($details['enum'])) {
			$paramName = '[['.$name.'|Enums#'.$details['enum'].']]';
		}
		if (isset($details['desc'])) {
			$paramDesc = $details['desc'];
		}
	}
	return $paramName. ' | '.$paramDesc.LN;
}

$platformlibDesc = 'This listing is based on [platform library](https://www.bungie.net/sharedbundle/platformlib) file used by [Bungie.net](https://www.bungie.net).';


// Build Enums
$enumsPath = BUILDERPATH.'/data/enums.json';
$enums = file_exists($enumsPath) ? json_decode(file_get_contents($enumsPath)) : array();

$enumsPath = BASEPATH.'/wiki/Enums.md';
$enumsMarkdownList = array();

foreach($enums as $name => $keys) {
	$enumMarkdown = '';
	$enumMarkdown .= 'Name | Value'.LN;
	$enumMarkdown .= '---- | -----'.LN;
	foreach($keys as $key => $value) {
		$enumMarkdown .= $key.' | '.$value.LN;
	}
	$enumsMarkdownList[]= '## <a name="'.$name.'"></a>'.$name.LN.$enumMarkdown;
}
sort($enumsMarkdownList);
$enumsMarkdown = '';
$enumsMarkdown .= $platformlibDesc.LN.LN;
$enumsMarkdown .= implode(LN, $enumsMarkdownList).LN;

update($enumsPath, $enumsMarkdown);


// Build Endpoints
$endpointsPath = BUILDERPATH.'/data/endpoints.json';
$endpoints = file_exists($endpointsPath) ? json_decode(file_get_contents($endpointsPath)) : array();

$endpointsPath = BASEPATH.'/wiki/Endpoints.md';
$endpointsMarkdown = '';
$endpointsMarkdown = $platformlibDesc.LN.LN;

$namespaces = array();
$apis = array();

foreach($endpoints as $service) {
	$serviceEndpoints = get_object_vars($service->endpoints);
	usort($serviceEndpoints, function($a, $b) {
		return strcasecmp($a->name, $b->name);
	});
	$serviceCount = count($serviceEndpoints);

	$endpointsMarkdown .= '## <a name="'.$service->name.'"></a>'.$service->name.' ('.$serviceCount.' Endpoint'.($serviceCount != 1 ? 's' : '').')'.LN;
	$endpointsMarkdown .= 'Method | Name | Endpoint'.LN;
	$endpointsMarkdown .= '------ | ---- | --------'.LN;

	$servicePath = BASEPATH.'/wiki/'.$service->name.'.md';
	$serviceMarkdown = '';

	$apis[$service->name] = array();

	foreach($serviceEndpoints as $endpoint) {
		if (in_array($endpoint->name, $namespaces)) {
			$endpoint->name .= '-('.str_replace('Service', '', $service->name).')';
		}
		$namespaces[] = $endpoint->name;

		$endpointsMarkdown .= $endpoint->method.' | [['.str_replace('-', ' ', $endpoint->name).'|'.$endpoint->name.']] | '.$endpoint->endpoint.LN;

		$endpointPath = BASEPATH.'/wiki/'.$service->name.'Pages/'.$endpoint->name.'.md';
		$endpointMarkdown = file_exists($endpointPath) ? file_get_contents($endpointPath) : '';
		if (!$endpointMarkdown) $endpointMarkdown = file_get_contents(BUILDERPATH.'/templates/endpoint.md');
		if (strpos($endpointMarkdown, $wikiBuilderInfo) === false) $endpointMarkdown = $wikiBuilderInfo.$endpointMarkdown;

		$endpointMarkdown = preg_replace('/(\* \*\*URI:\*\*).*/m', '$1 [['.$endpoint->endpoint.'|https://www.bungie.net/Platform'.$endpoint->endpoint.']]', $endpointMarkdown);
		$endpointMarkdown = preg_replace('/(\* \*\*Method:\*\*).*/m', '$1 '.$endpoint->method, $endpointMarkdown);
		$endpointMarkdown = preg_replace('/(\* \*\*Service:\*\*).*/m', '$1 [['.$service->name.'|Endpoints#'.$service->name.']]', $endpointMarkdown);

		// Manual Content
		//$infoDesc = '';
		$infoAccess = $endpoint->method == 'POST' ? 'Private' : '';
		preg_match('/\* \*\*Accessibility:\*\*(.*)/', $endpointMarkdown, $accessMatch);
		if (count($accessMatch) > 1 && trim($accessMatch[1])) {
			//echo $service->name.'/'.$endpoint->name.' | '.var_export($accessMatch, true)."\n";
			$infoAccess = trim($accessMatch[1]);
		}

		//if (strlen($infoDesc) > 0) $endpointMarkdown = preg_replace('/(## Info\n).*\n/m', '$1'.$infoDesc.LN, $endpointMarkdown);
		if (strlen($infoAccess) > 0) $endpointMarkdown = preg_replace('/(\* \*\*Accessibility:\*\*).*/m', '$1 '.ucfirst($infoAccess), $endpointMarkdown);

		// References
		$refs = array();

		// Example Section
		$example = '';
		$example = str_replace('<syntaxhighlight lang="javascript">', '```javascript'.LN, $example);
		$example = str_replace('</syntaxhighlight>', LN.'```', $example);
		$example = preg_replace('/([^\n\s])```/', '$1'.LN.'```', $example);

		// Get Parameters
		$params = array(
			'path' => getParams('### Path Parameters', $endpointMarkdown),
			'query' => getParams('### Query String Parameters', $endpointMarkdown),
			'json' => getParams('### JSON POST Parameters', $endpointMarkdown)
		);

		// Build Path Parameters
		preg_match_all('/\{([^\}]+)\}/', $endpoint->endpoint, $pathParams, PREG_SET_ORDER);
		$pathParamsMarkdown = 'None'.LN;
		if (count($pathParams) > 0) {
			$pathParamsMarkdown = 'Name | Description'.LN.'---- | -----------'.LN;
			foreach($pathParams as $param) {
				$pathParamsMarkdown .= buildParam($param[1], $params['path']);
			}
		}
		updateSection('### Path Parameters', $pathParamsMarkdown, $endpointMarkdown);

		// Build Query String Parameters
		$queryParamsMarkdown = 'None'.LN;
		if (count($endpoint->params) > 0) {
			$queryParamsMarkdown = 'Name | Description'.LN.'---- | -----------'.LN;
			foreach($endpoint->params as $param) {
				$queryParamsMarkdown .= buildParam($param, $params['query']);
			}
		}
		updateSection('### Query String Parameters', $queryParamsMarkdown, $endpointMarkdown);

		// Build JSON POST Parameters
		$postParamsMarkdown = 'None'.LN;
		if (count($endpoint->post) > 0) {
			$postParamsMarkdown = 'Name | Description'.LN.'---- | -----------'.LN;
			foreach($endpoint->post as $param) {
				$postParamsMarkdown .= buildParam($param, $params['json']);
			}
		}
		updateSection('### JSON POST Parameters', $postParamsMarkdown, $endpointMarkdown);

		// Replace Example Section
		if (strlen($example) > 0) updateSection('## Example', $example.LN, $endpointMarkdown);

		// Replace References Section
		if (count($refs) > 0) {
			$refMarkdown = '';
			foreach ($refs as $refIndex => $ref) {
				$refMarkdown .= ($refIndex + 1) . '. ' . $ref . LN;
			}
			updateSection('## References', $refMarkdown, $endpointMarkdown);
		}

		update($endpointPath, $endpointMarkdown);

		// Build API Data
		$params = array(
			'path' => getParams('### Path Parameters', $endpointMarkdown),
			'query' => getParams('### Query String Parameters', $endpointMarkdown),
			'json' => getParams('### JSON POST Parameters', $endpointMarkdown)
		);
		//echo '<pre>'.var_export($params, true).'</pre>';
		$endpoint->path = $params['path'];
		$endpoint->access = $infoAccess;
		//$endpoint->desc = preg_replace('/.*## Info\n(.*)\n\*.*/m', '$1', $endpointMarkdown);
		$endpoint->params = $params['query'];
		$endpoint->post = $params['json'];
		$apis[$service->name][] = $endpoint;
	}

	$endpointsMarkdown .= LN;
}

update($endpointsPath, $endpointsMarkdown);

file_put_contents(BUILDERPATH.'/data/api-data.json', json_encode($apis, JSON_PRETTY_PRINT));

// Build Definitions
$defsPath = BUILDERPATH.'/data/manifest.json';
$defs = file_exists($defsPath) ? json_decode(file_get_contents($defsPath)) : array();

$defsPath = BASEPATH.'/wiki/Definitions.md';
$defsMarkdown = file_exists($defsPath) ? file_get_contents($defsPath) : '';

if (strpos($defsMarkdown, '## Manifest') === false) $defsMarkdown .= '## Manifest'.LN;

$namespaces = array();

$manifestMarkdown = '';
foreach($defs as $defType) {
	$manifestMarkdown .= '* '.$defType->type.LN;
	foreach($defType->definitions as $def) {
		$name = str_replace('Destiny', '', $def->name);
		if (in_array($name, $namespaces)) $name .= '-('.ucfirst($defType->type).')';
		$namespaces[] = $name;
		$manifestMarkdown .= '  * [['.$def->name.'|'.$name.']]'.LN;

		$singleDefPath = BASEPATH.'/wiki/DefinitionsPages/'.$name.'.md';
		$singleDefMarkdown = file_exists($singleDefPath) ? file_get_contents($singleDefPath) : file_get_contents(BUILDERPATH.'/templates/definition.md');

		// Update Stats Section
		$statsMarkdown = '* **Entries:** '.$def->entries.LN;
		if ($def->classified > 0) $statsMarkdown .= '* **Classified:** '.$def->classified.LN;
		updateSection('## Stats', $statsMarkdown, $singleDefMarkdown);

		// Update Structure Section
		$structurePath = BUILDERPATH.'/cache/'.$defType->type.'-'.$def->name.'.json';
		$structureMarkdown = '';
		if (file_exists($structurePath)) $structureMarkdown = '```javascript'.LN.file_get_contents($structurePath).LN.'```'.LN;

		updateSection('## Structure', $structureMarkdown, $singleDefMarkdown);

		update($singleDefPath, $singleDefMarkdown);
	}
}

updateSection('## Manifest', $manifestMarkdown, $defsMarkdown);

update($defsPath, $defsMarkdown);

// Build Historical Stats
$statsPath = BUILDERPATH.'/data/historical-stats.json';
$stats = file_exists($statsPath) ? json_decode(file_get_contents($statsPath)) : array();

$outputPath = BASEPATH.'/wiki/EnemyHistoricalStatsPages';
$oldEnemyPages = array_diff(scandir($outputPath), array('.', '..'));
$newEnemyPages = array();

foreach($stats as $statGroupName => $statGroup) {
	$statsMarkdown = '';
	$statGroupTitle = $statGroupName;
	switch($statGroupName) {
		case 'Medals':
			$statGroupTitle = 'Medal';
			$statsMarkdown .= 'Icon | Name | Description'.LN;
			$statsMarkdown .= '---- | ---- | -----------'.LN;
			foreach($statGroup as $stat) {
				if (!isset($stat->statId)) continue;
				$statsMarkdown .= (isset($stat->icon) ? '![]('.$stat->icon.')' : '&nbsp;')
					.' | '.$stat->statName.'<br/>'.$stat->statId
					.' | '.(isset($stat->description) ? $stat->description : '&nbsp;')
					.LN;
			}
			break;
		case 'Weapons':
			$statGroupTitle = 'Weapon';
			foreach($statGroup as $weaponStat) {
				$statsMarkdown .= '## ' . $weaponStat->weaponName . LN;
				$statsMarkdown .= '* **weaponId:** ' . $weaponStat->weaponId . LN . LN;

				$statsMarkdown .= 'statType | statId' . LN;
				$statsMarkdown .= '-------- | ------' . LN;
				foreach ($weaponStat->stats as $key => $stat) {
					$statsMarkdown .= $key . ' | ' . $stat->statId . LN;
				}
				$statsMarkdown .= LN;
			}
			break;
		case 'Enemies':
			$statGroupTitle = 'Enemy';
			$statsMarkdown .= '## Tracked'.LN;
			$statsMarkdown .= 'Enemy ID | Name | Race | Class | Stats'.LN;
			$statsMarkdown .= '-------- | ---- | ---- | ----- | -----'.LN;

			$notTracked = 'Enemy ID | Name | Race | Class'.LN;
			$notTracked .= '-------- | ---- | ---- | -----'.LN;

			foreach($statGroup as $enemyStat) {
				$enemyName = $enemyStat->enemyName;
				if (isset($enemyStat->overrides) && isset($enemyStat->overrides->enemyName)) {
					$enemyName = $enemyStat->overrides->enemyName;
				}
				$enemyMarkdown = '## '.$enemyName.LN;

				$statCount = count((array)$enemyStat->stats);

				if ($statCount > 0) {
					$statsMarkdown .= '[['.$enemyStat->enemyId.']]'
						.' | '.($enemyStat->enemyName == $enemyName ? $enemyName : '['.$enemyName.']<br/>'.$enemyStat->enemyName)
						.' | '.(isset($enemyStat->raceName) ? $enemyStat->raceName : '&nbsp;')
						.' | '.(isset($enemyStat->raceClass) ? $enemyStat->raceClass : '&nbsp;')
						.' | '.$statCount.LN;
				} else {
					$notTracked .= '[['.$enemyStat->enemyId.']] | '.$enemyName
						.' | '.(isset($enemyStat->raceName) ? $enemyStat->raceName : '&nbsp;')
						.' | '.(isset($enemyStat->raceClass) ? $enemyStat->raceClass : '&nbsp;')
						.LN;
				}

				$enemyMarkdown .= '### Info'.LN;
				$attrs = array(
					'enemyId',
					'enemyName',
					'cardId',
					'enemyTier',
					'raceName',
					'raceClass',
					'enemyWeapon',
					'enemyShield',
					'enemyOtherWeapons',
					'activityType',
					'activity',
					'destination',
					'location'
					);
				foreach($attrs as $attr) {
					if (!isset($enemyStat->{$attr})) continue;
					$value = $enemyStat->{$attr};
					if (is_array($value)) $value = implode(', ', $value);
					$enemyMarkdown .= '* **'.$attr.':** '.$value.LN;
				}
				$enemyMarkdown .= LN;

				if (isset($enemyStat->overrides) && count((array)$enemyStat->overrides) > 0) {
					$enemyMarkdown .= '### Overrides' . LN;
					$enemyMarkdown .= 'key | value' . LN;
					$enemyMarkdown .= '--- | -----' . LN;
					foreach ($enemyStat->overrides as $key => $value) {
						$enemyMarkdown .= $key . ' | ' . $value . LN;
					}
					$enemyMarkdown .= LN;
				}

				$enemyMarkdown .= '### Stats'.LN;
				$enemyMarkdown .= 'statType | statId'.LN;
				$enemyMarkdown .= '-------- | ------'.LN;
				foreach($enemyStat->stats as $statType => $stat) {
					$enemyMarkdown .= $statType.' | '.$stat->statId.LN;
				}

				$enemyMarkdown .= LN;

				$newEnemyPages[] = $enemyStat->enemyId.'.md';
				update(BASEPATH.'/wiki/EnemyHistoricalStatsPages/'.$enemyStat->enemyId.'.md', $enemyMarkdown);
			}

			$statsMarkdown .= LN;
			$statsMarkdown .= '## Not Tracked'.LN;
			$statsMarkdown .= 'These enemies do not yet have historical stats.'.LN.LN;
			$statsMarkdown .= $notTracked;
			break;
		case 'UniqueWeapon':
			$statGroupTitle = 'UniqueWeapon';
			break;
	}
	if (!$statsMarkdown) {
		$statsMarkdown .= 'statId | statName'.LN;
		$statsMarkdown .= '------ | --------'.LN;
		foreach($statGroup as $stat) {
			if (!isset($stat->statId)) continue;
			$statsMarkdown .= $stat->statId.' | '.$stat->statName.LN;
		}
	}
	$statsPath = BASEPATH.'/wiki/'.$statGroupTitle.'HistoricalStats.md';

	update($statsPath, $statsMarkdown);
}

// Remove Unused Enemy Pages
foreach(array_diff($oldEnemyPages, $newEnemyPages) as $enemyPage) {
	$enemyPagePath = $outputPath.'/'.$enemyPage;
	echo 'Removed: '.$enemyPagePath.LN;
	@unlink($enemyPagePath);
}