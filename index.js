"use strict";

 (function(exports) {

   // diapo
   function diaporama() {
     var pswp = document.querySelector('.pswp');
     var items = [
       { src: 'media/Ashram panorama.jpg',                    w: 640, h: 360 },
       { src: 'media/Building temporary shade.jpg',           w: 640, h: 480 },
       { src: 'media/Children doing Yoga.jpg',                w: 360, h: 640 },
       { src: 'media/Children in art class.jpg',              w: 480, h: 640 },
       { src: 'media/Children in Yoga Class.jpg',             w: 640, h: 480 },
       { src: 'media/Children.jpg',                           w: 640, h: 480 },
       { src: 'media/Community.jpg',                          w: 640, h: 480 },
       { src: 'media/Cow barn.jpg',                           w: 640, h: 480 },
       { src: 'media/Cowshed.jpg',                            w: 640, h: 480 },
       { src: 'media/Cultural program.jpg',                   w: 640, h: 480 },
       { src: 'media/Hatha Yoga Demo by Children.jpg',        w: 593, h: 640 },
       { src: 'media/Himalaya.jpg',                           w: 640, h: 480 },
       { src: 'media/In harmony.jpg',                         w: 640, h: 427 },
       { src: 'media/Incense rolling.jpg',                    w: 640, h: 427 },
       { src: 'media/Lunch Time.jpg',                         w: 427, h: 640 },
       { src: 'media/Meditation.jpg',                         w: 640, h: 415 },
       { src: 'media/Milking cows.jpg',                       w: 640, h: 332 },
       { src: 'media/Organic grown vegetables.jpg',           w: 640, h: 480 },
       { src: 'media/Painting.jpg',                           w: 640, h: 427 },
       { src: 'media/Paintings by children.jpg',              w: 640, h: 427 },
       { src: 'media/Pashmina weaving.jpg',                   w: 640, h: 427 },
       { src: 'media/Pashmina_cashmere handweaving dept.jpg', w: 640, h: 480 },
       { src: 'media/School prayers.jpg',                     w: 640, h: 427 },
       { src: 'media/School.jpg',                             w: 640, h: 480 },
       { src: 'media/Seva.jpg',                               w: 640, h: 480 },
       { src: 'media/Some photos with the children.jpg',      w: 1196, h: 628 },
       { src: 'media/Temporary shelter for boys displaced from the dormitory due to the earthquake.jpg', w: 1122, h: 632 },
       { src: 'media/The founder is involved in seva.jpg',    w: 640, h: 480 },
       { src: 'media/The founder Swami Ramchandra Das.jpg',   w: 630, h: 640 },
       { src: 'media/The school.jpg',                         w: 640, h: 480 }
     ];
     var options = {
       index: 0
     };

     var gallery = new PhotoSwipe(pswp, PhotoSwipeUI_Default, items, options);
     gallery.init();
   }

   // ContentLoaded
   window.addEventListener('DOMContentLoaded', function() {
     // bind diapo
     document.querySelector('#diaporama').addEventListener('click', function (ev) {
       diaporama();
     });

     // bind click menu
     document.querySelector('#menu ul').addEventListener('click', function (ev) {
       var item = ev.target;

       if (item.nodeName.toLowerCase() === 'li') item = item.parentNode;

       if (item.nodeName.toLowerCase() === 'a') {
         var previous = document.querySelector('#menu .active');
         if (previous) previous.classList.remove('active');
         item.classList.add('active');
       }
     });

     // init menu en fonction du hash
     if (window.location.hash) {
       [].forEach.call(document.querySelectorAll('#menu a'), function (link) {
         if (link.getAttribute('href') === window.location.hash) {
           link.classList.add('active');
         }
       });
     }

     // init sections et scroll dans la page
     var items = [].map.call(document.querySelectorAll('#content > section'), function (item) {
       return [item, item.getBoundingClientRect()];
     });
     var baseScroll = window.scrollY;

     // MAJ menu en fonction du scroll
     function updateMenu() {
       var item;
       items.forEach(function (pair) {
         if ((pair[1].top + baseScroll - 5) < window.scrollY) {
           item = pair[0];
         }
       });

       if (item) {
         var previous = document.querySelector('#menu .active');
         if (previous) previous.classList.remove('active');

         var id = item.getAttribute('id');
         if (id === 'orientation') {
           document.querySelector('#menu a[href="#accueil"]').classList.add('active');
         } else {
           document.querySelector('#menu a[href="#' + id + '"]').classList.add('active');
         }
       }
     }

     // bind scroll et MAJ menu
     // passer en setInterval ou requestAnimationFrame si trop gourmand
     window.addEventListener('scroll', updateMenu);
    //  setInterval(updateMenu, 2000);
    // init menu en fonction du scroll au chargement
     updateMenu();

     // bind carte
     document.querySelector('#ysmapwp').addEventListener('click', function (ev) {
       if (!this.querySelector('iframe')) {
         this.innerHTML =
         //'<p style="margin: 5px 0;">Espace associatif, 53 Impasse de l\'Odet, 29000 Quimper</p>' +
         '<iframe width="580" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-4.090958833694458%2C47.993838424208114%2C-4.087048172950745%2C47.99702976882174&amp;layer=mapnik&amp;marker=47.99543232628124%2C-4.089000821113586" style="border: 1px solid black"></iframe><br/><small><a href="http://www.openstreetmap.org/?mlat=47.99543&amp;mlon=-4.08900#map=18/47.99543/-4.08900">Voir la carte sur OpenStreetMap</a></small>';
         this.classList.remove('preclick');
       }
     });
   });

})(this);﻿
