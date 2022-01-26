const boxes = document.querySelectorAll('.box');
console.log(boxes);

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  // Check when we're close to bottom of the page
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    // We need to know where is the top of the box
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
