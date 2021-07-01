// NAVIGATION STICKEY SCROLL
window.addEventListener("scroll", function () {
  let navArea = document.getElementById("navArea");

  if (window.pageYOffset > 0) {
    navArea.classList.add("is-sticky");
  } else {
    navArea.classList.remove("is-sticky");
  }
});

let components = {
  init: function () {
    this.hamButton();
  },

  hamButton: function () {
    // hambuger button
    const hambugerBtn = document.querySelector("#hambuger");
    const navMenu = document.querySelector("#navAreaMenu");
    const navArea = document.querySelector("#navArea");
    const overlay = document.createElement('div')
    overlay.classList.add('overlayBig')
    
    hambugerBtn.addEventListener("click", () => {
      console.log("click",overlay);
        hambugerBtn.classList.toggle("active");
        navMenu.classList.toggle("active");
        if(document.querySelector('.overlayBig')){
          overlay.remove()
        }else{
          navArea.appendChild(overlay)
        }
    });
  },
};
components.init();
