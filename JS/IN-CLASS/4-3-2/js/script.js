var newsletterFormEl = document.querySelector("#newsletterForm");
var emailTitleEl = document.querySelector("emailTitle");
var newsletterEmail = document.querySelector("newsletterEmail");

newsletterFormEl = document.addEventListener("click", function(event){
    event.preventDefault();
    emailTitleEl.textContent = newsletterEmail.ariaValueMax;
})





var googleLinkEl = document.querySelector("#googleLink");

googleLinkEl.addEventListener("click", function(){
    console.log("CLICKED GOOGLE LINK");
})