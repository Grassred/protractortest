let SpecReporter = require('jasmine-spec-reporter').SpecReporter

exports.config = {

    framework: 'jasmine2',
  onPrepare: function () {
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: false
    },
    summary: {
      displayDuration: true
}
  }))},
    directConnect: true,
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      // browserName: 'chrome'
      browserName: 'firefox',
      firefoxOptions: {
        args: ['--headless']
      }
      
    },
  
    // Tests (spec files) to be run
    specs: ['./test/test_spec.js'],
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        print: function () {},
      showColors: true // Use colors in the command line report.
    
    },
    framework: 'jasmine2',
onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'xmloutput'
    }));
}
  }