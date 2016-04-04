<!DOCTYPE html>
<html>

<head>
	<title><?= $title ?></title>
	<meta charset='utf-8'>
	<meta name="viewport" content="initial-scale=1, width=device-width" />
	<meta http-equiv="X-UA-Compatible" content="chrome=1">
	<meta name="description" content="BungieNetPlatform : A community run wiki for the Bungie.net Platform APIs.">

	<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,500,700' rel='stylesheet' type='text/css'>

	<!-- Bootstrap 3.3.6 -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/styles/default.min.css">

	<link rel="stylesheet" href="<?= $root ?>lib/font-awesome/css/font-awesome.min.css">

	<link rel="stylesheet" type="text/css" media="screen" href="<?= $root ?>css/stylesheet.css<?php echo '?'.filemtime(BASEPATH.'/gh-pages/css/stylesheet.css') ?>">
</head>

<body>

<div class="wrap">
<!-- HEADER -->
<!-- <?= $page_url.' | '.$page_title ?> -->
<header id="top" class="navbar">
	<div class="container">
		<div class="navbar-header">
			<button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#top-nav">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a href="<?= $root ?>" class="navbar-brand"><?= $site_title ?></a>
		</div>
		<nav id="top-nav" class="collapse navbar-collapse">
			<?php
			$navbar = parseMarkdown(BASEPATH.'/wiki/_Sidebar.md');
			$navbar = preg_replace('/<ul>/', '<ul class="nav navbar-nav">', $navbar, 1);
			$navbar = str_replace('docs/Home.html', $root, $navbar);
			$navbar = preg_replace('/<a href="[^"]+">Home<\/a>/', '<li><a href="'.$root.'">Home</a>', $navbar);
			$navbar = str_replace('<li><a href="'.$page_url.'"', '<li class="active"><a href="'.$page_url.'"', $navbar);
			echo $navbar;
			?>
			<ul class="nav navbar-nav navbar-right">
				<li>
					<a id="forkme_banner" href="https://github.com/DestinyDevs/BungieNetPlatform/wiki">View on GitHub</a>
				</li>
			</ul>
		</nav>
		<div id="wiki-search" ng-controller="SearchCtrl" wiki-search></div>
	</div>
</header>
<div id="header">
	<div class="container">
		<h1><?= $page_title ?></h1>
		<h2><?= $page_desc ?></h2>

		<!--<section id="downloads">
		  <a class="zip_download_link" href="https://github.com/DestinyDevs/BungieNetPlatform/zipball/master">Download this project as a .zip file</a>
		  <a class="tar_download_link" href="https://github.com/DestinyDevs/BungieNetPlatform/tarball/master">Download this project as a tar.gz file</a>
		</section>-->
	</div>
</div>

<!-- MAIN CONTENT -->
<div id="content">
	<div class="container">
		<div class="inner">