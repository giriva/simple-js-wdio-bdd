module.exports = function given(){
    this.Given(/^we launch the homepage$/,
        function(){
            browser.url("https://www.nationwide.co.uk");
            const title = browser.getTitle();
            assert.equal(title, 'Nationwide Building Society | building society, nationwide');
});

//   Given('click on Mortgages', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

//   Given('click New mortgage customer', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

//   Given('click Mortgage rates', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });


//   Given('select Nationwide mortgage to No', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

//   Given('select lender to Changing lender', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });


//   Given('set property value as {int},{int}', function (int, int2) {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

//   Given('set mortgage amount as {int}', function (int) {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });


//   Given('set term year as {int}', function (int) {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });


//   Given('select mortgage type as fixed rate', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

//   Given('select product fee as with fee', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

//   Then('select {int} years fixed from the result', function (int) {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

//   Then('click More info and apply', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

//   Then('click Apply button', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

//   Then('next page heading is displayed as {string}', function (string) {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });