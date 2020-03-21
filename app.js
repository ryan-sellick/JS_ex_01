function animatedForm(){
  const ARROWS = document.querySelectorAll('.fa-arrow-down')

  ARROWS.forEach(arrow => {
    arrow.addEventListener('click', () => {
        const INPUT = arrow.previousElementSibling;
        const PARENT = arrow.parentElement;
        const NEXTFORM = PARENT.nextElementSibling;

        //Check for validation
        if (INPUT.type === "text" && validateUser(INPUT)){
          nextSlide(PARENT, NEXTFORM);
        } else if (INPUT.type === 'email' && validateEmail(INPUT)){
          nextSlide(PARENT, NEXTFORM);
        } else if (INPUT.type === 'password' && validateUser(INPUT)){
          nextSlide(PARENT, NEXTFORM);
        }
    });
  });
}

function validateUser(user){
  if (user.value.length < 6){
    console.log('not enough characters');
    error('rgb(189, 87, 87)');
  } else {
    error('rgb(87, 189, 130)');
    return true;
  }
}

function validateEmail(email){
  const VALIDATION = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (VALIDATION.test(email.value)) {
    error('rgb(87, 189, 130)');
    return true;
  } else {
    error('rgb(189, 87, 87)');
  }
}

function nextSlide(PARENT, NEXTFORM){
  PARENT.classList.add('innactive');
  PARENT.classList.remove('active');
  NEXTFORM.classList.add('active');
}

function error (color){
  document.body.style.backgroundColor = color;
}


animatedForm();
