let homepage=function()
{
    let firstNumber_input=element(by.model("first"));
    let secondNumber_input=element(by.model("second"));
    let gobutton=element(by.css("button[id='gobutton']"));

    this.getUrl=function(url)
    {
        browser.get(url);
    }
    this.enterFirstNumber=function(firstNo)
    {
        firstNumber_input.sendKeys(firstNo);
    }

    this.enterSecondNumber=function(secondNo)
    {
        secondNumber_input.sendKeys(secondNo);
    }
    this.clickGo=function()
    {
        gobutton.click();
    }
    this.verifyResult=function(result)
    {
        let output=element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);
    }
};
module.exports=new homepage();