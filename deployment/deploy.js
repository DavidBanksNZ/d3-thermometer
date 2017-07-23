var ghpages = require('gh-pages');

ghpages.publish('./', {
	src: ['demo.html', 'thermometer.min.js']
});