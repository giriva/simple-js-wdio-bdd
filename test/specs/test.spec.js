const assert = require('assert');

describe('Nationwide homepage', () => {
    
    it('I launch nbs applicaion with url', () => {
        browser.url('https://www.nationwide.co.uk');
        const title = browser.getTitle();
        console.log(title)
        assert.equal(title, 'Nationwide Building Society | building society, nationwide');
    });

    it('I click on mortgate', () => {
        const link = $('#MortgagesNavItem > a > span');
        link.click();
        console.log(link.getText());

        // const first = $('=Mortgage rates');
        // console.log(first.getText());
        // first.waitForDisplayed(5000);
        // first.click();
    });

    it('I select Morgagte rates', () => {
        const morgage_outer_elem = $('#pageBody > div > nav > div > ul > li:nth-child(2)');
        morgage_outer_elem.click();

        const no_button_1 = $('id=selectorItemHaveNationwideMortgage1');
        no_button_1.waitForExist(50000);

        const no_button_2 = $('#HaveNationwideMortgage > div.selector > div > div:nth-child(2)');
        no_button_2.waitForExist(50000);

        const no_button_3 = $('#selectorItemHaveNationwideMortgage1');
        no_button_3.waitForExist(50000);
    });

    it('I select No button', () => {
        const mortgage_rate_button_4 = $('#selectorItemHaveNationwideMortgage1');
        mortgage_rate_button_4.waitForDisplayed(50000);
        const id = $('id=selectorItemHaveNationwideMortgage1');
        console.log(id.getText());
        id.waitForDisplayed(5000);
        id.click();
    });

    it('I select changing lender button', () => {
        const changing_lender = $('#selectorItemNationwideMortgageTypeNo2');
        changing_lender.waitForExist(10000);
        console.log(changing_lender.getText());
        changing_lender.click();
    });

    it('I Input property value', () => {
        const input = $('id=SearchPropertyValue');
        input.setValue('300000');
    });

    it('I Input Morgage Amount', () => {
        const input = $('id=SearchMortgageAmount');
        input.setValue('150000');
    });

    it('I Input Term value', () => {
        const input = $('id=SearchMortgageTerm');
        input.setValue('30');
    });

    it('I press find a mortgage rate button', () => {
        const myButton = $('id=myButton');
        myButton.click();
    });

    it('I select Fixed rate', () => {
        const paragraph = $('#fixed > label');
        paragraph.waitForDisplayed(5000);
        // console.log(paragraph.getText());
        // paragraph.click();
        browser.execute(function() {
            document.getElementById("fixed").click();
        });
    });

    it('I select Deal period', () => {
        const paragraph = $('#deal-five > label');
        paragraph.waitForDisplayed(5000);
        console.log(paragraph.getText());
        browser.execute(function() {
            document.getElementById("deal-five").click();
        });
    });

    it('I select Product fee', () => {
        const paragraph = $('#product-fee-fee > label');
        paragraph.waitForDisplayed(5000);
        console.log(paragraph.getText());
        browser.execute(function() {
            document.getElementById("product-fee-fee").click();
        });
    });

    it('I select More info and apply link', () => {
        const table = $('#NewMortgageRateTables > div:nth-child(7)');
        table.waitForExist(6000);

        const table_body = $('#NewMortgageRateTables > div:nth-child(7) > div');
        table_body.waitForExist(6000);

        const closed_button_1 = $('div.ratesTableWrapper:nth-child(7) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > th:nth-child(8) > a:nth-child(1) > span:nth-child(3)');
        closed_button_1.waitForExist(20000);
        closed_button_1.waitForDisplayed(60000);

        const more_info_button = $('#NewMortgageRateTables > div > div > table > tbody > tr:nth-child(1) > th.showHideCell.doNotPrint > a > span.triggerText');
        more_info_button.waitForExist(20000);
        more_info_button.waitForDisplayed(60000);
        console.log(more_info_button.getText());
        browser.pause(3000)
        more_info_button.click();
        browser.pause(3000)

        // browser.execute(function() {
        //     let elements = document.getElementsByClassName("toggleMoreDetails desktop");
        //     elements.item(3).click();
        //     browser.pause(50000)
        // });
        
    });

    it('I press apply button', () => {
        const apply_button = $('=Apply');
        console.log(apply_button.getText());
        apply_button.waitForExist(20000);
        apply_button.waitForDisplayed(60000);
        apply_button.click();
    });

    it('I expect to see Start your mortgage application text', () => {
        const header = $('h1=Start your Remortgage application');
        console.log(header.getText());
        expect(header.getText()).to.be.equal('Start your Remortgage application');
    });

});