const aud1 = document.getElementById("Q");
const aud2 = document.getElementById("W");
const aud3 = document.getElementById("E");
const aud4 = document.getElementById("A");
const aud5 = document.getElementById("S");
const aud6 = document.getElementById("D");
const aud7 = document.getElementById("Z");
const aud8 = document.getElementById("X");
const aud9 = document.getElementById("C");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
 
const switchInput = document.getElementById('mySwitch');
    const botonesDiv = document.getElementById('display');

    switchInput.addEventListener('change', function () {
      if (this.checked) {
        botonesDiv.style.display = 'block'; 
      } else {
        botonesDiv.style.display = 'none';  
      }
    });


btn1.addEventListener("click", () => {
    aud1.currentTime = 0;
    aud1.play();
});

btn2.addEventListener("click", () => {
    aud2.currentTime = 0;
    aud2.play();
});

btn3.addEventListener("click", () => {
    aud3.currentTime = 0;
    aud3.play();
});

btn4.addEventListener("click", () => {
    aud4.currentTime = 0;
    aud4.play();
});


btn5.addEventListener("click", () => {
    aud5.currentTime = 0;
    aud5.play();
});

btn6.addEventListener("click", () => {
    aud6.currentTime = 0;
    aud6.play();
});

btn7.addEventListener("click", () => {
    aud7.currentTime = 0;
    aud7.play();
});

btn8.addEventListener("click", () => {
    aud8.currentTime = 0;
    aud8.play();
});

btn9.addEventListener("click", () => {
    aud9.currentTime = 0;
    aud9.play();
});