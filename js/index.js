var writeUsButton = document.querySelector(".contacts-button");
var writeUsModal = document.querySelector(".contacts-modal");
var writeUsModalClose = writeUsModal.querySelector(".modal-button");
var writeUsForm = writeUsModal.querySelector("form");

var writeUsName = writeUsModal.querySelector("#contacts-name");
var writeUsEmail = writeUsModal.querySelector("#contacts-email");
var writeUsText = writeUsModal.querySelector("#contacts-text");

var mapButton = document.querySelector(".contacts-map");
var mapModal = document.querySelector(".map");
var mapModalClose = mapModal.querySelector(".modal-button");

var carouselSliders = document.querySelectorAll(".carousel-list-item");
var carouselButtons = document.querySelectorAll(".carousel-button");

var isStorageSupport = true;
var storage = {};

try {
  storage.name = localStorage.getItem("writeUsName");
  storage.email = localStorage.getItem("writeUsEmail");
} catch (err) {
  isStorageSupport = false;
}

writeUsButton.addEventListener("click", function(e){
    e.preventDefault(); 
    writeUsModal.classList.add("modal-show");
    
    if(Object.keys(storage).length !== 0){      
        writeUsName.value = storage.name,
        writeUsEmail.value = storage.email,
        writeUsText.focus()
    } else{
        writeUsName.focus();
    }
});

writeUsModalClose.addEventListener("click", function(e){
    e.preventDefault();
    writeUsModal.classList.remove("modal-show");
    writeUsModal.classList.remove("contacts-modal-error");
});

writeUsForm.addEventListener("submit", function(e){
    if(!writeUsName.value || !writeUsEmail.value || !writeUsText.value){
        e.preventDefault();
        console.log("!!!");
        writeUsModal.classList.remove("contacts-modal-error");
        writeUsModal.offsetWidth = writeUsModal.offsetWidth;
        writeUsModal.classList.add("contacts-modal-error");
    } else {
        if(isStorageSupport){           
            localStorage.setItem("writeUsName", writeUsName.value);   
            localStorage.setItem("writeUsEmail", writeUsEmail.value);            
        }
    }
});

window.addEventListener("keydown",function(e){
    if (e.keyCode === 27) {
        e.preventDefault();
        if (writeUsModal.classList.contains("modal-show")) {
            writeUsModal.classList.remove("modal-show");
            writeUsModal.classList.remove("contacts-modal-error");
        }
        if (mapModal.classList.contains("modal-show")) {
            mapModal.classList.remove("modal-show");
        }
    }
});

mapButton.addEventListener("click", function(e){
    e.preventDefault();
    mapModal.classList.add("modal-show");
});

mapModalClose.addEventListener("click", function(e){
    e.preventDefault();
    mapModal.classList.remove("modal-show");
});

/*slider*/ 

currentSlideNumber = "1";

carouselButtons.forEach(function(button, index){
    button.addEventListener("click", function(){
        for(var i = 0; i < carouselSliders.length; i++){
            if(carouselSliders[i].dataset.number === currentSlideNumber){
                carouselSliders[i].classList.remove("carousel-list-item--current");
            }
    
            if(carouselSliders[i].dataset.number === button.dataset.number){
                carouselSliders[i].classList.add("carousel-list-item--current");
            }
        }
    
        for(var i = 0; i < carouselButtons.length; i++){
            if(carouselButtons[i].dataset.number === currentSlideNumber){
                carouselButtons[i].classList.remove("carousel-button--current");
            }
    
            if(carouselButtons[i].dataset.number === button.dataset.number){
                carouselButtons[i].classList.add("carousel-button--current");
            }
        }
    
        currentSlideNumber = button.dataset.number;
    });
});