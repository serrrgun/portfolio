'use strict';

(function() {

  onscroll = function () {
    var scrollElemAdventerHeight = document.querySelector('.advantages').scrollHeight;
    var scrollElemAboutHeight = document.querySelector('.about-me').scrollHeight
    var intElemScrollHeight = document.querySelector('.header-slide').scrollHeight;
    var scrollElemSkillHeight = document.querySelector('.my-skill').scrollHeight;
    var scrollElemResumeHeight = document.querySelector('.resume').scrollHeight;

    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    
    var getMunu = function () {
    if (scrolled >= (intElemScrollHeight - 50)) {
      document.querySelector('.header-slide__menu').classList.add('header-slide__menu--fixed')
    } else {
      document.querySelector('.header-slide__menu').classList.remove('header-slide__menu--fixed')
    }
    };
    if(document.body.clientWidth > 1150){
      getMunu()
    };
    
    
    
    if (scrolled >= ((intElemScrollHeight + scrollElemAdventerHeight) - 300)) {
      document.querySelector('.about-me').classList.add('fadeIn')
    };

    if (scrolled >= (intElemScrollHeight / 2)) {
      document.querySelector('.advantages').classList.add('slideRight')
    };
      
    if (scrolled >= (intElemScrollHeight + scrollElemAdventerHeight)) {
      document.querySelector('.my-skill__description').classList.add('slideRight');
      document.querySelector('.my-skill__bar').classList.add('slideLeft')    
    };  
      
    if (scrolled >= (intElemScrollHeight + scrollElemAdventerHeight + scrollElemAboutHeight + scrollElemSkillHeight + (scrollElemResumeHeight / 2))) {
      document.querySelector('.education').classList.add('slideDown')
    };  




    if (scrolled >= ((intElemScrollHeight + scrollElemAdventerHeight + scrollElemAboutHeight) - 100)) {
      move();
    }

    function move() {
      var bars = [].slice.call(document.querySelectorAll('.skill-bar__inner'));
      bars.map(function (bar, index) {
      setTimeout(function() {
          bar.style.width = bar.dataset.percent;
      }, index * 1000);
      })
    }


  }
})();


