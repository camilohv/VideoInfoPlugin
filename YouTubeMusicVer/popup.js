
        const bg = chrome.extension.getBackgroundPage()
        const title = document.createElement('div')
        title.setAttribute("id", "title");
        title.textContent = `${bg.t}`
        document.body.appendChild(title);

        const channel = document.createElement('div')
        channel.setAttribute("id", "channel");
        channel.textContent = `${bg.c}`
        document.body.appendChild(channel);

        setInterval(function(){
                title.textContent = `${bg.t}`
                channel.textContent = `${bg.c}`
        }, 1000);

