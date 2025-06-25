const text = "AI-Powered-Education";
const typingText = document.getElementById("typing-text");
let index = 0;

function typeText() {
  if (index < text.length) {
    typingText.innerText += text[index];
    index++;
    setTimeout(typeText, 70); // adjust the speed
  }
}

typeText();



// testimonial section
let currentTestimonyIndex = 0;
const testimony = document.querySelectorAll('.user-testimony');

function showPrev() {
    testimony[currentTestimonyIndex].classList.remove('active');
    currentTestimonyIndex = (currentTestimonyIndex - 1 + testimony.length) % testimony.length;
    testimony[currentTestimonyIndex].classList.add('active');
}
function showNext() {
    testimony[currentTestimonyIndex].classList.remove('active');
    currentTestimonyIndex = (currentTestimonyIndex + 1) % testimony.length;
    testimony[currentTestimonyIndex].classList.add('active');
}
testimony[0].classList.add('active');