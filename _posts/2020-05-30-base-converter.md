---
layout: post
title:  "Converting Numbers between Bases"
summary: Tutorial and Project for Number Conversion
author: Kunal Dutta
date: '2020-05-30 5:30:00 -0700'
category: education
thumbnail: base-conv.png
---
In computer architecture classes, students often learn about **number representation**, or how to represent numbers in different methods.

One example in number representation is the use of different base systems. A base is essentially the number of "digits" that each place can represent (although
digits is not technically correct, as it implies 0-9, but I am using it for lack of better word). For example, a number with base-8 can have numbers 0-7,
and each place represents the base to the power, increasing leftward.

This is a confusing topic when first heard, and better explained with an example. When we take the decimal number 8145, we are just adding up powers of 10,
and multiplying it by the number in each place. So, 8145 = 10<sup>3</sup> * 8 + 10<sup>2</sup> * 1 + 10<sup>1</sup> * 4 + 10<sup>0</sup> * 5 = 8000 + 100 + 40 + 5.

This carries to other bases. When have 523 in base-8, this breaks down to 523 = 8<sup>2</sup> * 5 + 8<sup>1</sup> * 2 + 8<sup>0</sup> * 3 = 
320 + 40 + 2 = 362 in decimal.
So 362 is equal to 523 in base-8. So, that sums it up: a number when converted to a different base is the same value, but represented differently, akin
to translating a word between languages. The word does not change meaning, but it is represented differently.

Note: to differentiate between base systems, we indicate the base with a subscript, and assume decimal with no base indicated. So, 523 in base-8 is written as
523<sub>8</sub>.

For bases over 10, we cannot use numeric characters to represent numbers over 1-digit, as it would be confusing to represent. For example, 10 could be interpreted
as "10" or as "1" and "0" in different places. So, we use alphabetic characters: A=10, B=11,..., Z=35 (not case sensitive). Thus, we can represent numbers up 
to base 36 using alphanumeric characters. When using base-37, we'll have to use different symbols, but most people do not have to worry about that.

Let's walk through an example of converting a base-16 (hexadecimal) number to decimal. 
We can break down A27<sub>16</sub> into 16<sup>2</sup> * 10 (A=10) + 16<sup>1</sup> * 2 + 16<sup>0</sup> * 7 = 2560+32+7 = 2599<sub>10</sub>.

For converting numbers between bases, and a more in-depth explanation of base systems, please watch my video on the topic:

[![Converting Numbers Between Base Systems](http://img.youtube.com/vi/cDlAba6lvDA/0.jpg)](http://www.youtube.com/watch?v=cDlAba6lvDA "Converting Numbers Between Base Systems")

I also have developed a web application that converts numbers between bases 2-36. [Check it out!](http://base-conv.herokuapp.com/)

Thank you for reading my blog post and watching my video!
