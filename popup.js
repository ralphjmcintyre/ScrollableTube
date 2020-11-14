var enabled = false; //disabled by default
var myButton = document.getElementById('toggle');
var sizeInput = document.getElementById('size');
var timeout = null;

chrome.storage.local.get('enabled', data => {
    enabled = !!data.enabled;
    myButton.textContent = enabled ? 'Disable' : 'Enable';
});

chrome.storage.local.get('size', data => {
    sizeInput.value = data.size ?? null;
    chrome.storage.local.set({
        size: sizeInput.value
    });
})

sizeInput.addEventListener('keyup', function (e) {
    clearTimeout(timeout);

    timeout = setTimeout(function() {
        chrome.storage.local.set({
            size: sizeInput.value
        });
        chrome.tabs.executeScript({
            file: 'content.js'
        });
    }, 1000);
});

myButton.addEventListener('click', function() {
    enabled = !enabled;
    myButton.textContent = enabled ? 'Disable' : 'Enable';
    chrome.storage.local.set({enabled:enabled});
    chrome.tabs.executeScript({
        file: 'content.js'
    });
})
