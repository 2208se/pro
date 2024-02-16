const hambuger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hambuger) {
  hambuger.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


const form = document.querySelector('form');
const commentSection = document.querySelector('.comments-section');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const commentInput = document.querySelector('#comment');
  const commentText = commentInput.value;
  commentInput.value = '';
  const newComment = document.createElement('div');
  newComment.classList.add('comment');
  newComment.innerHTML = `<p>${commentText}</p>`;
  commentSection.appendChild(newComment);
});

// let prevScrollPos = window.pageYOffset;

// window.onscroll = function() {
//   let currentScrollPos = window.pageYOffset;
//   const navigation = document.querySelector('.navigation');
  
//   if (prevScrollPos > currentScrollPos) {
//     navigation.style.top = '0';
//   } else {
//     navigation.style.top = '-80px';
//   }
  
//   prevScrollPos = currentScrollPos;
// }

$(document).ready(function() {
  var navbar = $('.navigation');
  var offset = navigation.offset().top;

  $(window).scroll(function() {
    if ($(window).scrollTop() > offset) {
      navigation.addClass('sticky');
    } else {
      navigation.removeClass('sticky');
    }
  });
});
