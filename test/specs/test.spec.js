describe('ASOS homepage', () => {
    it('should display the correct homepage title', () => {
        browser.url('http://asos.com');
        const title = browser.getTitle();
        assert.equal(title, 'ASOS | Online Shopping for the Latest Clothes & Fashion');
    });
});