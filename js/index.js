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

var carouselSlidersProducts = document.querySelectorAll(".carousel-list-item");
var carouselButtonsProducts = document.querySelectorAll(".carousel-button");

var carouselSlidersServices = document.querySelectorAll(".services-list__item");
var carouselButtonsServices = document.querySelectorAll(".services-button");

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
    
    if(Object.keys(storage).name !== null){      
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

/*carousel-products*/ 

currentSlideNumberProducts = "1";

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

carouselButtonsProducts.forEach(function(button, index){
    button.addEventListener("click", function(){
        for(var i = 0; i < carouselSlidersProducts.length; i++){
            if(carouselSlidersProducts[i].dataset.number === currentSlideNumberProducts){
                carouselSlidersProducts[i].classList.remove("carousel-list-item--current");
            }
    
            if(carouselSlidersProducts[i].dataset.number === button.dataset.number){
                carouselSlidersProducts[i].classList.add("carousel-list-item--current");
            }
        }
    
        for(var i = 0; i < carouselButtonsProducts.length; i++){
            if(carouselButtonsProducts[i].dataset.number === currentSlideNumberProducts){
                carouselButtonsProducts[i].classList.remove("carousel-button--current");
            }
    
            if(carouselButtonsProducts[i].dataset.number === button.dataset.number){
                carouselButtonsProducts[i].classList.add("carousel-button--current");
            }
        }
    
        currentSlideNumberProducts = button.dataset.number;
    });
});

/*services*/

currentSlideNumberServices = "1";

carouselButtonsServices.forEach(function(button, index){
    button.addEventListener("click", function(){
        for(var i = 0; i < carouselSlidersServices.length; i++){
            if(carouselSlidersServices[i].dataset.number === currentSlideNumberServices){
                carouselSlidersServices[i].classList.remove("services-list__item--current");
            }
    
            if(carouselSlidersServices[i].dataset.number === button.dataset.number){
                carouselSlidersServices[i].classList.add("services-list__item--current");
            }
        }
    
        for(var i = 0; i < carouselButtonsServices.length; i++){
            if(carouselButtonsServices[i].dataset.number === currentSlideNumberServices){
                carouselButtonsServices[i].classList.remove("services-button--current");
            }
    
            if(carouselButtonsServices[i].dataset.number === button.dataset.number){
                carouselButtonsServices[i].classList.add("services-button--current");
            }
        }
    
        currentSlideNumberServices = button.dataset.number;
    });
});
