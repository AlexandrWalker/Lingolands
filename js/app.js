(() => {
  document.addEventListener('DOMContentLoaded', () => {

    /* Smooth Scroll*/
    $("[data-scroll]").on("click", function (event) {
      event.preventDefault();

      let elementId = $(this).data("scroll");
      let elementOffset = $(elementId).offset().top;

      $("html, body").animate(
        {
          scrollTop: elementOffset - 70,
        },
        700
      );
    });

    // Slick
    $(".hero-bg").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      draggable: false,
      autoplaySpeed: 5000,
      arrows: false,
      infinite: true,
    });

    $(".stories").slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      draggable: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(".reviews__items").slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(".language__items").slick({
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    /* FAQ */
    (function () {
      var faqItem = document.querySelectorAll('.faq__item'),
        active = document.getElementsByClassName('active');

      Array.from(faqItem).forEach(function (item, i, faqItem) {
        item.addEventListener('click', function (e) {
          if (active.length > 0 && active[0] !== this)
            active[0].classList.remove('active');

          this.classList.toggle('active');
        });
      });
    })();

    /* Burger */
    $(function () {
      var burgerBtn = $("#burger");
      var mobileMenuClose = $("#mobileMenu__close");
      var mobileMenu = $("#mobileMenu");

      burgerBtn.on("click", function (event) {
        event.preventDefault();

        burgerBtn.addClass("active");
        mobileMenu.addClass("show");
        document.body.classList.add('no-scroll');
      });

      mobileMenuClose.on("click", function (event) {
        event.preventDefault();

        burgerBtn.removeClass("active");
        mobileMenu.removeClass("show");
        document.body.classList.remove('no-scroll');
      });
    });

    /* Close mobile menu */
    window.addEventListener('keydown', (e) => {
      if (e.key === "Escape") {
        document.querySelector(".mobileMenu").classList.remove("show")
        document.body.classList.remove("no-scroll")
      }
    });

    document.getElementById("mobileMenuBlock").addEventListener('click', event => {
      event._isClickWithInMenu = true;
    });
    document.getElementById("burger").addEventListener('click', event => {
      event._isClickWithInMenu = true;
    });
    document.body.addEventListener('click', event => {
      if (event._isClickWithInMenu) return;
      document.querySelector(".mobileMenu").classList.remove("show")
      document.body.classList.remove("no-scroll")
    });

    /* Button */
    $(function () {
      var navBtn = $(".nav__item-btn");

      navBtn.on("click", function (event) {
        event.preventDefault();

        navBtn.toggleClass("active");
      });
    });

    // Video
    $((function () {
      var t = $(".video"),
        e = $(".video-control"),
        i = $(".myVideo")[0],
        n = $(".video-control__play"),
        o = $(".video-control__pause");
      e.click((function () {
        i.paused ? (i.play(),
          n.addClass("hidden"),
          o.addClass("visible"),
          t.addClass("video-is-playing"),
          i.setAttribute("controls", "controls")) : (i.pause(),
            n.removeClass("hidden"),
            o.removeClass("visible"),
            t.removeClass("video-is-playing"));
      }))
    }));

    $(function () {
      let typeLesson = $('#type-lesson');
      let typeGroup = $('#type-group');
      let priceLesson = $('#price-lesson');
      let priceGroup = $('#price-group');

      typeLesson.on("click", function (event) {
        event.preventDefault();

        typeLesson.addClass("active");
        typeGroup.removeClass("active");
        priceLesson.addClass("show");
        priceGroup.removeClass("show");
      });

      typeGroup.on("click", function (event) {
        event.preventDefault();

        typeLesson.removeClass("active");
        typeGroup.addClass("active");
        priceGroup.addClass("show");
        priceLesson.removeClass("show");
      });
    });

    // Dropdown
    document.querySelectorAll(".dropdown").forEach((function (t) {
      const e = t.querySelector(".dropdown__button"),
        i = t.querySelector(".dropdown__list"),
        o = i.querySelectorAll(".dropdown__list-item"),
        s = t.querySelector(".dropdown__input-hidden");
      e.addEventListener("click", (function (t) {
        i.classList.toggle("dropdown__list--visible"),
          this.classList.add("dropdown__button--active");
      })),
        o.forEach((function (t) {
          t.addEventListener("click", (function (t) {
            t.stopPropagation(),
              e.innerHTML = this.innerHTML,
              e.focus(),
              s.value = this.dataset.value,
              i.classList.remove("dropdown__list--visible");
          }));
        })),
        document.addEventListener("click", (function (t) {
          t.target !== e && (e.classList.remove("dropdown__button--active"),
            i.classList.remove("dropdown__list--visible"));
        })),
        document.addEventListener("keydown", (function (t) {
          "Tab" !== t.key && "Escape" !== t.key || (e.classList.remove("dropdown__button--active"),
            i.classList.remove("dropdown__list--visible"));
        }));
    }));

    $(function () {
      let t = $(".dropdown__list-item--1"),
        e = $(".dropdown__list-item--2"),
        i = $(".dropdown__list-item--3"),
        n = $(".dropdown__list-item--4"),
        o = $(".dropdown__list-item--5");

      t.on("click", function (a) {
        a.preventDefault(),
          t.addClass("dropdown__list-item--active"),
          e.removeClass("dropdown__list-item--active"),
          i.removeClass("dropdown__list-item--active"),
          n.removeClass("dropdown__list-item--active"),
          o.removeClass("dropdown__list-item--active");
      }),

        e.on("click", function (a) {
          a.preventDefault(),
            e.addClass("dropdown__list-item--active"),
            i.removeClass("dropdown__list-item--active"),
            n.removeClass("dropdown__list-item--active"),
            o.removeClass("dropdown__list-item--active"),
            t.removeClass("dropdown__list-item--active");
        }),

        i.on("click", function (a) {
          a.preventDefault(),
            i.addClass("dropdown__list-item--active"),
            n.removeClass("dropdown__list-item--active"),
            o.removeClass("dropdown__list-item--active"),
            t.removeClass("dropdown__list-item--active"),
            e.removeClass("dropdown__list-item--active");
        }),

        n.on("click", function (a) {
          a.preventDefault(),
            n.addClass("dropdown__list-item--active"),
            o.removeClass("dropdown__list-item--active"),
            t.removeClass("dropdown__list-item--active"),
            e.removeClass("dropdown__list-item--active"),
            i.removeClass("dropdown__list-item--active");
        }),

        o.on("click", function (a) {
          a.preventDefault(),
            n.removeClass("dropdown__list-item--active"),
            o.addClass("dropdown__list-item--active"),
            t.removeClass("dropdown__list-item--active"),
            e.removeClass("dropdown__list-item--active"),
            i.removeClass("dropdown__list-item--active");
        });
    });

    // Modals windows
    var close = document.querySelectorAll('.modal_close');
    var openBtn = document.querySelectorAll('.modal-btn');
    var show = document.getElementsByClassName('show');

    Array.from(openBtn, openButton => {
      openButton.addEventListener('click', e => {

        if (show.length != 0) {
          show[0].classList.remove('show');
          show.length++;
        }

        let modalId = e.target.getAttribute('data-modal');
        document.getElementById(modalId).classList.add("show");

        Array.from(close, closeButton => {
          closeButton.addEventListener('click', e => document.getElementById(modalId).classList.remove("show"));

          window.addEventListener('keydown', (e) => {
            if (e.key === "Escape") {
              document.getElementById(modalId).classList.remove("show")
            }
          });

          document.querySelector(".modal.show .modal_content").addEventListener('click', event => {
            event._isClickWithInModal = true;
          });

          document.getElementById(modalId).addEventListener('click', event => {
            if (event._isClickWithInModal) return;
            event.currentTarget.classList.remove('show');
          });
        });
      });
    });

    /* Invalid input */
    $(function () {
      $('input[type="radio"]').click(function () {
        var selectedValue = $('input[type="radio"]:checked').val();
        $("#contact-value").html(selectedValue);
        $("#contact-placeholder").attr('placeholder', 'Укажите ваш ' + selectedValue + '*');
      });
    });

    (function () {
      var button = document.querySelectorAll('input[type="submit"]');
      var input = document.querySelectorAll('input[required]');

      for (var t = 0; t < button.length; t++) {
        button[t].addEventListener('click', function () {
          for (var i = 0; i < input.length; i++) {
            if (input[i].value == '') {
              input[i].classList.add("invalid");
              input[i].placeholder = 'Ошибка';
            } else {
              input[i].classList.remove("invalid");
            }
          }
        });
      }
    })();

  });
})();