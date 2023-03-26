---
layout: post
title: "Developer's Log - February 2023"
date: "2023-03-03"
tags: devlog featured
short_title: "Devlog - February 2023"
---
{% assign image_basepath = "/assets/news/2023/feb/" %}

February was a very productive month, and development on the game is going well. Similar to January, the focus is laying down the foundation and organizing, while simultaneously working on the game's content. 

# No Longer "Solo"
The first key detail I'd like to mention is that the project is officially no longer a "solo" project. Granted I've always had help from various collaborators and freelancers, I have not had anyone actually assisting me with development. But that's no longer the case, because [Fangsoft](https://www.twitter.com/fangsoft_) has joined the team to help me get Legends of Astravia's first chapter to the finish line!

![1]({{ image_basepath | append: "1.png" | relative_url }})

She first helped with the project by composing the soundtrack for Ch1 in early 2022. And now, a year later, she's officially a member of the team.

I cannot understate how big of a help Fangsoft has been so far, and it's only been a few weeks. She's helping tackle the overwhelming number of tasks, including production, writing, and planning. I was very wary going into the year, thinking that it just wouldn't be possible to finish the game in a timely manner by myself, but thanks to her, I have renewed confidence in the project and its release.

She's also Astravia's resident Screenshot Expert™, and responsible for all of the great pictures of the game you'll see in this and upcoming devlogs, as well as social media promotions. 

![2]({{ image_basepath | append: "2.png" | relative_url }})

## New Tactics
With Fangsoft's help, we've taken a different approach to the game's development. Previously, I would go one area at a time, creating full and complete maps with all of the little details. While this made for great promotional material, it also lead to "tunnel vision".

But thanks to this new method, all of the groundwork and infrastructure has been laid down, and Oliver is already able to reach the credits! A rough version of every map from start to finish is created. 

![3]({{ image_basepath | append: "3.png" | relative_url }})

In this ant-sized preview, nearly the whole game is mapped out. Many of these are still empty shells without any interesting details, but it's the perfect starting place for creating a real game. It's also really motivating!

The immediate areas after the demo also received some touching up. Mordin Village is structurally finished, and just needs some NPCs to be brought to life:


![4]({{ image_basepath | append: "4.png" | relative_url }})
![5]({{ image_basepath | append: "5.png" | relative_url }})
![6]({{ image_basepath | append: "6.png" | relative_url }})


## New Tools
With this new approach, I needed to create a lot more placeholders, and ended up making some special tools to speed up the process.

Automation tools are incredibly important in game development. If there is a task you find yourself manually repeating over and over, there is a good chance you can write a script or macro to make it go a lot faster.

![7]({{ image_basepath | append: "7.png" | relative_url }})

In this case, we needed placeholder graphics for every object in the game. Characters, enemies, items, doors, etc. But I wasn't about to create hundreds and hundreds of graphics by opening an image editor, saving the file and naming it, or even copying each file repeatedly and renaming it. This would have taken days.

Thus, I created "Astravia Tools"-- a separate RPG Maker project written in the same old Ruby, that can handle this particular task, and any future ones.

![8]({{ image_basepath | append: "8.gif" | relative_url }})

For now, there is only one function in the tool. But it packs a punch: I feed it a Comma-Separated Values (CSV) sheet with every single filename I want generated, its dimensions and a color, and it spits out an image file for each one. 

This allowed me to take my spreadsheet asset list and turn it into workable files--within minutes instead of days. 

![9]({{ image_basepath | append: "9.png" | relative_url }})

I'm honestly a little excited to see what other development tasks I can streamline by making tools like this!

# Other Notable Progress
Overall, this month felt super productive. Here are a few more things that didn't really warrant their own section:
- Created lots of additional documentation, including a spreadsheet that shows how every map in the game connects.
- Completely planned the structure of the game's other major dungeons. The final dungeon is more than 3x the size of the one in the demo!
- Cleaned up some code and fixed a few really sneaky bugs

I'm looking forward to sharing more updates at the end of March as the game continues to take form. Thank you for your continued support!

-Jaiden