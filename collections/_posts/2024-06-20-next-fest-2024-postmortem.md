---
layout: post
title: "Steam Next Fest: An Exercise in Tempering Expectations"
date: "2024-06-20"
tags: devlog article
short_title: "Next Fest 2024 Postmortem"
author: Jaiden
permalink: /news/next-fest-2024-postmortem
image_basepath: "/images/news/2024/jun/"
---

:warning: **WARNING:** This is extremely long and wordy, and a little bit raw. I'm sharing this article to be transparent and to provide other developers (and I guess players, if they're interested) a direct look into my process and thoughts during the demo launch and Steam Next Fest.

This article is not advice and I highly suggest you take everything I say with a grain of salt and do your own research if you are planning to launch a game demo for Steam Next Fest.

Intro
===
As creatives, we're all bound to feel some bias towards what we're making. When you spend a really long time with your project, and stay within a bubble of validation, you can sometimes end up thinking what you're making is nothing short of the best thing ever. Maybe you think it will be your ticket to your dream career, or your big break, or a commercial success, or loved by a bunch of people, or your chance at [anything].

I actually don't think this is something to be ashamed of or feel guilty for. If you don't love your work, then why are you making it? However, this bias can eventually lead to having unrealistic expectations, egotistical feelings, or bitterness towards other people's work. These things aren't great. But still, guilt and shame is not productive, and I think it's also a somewhat natural path based on the difficult system that we are creating in.

Our love for our work can lead us to become blind to reality. It turns out, the thing you're making is likely not the best thing ever, and it is very unlikely to be a commercial success. We have to constantly check in with ourselves: if in the end your work does not meet any of your goals or expectations, do you still want to make it? This answer is different for everyone, and can vastly change based on the circumstances in which the work is being created. 

I've had a long time with my project and a lot of really supportive people encouraging me, and so this bias has been challenging to navigate. I went into Steam Next Fest with a specific goal that I set based on this bias, and got a little taste of the reality that many other developers will face--my game just wasn't that big of a deal, and I didn't receive the response I was expecting.

So my hope is that this article serves as solace to other developers who have experienced these things, and makes it a little easier for them to set expectations and find the balance between loving your work and remaining realistic.

With all that out of the way... let's get into my process preparing Legends of Astravia's demo for Next Fest as a solo developer with limited experience and high expectations. 

What is Steam Next Fest?
===

Twice a year, Steam runs a festival that serves to celebrate upcoming games by showcasing demos on the front page. It's been running since about 2021(?), and has been known as a great opportunity to get your game seen, receive player feedback on your demo, and gain a nice boost in wishlists. 

![Next Fest Logo]({{ site.content_url }}{{ page.image_basepath }}20_1.jpg)

The caveat to all those perks is that you cannot register your game into Steam Next Fest more than once. With only one shot, it's generally recommended that you only put out your best, and also time it close to your game's release. 

I had been thinking about Next Fest ever since I released the first ~~(actually second but let's not worry about that)~~ demo for Legends of Astravia back in 2022. But with all of the stuff above in mind, I wasn't satisfied with where the game was at and worried about how far away the actual finish line was. I was afraid that by going in too soon, I wouldn't utilize the event to its fullest, or the game would stagnate over time while I continued to take a long time to develop.

![Prior NF Enrollments]({{ site.content_url }}{{ page.image_basepath }}20_2.png)

However, with some good progress and prospects in 2023, including graphics improvements, cleaning up the story outline, and part 1's completion slated for 2025, I felt it was finally time to enroll in Next Fest. Additionally, I was worried about going too long without giving players *something* to play, even if it was ultimately another demo. I aimed for February 2024, which would have been the 2 year anniversary of the 2022 demo.

Preparation & Plans
===

I started my push to wrap up and polish the portion of the game that would serve as the demo in November 2023. Since I would be reusing and just touching up some areas, such as the first dungeon, I figured February was a fair deadline. 

My biggest focus was improving the battle system user experience, as that was the most common issue with the demo in 2022. I wanted to maintain the unique premise, but still ensure it was approachable and usable.

Working with the feedback I had, it still took a lot of time to get it right. I also ran into a few other problems and issues, and desperately needed to make some improvements to my tools to help speed up the actual development process. Ultimately, February's Next Fest would not be achievable (or the product I'd enter would not be very polished at all), so I pushed to June, giving myself room to finish up the demo, do proper testing, and prepare a marketing strategy.

