// chrome.browserAction.onClicked.addListener(
//     function(tab) {
//         chrome.tabs.executeScript(tab.id,
//             {
//                 "file": "content.js"
//             }
//         );
//     }
// );

chrome.tabs.onUpdated.addListener(() => {
  chrome.storage.local.get('enabled', data => {
    chrome.tabs.sendMessage(info.tabId, {
      message: data
    });
  })
})
  
chrome.tabs.onActivated.addListener(() => {
  chrome.storage.local.get('enabled', data => {
    chrome.tabs.sendMessage(info.tabId, {
      message: data
    });
  })
})

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.message === UPDATE_BACKGROUND_DATA) {
    // update background vars
  }
})