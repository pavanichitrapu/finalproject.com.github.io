var getFreeQuote=document.getElementsByClassName("info-wrapper")[0];

var sideOver=document.getElementById("sidebar-overlay");
var sideBarQoute=document.getElementById("sidebar-getfreequote");
getFreeQuote.onclick=function(){
    sideOver.style.display="block";
    
    sideBarQoute.style.transform="translateX(0%)";
}
var closeBtn=document.getElementById("close-btn");
closeBtn.onclick=function(){
    sideOver.style.display="none";
     sideBarQoute.style.transform="translateX(100%)";
}

var freeQuotebtn=document.getElementsByClassName("button")[0];
freeQuotebtn.onclick=function(){
    sideOver.style.display="block";
    
    sideBarQoute.style.transform="translateX(0%)";

}


