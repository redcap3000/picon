Package.describe({
  name: 'redcap3000:picon',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Gnarly Node.js web based icon editor for the utilizing Raspberry Pi Sense HAT LED in real time.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/redcap3000/picon',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['redcap3000:run-cli@0.0.2'],'server');
  api.use(['spacebars','templating'],'client');
  api.export('Sensehat',['client','server']);
  api.export('RgbColors',['client','server']);
  api.addFiles('piconServer.js','server');
  api.addFiles('templates.html','client');
  api.addFiles('picon.js','client');
  api.addFiles('piconShared.js',['client','server'])

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('redcap3000:picon');
  api.addFiles('picon-tests.js');
});
