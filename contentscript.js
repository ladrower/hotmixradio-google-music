chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.command) {
            case 'GET_TRACK':
                sendResponse({data: getTrack()});
                break;
        }
    });

function getTrack () {
    return {
        title: document.getElementById('titre0').innerText,
        artist: document.getElementById('artiste0').innerText
    }
}