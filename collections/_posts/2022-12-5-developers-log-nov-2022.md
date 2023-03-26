---
layout: post
title: "New Graphics! (Developer's Log - Nov. 2022)"
date: "2022-12-05"
tags: devlog featured announcement
short_title: "New Graphics!"
redirect_from:
    - /news/developers-log-nov-2022
---
{% assign image_basepath = "/assets/news/2022/nov/" %}

![1]({{ image_basepath | append: "1.png" | relative_url }})

Hello everyone,

I am very excited to announce that Legends of Astravia will be taking on a new 16-bit pixel art look, reminiscent of the Super Nintendo / Game Boy Advance games that inspired it!

As some of you might have noticed, the past couple of months of developer's logs have been thin on progress--and that was for good reason. I've been quietly working on this change to the game's graphics.

With it comes a lot of progress, too, and I will explain the reasoning for such a drastic change after having released the demo within this developer's log.

# Examples & Reasoning

![header]({{ image_basepath | append: "header.png" | relative_url }})

This is definitely a big change, and I was worried whether or not folks who are excited for the game would be disappointed. While the graphics are a lower detail than what was in the demo, I think this is a visual upgrade and a much more appropriate direction.

First, I think it's important to go over what did and didn't change, to address any concerns.

## What Changed
The overworld (map) tiles, character graphics, and character art (as discussed in the last devlog) have changed.

![2]({{ image_basepath | append: "2.png" | relative_url }})

Future updates will all showcase the new design.

## What Didn't Change
The engine, battle system, and underlying mechanics are completely the same.

The game still plays and feels exactly as it does in the demo--so think of it as a "reskin" of sorts. The user interface will also remain "HD". While this doesn't give the game a fully retro feel, I think it's worth taking advantage of the higher quality text for accessibility reasons.

## Why the Change?
First and foremost: development scope. The game is currently already too big, and a lot of work for a solo developer such as myself. The new tiles and character sprites are exactly half as big as the other ones--and the time saved creating new tiles and characters and sprites for later areas is effectively halved as well. In fact, I was able to already replace all of the graphics for the areas featured in the demo.

Additionally, because the original tiles were so challenging to work with, creating later areas was beginning to become disheartening. It felt like no matter what I did, any "unique" graphics just didn't fit right. I found myself spending a very long time on something that, visually, was not acceptable to me.

![3]({{ image_basepath | append: "3.png" | relative_url }})

Lastly, one of the aspects of the game that's been challenging to deal with is the "RPG Maker" look. The original tilesets that the game utilized were from RPG Maker XP, and they were just a bit too similar in pallet and design to the newer RPG Maker default assets. As a result, even the prettiest areas still invoked this "cookie cutter" look that I wasn't satisfied with.

These new tilesets are still technically RPG Maker. But because they're (mostly) 16-bit, and much closer to the SNES/GBA era, I think they invoke a greater sense of nostalgia than the other tiles did. It will also make changing to unique custom tiles a more viable possibility in the future.

### New Matching 2.5D Battlebacks
As for the battle system, there was some concerns about it clashing with the changes to the overworld. After all, the battler sprites were even higher resolution than the original overworld sprites. However, a special change was made to accommodate this issue...

![4]({{ image_basepath | append: "4.png" | relative_url }})

The battle scene now looks 2.5D, with battle backgrounds that match the overworld! This change would have been beneficial regardless of whether or not the overworld graphics changed, since the original backgrounds always looked a bit flat.

This is achieved using Crocotile3D. It's been an incredibly helpful tool for recreating the world in 3D and feigning the 2.5D effect:

![5]({{ image_basepath | append: "5.png" | relative_url }})

Alas, it isn't truly 3D, so there won't be any fancy camera effects in battle. But this is something that I'd really like to do for a future game... or later Chapter if feasible.

Comparison Screenshots & Ch 1 Teasers
Here are some more screenshots showcasing the change, from the existing demo and including some finally-not-forest areas:

![Compare1b]({{ image_basepath | append: "Compare1b.png" | relative_url }})
![Compare1a]({{ image_basepath | append: "Compare1a.jpg" | relative_url }})

![Compare3b]({{ image_basepath | append: "Compare3b.png" | relative_url }})
![Compare3a]({{ image_basepath | append: "Compare3a.jpg" | relative_url }})

![Compare4b]({{ image_basepath | append: "Compare4b.png" | relative_url }})
![Compare4a]({{ image_basepath | append: "Compare4a.jpg" | relative_url }})

![Compare5b]({{ image_basepath | append: "Compare5b.png" | relative_url }})
![Compare5a]({{ image_basepath | append: "Compare5a.png" | relative_url }})

Mordin village in particular feels a lot more “homey” in the new style:

![Mordin1b]({{ image_basepath | append: "Mordin1b.png" | relative_url }})
![Mordin1a]({{ image_basepath | append: "Mordin1a.png" | relative_url }})

Creating new tiles for later areas is much less stressful, and as a result I was able to create some maps to preview:

![7]({{ image_basepath | append: "7.png" | relative_url }})
![8]({{ image_basepath | append: "8.png" | relative_url }})

# Updated Schedule & Plans
From a development standpoint, I am actually "caught up" to where I was before I started changing the graphics. And because it is going much faster, I feel confident about Chapter 1's progress.

I plan to continue creating the new areas of the game, and now with these new graphics, developer's logs will be much more robust with many more updates to share.

# What about the demo?
The demo will remain up on Steam as-is with the "old" graphics, until Chapter 1 is closer to its release. At that time, the old demo will be replaced with a special revised demo using the new graphics and more content--including the entire Mordin Village arc for a limited time! No formal release date has been decided for Chapter 1 yet though, so keep an eye on future developer's logs for news on that.
<br>
<br>

---

<br>
<br>
Please be sure to let me know your thoughts about this change! You can share them on Steam or in the official Discord server.

I really hope that folks see it as a positive as I have. Because of the new graphics, I feel both more confident in the project and about development as a whole.

I am looking forward to sharing more progress soon!

*-Jaiden*