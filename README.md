# Swag Search - [Social Media Anaylser](https://stark-hollows-71225.herokuapp.com/)
A Vue js application created with Node.js and various api. Orginally implemented in React.

## Table of Contents
* [General Info](#general-information)
* [Technologies](#technologies)
* [Setup](#setup)
* [Illustration](#illustration)
* [Future Improvement](#future-improvement)

## General Information
As we know, social media is a interesting place where a lot of informations are flowing around and where
trends can be observed. The purpose of this application is for user to be able to visually see where the trends 
base on a picture of their desired.

## Technologies
#### Program and Framework used:
* Vue 3.5
* npm 6.9
* Node.js 8.12
#### Api used:
* Twitter Developer Key - Main source of data
* Google Map Key - Maps and geolocation translation
* Clarifai Key - Image processing

## Setup
Make sure both client side and server side application is running

### Server Side
To get this application running locally using npm on:
```
cd server
npm install
node server.js
```

### Client Side
To get development version running on local machine:
```
cd client
npm install
npm run serve
```

## Illustration
![](https://media.giphy.com/media/3krsGsgn39FmrJ08zv/giphy.gif)

## Future Improvement
* Add a non relation database to improve searching speed
* Allow users to build their custom image processing model
* Improve UI design
