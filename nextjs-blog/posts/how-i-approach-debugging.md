---
title: "How I Approach Debugging"
date: "2020-11-20"
tag: "Debugging"
---

Let's look at everyone's favorite part about being a software engineer! /s

#### ✨Debugging✨

From my years of experience programming, **Debugging** and **Troubleshooting** your own code can be a nightmare. I have spent hours looking for my bugs just having it end up being a misspelled string or one-liner. The silliest mistakes and bugs are the most frustating to deal with.

Someone once said to me, "There are two types of bugs, easy ones, hard ones, and ones off by one."

##### Tips and tricks to try and streamline the process.

Just from experience dealing with a ton of bugs and also help from the online developer community, I collected a list of things I do when facing a problem in my code.

1. One of the first things to realize is that we as programmers are basically scientist, we develop a hypothesis to why our code is not working and test that hypothesis. This can be anywhere from incorrect variable values, forgetting to add variables, parameters, etc..But you essentially want to keep repeating hypothesis and test, until you are out of ideas.

- You can pin-point differences within the code.
  ex. differences between production and locally running an application.

2. Another thing I look for is understanding the bug. To do this you can try reproducing the problem. You basically want to purposely break your code so you can understand where the error is actually coming from.

3. This one is obvious but, use print statements. Don't throw them out everywhere, but trace your program and see where to place print statements, where you can print variables to see if they produce the expected values.

- another thing you can do is print stack traces to trace your program (this is usually achievable with built-in functions based on the program or application you are debugging)

4. print statements can be time-consuming and messy. One way to help yourself is using a debugger. Basically all IDE's have debuggers. You can use debuggers effectively by setting up break points, and understanding the different functions of a typical debugger.

I won't go into to much detail about how to use a debugger, I can just list some vocabulary you can look up to help you understand debugging.

- call stacks
- stack trace
- break points
- stepping over -> move to the next line of code
- step into -> step in to the current method or function
- step out -> step out of the current scope, back to where the function was called

##### random things I've done that's helped in the past:

1. clearing the cache is super important, its basically like resetting your database, server, front-end.. etc

- this can be helpful for problems with your server, api, back-end, etc...

2. Restarting your IDE/Text Editor (vsCode, Xcode)

I will continue to add more as I develop myself as a software engineer.

I hope this helps!
