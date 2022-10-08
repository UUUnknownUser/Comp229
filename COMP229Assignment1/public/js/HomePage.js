// HomePage.js Kwun Hing Lau 301230390  10/4/2022
function createEventListeners() {
     
    var knowMoreAboutMe = document.getElementById("homepageaboutme");
    if (knowMoreAboutMe.addEventListener) {
        knowMoreAboutMe.addEventListener("click", clickKnowMoreAboutMe, false);

    } else if (knowMoreAboutMe.attachEvent) {
        knowMoreAboutMe.attachEvent("onclick", clickKnowMoreAboutMe);
    }

 }

 function clickKnowMoreAboutMe() {
    
    window.location = "/AboutMe";
    
    }


 function setUpPage() {
    createEventListeners();
 }

 if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}


