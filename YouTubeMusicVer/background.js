
// request = Whatever is sent by the content script
// sender =information about the tab
// sendResponse = sends information back to the content script
info = {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  c = request.channel;
  t = request.title;
})


chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'popup.html'})
})
