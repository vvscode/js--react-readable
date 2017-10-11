
# Readable
This project was created as a part of [Udacity React NanoDegree](https://www.udacity.com/course/react-nanodegree--nd019). Project requirements can be found in documents [here](https://github.com/vvscode/js--react-readable/tree/master/doc) and  [Rubrics](https://github.com/vvscode/js--react-readable/issues/1)

## Project structure

```
.
├── README.md <-- this file
├── api-server <-- directory for backend part of application
│   ├── README.md
│   ├── categories.js
│   ├── comments.js
│   ├── config.js
│   ├── package-lock.json
│   ├── package.json <-- backend dependencies
│   ├── posts.js
│   └── server.js <-- entire poin for API
├── doc <-- specification and description
│   ├── PROJECT\ SPECIFICATION.pdf
│   └── Project\ Overview.pdf
├── package-lock.json
├── package.json <-- frontend dependencies
├── public <-- public files
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src <-- source files
│   ├── App.css <-- common application styles
│   ├── App.js <-- main file, contains routes description
│   ├── App.test.js
│   ├── actions <-- redux actions
│   │   ├── categories.js
│   │   ├── comments.js
│   │   ├── posts.js
│   │   └── sortOrder.js
│   ├── components <-- components, presenting parts of app
│   │   ├── CommentForm.js
│   │   ├── CommentsList.js
│   │   ├── Header.js
│   │   ├── PostForm.js
│   │   ├── PostListItem.css
│   │   ├── PostListItem.js
│   │   ├── PostsList.js
│   │   ├── SortControls.css
│   │   └── SortControls.js
│   ├── config <-- store descripton
│   │   └── store.js
│   ├── index.css
│   ├── index.js
│   ├── reducers <-- redux reducers
│   │   ├── activePost.js
│   │   ├── activePostComments.js
│   │   ├── categories.js
│   │   ├── comments.js
│   │   ├── index.js
│   │   ├── posts.js
│   │   └── sortOrder.js
│   ├── registerServiceWorker.js
│   ├── screens <-- components which present routes/pages
│   │   ├── CategoryScreen.js
│   │   ├── HomeScreen.js
│   │   ├── PostAddScreen.js
│   │   ├── PostEditScreen.js
│   │   ├── PostScreen.css
│   │   └── PostScreen.js
│   └── utils <-- utils and api-interface
│       ├── api.js
│       └── sortBy.js
└── yarn.lock

```

### Installation
Run next commands
```
# clone repo
cd ~/some-directory
git clone git@github.com:vvscode/js--react-readable.git
cd js--react-readable
npm install
npm start
```
Project configured to work with local api. To run api-server run commands
```
cd ~/some-directory
cd js--react-readable
cd api-server
npm install
node server.js
```

### Application view

![Application view](http://g.recordit.co/IzBoX8vtcF.gif)
