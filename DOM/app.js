document.addEventListener("DOMContentLoaded", function () {
  // Selecting elements
  const redColor = document.querySelector('.red');
  const grayColor = document.querySelectorAll('.gray');
  const blackColor = document.querySelector('.black');
  const cartButton = document.getElementById('button');
  const feedbackBtn = document.querySelector('.feedback');
  const itemTag = document.querySelector('.tag');
  const imageCard = document.querySelector('.product-image');

  // Event listeners
  redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    // Update background image with correct URL
    imageCard.style.backgroundImage = 'url("./images/benz.jpg")';
  });

  grayColor.forEach(element => {
    element.addEventListener("click", function () {
      cartButton.style.backgroundColor = "gray";
      itemTag.style.backgroundColor = "gray";
      // Update background image with correct URL
      imageCard.style.backgroundImage = 'url("./images/benz.jpg")';
    });
  });

  blackColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    // Update background image with correct URL
    imageCard.style.backgroundImage = 'url("./images/benz.jpg")';
  });

  // Cart Button Implementation
  const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
  };
  cartButton.addEventListener("click", cart);
});


