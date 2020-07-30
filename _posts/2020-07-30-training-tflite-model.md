---
layout: post
title:  "Training a TensorFlow Lite Model"
summary: I built a TFLite model to use in a mobile app.
author: Kunal Dutta
date: '2020-07-30 4:00:00 -0700'
category: projects
thumbnail: project3.png
---
I have been working on creating a mobile application that can track a basketball shot, and count a shot as a make or miss.

After hours of researching about machine learning and object detection models, watching many tutorial videos, and reading documentation, I found that 
Android applications are capable of real-time object detection by using a TensorFlow Lite (TFLite) model, with two classes: balls and hoops.

The [documentation](https://github.com/tensorflow/models/) is confusing, but I found a great series of tutorials by The AI Guy, which allowed me
to use the [YOLOv4](https://www.analyticssteps.com/blogs/introduction-yolov4) neural network to 
[create YOLO weights with Darknet](https://github.com/alexeyab/darknet) and 
then [convert those weights into a TFLite model](https://github.com/theAIGuysCode/tensorflow-yolov4-tflite).

I used [LabelImg](https://github.com/tzutalin/labelImg) to create bounding boxes around my training and testing data, which automatically generated YOLO annotations for each image I boxed.

I used the Google Colab notebooks to train my model and convert the YOLOv4 weights into the TFLite model, because of its ease of use and free GPU.

As shown in the thumbnail, I was able to have some success in hoop detection. However, my model did not detect the ball.

For now, I have added the model into my work on shot tracking (check it out on [GitHub](https://github.com/kdutta9/ShotTracker)). I hope that the model works
and that an Android app can run it properly.

Overall, I learned many things working on the project so far, especially as someone with minimal exposure to machine learning/artificial intelligence.
I learned what TensorFlow is, how to use Google Colab, how to apply basic machine learning concepts (such as creating training and testing sets, using 
evaluation metrics) to computer vision applications, and about cloud computing.

In the future, I want to be able to use Amazon Web Services or Google Cloud Platform to train a model, so it can be done remotely.

For the rest of the project, I need to implement the logic inside the app with Java and Android Studio, so it will test my coding skills after a break for 
in favor of a greater machine learning focus. Hopefully I can do it well and quickly!