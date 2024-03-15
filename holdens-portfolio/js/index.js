document.addEventListener('DOMContentLoaded', () => {
//title screen JS
  const contactMe = document.getElementById('aboutMe');

  contactMe.addEventListener("click", loadNewPage);

  function loadNewPage(){
    window.location.href="contact.html";
  }
});
