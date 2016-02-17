chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, {command: "GET_TRACK"}, function(response) {
        chrome.tabs.create({
            url: "http://play.google.com/music/listen#/sr/"
            + encodeURIComponent(response.data.title + ' ' + response.data.artist)
        });
    });
});