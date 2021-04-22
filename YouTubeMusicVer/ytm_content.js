// YouTube Music Script
setInterval(function(){

  //video name
  const t = document.querySelector("#layout > ytmusic-player-bar > div.middle-controls.style-scope.ytmusic-player-bar > div.content-info-wrapper.style-scope.ytmusic-player-bar > yt-formatted-string").textContent

  // video information (artist name, album name, year, etc.)
  const c = document.querySelector("#layout > ytmusic-player-bar > div.middle-controls.style-scope.ytmusic-player-bar > div.content-info-wrapper.style-scope.ytmusic-player-bar > span > span.subtitle.style-scope.ytmusic-player-bar > yt-formatted-string").textContent

  chrome.runtime.sendMessage({
    title: t,
    channel: c
  })

}, 1000);