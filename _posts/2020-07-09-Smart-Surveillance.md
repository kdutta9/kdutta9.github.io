---
layout: post
title:  "Motion Detection Surveillance Cam"
summary: An IoT smart security camera I built with a Raspberry Pi.
author: Kunal Dutta
date: '2020-07-07 5:45:00 -0700'
category: projects
thumbnail: project2.png
---
As said in my [previous post](https://kdutta9.github.io/projects/2020/06/16/AI-Security-Cam/), I wanted to create an adaptation 
of [Adrian Rosebrock's security alert system](https://www.pyimagesearch.com/2019/03/25/building-a-raspberry-pi-security-camera-with-opencv/).

Again, I wanted to create the surveillance system on my Raspberry Pi Zero W and a functional camera, which allowed me to use WiFi but still keep
a relatively low cost.

I used the Twilio API to send messages, based on the previous guide, and stored video files using AWS S3, which allowed Twilio to text me video
files directly. This project was actually my first time working with an API and cloud storage, so I reached some milestones I have been meaning to meet
for a while. Of course, using cloud storage and APIs are essential for many software engineering projects!

The tricky part was implementing motion detection. Using many guides, including Adrian Rosebrock's as mentioned above, I was able to use OpenCV
to "detect" motion when the camera read a frame that deviated from the calculated average frame, based on the grayscale of each frame. I liked this method,
particularly because it introduced a more mathematical approach to computer vision, making it feel less magical and more engineering-focused.

When the system detected a deviation past a given threshold, it started writing a video file to disk and drew a bounding box around the detection using OpenCV 
methods. When the frame returned to near average based on the given threshold, the video file ended and it sent the file to the cloud, which was sent to my
texts using Twilio.

I saved the video files on a mounted shared network folder, which allowed my network to see any captures. This was helpful, as Twilio API has not been configured
for group chats, so this workaround allowed the network to save and view files in a secure way. 

My main challenges were implementing the logic for when to start/stop recording and mounting the network folder. Overall, the project featured more than just
writing code, so the end-to-end functionality across multiple devices (network, Raspberry Pi, phone) was a fun challenge and a deeper dive into product engineering,
which is what I would like to do as a future career.

If you would like to see the code and how to set up the project yourself, 
check out my [GitHub Repository](https://github.com/kdutta9/Smart-Surveillance).
