---
layout: post
title: "Developer's Log - February 2024"
date: "2024-03-11"
tags: devlog featured
short_title: "Devlog - Feb 2024"
author: Jaiden
permalink: /news/developers-log-feb-2024
image_basepath: "/images/news/2024/feb/"
---
{% assign image_basepath = "/assets/news/2024/feb/" %}


Hi everyone,

Things are going well, especially with regards to the game's new demo. This developers log will be jam-packed with announcements and exciting news, so let's jump right into it!

\- Announcements -
===

Marketing Refresh, New Art and New Trailer
---
For those of you who missed it--there's a brand new trailer that showcases the new art, gameplay and snippets of story since 2022. It's very short, but I think it's a great little teaser. 
Check it out here:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mhA3HRTut1Q?si=lPYeko5BapKgvhtN" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>

There's also a new vertical box art, which illustrates the main cast you'll be traveling with the first half of the main story:

{% include image.html page=page image='2024_boxart.jpg' %}

A very special thank you to Ryuuen Tanaka for putting the lineart and shading for this piece together!

And to go along with all of this, marketing got a big refresh across all channels. You can check it out on the new [Steam Page]({{ site.data.games.legends-of-astravia.links.steam | absolute_url}}) or [Game Page]({{ '/games/legends-of-astravia' | relative_url }}). 

Demo 100% Complete!
---
The 2024 demo is **done**! Of course, this doesn't mean it's ready to play just yet. It is currently in a QA and testing state in order to iron out any bugs and gameplay issues. 

### Beta Testing
There will be a private, opt-in beta in the [Discord Server](https://www.discord.com/invite/astravia) soon, likely in April. There was a plan to run it sooner, however I decided that I wanted to really take care of some user experience issues and features first and share a more "polished" version with everyone. So if you're interested, be sure to join and keep an eye out.

Enrolled in Steam NextFest
---
I'm pleased to announce that the Legends of Astravia demo will be re-launching for the summer Steam NextFest! I will make a more formal announcement, such as the release date, when we get closer to that time.

Temporary Devlog Hiatus
---
With the push to get the demo launched in time for the Steam NextFest, it will become increasingly difficult for me to keep up with these long-form developer's logs. As such, **I am temporarily suspending monthly developer's logs until July 2024**. 

Never fear! There will still be plenty of news and announcements especially leading up to the big demo launch this summer :tada:

\- Game Progress -
===

Battle Overhaul & Preview
---
Astravia's unique battle system has always been the most challenging to get right. When I launched the demo in 2022, a lot of players were interested in the system, but really struggled to adapt to it. I've since then had plans to modify it for the new demo using all of the feedback I received.

The result ended up being something that looks surprisingly "modern JRPG", and feels pretty fun to control:

{% include image.html page=page image='NewBattle_Final.gif' %}

While the colored "ABXY" face buttons looked nice, it created a lot of issues across varying control schemes, such as different controller brands and keyboards. I also really wanted the system to be more friendly one-handed for accessibility reasons. So, the system now uses a universal sign: directional arrows, and a standard "confirm / cancel". No more button confusion!

{% include image.html page=page image='Battle_2022vs2024.png' %}

Some other improvements include the target window appearing closer to the target, control help, and clearer target highlighting.

But I really can't understate how iterative this process is. I had dozens of tries, especially with regards to the UI and camera elements. Here's an early attempt:

{% include image.html page=page image='NewBattle_Attempt1.gif' %}

And of course, to those who get motion sickness (me! :handshake:), do not fret: **there will be an option to disable camera movement entirely**. I actually tend to get quite motion sick myself, and while I think the camera movement makes it clearer where your attention belongs, I understand the importance of being able to turn those wiggles off!

Battle Tutorial(s)
---
I spent a lot of time reworking on the battle tutorial as well. This time around, Oliver will walk you through it as he tries to remember what Mordin's local swordsman taught him:

{% include image.html page=page image='Tutorial1.png' %}

The system is pretty unique in that it ramps up and gets increasingly more complex the more characters there are on the field. So a second tutorial was necessary, and will feature Azel's..._encouragement_, just like the last demo:

{% include image.html page=page image='Tutorial2.png' %}

macOS and Steam Deck Support
---
I was able to test and confirm support for two platforms other than Windows: macOS and the Steam Deck! The Steam Deck is especially exciting, as I think this will be a big benefit during the Steam NextFest.

More Screenshots
---
Here are a couple more screenshots to share:

{% include image.html page=page image='SS1.png' %}

{% include image.html page=page image='SS2.png' %}

{% include image.html page=page image='SS3.png' %}

---

That's all for now. Thank you as always for your patience and support, it's exciting to finally see all of this work starting to pay off.

_-Jaiden_