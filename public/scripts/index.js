//get
function getScroll() {
    document.addEventListener("scroll", function() {
        positionY = window.pageYOffset;
        //positionY = window.scrollY
        changedNavbar(positionY)
    });
}

function getScreenWidth() {
    return screen.width
}

function getScreenHeight() {
    return screen.height
}

//actions
function navbarFixedShow() {
    const navbar = document.querySelector('.fixed-top')
    navbar.classList.remove("disabled")
}

function navbarFixedHide() {
    const navbar = document.querySelector('.fixed-top')
    navbar.classList.add("disabled")
}

function navbarHeaderShow() {
    const navbar = document.querySelector('.fixed-header')
    navbar.classList.remove("disabled")
}

function navbarHeaderdHide() {
    const navbar = document.querySelector('.fixed-header')
    navbar.classList.add("disabled")
}

//functions verify and call functions actions
function changedNavbar(positionY) {
    // console.log(`scrolling: ${positionY}`)
    if (positionY >= 400)
        navbarFixedShow()
    else
        navbarFixedHide()

    // var screenWidth = getScreenWidth()
    // console.log(screenWidth)
    // if (screenWidth >= 575)
    //     navbarHeaderShow()
    // else
    //     navbarHeaderdHide()

}


getScroll()