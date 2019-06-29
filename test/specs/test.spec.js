describe('ASOS homepage', () => {
    it('should display the correct homepage title', () => {
        browser.url('https://www.nationwide.co.uk');
        const title = browser.getTitle();
        assert.equal(title, 'Nationwide Building Society | building society, nationwide');
    });
});