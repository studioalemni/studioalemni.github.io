---
layout: post
title: "Developer's Log - March 2023"
date: "2023-04-12"
tags: devlog
short_title: "Devlog - March 2023"
author: Jaiden
permalink: /news/developers-log-mar-2023
---
{% assign image_basepath = "/assets/news/2023/mar/" %}

This month's developer's log comes a bit late, so I apologize for the delay. It includes an important announcement regarding the demo, and a progress report on the game. This month continued to be productive thanks to Fangsoft's help, though a lot of the work we did was "behind-the-scenes".

Let's take a look!

![1]({{ image_basepath | append: "1.gif" | relative_url }})

Temporarily Discontinuing the Demo
===
Can you believe it's been over one year since the demo for Legends of Astravia released? 

At that time, it was a great soft launch experience for the game, and it helped me garner a lot of valuable feedback.

However, because it's been such a long time, and because the graphics were changed back in November, I think it's time to discontinue the demo until the game is ready to release. 

![2]({{ image_basepath | append: "2.jpg" | relative_url }})

The current demo is far too dated, and I think it's simply not an accurate reflection of the final product. I also need to update the screenshots on Steam and other platforms to reflect the new graphics, which I cannot do if the demo with the old graphics is available on them.

**As such, the demo will be temporarily discontinued on April 30th, 2023 until the game's release.**

We hope to relaunch the demo for Steam's NextFest in the fall, ahead of Chapter 1's release. This finalized demo will feature the opening area with the new 16-bit graphics, as well as gameplay improvements based on player feedback.

Of course, the old version of the demo won't go away forever. I will probably put it back up on Itch.io for archival purposes some time after the game has been released. 


Development Progress
===
Development on the game is moving steadily along, with achievements in character and quest pre-production, as well as general production. The game continues to take form as, well, a game!

NPCs & Side-Quests
---
Thanks to Fangsoft, almost all of the designs for NPCs in the major areas of the game are complete, as well as some drafts for side-quests.

She's been doing an excellent job creating characters with personal lives that really flesh out the world and its culture. While we don't have anything visual to show for it just yet, I think it will be very exciting to share once it's ready!

Second Pass
---
We've taken another broad "pass" through the game, adding more and more important elements. I completely designed and set up the lock-and-key mechanisms for the remaining major dungeons, as well as added placeholders for the various story events in the game.

![3]({{ image_basepath | append: "3.png" | relative_url }})
*Poor Oliver has landed himself in prison. Did he evade his taxes again?!*

I thought it also might be fun to share some screenshots of what things look like in the development environment:

![4]({{ image_basepath | append: "4.png" | relative_url }})

It's not terribly complicated or interesting... but maybe I'm just saying that because I look at it all the time!

This map in particular is pretty cool: it contains a bunch of "Events" (that is, the objects in the game that do stuff) that can be cloned across other maps: 

![5]({{ image_basepath | append: "5.png" | relative_url }})

So instead of editing every single individual mushroom in Mordin Swamp, this map allows us to edit just one, and affect all the others in the game. Pretty neat!

And lastly, some of the earier, more complete areas of the game are continuing to get updates to fit the 16-bit graphics. The mysterious lady from the intro now has a pretty new sprite:

![6]({{ image_basepath | append: "6.png" | relative_url }})

Bugfixes
---
Development is not without mistakes and mishaps. The process has lead to a lot of new bugs to crop up...

![7]({{ image_basepath | append: "7.gif" | relative_url }})


Arlyn's moonwalking, unfortunately, did need to be addressed. I also fixed a couple of other things that have a pretty heavy impact on how the game "feels", such as smoother interaction with objects.

![8]({{ image_basepath | append: "8.jpg" | relative_url }})

I'm pleased to report this item will not crash the game in the final product.

Website Updated
===
While this technically isn't game progress, I did want to report that the Studio Alemni website got a spiffy re-work. Since I built it myself, naturally it took a little time out of development progress for the month.

I think it was a very worthwhile improvement, though. It is much faster, and feels a lot more professional. 

If you find any broken links as a result, feel free to report them via the [contact form]({{ "/contact" | relative_url }}).

<br>

That's all for now, see you next month! 

*-Jaiden*