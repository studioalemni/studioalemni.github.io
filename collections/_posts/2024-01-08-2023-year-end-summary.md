---
layout: post
title: "2023 Year-End Summary"
date: "2024-01-08"
tags: devlog featured
short_title: "2023 Year-End Summary"
author: Jaiden
permalink: /news/2023-year-end-summary
---
{% assign image_basepath = "/assets/news/2023/dec/" %}

Hello everyone,

2023 has finally come to an end. I'll admit, I began writing this developer's log thinking I'd only have a couple of bullet points for the game's development and progress. However, it turns out this year has been a very productive one, and just because the game isn't done yet doesn't mean amazing progress wasn't made.

My resolution is to be more kind to myself as an independent developer, and understand that the project has absolutely no funding and that I am working on it entirely in my spare time. With that in mind, and looking just how much we got done this year, I think the project is doing pretty darn good!

This devlog is a lengthy summary broken into three parts: December's development progress, a summary of the entire year, and plans / announcements for 2024.

Buckle up, because this is a long one! If you'd like to just skip the devlog and 2023 summary and go ahead to the announcements and plans for 2024, [click here]().

# December Developer's Log

December was very productive, likely due to the holidays and the significant amount of time off that came with them (a bit of a backwards concept, I admit). Here are some of the quantifiable accomplishments for the month: 

### Finished all of the map layout changes for the new demo
After readjusting the story, some of the core elements of the demo from 2022 will still be in place in the new demo. The order of events has changed a bit though, and as such, so did some of the maps. I actually worked out this initial layout on a piece of scrap paper ahead of reconnecting all of the maps:

![1]({{ image_basepath | append: "1.png" | relative_url }})

The demo is thus playable from start to finish, with just some of the important bits missing. Some new maps were also added, and one was brought back from the dead, which some of you elder fans that have been here since the beginning of time may recognize: 

![2]({{ image_basepath | append: "2.png" | relative_url }})

### Integrated all dialogue for the new demo
Since the first draft of dialogue for the first act was done and the map layout in place, I was able to get all of the dialogue actually integrated into the game for the new demo. This is relatively close to final and will only need a few more passes of editing.

![3]({{ image_basepath | append: "3.png" | relative_url }})

A fun side-note; I do all of my initial dialogue writing in Google Sheets, using a pretty fancy setup that fills in the face graphics and text for me. That way I have a good idea of what everything looks like before I have to muck around in the editor. Pretty cool, (I think?!):

![4]({{ image_basepath | append: "4.gif" | relative_url }})

### Updated essence and shop menus
The shop menu hasn't been touched since 2020 (woah!), so it needed some attention. I reworked the layout and flow so it was a lot prettier and a lot less clunky to use. I also gave the essence menu a few updates, improving several UX issues reported in 2022's demo:

![5]({{ image_basepath | append: "5.gif" | relative_url }})

At the same time, I also made some much-needed backend improvements to windows and menus in general that should make adding, updating, and revising new menus in the future easier.

### Squashed even more bugs
Bug-hunting is a never-ending battle, but there were quite a few issues that were present in the game's 2022 demo that I was able to finally address. 

<br>

---

<br>

I should point out that these efforts in December were all related to my attempt to bring the demo back for Steam's February NextFest as previously discussed. However, after some thought, I decided that doing so would be cutting it too close, and wouldn't give me enough time to ensure the game is as polished as it can be. 

The new demo will absolutely launch in 2024, as discussed more below. But unfortunately it will not be during the Steam NextFest in a few weeks.

# 2023 in Summary
It's easy to get overwhelmed by the idea that "nothing was accomplished" when you spend an entire year on a game and don't have a releasable product to show for it. However, looking back, this was probably one of the best years for Legends of Astravia, as it felt like it lead to some much needed improvements to the game's development operations, brand, and roadmap.

### Fangsoft joined Studio Alemni and helped massively with development

