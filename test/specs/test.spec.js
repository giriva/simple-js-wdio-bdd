const assert = require('assert');

describe('Nationwide homepage', () => {
    
    it('I launch nbs applicaion with url', () => {
        browser.url('https://www.nationwide.co.uk');
        const title = browser.getTitle();
        console.log(title)
        assert.equal(title, 'Nationwide Building Society | building society, nationwide');
    });

    it('I click on mortgate', () => {
        // const link = $('#MortgagesNavItem');
        // link.click();
        //should be changed to moveTo and click the first item
        const dropdown = $('#MortgagesNavItem > a > span');
        dropdown.click();
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
        // const fixed_rate = $('id=fixed');
        // console.log(fixed_rate.getText());
        // fixed_rate.click();

        // const paragraph = $('#newMortgageRatesTypeFilter > div > div.filterBox.mortgageType > div > div:nth-child(1)');
        const paragraph = $('#fixed > label')
        paragraph.waitForDisplayed(5000)
        paragraph.click();
    });

    // it('I select Deal period', () => {
    //     const deal_period = $('//*[@id="deal-five"]');
    //     deal_period.click();
    //     console.log(deal_period.getText());
    //     deal_period.click();
    // });

    // it('I select Product fee', () => {
    //     const product_fee = $('//*[@id="product-fee-fee"]');
    //     product_fee.click();
    //     console.log(product_fee.getText());
    //     product_fee.click();
    // });

    it('I select More info and apply link', () => {
        const table = $('#NewMortgageRateTables > div:nth-child(7)');
        table.waitForExist(6000);

        const table_body = $('#NewMortgageRateTables > div:nth-child(7) > div')
        table_body.waitForExist(6000)

        // const more_info_link_outer = $('#NewMortgageRateTables > div:nth-child(7) > div > table > tbody > tr:nth-child(1) > th.showHideCell.doNotPrint > a');
        // more_info_link_outer.waitForDisplayed(9000);
        // more_info_link_outer.click();

        const closed_button_1 = $('div.ratesTableWrapper:nth-child(7) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > th:nth-child(8) > a:nth-child(1) > span:nth-child(3)');
        closed_button_1.waitForExist(20000)
        closed_button_1.waitForDisplayed(60000);
        closed_button_1.click();
    });

    // it('I press apply button', () => {
    //     const apply_button = $('#prod139990 > section:nth-child(3) > div > div.applyButton.doNotPrint > a');
    //     apply_button.click();
    // });

    // it('I expect to see Start your mortgage application text', () => {
    //     const actual_text = $('#content_2_contentheader_0_grid_8ff0009651f74eb49d9f4400ee2bfbf1_0_ColumnContainer > section.contentSection.smallMargin > h1');
    //     console.log(actual_text.getText());
    //     // const actual_text = elem.getText();
    //     console.log(actual_text)
    //     assert.equal(actual_text, 'Start your Remortgage application');
    //     // expect(no_button.getText()).to.be.equal('Data transmitted successfully!')
    // });

});