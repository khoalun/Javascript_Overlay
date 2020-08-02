    var btnMenu = document.getElementById("btn-menu");
    btnMenu.addEventListener("click", toggleMenu);

    function toggleMenu(e) {
        var divOverlay = document.getElementsByClassName ("overlay")[0]; //return a node list which will be kind of an array
        var speed = 10;
        var eventTarget = e.target; // return DOM object of this menu button btnMenu

        if (eventTarget.className == "btn-open") {
            fadeIn(divOverlay, speed);  // MỜ ĐI
            eventTarget.className = "btn-close";
        } else if (eventTarget.className == "btn-close") {
            fadeOut(divOverlay, speed);  //HIỆN RA
            eventTarget.className = "btn-open";
        }

    }
    function fadeIn(elem, speed){
        var inInterval = setInterval(function(){

        elem.style.opacity = Number(elem.style.opacity) +0.02;

        if(elem.style.opacity >= 1){
            elem.style.opacity = 1;
            clearInterval(inInterval);
        }

        }, speed);// 10ms = .01s

    }
    function fadeOut(elem, speed){
        var outInterval = setInterval(function(){

            elem.style.opacity = Number(elem.style.opacity) -0.02;

            if(elem.style.opacity <= 0){
                elem.style.opacity = 0;
                clearInterval(outInterval);
            }

        }, speed);// 10ms = .01s

    }

