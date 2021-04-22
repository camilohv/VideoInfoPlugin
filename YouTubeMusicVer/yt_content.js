// YouTube Script
setInterval(function(){

  //video name
  const t = document.querySelector("#movie_player > div.ytp-chrome-top > div.ytp-title > div > a").text

  // channel name
  const c = document.querySelector("#text > a").text
  // add code that removes "- Topic" from channel name 

  chrome.runtime.sendMessage({
    title: t,
    channel: c
  })

}, 1000);