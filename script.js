const contactBtn=document.getElementById("contactBtn");
const contactInfo=document.getElementById("contactInfo");
contactBtn.addEventListener("click", function() {
if (getComputedStyle(contactInfo).display === "none") {
     contactInfo.style.display="block";
    }else {
    contactInfo.style.display = "none"
     
}});

