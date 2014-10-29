Package.describe({
  name: 'electricjesus:superslides',
  summary: 'SuperSlides repackaged for Meteor 0.9.2+',
  version: '0.9.2',
  git: 'https://github.com/electricjesus/meteor-superslides.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use('jquery');
  api.addFiles([
  		'lib/superslides/dist/jquery.superslides.js',
  		'lib/superslides/dist/stylesheets/superslides.css',
  	],	'client');
  api.addFiles('electricjesus:superslides.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('electricjesus:superslides');
  api.addFiles('electricjesus:superslides-tests.js');
});
