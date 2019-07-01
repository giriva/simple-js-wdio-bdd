const assert = require('assert');

describe('Nationwide homepage', () => {
    
    it('should display the correct homepage title', () => {
        browser.url('https://www.nationwide.co.uk');
        const title = browser.getTitle();
        console.log(title)
        assert.equal(title, 'Nationwide Building Society | building society, nationwide');
    });

    it('I should click mortgate', () => {
        const link = $('#MortgagesNavItem');
        link.click();
        //should be changed to moveTo

    });

    it('I should select Morgagte rates', () => {
        const mortgage_rates = $('#Ourmortgagerates');
        mortgage_rates.click();
    });

    it('I select No button', () => {
        const id = $('id=selectorItemHaveNationwideMortgage1');
        console.log(id.getText());
        id.click();
    });

    it('I should detect when element is visible', () => {
        const elem = $('#selectorItemNationwideMortgageTypeNo2');
        console.log(elem.getText());
        elem.waitForDisplayed(10000);
    });

    it('I select changing lender button', () => {
        const changing_lender = $('#selectorItemNationwideMortgageTypeNo2');
        console.log(changing_lender.getText());
        changing_lender.click();
    });

    it('I input property value', () => {
        const input = $('id=SearchPropertyValue');
        input.setValue('300000')
    });

    it('I input Morgage Amount', () => {
        const input = $('id=SearchMortgageAmount');
        input.setValue('150000')
    });

    it('I input Term value', () => {
        const input = $('id=SearchMortgageTerm');
        input.setValue('30')
    });

    it('I press find a mortgage rate button', () => {
        const myButton = $('id=myButton');
        myButton.click();
    });

    it('I select Fixed rate', () => {
        const myButton = $('#fixed');
        console.log(myButton.getText());
        myButton.click();
    });

    it('I select Deal period', () => {
        const myButton = $('id=deal-input-five');
        myButton.click();
    });

    it('I select Product fee', () => {
        const myButton = $('id=product-fee-input-fee');
        myButton.click();
    });

    it('I select More info and apply link', () => {
        const elem = $('#NewMortgageRateTables > div > div > table > tbody > tr:nth-child(1) > th.showHideCell.doNotPrint > a');
        elem.click();
    });

    it('I press apply button', () => {
        const elem = $('#prod139990 > section:nth-child(3) > div > div.applyButton.doNotPrint > a');
        elem.click();
    });

    it('I expect to see Start your mortgage application text', () => {
        const actual_text = $('#content_2_contentheader_0_grid_8ff0009651f74eb49d9f4400ee2bfbf1_0_ColumnContainer > section.contentSection.smallMargin > h1');
        console.log(actual_text.getText());
        // const actual_text = elem.getText();
        console.log(actual_text)
        assert.equal(actual_text, 'Start your Remortgage application');
    });

});