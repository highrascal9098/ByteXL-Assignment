import { expect } from "expect-webdriverio";

class landingPage{

        get AppsButton() {return $("/html/body/header/div/div/a[2]")}
        get Heading() {return $("//p[contains(text(),'Carefully crafted apps, published by ByteXL Students.')]")}   
        get LogoButton(){ return $("/html/body/header/div/a/img")}
    

    async OpenLandingPage(){

        
        await browser.url('https://bytexl.live/');
        await console.log('navigated to landing page');
        await this.Heading.isDisplayed()
        
    }
    async ClickOnAppsButton(){
        await this.AppsButton.click();
        await browser.pause(2000);
        var currentURL = await browser.getUrl()
        console.log('the current URL is ', currentURL)
        await expect(this.currentURL) === 'https://bytexl.live/apps';
        
    }

    async ClickOnLogoButton(){
        await this.LogoButton.click();
        
        
    }


}



export default new landingPage();