And this was definitely needed. By the end of February I wrapped up the demo, finished up some promotional art, threw together a trailer, and sent the initial test to some close friends / colleagues. While I could have launched it then, I would find that the battle system still needed work and there was a ton of QA work to be done over the next couple of months. Having multiple languages available during Next Fest is also important, so I added Japanese translation to the mix. It was achievable, since I felt I had a good grasp on the process from my attempts back in 2022 (which I discuss in detail [in this old devlog](https://studioalemni.itch.io/legends-of-astravia/devlog/389999/developers-log-may-2022)). 

![Demo Launch Plans]({{ site.content_url }}{{ page.image_basepath }}20_3.png)

I underestimated how important it is to allocate a couple of months just for testing and marketing, so I was feeling much better with moving to June. I made some final improvements to the game based on tester feedback, and pre-scheduled a bunch of posts on Twitter and a couple other social media platforms. I made as many promotional assets as I could ahead of time, including artwork, gifs, screenshots etc. I also pre-wrote most of my announcements, as well as a couple of posts for Reddit. 

![Scheduled Posts]({{ site.content_url }}{{ page.image_basepath }}20_4.png)

Of course, life happens. I was hit with some rather severe personal life issues that affected my mental health significantly and put me out of commission for most of March and April, and that are still persisting a little even now. On top of that, I found out about a work project that would be taking up most of my time in May right up until Next Fest, so I had a truly rocky road ahead of me.

Pushing to the fall edition was an option, but I felt it wasn't a good one. I already did so much work and planning, and had already began my marketing push. I also started to get concerned that later editions would be even more saturated with games, or Steam might give me the boot for opting in and canceling so much. And in a way, I also just felt like I needed to move forward, as the act of delaying in itself was beginning to weigh on me. I didn't want to move the goal post yet again.

So I decided to stick to my strategy and trek on. The demo launch was set for May 30th in time for the Next Fest Press Preview, and everything else for the festival itself.

Projection & Hopes
===

Back in 2022, Next Fest was a great opportunity, as the number of games enrolled was rather small (~600). Of course, over the years as the event has gotten more popular, so have the number of games. I expected it to be difficult to be seen, and thus had what I believed to be a reasonable estimate for how many wishlists I'd receive.

Important context: wishlists are a measure of how many people have essentially "saved" your game in their Steam library for purchase later on or upon its release. More = Good. And when your game is over a certain amount (I believe 7k, though I don't doubt this will change), Steam will recommend your game more and sometimes list it as "popular upcoming". My release goal is as close to 10k as possible, which I believe would be sufficient enough to at least get a return on the money I've spent so far on assets, marketing, commissions, etc. To put into perspective the modesty of this, Sea of Stars had over 650,000 wishlists upon its release last August: 

![SoS Followers]({{ site.content_url }}{{ page.image_basepath }}20_5.png)

(P.S. you can roughly guess a game's wishlist by multiplying follower count by 10. Not perfect, but good for estimating and comparing.)

Some games in past Next Fest editions doubled their wishlists (+100%), including one game that was pretty similar (retro pixel art JRPG). But I knew this would be pretty unlikely in 2024. Reading up on some articles, it seemed 30% was a reasonable expectation to have. So I estimated a 30-50% increase in wishlists, and since I had developed a marketing strategy to try and get folks talking about the game ahead of the Fest, I figured I might have a good chance of hitting the higher end of that estimate. Also, most of the feedback I had received by this point had been positive.

All of my marketing leading up to the festival brought my final balance to about 4700 on June 9th, which was pretty good! I was feeling optimistic; 50% would put me over the 7k needed for the game to get a visibility boost on Steam, and even just 30% would get me pretty close.

![Meme]({{ site.content_url }}{{ page.image_basepath }}20_6.jpeg)

Reality & Numbers
===

It wasn't until I previewed the event sale page that I noticed there were **~1800** games in the festival. Holy sh\*t. That was 3x more than two years ago. At this point, it'd definitely be too late to back out since I already released the demo and announced my participation in Next Fest. And I felt it'd possibly be worse in the fall anyway. Like, there can only be _more_ games, right? And a 30% wishlist bump is still a pretty fair estimate... *right??* (wrong).

The week before Next Fest started, I had reached out to a handful of press and content creators. I also had applied to some of the (many, so many) summer showcases back in April. I struck out on pretty much all of it. But seeing as this was a demo, and the game's release was still far enough away, this wasn't too much of an issue to me. Better those resources go to games that are actually releasing--and boy are there a lot of them right now!

I made a couple of posts on Reddit, one on r/JRPG which was pretty well received. Overall, all of my scheduled posts, articles, etc. seemed to have paid off and I had some momentum going, which was what some articles I read suggested you do. I was feeling cautiously optimistic, but perhaps not cautious enough.

June 10th rolled around and I chewed on my fingernails all day waiting to see what the wishlist bump would look like. The results? Not so great (relative to my expectations). Hopes and dreams status? Crushed (kinda).

Day 1 saw 290 wishlists, which was only a little bit better than the r/GoldenSun post I made just two days prior. Ack! And I knew they would just decrease each day.

![WL Week Graph]({{ site.content_url }}{{ page.image_basepath }}20_7.png)

<br>

I received almost the same amount of wishlists during Next Fest as when I released the demo in 2022 and posted on r/JRPG. I was honestly a bit disappointed by this, but given I didn't really temper my expectations, that's on me.

![WL All Time Graph]({{ site.content_url }}{{ page.image_basepath }}20_8.png)

<br>

That said, the overall increase was certainly the best the game has seen, though some of this could probably be attributed to my really pushing the game on social media the week leading up to and during Next Fest. I almost wonder if Next Fest would have gained me even less wishlists if I didn't have that push.

![WL Total]({{ site.content_url }}{{ page.image_basepath }}20_9.PNG)

<br>

In the end, I received a 20% bump. Knowing I was up against 1799 other games, I still think that's pretty great. But relative to the time the game has been in development, the effort I put in, and the game's existing wishlists, I believe it could have gone better. This was worse than the low end of my prediction, and also lower compared to other similar games. 

![NF Summary]({{ site.content_url }}{{ page.image_basepath }}20_10.png)

<br>

I could sit here and try to come up with a dozen reasons as to why the game didn't perform as well as I hoped, but without doing tons of research and/or having some kind of clairvoyance, I don't think I could come up with any sort of concrete answer. Maybe it was because I re-launched my demo a second time, maybe because there were 1800 games, maybe because the Summer Game Fest and many other showcases burned folks out ahead of the fest, maybe because Steam didn't push it as hard as previous years, or maybe... the game just wasn't that interesting!

Classic / retro JRPGs are a tough genre to begin with, and naturally I think people will make comparisons to well-funded giants like Chained Echoes and Sea of Stars. The game still uses a lot of stock assets, and the trailer I hastily threw together despite having no experience likely didn't produce that much excitement. Watching streamers look through the Next Fest feed, I have only *seconds* of their attention, if that, to sell them on my description, trailer, and screenshots alone. 

![NF Summary]({{ site.content_url }}{{ page.image_basepath }}20_11.gif)

<br>

Top performing games in Next Fest this year had catchy hooks (literally, see Dungeon Clawler), beautiful trailers, unique premises, and just genuinely looked fun as heck to play. With no budget, and a relatively "vanilla" concept and marketing, I really can't sit here and whine about why more people didn't want to download or wishlist my game. 

For better or for worse, Next Fest was a proper reality check for the state of games, how my own sits among them, and how I should manage my expectations for the future.

Positive Takeaways
===

All of that brooding aside, Next Fest was also a great experience, and I still think it was worthwhile despite the numbers not being as big as I hoped. 

First of all, I have 900 more wishlists that I did not have before. That's the most I've ever gotten. It also means 900 people thought "yeah, this looks cool, I'll check it out". That's really, really cool.

Over 400 people played the demo. And 50+ of them provided feedback through the feedback form or a video of some kind. I learned so much about what works and doesn't work about the game, strengths that I can play to, and areas where I can make improvements. And also, a lot of folks had nice things to say--which means a lot!

It also served as a good soft launch. I treated it like I would treat a game release, and I learned a lot as a result. Making a game is like running a marathon, and knowing how to manage your stamina is really important--especially if you're solo. And I discovered that I didn't do a great job with that here. I also gained a lot of insight into things I didn't have an understanding of before, like connecting with content creators, reaching out to press, running broadcasts on Steam, managing social media, and more. 

And speaking of content creators, for the first time in a while I was able to sit back and actually just hang out in streams, appreciating the immense work it takes to both stream and foster a community. I learned so much about Twitch and was also able to reconnect with a bunch of awesome people that I hadn't seen in a couple of years. I even gained the confidence to start streaming on my own again.

Ultimately, it was a net positive. I am genuinely quite burnt out, but I think that was a given due to how much work I did and also how many other things affected me leading up to and during the Fest. I have a new perspective and new ideas on how I'll handle the game's development and launch next year thanks to everything I learned. After resting, of course.

What I'd Do Differently
===

I think this section should be the most useful to you if happen to also be a game developer. By the way, if you're still reading by this point then I must praise your incredible stamina, o' valiant reader.

Here are things I'd do differently, if given the opportunity:

- **Don't set a goal/prediction for wishlists** 

This one is probably obvious. Harder to be disappointed if you don't get too excited about numbers. Recognize that you did the best that you can, and anything you gain from the fest is still something you wouldn't have gained if you didn't participate.

- **Distribute social media posts more evenly** 

I think I did a pretty good job on the marketing ahead of the demo launch, but then completely ran out of steam (pun intended) once the Fest started. I would have rather ensured I had posts scheduled up and through the Fest, so I wouldn't have to worry about it so much. I managed to get a couple thrown together last minute, but I wasn't entirely happy with them and just being on social media all the time really cooked my brain.

- **Prepare a better trailer**

I don't think the game's current trailer is bad. I'm actually pretty proud of it, since it was my first time in DaVinci Resolve and the second time I've ever created a video that wasn't just a recording. But in comparison to the beautiful trailers created by professionals, I could see how it was really lacking compared to the games that performed better. If you're going to invest any sort of time or budget into something, a trailer is a good thing to do it with.

- **Don't do the broadcasts live, or prepare to do them longer if I do**

Quite frankly, the stress I experienced from doing a live broadcast in front of several hundred people did not feel worth the extra few wishlists and demo downloads that it produced. While I love the idea of connecting directly with my audience and potential customers, I am extremely socially anxious, and just outright bad at answering questions on the fly. 

Also, when I streamed on Saturday, I had a total of 800 viewers right before my "slot" ended, and it dropped down to 300--still 10x more than my daily average from running pre-recorded videos (VODs) using Restream. I eventually got too tired to carry on, and the viewers dropped down to 15 when I switched to back to the VOD. So I think a VOD of me playing would have probably been both way less stress, and would have held on to those extra viewers much longer (and maybe boosted my discoverability).

Speaking of which, I recommend Robostreamer over Restream as it is much more affordable and way more user friendly. Robostreamer lets you run a stream until the end of time, but Restream only let me loop a video 10x, and I often would forget to re-schedule additional streams and got really tired maintaining it. It is excellent for streaming to Twitch + Steam simultaneously, though. 

- **Shorten the demo and take a better vertical slice**

I quite like the demo length, and I think it does a good job showing a piece of the story. But in the context of a Next Fest with 1800 other demos, it was too slow. A lot of folks really just want to get into the meat of things, and starting with a dream sequence intro where you walk slower-than-usual, read a bunch of text, and stumble through the village actually works a bit worse than the demo in 2022 did (minus the annoyingly long dialogue exchange in that one). 

I think it would have been better to just toss the player right into some action instead. It also would have been helpful to show more puzzle and battle mechanics. I will need to make a demo like this for any sort of in-person event, anyway, and I may decide to make that one the primary demo on Steam depending on how that goes.

- **Take it less seriously**

And lastly: I wish I just worried about it less overall. I treated this as a "make or break" situation--I believed that how well the game did in Next Fest would predict its chances of success come release. By treating it as a launch, I put a lot of resources into it, and I think this made the less-than-I-hoped-for reception cause me more grief. I quickly burnt myself out on social media, always worried about how folks were responding and how it was doing. Super lame. Just let it do it's thing. 

Also, it's worth pointing out that this whole ordeal all cost me a bit of money as well. Between a sponsorship with a content creator, tools such as Restream and social media scheduling, a couple Tumblr blaze campaigns, and panic purchasing Undertale because I thought my developer Steam account was restricted, I spent about $300. I think putting money towards marketing is just as important (if not moreso) than other areas of game development, but I don't think I needed to spend so much on just a demo release.

All of these play into the learning experience though, and so I don't feel too much regret. At this point, I'm just happy to share my experience for others to utilize.

The Future
===

Of course, now that the demo is back up and Next Fest is over, I have a bigger more important goal: completing part 1 by the end of this year, and releasing in Q1 2025. And I am genuinely looking forward into getting back into actual game development instead of game...peddling.

With all of this new knowledge and experience directly imprinted into my brain, it has allowed me to really think about my long-term goals and expectations with the game. Weirdly enough, I feel like I need to lower them. Which I don't think is necessarily a bad thing.

I love this project, and what I do. But I need to do some significant "re-centering" after both Next Fest and the personal issues that affected me earlier this year. The finish line feels both close and far away, and I also want to make sure that I'm meeting player expectations while also reducing the pressure and stress I place on myself.

I have a couple of ideas in mind. And I think instead of going down the path of "more and better" as I've done over the years, I'm ready to settle down and work with what I have, because it is quite honestly good enough. I won't escape the RPG maker game vibes, and so I just need to lean into the things I'm good at. And maaaybe do a little less punching above my weight. 

Legends of Astravia probably isn't going to be the next big smash hit indie JRPG that gets me all of the money I need to quit my job and make games full time. It'll probably just barely make enough to recoup my own costs-**-and that's okay.** Every now and again I just need a little reminder that I started this project in 2017 not because I want to start some big business enterprise, but because I enjoy making it, and I am very fortunate to be able to have people encouraging me and supporting me as I do so. 

I hope to meet everyone's expectations, especially those of you who have believed in the project since I started it. Thank you for reading this, and being a part of my journey. And if you're an indie developer as well, I hope you found this article helpful in some way.


*-Jaiden*
