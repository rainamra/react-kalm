# Kalm - Web Application Development and Security Final Project
A web application that could help you get better sleep quality.

Group Members:
- Rainamira Azzahra - 2301900391
- Rayhan Ali Darmawan - 2301891683


## Background

Getting enough sleep isn’t only about total hours of sleep. It’s also important to get good quality sleep on a regular schedule so you feel rested when you wake up. Unfortunately, many of us struggle with sleep deprivation or insomnia. This lead us to a reduction in sleep quality. As a result, it weakens the immune system and makes us more susceptible to illness and depression. Especially with such a pandemic, we must take care to to prevent getting contaminated.

## Problem

Sleep deprivation is primarily due to high levels of stress and anxiety during these uncertain times, but it can also be due to other factors. Changes in everyday routine are one of them as well as the atmosphere when going to sleep. People may have trouble sleeping due to changes in their routines, especially if they are working at home during the pandemic. Many people had inconsistent sleeping and waking up schedules even before the goverment suggested us to work and study from home. In order to get better sleep quality, it is necessary to stick to a regular routine. Uncomfortable room settings when you want to sleep also have an effect. The condition of the room is defined not only by cleanliness and the neatness, but also by all five senses. Take, for instance, sound.

## Solution

Lullabies and soft rhythms have been shown to assist newborns in falling asleep. Babies aren't the only ones, fortunately. People of all ages say that listening to calming music improves their sleep quality. It is also useful to reduce the time it takes to fall asleep. In a study of women with insomnia symptoms, participants listened to a self-selected album before going to bed. Usually they required 27 to 69 minutes to fall asleep but after adding music, it only took 6 to 13 minutes. Playing music before bed can help you fall asleep faster and sleep better by increasing sleep efficiency, which means you spend more time in bed asleep. Improved sleep efficiency translates to more consistent sleep and reduced nighttime awakenings.

Another step we might take to have better sleep is to create a night routine. A night routine is a sequence of activities that you do before bed in the same order every night to help your mind and body relax. Evening routines vary, but they typically involve relaxing activities such as taking a warm bath, reading, journaling, or meditation. When you repeat the same things in the same order every night, your brain learns to associate those activities with sleep. Late-night stress and anxiety stimulate your brain and sympathetic nervous system, so night routines are key in controlling them. You could keep your thoughts focused on encourage yourself to rest by maintaining a night routine.

## Feature

### `Personalized Night Routine`
You could create your own customized night routine based on your preferences and needs. Each night routine consists of five activities as well as the duration for each activities before bed.

### `Visual Timer`
We also provide a visual timer so you can see how far you've come or how much time you have left to complete a activity.

### `Calming Sounds`
At the end of the night routine, you can pick your desired calming sounds that we provided. There are various types from nature sounds to white noises. This could help you asleep faster.

## How to use
### `getyourkalm.com`

It's quite simple to use our app. No need to download or subscribe any thing. All you have to do is go to our website.

### `New User Registration`

![Screen Shot 2021-06-13 at 20 08 32](https://user-images.githubusercontent.com/56628802/122749067-19e1ab00-d2b7-11eb-95a0-a79d0a6204f9.png)

To start you will need to create an account first. Fill in the form provided. Enter your firstname, lastname, username, email, password, and password confirmation, then click `Sign Up`. After that, you will be directed immediately to the dashboard where you can see all the night routine. We also provided some template to try out. 


### `CREATE A NIGHT ROUTINE`

At this point, your dashboard probably quite empty. So let's start creating a new night routine. Click on a journal picture at the bottom of the page. It will led you to a new page where you can customize your own night routine. 

### `ENTER NIGHT ROUTINE DETAILS`

<img width="1680" alt="Screen Shot 2021-06-13 at 22 20 06" src="https://user-images.githubusercontent.com/56628802/122749111-2534d680-d2b7-11eb-8c6f-499151be56c7.png">

Fill in the title of the routine and description. You could name the routine based on the events or the situation you're in. For example, it's been a busy week for you so you might want to put encouraging words in the description. After that, you could pick an image as a cover that match the routine aesthetic. Click on the `plus` button and it will show the input field for the first activity. Enter what activity you want to do as well as the duration of that activity, then click the `check` icon. It will show another text field, repeat the steps again until the fifth routine. If you're done, click `submit` and the video selection will appear. Pick one video, then click `done`. Congratulations! You just make a night routine.

<img width="1680" alt="Screen Shot 2021-06-13 at 22 21 04" src="https://user-images.githubusercontent.com/56628802/122749412-80ff5f80-d2b7-11eb-8646-24ea6327ce5e.png">


### `EDIT NIGHT ROUTINE`

if you want to delete or change the night routine at any point. Once you click the routine on the dashboard, an `edit` option will appear. But remember you can't edit the title, description, and the cover. You can only edit the activities as well as the duration of each activity.

If you want to change the title, description, and the cover, might as well delete the night routine and create a new one.


### `START A NIGHT ROUTINE`

![Screen Shot 2021-06-13 at 20 19 36](https://user-images.githubusercontent.com/56628802/122749612-bf951a00-d2b7-11eb-92c7-7c4af78d59ec.png)

In order to start your routine, click the routine on the dashboard, `edit` and `start` options will appear. Choose the `start` button, it will led you to a routine page. Click on the the `ready` button, the web will render the first routine. Click `start`, then the timer will run. If something urgent you need to deal with, you can `pause` the timer and `resume` again after. Below the button you will see your next activity in the routine. When the time is up, the activity title and time will reset and put up next activity information. When the current activity is complete, a new page will appear, specifically the video page, in which you must start to rest your eyes and sleep.

![Screen Shot 2021-06-14 at 11 09 57](https://user-images.githubusercontent.com/56628802/122749620-c15edd80-d2b7-11eb-8d7c-118592c2add9.png)


### `EDIT PROFILE`

![Screen Shot 2021-06-13 at 20 16 57](https://user-images.githubusercontent.com/56628802/122749575-b3a95800-d2b7-11eb-86f0-b1936cc23b9d.png)

You could edit your profile, such as your profile picture, email, and password. Click on your username on the top right of the dashboard, then a dropdown will show. Go to `profile`, there you can see your profile details and edit form. If it's filled in, you can click `update`.


## Design Plan
### `System Architecture`
SOA Architecture

<img width="868" alt="Screen Shot 2021-06-12 at 15 29 53" src="https://user-images.githubusercontent.com/56628802/121770397-47ca3f80-cb93-11eb-9a29-cbb6817a6080.png">

### `Use Case Diagram`
![use-case-diagramFP](https://user-images.githubusercontent.com/56628802/121769163-421d2b80-cb8c-11eb-82ad-2a5140850e04.png)

### `Activity Diagram`
![Untitled Workspace (2)](https://user-images.githubusercontent.com/56628802/121797968-bb308780-cc4d-11eb-8a01-045ced9180ca.png)

### `Entity Relationship Diagram`
![Untitled Workspace (1)](https://user-images.githubusercontent.com/56628802/121770993-f02dd300-cb96-11eb-83c6-c29fdbd4b9ad.png)

### `Endpoint API`
<img width="554" alt="Screen Shot 2021-06-12 at 14 27 48" src="https://user-images.githubusercontent.com/56628802/121769210-827ca980-cb8c-11eb-9ae9-bb9d3401cae4.png">

## Poster
![kalmPoster (3)](https://user-images.githubusercontent.com/56628802/122061570-d69bbe00-ce18-11eb-8caf-adc58d079498.png)
