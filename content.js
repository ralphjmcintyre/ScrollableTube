// var relatedVideos = document.getElementById('related');
// var vid = document.getElementById("ytd-player");

// if (relatedVideos !== null && vid !== null) {
//     chrome.storage.local.get('enabled', data => {
//         if (data.enabled) {
//             chrome.storage.local.get('size', d => {
//                 if (d.size) {
//                     relatedVideos.style.height = `${d.size}px`;
//                 } else {
//                     relatedVideos.style.height = `${vid.clientHeight}px`; 
//                 }
//             });
    
//             relatedVideos.style.overflowY = "auto";
//         } else {
//             relatedVideos.style.height = "initial";
//             relatedVideos.style.overflowY = "initial";
//         }
//     });
// }

var relatedVideos = document.getElementById('related');
var vid = document.getElementById("ytd-player")

const processContent = () => {
    // do whatever here.
    let data = {message: UPDATE_BACKGROUND_DATA}
    chrome.runtime.sendMessage(data);
  }
  
  // run when messages sent from background.js
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'DO_SOMETHING_MESSAGE') {
      // processContent();
    }
  });
  
  // run onload
  processContent();
