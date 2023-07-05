---
layout: post
title: "Developer's Log - May & June 2023"
date: "2023-07-05"
tags: devlog featured
short_title: "Devlog - May & June 2023"
author: Jaiden
permalink: /news/developers-log-may-jun-2023
---
{% assign image_basepath = "/assets/news/2023/jun/" %}

![1]({{ image_basepath | append: "1.png" | relative_url }})

As you might have noticed, this developer's log seems to have skipped a month. Ultimately, May ended up being a much needed month of rest and recharging after we worked very hard on the game's story and integration during the spring. But I'm pleased to report that there is a lot of exciting progress to share as a result.

Content & Integration
===
Progress on the first "draft" of the entire game continued, and we were able to finish up several more passes. All that's left is putting in placeholders for audio and special effects, which we plan to finish up during July.

Chests, Collectibles and Enemies
---
All of the chests, collectibles and enemies have had placeholders implemented into the game. This means the basic level design for fields and villages is about 75% done. The only thing left here is integrating the side quests. Dungeons are 100% completed in this regard, which is a pretty big milestone!

![2]({{ image_basepath | append: "2.png" | relative_url }})

While the maps themselves are not visually completed, and the items in chest are just placeholders, you can run through and interact with every possible chest, collectible, and enemy in the game. In a way, it makes the whole game playable start to finish!

Katie as always was a massive help with this. She took care of integrating all of the monsters and setting up their movement patterns to really give us the push we needed to wrapping this portion up.

Side quests & NPCs
---
All of the extra backstory and side quests have been drafted up, ready to be integrated. Katie made some lovely sketches of the NPCs and created a unique story to tie in to the several cities and towns Oliver visits throughout the game.  We plan to begin integrating these side quests into the game in the coming months.

![3]({{ image_basepath | append: "3.png" | relative_url }})

Features & System
===
I continued to make progress on the core components of the game, both by programming features that streamline the development process, as well as add important gameplay elements. This may or may not include adding some bugs, too, but hopefully those will all be crushed before release 🐞🔨

Party Switcher
---
It's exciting to finally share a few more characters besides Oliver and Azel! Indeed, you'll be able to choose from a handful of playable characters to construct your battle team with, and I finally got around to adding the core mechanics needed to make that happen. 

![4]({{ image_basepath | append: "4.gif" | relative_url }})

This is a very rough first draft of the party switcher, which will be available from the menu at all times. As such, you'll be able to mix & match your team however you'd like. I've always found this kind of flexibility in RPGs to be a core aspect of what makes them fun.

![5]({{ image_basepath | append: "5.png" | relative_url }})

And with this, we're finally able to start implementing the main characters' gorgeous battler sprites, created by the artist Burt. Of course, the character art is still placeholder as it's being worked on, but I'm looking forward to sharing more regarding these new characters in the coming months.

Map Transitions
---
One of the last steps for finishing the first "pass" of the game is lighting, animation effects and music. Something that's always bothered me was the default RPG Maker transition effect, which was rather reminiscent of *Windows Movie Maker* and looked a bit amateurish: 

![6]({{ image_basepath | append: "6.gif" | relative_url }})

To make matters worse, if I wanted to change the map's zoom or color tone, I had to manually set each step of the fade out and in for each map that I wanted to do such a transition for. This was an unwieldy and repetitive  process, and left room for potential errors and bugs. 

So I killed two birds with one stone, and programmed a proper transition that applies globally to all maps, as well as a special method that allows me to very simply set a few parameters for a map's color tone, zoom, and other screen effects while the map is transitioning. 

![7]({{ image_basepath | append: "7.gif" | relative_url }})

This allows us a lot more flexibility, and I believe will really shine as we work on effects in the next few months.

<br>

That's all for now! I hope this extra-long developer's log felt worth the two month wait. Thank you for your support and understanding as we continue to work hard on the game.

*-Jaiden*