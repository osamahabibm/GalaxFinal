

$(document).ready(function () {

  
  // tab

  const currentlocation = location.href;
  const menuItem = document.querySelectorAll('a')
  const menulength = menuItem.length;
  for (let i = 0; i < menulength; i++) {
    if (menuItem[i].href === currentlocation) {
      menuItem[i].className = "active";
    }
  }

  // swiper
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
      },
    }
  });

    // animationlie
  AOS.init({ once: true, });

        ///////////////// tab-gallary


});

  $(document).ready(function () {
    $(".imgas-list img").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        let src = $(this).attr("src");
        $(".imgas-main img").attr("src", src);
      });
  });




// flexiblePagination-nwes

 $(function () {
        var flexiblePagination = $("#news").flexiblePagination({
          itemsPerPage: 8,
          itemSelector: "div.result:visible",
          pagingControlsContainer: "#pagingControls",
          showingInfoSelector: "#showingInfo",
          css: {
            btnNumberingClass: "btn btn-sm btn-primary",
            btnFirstClass: "btn btn-sm btn-primary",
            btnLastClass: "btn btn-sm btn-primary",
            btnNextClass: "btn btn-sm btn-primary",
            btnPreviousClass: "btn btn-sm btn-primary",
          },
        });
        flexiblePagination.getController().onPageClick = function (pageNum, e) {
          console.log("You Clicked Page: " + pageNum);
        };
      });



////////// tab in page html and pager
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";

  evt.currentTarget.className += " active";
}

var name = "0";

document.getElementById(name).click();




// flexiblePagination-gusest
      $(function () {
  var flexiblePagination = $('#content').flexiblePagination({
    itemsPerPage: 5,
    itemSelector: 'div.result:visible',
    pagingControlsContainer: '#pagingControls',
    showingInfoSelector: '#showingInfo',
    css: {
      btnNumberingClass: 'btn btn-sm btn-primary',
      btnFirstClass: 'btn btn-sm btn-primary',
      btnLastClass: 'btn btn-sm btn-primary',
      btnNextClass: 'btn btn-sm btn-primary',
      btnPreviousClass: 'btn btn-sm btn-primary'
    }
  });
  flexiblePagination.getController().onPageClick = function (pageNum, e) {
    console.log('You Clicked Page: ' + pageNum)
  };
});


