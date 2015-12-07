Package.describe({
  name: 'faysal:easypayway',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'EasyPayWay easy Integration',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/faysal515/easypayway.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('http');
  api.addFiles('epwGateway.js');
  //api.export('EpwConfig', 'server');
});
