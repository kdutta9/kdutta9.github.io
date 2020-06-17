---
layout: post
title:  "AI Security Camera Project"
summary: A smart security camera I built with a Raspberry Pi.
author: Kunal Dutta
date: '2020-06-16 10:30:00 -0700'
category: projects
thumbnail: security-cam.jpg
---
My first major project of Summer 2020 was to build a smart security camera! I built this with Python, a Raspberry Pi Zero W, and a camera module.

Broadly, this camera generates a security feed on localhost and saves images of humans detected in memory.

The first step of the project was to generate a live feed of camera, similar to what [MotionEyeOS](https://github.com/ccrisan/motioneyeos) provides.
I completed this using the PiVideoStream package to grab frames from the camera, and then looping together frames to create a live stream.
Next, I added this live stream to a locally hosted web server using Flask, by displaying these frames on an HTML file, using 
[Miguel Greenberg's template](https://blog.miguelgrinberg.com/post/video-streaming-with-flask). By adding a camera class like Mr. Greenberg suggested, 
I was able to start and stop recording at the desire of my code, as opposed to creating an infinite loop that I would need to stop manually.
Surprisingly, the video quality and frame rate was solid.

Now, I needed to set up object detection. I used OpenCV to set up detection using Haar Cascades, with their provided 
[human detection models](https://github.com/opencv/opencv/tree/master/data/haarcascades). To implement this within my code, I added detection within
my aforementioned camera class. I learned the basics of object detection by reading some of 
[Adrian Rosebrock's blogs](https://www.pyimagesearch.com/2017/10/16/raspberry-pi-deep-learning-object-detection-with-opencv/).
Thankfully, OpenCV was pretty simple to use with a given model, so I essentially "plugged it in," and then I wrote a method that would find the
coordinates of detection and draw a box around the detection.

With that all done, I thought my project was ready to use, but during testing, I found my frame rate was extremely low, due to the heavy lifting in my code, which
combined frame grabbing and object detection. I calculated frame rate using [imutils](https://github.com/jrosebr1/imutils/), and found my frame rate
was around 1 fps.

I implemented multithreading to speed up my project, so I separated the frame capture method into two: one for frame display and the other for object detection.
Then, I simply enabled multithreading in my main function on the two methods. My frame rate had improved to ~ 15 fps, which I was happy with.

Now, I have a fast security live stream capable of human object detection!

<img src="https://i.imgur.com/XbX89o3.jpg" alt="Screenshot" height="350px" width="420px"> 

For more details on code, usage, and requirements, check out my [Github repository](https://github.com/kdutta9/AI-SecurityCam).

The next steps for this project are to introduce security alerts and a smart on/off switch and I will use 
[Adrian Rosebrock's guide](https://www.pyimagesearch.com/2019/03/25/building-a-raspberry-pi-security-camera-with-opencv/) as a reference.

Thanks for reading!