[Fangsoft](https://fangsoft.itch.io/) has been an incredible help this year, and without her, I probably wouldn't have been able to get the game's development back on track. She helped me get the project reorganized and set more concrete goals that inevitably lead to all of the great progress we made this year.

### Completed several passes through the entire game, start to finish

Even though there haven't been a lot of visual updates, Legends of Astravia's first part is in a sense, playable from start to finish. We completed several passes through the game to integrate map layouts, item placement, environmental effects and sound. 

### Made numerous development tools to speed up the game's production

This was the year where I really honed my scripting abilities, employing what I've learned over the years to ensure I am working "smarter, not harder". 

I made a lot of cool stuff, honestly to the point of forgetting just how much I did:
- Made a generator that takes a list of filenames and generates placeholder image files for each of them
- Made a global transition system for all of the maps in the game, for both a smoother development and gameplay
- Made a system to initialize and assign special data--including color and lighting information--to maps, eliminating the need for manually eventing each one
- Created various in-game debugging tools, including a dedicated scene for testing and constructing battle sequences
- Changed how data is loaded into the game to permit custom attributes and lightning-fast game content editing
- Documented all of the game's custom functions and attributes
- Made a spreadsheet tool for fast templating and editing of dialogue exactly as it shows up in-game
- Made a "grid-system" for window layouts to make constructing new game menus easier
- Reorganized and cleaned up a good chunk of the game's code base

These things will continue to relieve some of the burden of being a solo dev, and will help get the entire game to the finish line.

### Updated the Studio Alemni website

The Studio Alemni website got a makeover, which I designed and implemented myself. I think it's easy to miss how big of an improvement this was, as the old website was slow and hard to navigate. This also cut the time it took for me to write my monthly devlogs in half, which freed up some more time for development.

### Finalized the game's story

Legends of Astravia's story has been the biggest crux with regards to development. It has been changed, modified, rewritten and reworked so much, which has ultimately resulted in so many revisions to the final playable game. 

With Fang's help, we finally locked it in this year, and for the first time in the several years of working on the project, I'm finally satisfied with the story is and where it is going. A lot of it required returning to my roots and remembering the "why".

I try to remain humble, but I think the story is one of Legends of Astravia's stronger points. I really hope everyone will enjoy what we've come up with.

### Made the game visuals feel less like "RPG Maker" and more like "Astravia"
While the initial venture into this was done in November 2022, a lot of the work was done this year. When the demo in 2022 launched, a big point of contention was it's "RPG Maker Default Graphics". 

I found myself often demotivated and unwilling to work on the project knowing that many people would be immediately turned off by the game's visuals. So switching to something that aligned the game with it's classic feel was a huge confidence boost, and really helped move things forward.

Additionally, I was able to secure more confidence in my art skills by replacing the character graphics with my own artwork. Legends of Astravia feels like it's own thing now, and I just think that's pretty cool.

# Plans for 2024

### Part 1 (of 2!)
While the work in 2023 ultimately didn't result in the release of the first part of the game, **I'm very pleased to announce that Legends of Astravia will be delivered in two parts instead of the originally announced three**. This means less waiting for the "complete" saga (complete in quotes here, because the first part will absolutely be a complete game!).

How this will work mechanically is yet to be decided (DLC vs two full game releases), but plans will become more concrete with the re-release of the demo in the summer.

### Demo return (Steam NextFest)
Speaking of which, the demo will indeed make its comeback this year during the summer NextFest. An official announcement will be made sometime in March, and beta testing will begin soon. If you're interested in helping test the game and iron out issues, you can join the [Discord server](https://discord.gg/astravia) to get involved!

### Get the game back on the map
Legends of Astravia was doing reasonably well from a marketing and interest standpoint at two points during its development: the first demo in 2018, and the second demo in 2022. It seems when people get to play the game, news about it travels. Go figure!

In the year and a half that I've been working on the game since it's demo in 2022, interest in the game has naturally waned a bit. I've also had significant difficulty maintaining a consistent marketing campaign on social media sites such as Twitter, Tumblr, etc.

Besides just the demo launch, I'd like to revive some of that interest through more consistent visual updates on social media, trailers, and content creator outreach. I hope that more people will become aware of the game, especially those who it is really catered towards.

### Part 1's release (Attempt #2!)
This one is tentative. Delaying the game's release over the years has been discouraging, but I also need to remain realistic with my schedule. I'd like to have a holiday launch, but otherwise, the plan for Legends of Astravia is to launch in Q1 of 2025.

<br>

---

<br>

I hope this developer's log renews confidence for those of you who have been patiently waiting for release news. It means so much to have so many people interested in the project and checking in, especially as a small developer who can only work on the project part-time. 

It's been a long time, but I do see the finish line on the horizon. Here's to a productive and successful 2024!

Thank you,

*-Jaiden*
