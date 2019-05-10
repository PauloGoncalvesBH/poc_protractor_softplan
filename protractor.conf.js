const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

module.exports.config = {
  baseUrl:
    "http://172.21.4.41:4000/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJncmFudF90eXBlIjoicGFzc3dvcmQiLCJ1c2VyX25hbWUiOiJTT0ZUUExBTiIsInNjb3BlIjpbImZvbyIsIlBHIiwicmVhZCIsIndyaXRlIl0sImRvbWFpbiI6IlNHNSIsIm9yZ2FuaXphdGlvbiI6InNvZnRwbGFuIiwibG90YWNhbyI6IjI4OSIsImV4cCI6MTU1NzQ2NTUwMCwiYXV0aG9yaXRpZXMiOlsidXNlciJdLCJqdGkiOiIzNDczZGFlZi1hZWYwLTQ1NjctODRjOC05YjY0NjUwNmQ4ZTkiLCJjbGllbnRfaWQiOiJQRyIsInVzZXJuYW1lIjoiU09GVFBMQU4ifQ.ZxL4CdOWBTqM_mJrmXrXgQ2zlzurz-I8aJMDc0iZq82FdWEE7D1Pt6CyD0d5wJg2ZacZkJ2JlGsNLvgsecKizw5e9WctZLM_PRG2SnRQEoCjPGt9-DU2M-f_Q5_u5RBiDUjYFyDV_QKtyuqPrKOIDYrX3Q6fJZE34jPvQYDLNPM67MYzF5D6MQQlrhPvE5fYP337OAnxR_uFuTNVu5kpK6XKHn5Kzx7TY5ywssDW03qdSFpBXs20IwB9DoD2rnHUQzeX2sn3vBsO6L5_dfVXXa_2QZTMuXbmMwA-PjLa5dfJe7TcM6mfPSoUtd84W4xyNR9gUjqdsc39Nk6DZ-6SyA&id=RI004GTR20000&scope=SG5TINT",
  specs: ["specs/*.spec.js"],
  capabilities: {
    browserName: "chrome",
    // chromeOptions: {
    //   args: ["--headless", "--window-size=1024,768"]
    // }
  },
  highlightDelay: 25,
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    jasmine.getEnv().addReporter(
      new SpecReporter({
        suite: {
          displayNumber: true
        },
        spec: {
          displayFailed: true,
          displayPending: true,
          displayDuration: true,
          displayStackTrace: true
        },
        summary: {
          displayFailed: true
        }
      })
    );
  },
  jasmineNodeOpts: {
    // random: true,
    print: function() {}
  }
};
