let homepage = require('../pages/homepage')
describe("demo calculator tests", function () {
    it("Addition test", function () {
        // browser.get("http://juliemr.github.io/protractor-demo/");
        homepage.getUrl("http://juliemr.github.io/protractor-demo/");
        //element(by.model("first")).sendKeys('2');
        homepage.enterFirstNumber('5');


        //element(by.model("second")).sendKeys('3');
        homepage.enterSecondNumber('3');

        //element(by.css("button[id='gobutton']")).click();
        homepage.clickGo();


        // let result=element(by.cssContainingText('.ng-binding','5'));
        // expect(result.getText()).toEqual('5');

        homepage.verifyResult('8');

        //protractor snippets
        //bg+tab it gives  browser.get('');
        browser.sleep(5000);
    })
    it("Subtraction test", function () {
        // browser.get("http://juliemr.github.io/protractor-demo/");
        homepage.getUrl("http://juliemr.github.io/protractor-demo/");
        //element(by.model("first")).sendKeys('2');
        homepage.enterFirstNumber('5');


        //element(by.model("second")).sendKeys('3');
        homepage.enterSecondNumber('3');

        //element(by.css("button[id='gobutton']")).click();
        homepage.clickGo1();


        // let result=element(by.cssContainingText('.ng-binding','5'));
        // expect(result.getText()).toEqual('5');

        homepage.verifyResult('8');

        //protractor snippets
        //bg+tab it gives  browser.get('');
        browser.sleep(5000);
    })
})