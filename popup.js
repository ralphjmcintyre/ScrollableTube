// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeHeight = document.getElementById('changeHeight');
let goToOptions = document.getElementById('go-to-options');

chrome.storage.sync.get('height', function(data) {
  changeHeight.setAttribute('value', data.height);
});

changeHeight.onclick = function(element) {
  let height = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.getElementById("related").style.height = "' + height + 'px"; document.getElementById("related").style.overflowY = "auto";'});
  });
};

goToOptions.onclick = () => {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('options.html'));
  }
}