var relatedVideos = document.getElementById('related');

chrome.storage.local.get('enabled', data => {
    if (data.enabled) {
        chrome.storage.local.get('size', d => {
            if (d.size) {
                relatedVideos.style.height = d.size + 'px';
            }
        });

        relatedVideos.style.overflowY = "auto";
    } else {
        relatedVideos.style.height = "initial";
        relatedVideos.style.overflowY = "initial";
    }
});
