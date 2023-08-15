---
layout: post
title: "Developer's Log - July 2023"
date: "2023-08-14"
tags: devlog featured
short_title: "Devlog - July 2023"
author: Jaiden
permalink: /news/developers-log-jul-2023
---
{% assign image_basepath = "/assets/news/2023/jul/" %}

Sorry for the delay -- the devlog for July is finally here! We managed to accomplish quite a lot in the past month.

Atmosphere - Sounds & Color
===
The last part of the placeholder pass through the entire game is to set the overall tone with sound effects, lighting, and color. We made good progress on this through July. 

Lighting & Fogs
---
Lights and colors play a big part, and even with a map that only has placeholder tiles, you can see a big difference between no lighting effects and lighting effects and fogs added:

![1]({{ image_basepath | append: "1.png" | relative_url }})

The goal is to do this for the entire game in one go. This has been my task for July, and while I'm not quite done yet, the game will start to have a sense of completeness once the lighting pass is complete.

![2]({{ image_basepath | append: "2.png" | relative_url }})

In some cases, the graphics still need to be made, which leads to some hilariously literal displays when testing:

![3]({{ image_basepath | append: "3.png" | relative_url }})

Sound Effects & Ambience
---
Thanks to Fang, all of the sound effects and ambient noise has proper placeholders. Those pleasant sound effects are an important factor in the excitement when finding a new treasure, and background sounds really set the tone for an area and scene.

Asset Production Begins 
===
Perhaps the most exciting yet time-consuming pass was started in July. We're finally making assets for the game! This means there will be a lot more to share visually over the coming months as the game really takes form.

Battle Backgrounds
---
I previously experimented with using a 3D background in the battle scene to try to create a perspective shift that wasn't too jarring of a separation from the main map scene. However, I wasn't really satisfied with my own attempts.

Fang decided to experiment with making them in a 3D editor, and the results were phenomenal. It really helps lock everything together, and is reminiscent of old PlayStation JRPGs:

![4]({{ image_basepath | append: "4.png" | relative_url }})

The process itself was very cool, and I think worth sharing: 

![5]({{ image_basepath | append: "5.png" | relative_url }})

![6]({{ image_basepath | append: "6.png" | relative_url }})

There are still some small adjustments to be made, but Fang managed to create a battleback for each area in the game. We can't wait to share more soon!

![7]({{ image_basepath | append: "7.png" | relative_url }})

Features & System
===
I continued to work on some backend features and the game system as well, slowly making QoL improvements that are important to the final game.

Transition Adjustments
---
Ensuring the map transition system worked correctly took a few tries, but I finally managed to get something that works well. Adjusting a map's effects between different areas will be seamless and easy to implement.

Save System Update
---
A big request even during the demo was the ability to have more than 4 save files. I finally got to making this adjustment last month, and the final game will have 50 slots available (possibly more with the release of Chapters 2 and 3 as well):

![8]({{ image_basepath | append: "8.gif" | relative_url }})

<br>

That's all for this month, I look forward to sharing what we've been working on in August next month. 

Thank you for your support and patience as we continue to work on the game.

*-Jaiden*