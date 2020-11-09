var relatedVideos = document.getElementById('related');
var vid = document.getElementById("ytd-player");

chrome.storage.local.get('enabled', data => {
    if (data.enabled) {
        chrome.storage.local.get('size', d => {
            if (d.size) {
                relatedVideos.style.height = `${d.size}px`;
            } else {
                relatedVideos.style.height = `${vid.clientHeight}px`; 
            }
        });

        relatedVideos.style.overflowY = "auto";
    } else {
        relatedVideos.style.height = "initial";
        relatedVideos.style.overflowY = "initial";
    }
});
