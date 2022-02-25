const colorMode = document.getElementById("colorMode");
const profilePic = document.getElementById("profilePic");
const labelName = document.getElementById("labelName");
const labelEmail = document.getElementById("labelEmail");
const labelMessage = document.getElementById("labelMessage");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");

const scroll = new SmoothScroll('#navMenu a[href*="#"]', { speed: 400 });

colorMode.onclick = function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    colorMode.classList.remove("fa-moon");
    colorMode.src = "./img/svg/sun.svg";
    profilePic.src = "./img/dark.jpg";
  } else {
    profilePic.src = "./img/light.jpg";
    colorMode.src = "./img/svg/moon.svg";
  }
};

function hideLabel(input, label) {
  input.addEventListener("keyup", () => {
    label.style.visibility = "visible";
    console.log(input.value);
    if (input.value === "") {
      label.style = "hidden";
    }
  });
}

hideLabel(nameInput, labelName);
hideLabel(emailInput, labelEmail);
hideLabel(messageInput, labelMessage);
