const colorMode = document.getElementById("color-mode");
const profilePic = document.getElementById("profile__pic");
const labelName = document.getElementById("labelName");
const labelEmail = document.getElementById("labelEmail");
const labelMessage = document.getElementById("labelMessage");
const nameInput = document.getElementById("nameInput");
const nameInput = document.getElementById("nameInput");
const nameInput1 = document.getElementById("nameInput");
const nameInput2 = document.getElementById("nameInput");
const nameInput3 = document.getElementById("nameInput");
const nameInput4 = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const contactInTouch = document.getElementById("contactInTouch");

const scroll = new SmoothScroll('#navMenu a[href*="#"]', { speed: 400 });
const colorModeChoice = localStorage.getItem("colorMode");

const pawster = "https://pawster.herokuapp.com/";
const movieLib = "https://dc-movie-library.herokuapp.com";

//awake project on Heroku for faster load
async function awake(URL) {
  await fetch(URL, { method: "GET" });
}

awake(pawster);
awake(movieLib);

//color mode based on previous selection
function previousColorMode() {
  if (colorModeChoice === "light") {
    document.body.classList.remove("dark");
    profilePic.src = "./img/light.jpg";
    colorMode.src = "./img/svg/moon.svg";
  } else {
    colorMode.classList.remove("fa-moon");
    colorMode.src = "./img/svg/sun.svg";
    // profilePic.src = "./img/dark.jpg";
  }
}

colorMode.onclick = function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    colorMode.classList.remove("fa-moon");
    colorMode.src = "./img/svg/sun.svg";
    profilePic.src = "./img/dark-noise.jpg";
    localStorage.setItem("colorMode", "dark");
  } else {
    profilePic.src = "./img/light.jpg";
    colorMode.src = "./img/svg/moon.svg";
    localStorage.setItem("colorMode", "light");
  }
};

// show/hide  label on input in contact form
function hideLabel(input, label) {
  input.addEventListener("keyup", () => {
    label.style.visibility = "visible";

    if (input.value === "") {
      label.style = "hidden";
    }
  });
}

hideLabel(nameInput, labelName);
hideLabel(emailInput, labelEmail);
hideLabel(messageInput, labelMessage);

async function sendEmail() {
  try {
    const response = await fetch("https://formsubmit.co/ajax/sergheitolstov@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
      }),
    });

    if (response.status === 200) {
      contactInTouch.innerHTML = " Message sent!";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    } else {
      contactInTouch.innerHTML = " Something went wrong ";
    }
  } catch (error) {
    console.log(error);
  }
}
