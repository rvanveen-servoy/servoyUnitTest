"use strict";
describe('calculate test', function() {
  it('should do a calculation', function() {
	var EC = protractor.ExpectedConditions;
    browser.get('http://localhost/svyUnitTest/solutions/svyUnitTest/index.html');
	
    //wait for field_one
	browser.wait(function(){
		return element(by.xpath("//*[@data-svy-name='sampleForm.field_one']")).isPresent();
	}, 5000).then(function(){
		var fld1 = element(by.xpath("//*[@data-svy-name='sampleForm.field_one']"));
		fld1.clear();
		fld1.sendKeys(5);	
	});

	 //wait for field_two
	browser.wait(function(){
		return element(by.xpath("//*[@data-svy-name='sampleForm.field_two']")).isPresent();
	}, 15000).then(function(){
		var fld2 = element(by.xpath("//*[@data-svy-name='sampleForm.field_two']"));	
		fld2.clear();
		fld2.sendKeys(5);	
	});
	
	 //wait for btn calculate
	var promise = browser.wait(function(){
		return element(by.xpath("//*[@data-svy-name='sampleForm.calculate']/button")).isPresent();
	}, 15000).then(function(){
		var elem = element(by.xpath("//*[@data-svy-name='sampleForm.calculate']/button"));	
		browser.wait(EC.elementToBeClickable(elem), 5000).then(function(){
			return elem.click();
		});
	});
	
	browser.waitForAngular();

	 //wait for label result
	 promise.then(function(){
		browser.wait(function(){
			return element(by.xpath("//*[@data-svy-name='sampleForm.result']")).isPresent();
		}, 15000).then(function(){
			//browser.pause();
			expect(element(by.xpath("//*[@data-svy-name='sampleForm.result']")).getText()).toBe('10')
		});
	 });
  
    // element(by.xpath("//*[@data-svy-name='selenium_test.result']")).getText().then(function(results){
        // resut = results;
        // compareResults();
    // });
    //browser.pause();
  });

});

