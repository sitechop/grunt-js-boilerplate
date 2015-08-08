#Grunt Boilerplate
Here's the files I start with on nearly every front-end project. This gruntfile will simplify a lot of tasks and make life a lot easier.

##Included Tasks
- Node Sass (for speed)
- Imagemin
- Copy
- Concat
- Uglify
- Server
- Watch
-- Live Reload

##Task Commands

### Grunt
The default grunt command will build a production version of your website. all files will be placed in the /build folder.

```
grunt
```

### Grunt Live
This task will start the grunt server and watch all your files for changes. You can access the server at [localhost:3000](http://localhost:3000). This will run different tasks depending on what file type changes.

Javascripts are only concatinated since Uglify can be very slow. 

`grunt live`

## Installation
Start by cloning the repo. Next you'll want to open the `package.json` file and edit the details with your own. Afterwards run the following command to install everything.

`npm install`

### Adding Javascripts
Since the order of javascripts can make your site break, additional script files are added in the `gruntfile.js`. Simple add them to the arrays in both the `concat` and `uglify` blocks.

```
uglify: {
  build: {
    src: ['js/scripts.js'],
    dest: 'build/js/scripts.js'
  }
},

concat: {
  options: {
    separator: ';',
  },
  dist: {
    src: ['js/scripts.js'],
    dest: 'build/js/scripts.js',
  },
},
```