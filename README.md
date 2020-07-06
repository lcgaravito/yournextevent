# Your Next Event 🥳
"Your Next Event" it is a MERN Web application (MongoDB, Express, React, NodeJS) for event management.

<hr>

![Screenshot](https://raw.githubusercontent.com/lcgaravito/yournextevent/master/screenshot.png)

## Running the App

In this project, the root folders correspond to the Back end of the application, while the Front end is located in the "front" folder, making the server take advantage of ReactJS production-optimized files by serving them as ExpressJS static files.

Prerequisites For running the app:

First, you need to install Node.js, to see more information <a href="https://www.mongodb.com/download-center/community">Click here</a>.

Second, its necesary the instalation of yarn <a href="https://classic.yarnpkg.com/en/docs/install/#windows-stable">Click here</a> for information.

```
$ yarn add mongodb
$ mongod
```

The application is divided into two parts:

Backend: Main folder

```
$ yarn install
$ yarn start
```

Frontend: 

```
$ cd front
$ yarn install
$ yarn start
```

You also need to run a mongodb database. If you want a cloud database you have to add the environment variable ```MONGODB_URI=mongodb://link-to-database.../``` in the ```.env ``` file or in the heroku's settings.

<hr>

## Link to the deployed application

<a href="https://yournextevent.herokuapp.com/" target="_blank">Your Next Event</a>

<hr>

## Author
Luis Carlos Garavito Romero

<hr>

<h2>MIT Licence</h2>
<p>Copyright (c) 2020 Luis Carlos Garavito Romero</p>
<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
