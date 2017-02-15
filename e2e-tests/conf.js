exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare: function() {
	browser.manage().window().setSize(1600, 1000);
  },
  //specs: ['custom_protractor.js']
  specs: ['sampleFormE2ETest.js']
};