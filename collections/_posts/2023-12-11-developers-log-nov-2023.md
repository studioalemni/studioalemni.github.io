---
layout: post
title: "Developer's Log - November 2023"
date: "2023-12-10"
tags: devlog featured
short_title: "Devlog - November 2023"
author: Jaiden
permalink: /news/developers-log-sep-oct-2023
---
{% assign image_basepath = "/assets/news/2023/nov/" %}

Hello everyone,

This is a shorter developers log, but I am happy to report this has been a productive month. A lot of work is still being done "under the hood", and as such there's not quite as much to show.

Backend, Backend, Backend
---
One of the biggest bottlenecks in development at this point is data editing and testing. Legends of Astravia uses a lot of custom scripts and data, and as such, this requires closing the game, making edits to code, reopening the game, in an endless cycle during content development.

I finally bit the bullet and decided to change how the game handles and loads custom data, and it's likely quadrupled my efficiency. Now instead of needing to constantly close and reopen the game when making edits, I have a couple files I can edit right at runtime.

![1]({{ image_basepath | append: "1.png" | relative_url }})

Additionally, testing battle sequences was a horrifying process. It admittedly lead to me delaying on making cool new battle animations numerous times. Finally, after months of thinking about how I would execute it, I was able to create a proper tool for testing animations. Now I can quickly create and test animations and get through developing new content even faster.

![2]({{ image_basepath | append: "2.gif" | relative_url }})

Along with this, I made some much needed improvements to the battle animation code that squashed a lot of the weird glitches and bugs that existed in the last demo.

Writing
---
Fang and I have continued with the game's writing, and are now at the dialogue drafting phase. This is really exciting as the story is starting to unfold into something tangible and game-like.

Here's a very serious, 100% accurate preview of what the live story document looks like:

![3]({{ image_basepath | append: "3.png" | relative_url }})

Jokes aside, meaningful exchanges between characters is an important part of Legends of Astravia, and we hope you'll enjoy what we have planned! 

Revisiting Battle UI/UX
---
I think an unintended benefit of getting away from certain parts of the game for too long is you lose that "developer's bias". Jumping back into the battle system, I quickly noticed a lot of the issues folks experienced during the last demo.

I'm making some small adjustments that I hope will make the system more approachable. For example, I noticed that it's not particularly clear when your teammates have already chosen an action--it feels like the game is glitching. Adding the action indicator bubbles just like the monsters have was a trivial change that actually helped a lot: 

![4]({{ image_basepath | append: "4.png" | relative_url }})

---

<br>

That's all for this devlog. I will be working very hard the next month so that I can hopefully come back with an exciting announcement at the start of next year.

Thanks you for your support, and see you in 2024!

-Jaiden