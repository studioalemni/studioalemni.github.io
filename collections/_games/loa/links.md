---
layout: game
title: 'Legends of Astravia - Quick Links'
header_image: assets/loa/21-9_banner-Logo_RMN.png
redirect_from:
    - /links
    - /linktree
---
{% assign game = site.data.games.legends-of-astravia %}
{% capture steam_link %}{{ game.links.steam }}{% endcapture %}
{% capture itch_link %}{{ game.links.itch }}{% endcapture %}
{% capture bluesky_link %}{{ game.links.bluesky }}{% endcapture %}
{% capture twitter_link %}{{ game.links.twitter }}{% endcapture %}
{% capture tumblr_link %}{{ game.links.tumblr }}{% endcapture %}
{% capture youtube_link %}{{ game.links.youtube }}{% endcapture %}
{% capture kofi_link %}{{ game.links.ko-fi }}{% endcapture %}
{% capture discord_link %}{{ game.links.discord }}{% endcapture %}

Legends of Astravia is a charming retro RPG set in a world of magic coming soon to PC, macOS and Linux.

<br>

<div class="link-tree">

{% include button-link.html thumb=':star:' text='Steam: Play Demo & Wishlist' url=steam_link %}
{% include button-link.html thumb=':newspaper:' text='Press Kit' url='/presskit/legends-of-astravia' %}
{% include button-link.html thumb=':video_game:' text='Itch.io' url=itch_link %}
<br>
{% include button-link.html thumb=':butterfly:' text='Bluesky' url=bluesky_link %}
{% include button-link.html thumb=':bird:' text='Twitter / X' url=twitter_link %}
{% include button-link.html thumb=':framed_picture:' text='Tumblr (AMA)' url=tumblr_link %}
<br>
{% include button-link.html thumb=':tv:' text='Youtube' url=youtube_link %}
{% include button-link.html thumb=':speech_balloon:' text='Discord Server' url=discord_link %}
{% include button-link.html thumb=':coffee:' text='Support with Ko-Fi' url=kofi_link %}

</div>

<br>