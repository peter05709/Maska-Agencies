  //login form
  document.addEventListener("DOMContentLoaded", () => {
  const loginform=document.getElementById("loginform");
  if(loginform){
    loginform.addEventListener("submit", function(e){
      e.preventDefault();

      const email=document.getElementById("email").value.trim();
      const password=document.getElementById("password").value.trim();
      const message=document.getElementById("loginMessage");

      const storedUser=JSON.parse(localStorage.getItem("registeredUser"));
        if(!storedUser){
            message.textContent="No User found. Please register first.";
            message.style.color="red";
            return;
        }
        if(email===storedUser.email && password===storedUser.password){
            message.textContent=`Login successful! Welcome ${storedUser.fullname}!`;
            message.style.color="green";
            loginform.reset();
            localStorage.setItem("currentUser", JSON.stringify(storedUser));
            setTimeout(function() {
                window.location.href = "home.html";
            }, 2000);

        }else{
            message.textContent="Invalid email or password!";
            message.style.color="red";
            return;
        }
      });
    }

    //register form
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const message = document.getElementById("registerMessage");

      if (!fullname || !email || !password) {
        if (message) {
          message.textContent = "Please fill in all fields.";
          message.style.color = "red";
        }
        return;
      }

      const user = { fullname, email, password };
      localStorage.setItem("registeredUser", JSON.stringify(user));

      if (message) {
        message.textContent = `Registration successful for ${fullname}!`;
        message.style.color = "green";
      }

      registerForm.reset();

      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    });
  }
  //logout functionality
    const logoutlink=document.getElementById("logoutlink");
    if(logoutlink){
        logoutlink.addEventListener("click", function(e){
            e.preventDefault();
            localStorage.removeItem("currentUser");
            window.location.href="index.html";
        });
    };

    //the image slider part
const track = document.querySelector('.image-thumbnails');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const total= track.children.length;
const imgWidth= track.children[0].getBoundingClientRect().width+10; // include a gap

prevBtn.addEventListener('click', () => {
    index--;
    if(index < 0) index = total -1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    index++;
    if(index >= total) index = 0;
    updateSlider();
});

function updateSlider() {
    track.style.transform = `translateX(-${index * imgWidth}px)`;
}

//Auto slide every 3 seconds
setInterval(() => {
    index++;
    if(index >= total) index = 0;
    updateSlider();
}, 3000);

});