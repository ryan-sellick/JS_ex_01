function animatedForm(){
  const ARROWS = document.querySelectorAll('.fa-arrow-down')

  ARROWS.forEach(arrow => {
    arrow.addEventListener('click', () => {
        const INPUT = arrow.previousElementSibling;
        const PARENT = arrow.parentElement;
        const NEXTFORM = PARENT.nextElementSibling;

        //Check for validation
        if (INPUT.type === "text" && validateUser(INPUT)){
          console.log('everything is okay!');
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

function error (color){
  document.body.style.backgroundColor = color;
}


animatedForm();
