  function openTab(evt, tabId) {
            // Get all elements with class="tab-content" and hide them
            var tabContents = document.getElementsByClassName("tab-content");
            for (var i = 0; i < tabContents.length; i++) {
                tabContents[i].classList.remove("active");
            }
            // Get all elements with class="tab-btn" and remove the class "active"
            var tabButtons = document.getElementsByClassName("tab-btn");
            for (var i = 0; i < tabButtons.length; i++) {
                tabButtons[i].classList.remove("active");
            }

            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(tabId).classList.add("active");
            evt.currentTarget.classList.add("active");
        }


const target = document.querySelector("#hero");
const observer  = new IntersectionObserver((entries) => {
    const heroContentElement = entries[0].target.children[0].children[0];
    const imageWrapperElement = entries[0].target.children[0].children[1];

    if(entries[0].isIntersecting){
        for( i = 0; i < heroContentElement.children.length; i++){
            heroContentElement.children[i].classList.add("show");
        }
        imageWrapperElement.classList.add("show");        
       
    }else{
        for( i = 0; i < heroContentElement.children.length; i++){
            heroContentElement.children[i].classList.remove("show");
        }
        imageWrapperElement.classList.remove("show");
    }



}, {});       
observer.observe(target) ;