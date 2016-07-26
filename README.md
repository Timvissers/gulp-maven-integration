# gulp-maven-integration

Call maven targets from Gulp

## How to use

var mavenTask = require('gulp-maven-integration');

mavenTask('name for the maven configuration', 'maven goals to execute', 'current working dir', ['dependencies']);

eg. mavenTask('Clean Install MyProject', 'clean install');
