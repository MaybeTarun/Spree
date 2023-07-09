let left = document.getElementsByClassName('left')[0];
let right = document.getElementsByClassName('right')[0];
let moviebox = document.getElementsByClassName('moviebox')[0];

left.addEventListener('click', () => {
  moviebox.scrollLeft -= 250;

  if (moviebox.scrollLeft <= 0) {
    moviebox.scrollLeft = moviebox.scrollWidth;
  }
});

right.addEventListener('click', () => {
  moviebox.scrollLeft += 250;

  if (moviebox.scrollLeft >= moviebox.scrollWidth - moviebox.clientWidth) {
    moviebox.scrollLeft = 0;
  }
});
