// // this is the background code...

// // listen for our browserAction to be clicked
// chrome.pageAction.onClicked.addListener(function (tab) {
//   // for the current tab, inject the "inject.js" file & execute it
//   if (tab.url.indexOf('/comments/') != -1) {
//     chrome.tabs.executeScript(tab.ib, {
//         file: 'inject.js'
// 	});
//   }
// });



// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: '*.reddit.com/r/*/comments/*' },
            console.log('on reddit page');
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.tabs.executeScript(tab.ib, {file: 'inject.js' ]});
    ]);
  });
});