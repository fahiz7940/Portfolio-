

const texts = ["WebDeveloper", "Designer", "Freelancer"];
let index = 0;

function changeText() {
  const roleElement = document.querySelector(".role");
  roleElement.classList.remove("fade-in");
  roleElement.classList.add("fade-out");

  setTimeout(() => {
    roleElement.innerHTML = texts[index];
    roleElement.classList.remove("fade-out");
    roleElement.classList.add("fade-in");
    index = (index + 1) % texts.length;
  }, 500); 
}

setInterval(changeText, 2000);
changeText();