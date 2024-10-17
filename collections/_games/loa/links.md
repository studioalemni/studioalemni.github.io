---
layout: game
title: 'Legends of Astravia - Quick Links'
header_image: assets/loa/21-9_banner-Logo_RMN.png
redirect_from:
    - /links
    - /linktree
---
{% assign game = site.data.games.legends-of-astravia %}
{% capture rss_link %}https://studioalemni.com/feed.xml{% endcapture %}
{% capture steam_link %}{{ game.links.steam }}{% endcapture %}
{% capture itch_link %}{{ game.links.itch }}{% endcapture %}
{% capture bluesky_link %}{{ game.links.bluesky }}{% endcapture %}
{% capture twitter_link %}{{ game.links.twitter }}{% endcapture %}
{% capture tumblr_link %}{{ game.links.tumblr }}{% endcapture %}
{% capture youtube_link %}{{ game.links.youtube }}{% endcapture %}
{% capture kofi_link %}{{ game.links.ko-fi }}{% endcapture %}
{% capture discord_link %}{{ game.links.discord }}{% endcapture %}

Legends of Astravia is a charming retro RPG set in a world of magic--[Learn more](/games/legends-of-astravia).

Below are various links to platforms where you can follow progress and get updates, wishlist, play the demo, or support its development.

Of course, official news and announcements will always be posted here first, on the ["News & Announcements"](/news) page. You can also subscribe via RSS below--we'll have a how-to guide available for that soon.

<br>

<div class="link-tree">
{% include button-link.html thumb=':star:' text='Steam (Demo & News)' url=steam_link %}
{% include button-link.html thumb=':video_game:' text='Itch.io (Demo & News)' url=itch_link %}
{% include button-link.html thumb=':newspaper:' text='RSS Feed (News)' url=rss_link %}
<br>
{% include button-link.html thumb=':butterfly:' text='BlueSky' url=bluesky_link %}
{% include button-link.html thumb=':framed_picture:' text='Tumblr' url=tumblr_link %}
{% include button-link.html thumb=':speech_balloon:' text='Discord Server' url=discord_link %}
<br>
{% include button-link.html thumb=':tv:' text='Youtube' url=youtube_link %}
{% include button-link.html thumb=':newspaper:' text='Press Kit' url='/presskit/legends-of-astravia' %}
{% include button-link.html thumb=':coffee:' text='Support with Ko-Fi' url=kofi_link %}

</div>

<br>