const assert = require('assert');

describe('EuroStart homepage', () => {
    
    it('I launch EuroStart app', () => {
        browser.url('https://snap.eurostar.com/uk-en/');
        const title = browser.getTitle();
        console.log(title)
        assert.equal(title, 'Eurostar Snap');
    });

    // it('I verify the title text page', () => {
    //     const title_text = $('#app > div > div.sc-jhAzac.djkpgm > div > div > div > div > h1');
    //     console.log(title_text.getText());
    //     title_text.waitForDisplayed(60000);
    //     expect(title_text.getText()).to.be.equal('Get exclusive discounts on trains Eurostar wants to fill\n* If you don\'t mind us choosing the train');
    // });

    it('And I select the google button to login', () => {
        var buttons = $('#login');
        console.log(buttons.getText());
        console.log(buttons.$$('li')[2]);

        // if (buttons.getText()== 'Sing in with Google'){
        //     buttons.click()
        //     console.log('cliked')
        // }

        // const classNameAndText = $('#login > button:nth-child(3)');
        // console.log(classNameAndText.getText());
        // classNameAndText.click();
        // Buttons = browser.findElementsByClassName("sc-kGXeez lduAMl")
        // Buttons[0].click()

        // button.forEach((google_account_login) => {
        //     if(button.getText()== 'Sign in with Google');
        //        button.click();
         });
    
});