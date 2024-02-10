let animating = false;
let robot = document.getElementById('robot');

robot.addEventListener('click', () => {
  if(!animating) {
    animating = true;
    robot.classList.add('animate');
    setTimeout(() => {
      animating = false;
      robot.classList.remove('animate');
    }, 1000);
  }
});
