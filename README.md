# Tech Blog

## This project has three parts

## 1. Introduction

## 2. Problem

## 3. Solution

# 1. Introduction.

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

This project is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

## Problem

To connect to JawsDB and run in seeds while deploying the app in Heroku.

## Solution

GIVEN a CMS-style blog site
WHEN visited the site for the first time
THEN presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN clicked on the homepage option
THEN taken to the homepage
WHEN clicked on any other links in the navigation
THEN prompted to either sign up or sign in
WHEN choose to sign up
THEN prompted to create a username and password
WHEN clicked on the sign-up button
THEN user credentials are saved and I am logged into the site
WHEN revisit the site at a later time and choose to sign in
THEN prompted to enter my username and password
WHEN signed in to the site
THEN navigation links for the homepage, the dashboard, and the option to log out
WHEN click on the homepage option in the navigation
THEN am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN click on an existing blog post
THEN presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN click on the dashboard option in the navigation
THEN taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN click on the button to add a new blog post
THEN prompted to enter both a title and contents for my blog post
WHEN click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN click on one of my existing posts in the dashboard
THEN able to delete or update my post and taken back to an updated dashboard
WHEN click on the logout option in the navigation
THEN signed out of the site
WHEN idle on the site for more than a set time
THEN able to view posts and comments but I am prompted to log in again before add, update, or delete posts

## Mock-Up
