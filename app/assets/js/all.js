$(document).ready(function () {
  // 漢堡選單
  $('.menuBtn').click(function(e) {
    e.preventDefault();
    $('.menu').toggleClass('active')
  })
});