let counter = 0; let Title = '@kaktus.'; let direction = true;
aniTitle = setInterval(function () {
    if (counter == Title.length) direction = false;
    if (counter == false) direction = true;
    counter = (direction == true) ? ++counter : --counter;
    newtitle = (counter == 0) ? "@" : Title.slice(0, counter);
    document.title =  '' + newtitle;
}, 400)