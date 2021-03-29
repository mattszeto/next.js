---
title: "Using a NAS to Run Scripts"
date: "2021-01-05"
tag: "Python"
---

It's finally a new year and **2020 is behind us**. To have a great start to the new year I wanted to be more involved with scripting and web scraping to automate a ton of my daily tasks.

I initially wanted buy a raspberry pi 4 and create a local web server to host my scripts on but my dad had a NAS from synology laying around that he said I could use. So instead of going through the hassle of figuring out how to configure a web server (although i do at some point want to learn) I decided to go the NAS route. I am currently using the Synology DiskStation DS220+. There are also other ways to run scripts and programs through your Window's PC using Windows Task Scheduler, but that requires you to have your PC on, something I was not interested in.

There are many use cases for a NAS like (ditching a cloud service and..) storing files on it, easy file sharing, or creating your own VPN. For me in particular, I want to use it to run my python scripts 24/7. To be completely honest, I recommend using a Raspberry Pi if you are only looking to run scripts, but if you would like a cheaper alternative to the cloud, then invest in a NAS (it will save you money in the long run). I enjoy photography and videography so it gives me a place to store my edits and raw files without worrying.

#### Setting up NAS:

1. Its really simple, get the IP address, register an account, and boom, on the browser you have a mini OS. Fairly similar to a Raspberry Pi.

2. The way to run scripts automatically is to use Synology's built in task scheduler.

3. Upload python files and make sure you have python installed into synology

4. create a shell command script to run the python file daily or hourly

It's honestly that simple. I'm trying to find ways to expand my knowledge to how and why this works so that I can eventually engineer my own raspberry pi to do the same.

Definitely enjoyed learning about NAS and excited to automate my life with python.

Connect with me on Linkedin and hit me with any questions!
