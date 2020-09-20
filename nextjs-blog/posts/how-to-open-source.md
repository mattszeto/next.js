---
title: "Open Source - How to Contribute to Open Source"
date: "2020-09-19"
---

There are many ways to contribute to Open Source projects. The most popular being GitHub.

Some of the requirements needed to start your first Open Source contribution:

- Have a github account
- be interested in a certain open-source project within Github (there are infinite possibilities)

**Steps:**

1. The first step is to find an Open source project to contribute to. There are so many to choose from so just search Github. I recommend finding something that you have used before or are interested in learning.

2. Once you have chosen the open-source project you want to contribute to, there are a few things that you have to check before you start. In big projects there are almost always documents (README.md) that you can read to understand how to setup the project and learn more about it.

   Within the Github repo, there is usually a CODE_OF_CONDUCT or CONTRIBUTION guides. Another thing that great open-source projects have is a chat room (slack, discord, etc...)

3. Some things you should be aware of, **issues** tab and **pull request** tab. Both of these are essential for making contributions.

   Inside the **issues** tab you want to look for the tags that have something like "good first issue" where its usually an easy contribution. It's a way to become more familiar with the cadence of contributing to the project.

   (a good first contribution is an update to the tech docs, grammer, or anything needed)

4. A helpful tip for when you find issues you can search within the github repo for the file containing the specific code or sentence you want to change.

5. Once you figure out what you want to change and where, you want to fork the repository. Once you fork, you want to clone the repo.

6. You need to make a new branch to keep your changes separate from others (then later merge it to the master). Name the branch something related to your contribution, the more discriptive the better.

7. to check the changes you have made you can type 'git diff'. this will display the differences you have made.

8. Next you need to make a **pull request**, before that happens you must pull from the master branch because (since we forked the repo) we have to sync up with the latest updates in the master branch.

   Then we 'git pull' to pull from master. After that is done we switch back to our branch.

9. Next we have to submit the changes, do 'git add .', commit with 'git commit -m "message"' and push with 'git push'

10. Return to Github, you have have a notification to make a pull request.

    Merge changes to original repo with a messsage describing what you have changed.

11. Now you wait for someone to comment or review it !

**All set** and hopefully this was enough for you to get started to start your **open-source** journey!
