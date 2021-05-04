var header = document.querySelector('.header');
var navigation = header.querySelector('.navigation');
var toggle = navigation.querySelector('.navigation__toggle');
var siteMenu = navigation.querySelector('.navigation__site');
var userMenu = navigation.querySelector('.navigation__user');

navigation.classList.remove('navigation--nojs');
navigation.classList.remove('navigation--opened');
navigation.classList.add('navigation--closed');

toggle.addEventListener('click', function (evt) {
  evt.preventDefault();

  navigation.classList.toggle('navigation--closed');
  navigation.classList.toggle('navigation--opened');
});
