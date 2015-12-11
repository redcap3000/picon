Package.describe({
  name: 'redcap3000:picon',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/redcap3000/picon',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript','templating','redcap3000:run-cli@0.0.1']);
  api.addFiles('piconServer.js','server');
  api.addFiles(['templates.html','picon.js'],'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('redcap3000:picon');
  api.addFiles('picon-tests.js');
});
