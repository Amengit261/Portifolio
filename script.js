const contactBtn=document.getElementById("contactBtn");
const contactInfo=document.getElementById("contactInfo");
contactBtn.addEventListener("click", function() {
if (getComputedStyle(contactInfo).display === "none") {
     contactInfo.style.display="block";
    }else {
    contactInfo.style.display = "none"
     
}});

const cvBtn = document.getElementById("cvBtn");

cvBtn.addEventListener("click", function () {
    const downloadLink = document.createElement("a");

    downloadLink.href = "./cv.pdf";
    downloadLink.download = "Amen-Girma-CV.pdf";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
});
