section=document.querySelector(".about");
myImage=document.querySelector(".about img");

skillSection=document.querySelector(".our-skills");
myProgress=document.querySelectorAll(".skills .prog span");

window.onscroll=function(){
    if(window.scrollY >= section.offsetTop){
        // console.log("Reached")
        myImage.style.transform="scale(1.1)";
    }
    else{
        myImage.style.transform="scale(1)";
    }

    if(window.scrollY>=skillSection.offsetTop+210){
        // console.log("Skill Reached");
        myProgress.forEach(element => {
            element.style.width=element.dataset.width;
        });
    }
    else{
        myProgress.forEach(element => {
            element.style.width=0;
        });
    }
}

myInput=document.querySelector(".subscribe form input[type='text']");
myIcon=document.querySelector(".subscribe form i");

window.addEventListener("focusin",function(e){
    if(e.target==myInput){
        myIcon.style.cssText="color: var(--main-color);";
    }
});

window.addEventListener("focusout",function(e){
    if(e.target==myInput){
        myIcon.style.cssText="color: white;";
    }
});

// statsSection=document.querySelector(".stats .container");
// myNumbers=document.querySelectorAll(".stats .number");
// myNumbersContent=document.querySelectorAll(".stats .number").InnerHtml;

// window.onscroll=function(){
//     if(window.scrollY >= statsSection.offsetTop){
//         console.log("Stats Reached");
//         myNumbersContent.forEach(e=>{
//             e.InnerHtml=e.dataset.number;
//         })
//     }
// }



