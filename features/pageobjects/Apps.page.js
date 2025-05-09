import { expect } from "expect-webdriverio";

class AppsPage{
//Selectors
     get recentButton() {return $("//button[contains(text(), 'Recent')]")}
     get topFilter() {return $("//button[contains(text(), 'Top')]")}
     get searchBar(){return $("//input[contains(@class, 'flex') and contains(@class, 'h-9') and contains(@class, 'w-full')]")}



//Steps
    async clickonRecent(){
        await this.recentButton.click();
        console.log('top filter visibile')
        const Class2 = await this.recentButton.getAttribute('class');
        console.log('recent filters recent class is',Class2);
            expect(Class2 === 'px-3 py-1.5 text-sm transition-colors text-primary bg-primary/10 rounded-full');
            
        
    
    }

    async checkFilterisSelected(){
        await this.topFilter.waitForDisplayed();
        console.log('top filter visibile')
        const Class = await this.topFilter.getAttribute('class');
        console.log(Class);
            expect(Class === 'px-3 py-1.5 text-sm transition-colors text-primary bg-primary/10 rounded-full');

    }

    async countCards(){
        await browser.pause(1000);
        const elements = await $$('div.rounded-lg.bg-card.text-card-foreground.shadow-sm.flex.flex-col.overflow-hidden.border-2.border-gray-500.hover\\:shadow-lg.transition-all.duration-300.ease-out.h-full');

    // Return the number of elements found
    console.log(elements.length);
    return elements.length;
    }

    async countCardswhenRecentisApplied(){
        await browser.pause(1000);
        const elementswhenFilterisSelected = await $$('div.rounded-lg.bg-card.text-card-foreground.shadow-sm.flex.flex-col.overflow-hidden.border-2.border-gray-500.hover\\:shadow-lg.transition-all.duration-300.ease-out.h-full');

    // Return the number of elements found
    console.log(elementswhenFilterisSelected.length);
    return elementswhenFilterisSelected.length;
    }

    async verifytheyareSameCount(){
        const initialCount = await this.countCards();
        const filteredCount = await this.countCardswhenRecentisApplied();

        if(initialCount.length === filteredCount.length){
            console.log('Both filters are working')
        }

        else{
            console.log('Something is Fishy')
        }
    }

    async clickonSearchBar(){

        await browser.pause(1000);
        await this.searchBar.click()
    }

    async EnterValue(string){
        await this.searchBar.setValue(string)
        browser.pause(10000)

    }

    async verifythereisAtleastOnecard(){
        const newElements = await $$('div.rounded-lg.bg-card.text-card-foreground.shadow-sm.flex.flex-col.overflow-hidden.border-2.border-gray-500.hover\\:shadow-lg.transition-all.duration-300.ease-out.h-full');
            console.log('No of elemets', newElements.length )
        if (newElements.length === 1){
            console.log('Filter applied successfully')
        }
        else ('something is fishy')
    }

    async verifythereisZeroCard(){

        
        const newElementsplus = await $$('div.rounded-lg.bg-card.text-card-foreground.shadow-sm.flex.flex-col.overflow-hidden.border-2.border-gray-500.hover\\:shadow-lg.transition-all.duration-300.ease-out.h-full');
            console.log('No of elemets', newElementsplus.length )
        if (newElementsplus.length === 0){
            console.log('Filter applied successfully')
        }
        else ('something is fishy')
    }
    }






export default new AppsPage();