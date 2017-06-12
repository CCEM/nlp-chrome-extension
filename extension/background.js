// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('in function')
  console.log(tab.url)
  console.log(/^((https)\:\/\/www.reddit.com\/r\/)(([a-zA-Z0-9])+)(\/comments\/)/.test(tab.url))
  var reUrl = /^((https)\:\/\/www.reddit.com\/r\/)(([a-zA-Z0-9])+)(\/comments\/)/.test(tab.url)
  if (reUrl === true) {
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
  }
});
