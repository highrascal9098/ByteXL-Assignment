import {Given, When, Then, And } from '@cucumber/cucumber';
import landingPage from '../pageobjects/common.page'; 
import AppsPage from '../pageobjects/Apps.page';




Given ('Im on the landing page', async () =>{
    await landingPage.OpenLandingPage();
    

})

Then ('I click on apps from top navigation bar and navigate to apps page', async() =>{

    await landingPage.ClickOnAppsButton();
})

Then ('I click on Logo', async() =>{

    await landingPage.ClickOnLogoButton();
})

Then ('I should click Recent filter', async() =>{

    await AppsPage.clickonRecent();
})

Then ('I should see that top filter is selected by default', async() =>{

    await AppsPage.checkFilterisSelected();
})

Then ('I should count the number of cards showing in apps page', async() =>{

    await AppsPage.countCards();
})

Then ('I should count the number of cards showing in apps page when recent filter is applied', async() =>{

    await AppsPage.countCardswhenRecentisApplied();
})

Then ('I Verify the count of cards are same for both filters', async() =>{

    await AppsPage.verifytheyareSameCount();
})

Then ('I click on search bar', async() =>{

    await AppsPage.clickonSearchBar();
})

Then ('I enter the text {string}', async(string) =>{

    await AppsPage.EnterValue(string);
})

Then ('Verify that there is atleast one cards', async() =>{

    await AppsPage.verifythereisAtleastOnecard();
})

Then (' I enter the text {string}', async(string) =>{

    await AppsPage.EnterValue();
})

Then ('I verify that there are no matching cards', async() =>{

    await AppsPage.verifythereisZeroCard();
})

Then ('I select {"string"} filter from left menu', async(string) =>{

    await AppsPage.();
})
