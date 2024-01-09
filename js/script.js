document.addEventListener("DOMContentLoaded", function () {
  !(function () {
    var e = document.querySelector(".cookie-bar");
    if (!e) return !1;
    var t = e.querySelector(".cookie-bar__close");
    "true" === localStorage.getItem("cookie")
      ? e.remove()
      : ((e.style.display = "flex"),
        t.addEventListener("click", function (t) {
          e.remove(), localStorage.setItem("cookie", "true");
        }));
  })();
  (r = document.querySelectorAll(".tabs")) &&
    r.forEach(function (e) {
      var t = e.querySelectorAll(".tabs__btn"),
        i = e.querySelectorAll(".tabs__item");
      t.forEach(function (e) {
        e.addEventListener("click", function () {
          t.forEach(function (e) {
            e.classList.remove("tabs__btn--active");
          }),
            e.classList.add("tabs__btn--active");
          var r = e.dataset.tabsPath;
          i.forEach(function (e) {
            e.classList.remove("tabs__item--active");
          }),
            document
              .querySelector('[data-tabs-target="'.concat(r, '"]'))
              .classList.add("tabs__item--active");
        });
      });
    });
  var swiper = new Swiper(".tarif_row", {
    slidesPerView: "auto",
    spaceBetween: 0,
    debugger: true,
  });
  var swiper2 = new Swiper(".trade_slide", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
      580: {
        // slidesPerView: 1.2,
        spaceBetween: 40,
      },
    },
    debugger: true,
    navigation: {
      prevEl: ".btn-prev",
      nextEl: ".btn-next",
    },
    loop: true,
  });
  var swiper3 = new Swiper(".tarif_row_mobile", {
    slidesPerView: 1.5,
    spaceBetween: 12,
    debugger: true,
  });
  const modal = document.getElementById("modal-form");

  const modal_removers = document.querySelectorAll(".modal-remover");
  modal_removers.forEach((elem) =>
    elem.addEventListener("click", () => (modal.style.display = "none"))
  );
});

const links = document.querySelectorAll(".nav__link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    window.scroll({
      left: 0,
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});

const getUrlParams = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const entries = urlParams.entries();
  for (const entry of entries) {
    localStorage.setItem(entry[0], entry[1]);
  }

  let afftrack = urlParams.get("afftrack") || localStorage.getItem("afftrack");
  const clickid = urlParams.get("clickid") || localStorage.getItem("clickid");
  const click_id =
    urlParams.get("click_id") || localStorage.getItem("click_id");
  const gclid = urlParams.get("gclid") ?? localStorage.getItem("gclid");

  if (clickid) {
    afftrack += "__clickid-" + clickid;
  } else if (gclid && !afftrack.includes("__CONVTRANSFR__clickid-")) {
    afftrack += "__CONVTRANSFR__clickid-" + gclid;
  }

  return {
    aff: urlParams.get("aff") || localStorage.getItem("aff"),
    afftrack: afftrack,
    aff_model: urlParams.get("aff_model") ?? localStorage.getItem("aff_model"),
    clickid: clickid,
    click_id: click_id,
    idtrader: urlParams.get("idtrader") || localStorage.getItem("idtrader"),
    gclid: gclid,
    uuid: localStorage.getItem("uuid"),
    is_coinbase: localStorage.getItem("is_coinbase"),
    country: localStorage.getItem("country"),
    utm_source: localStorage.getItem("utm_source"),
    utm_medium: localStorage.getItem("utm_medium"),
    utm_campaign: localStorage.getItem("utm_campaign"),
  };
};

getUrlParams();

// плавноная прокрутка по якорям
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

function showIframe() {
  const videoContent = document.querySelector(".video__content");
  const videoIframe = document.querySelector(".video__iframe");

  videoContent.addEventListener("click", () => {
    videoContent.classList.add("video__hide");
    videoIframe.classList.add("video__show");
  });
}
showIframe();

// accordion
function getAccordion() {
  function accordionActive() {
    document
      .querySelectorAll(".accordion.accordion--active")
      .forEach(function (e) {
        const t = e.querySelector(".accordion__list");
        e.classList.remove("accordion--active"), (t.style.maxHeight = null);
      });
  }

  function getShowAccordion() {
    const e = document.querySelectorAll(".accordion");
    if (!e) return !1;
    e.forEach(function (e) {
      const t = e.querySelector(".accordion__btn"),
        i = e.querySelector(".accordion__list");
      t.addEventListener("click", function () {
        !(function (e) {
          return e.classList.contains("accordion--active");
        })(e)
          ? (function (e, t) {
              accordionActive(),
                (t.style.maxHeight = t.scrollHeight + "px"),
                e.classList.add("accordion--active");
            })(e, i)
          : (function (e, t) {
              (t.style.maxHeight = null),
                e.classList.remove("accordion--active");
            })(e, i);
      });
    });
  }
  getShowAccordion();
}

getAccordion();
