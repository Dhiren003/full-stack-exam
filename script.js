$(function () {
  /* ───────────────────────────────────────────────
     STATE
  ─────────────────────────────────────────────── */
  let data = [];   // [{id, name, slides:[…]}, …]
  let activeCat = 0;    // index into data[]
  let activeSlide = 0;    // current slide index

  /* ───────────────────────────────────────────────
     FETCH
  ─────────────────────────────────────────────── */
  $.getJSON('data.php')
    .done(function (res) {
      data = res;
      if (!data.length) { data = sampleData(); }
      buildDesktop();
      buildMobile();
      setActiveTab(0);
    })
    .fail(function () {
      data = sampleData();
      buildDesktop();
      buildMobile();
      setActiveTab(0);
    })
    .always(function () {
      $('#spinner').addClass('hidden');
    });

  /* ───────────────────────────────────────────────
     BUILD — DESKTOP
  ─────────────────────────────────────────────── */

  /* SVG icons per category index (cycles if more than 4) */
  var tabIcons = [
    /* 0 learning/monitor */ '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="62px" height="62px" viewBox="0 0 62 62" enable-background="new 0 0 62 62" xml:space="preserve"> <g> <path fill="#FFFFFF" d="M54.819,39.474c0,2.674-2.168,4.843-4.843,4.843c-2.674,0-4.842-2.169-4.842-4.843c0-2.674,2.168-4.843,4.842-4.843C52.651,34.631,54.819,36.8,54.819,39.474"/><circle fill="none" stroke="#696969" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="49.977" cy="39.474" r="4.843"/><path fill="#FFFFFF" d="M39.678,56.158c0-5.688,4.611-10.299,10.299-10.299c5.687,0,10.298,4.611,10.298,10.299H39.678z"/><path fill="none" stroke="#696969" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M39.678,56.158c0-5.688,4.611-10.299,10.299-10.299c5.687,0,10.298,4.611,10.298,10.299H39.678z"/><path fill="#FFFFFF" d="M16.866,39.474c0,2.674-2.168,4.843-4.843,4.843c-2.674,0-4.842-2.169-4.842-4.843c0-2.674,2.168-4.843,4.842-4.843C14.698,34.631,16.866,36.8,16.866,39.474"/><circle fill="none" stroke="#696969" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="12.024" cy="39.474" r="4.843"/><path fill="#FFFFFF" d="M1.725,56.158c0-5.688,4.611-10.299,10.299-10.299c5.687,0,10.298,4.611,10.298,10.299H1.725z"/><path fill="none" stroke="#696969" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M1.725,56.158c0-5.688,4.611-10.299,10.299-10.299c5.687,0,10.298,4.611,10.298,10.299H1.725z"/><path fill="#FFFFFF" d="M35.843,44.317c0,2.674-2.168,4.843-4.843,4.843c-2.674,0-4.842-2.169-4.842-4.843c0-2.674,2.168-4.843,4.842-4.843C33.675,39.474,35.843,41.643,35.843,44.317"/><circle fill="none" stroke="#696969" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="31" cy="44.317" r="4.843"/><path fill="#FFFFFF" d="M20.702,61c0-5.688,4.611-10.299,10.299-10.299c5.687,0,10.298,4.611,10.298,10.299H20.702z"/><path fill="none" stroke="#696969" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M20.702,61c0-5.688,4.611-10.299,10.299-10.299c5.687,0,10.298,4.611,10.298,10.299H20.702z"/><path fill="none" stroke="#11324D" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M49.449,26.831H12.551c-1.105,0-2-0.895-2-2V3c0-1.104,0.895-2,2-2h36.898c1.105,0,2,0.896,2,2v21.831C51.449,25.936,50.554,26.831,49.449,26.831z"/><rect x="13.78" y="4.253" fill="none" stroke="#696969" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="34.441" height="19.327"/><line fill="none" stroke="#11324D" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="34.523" y1="26.831" x2="34.523" y2="33.266"/><line fill="none" stroke="#11324D" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="27.478" y1="26.831" x2="27.478" y2="33.266"/><line fill="none" stroke="#11324D" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="22.198" y1="33.266" x2="39.803" y2="33.266"/><path fill="#FFFFFF" d="M26.795,11.264c0,1.974-1.6,3.575-3.575,3.575c-1.974,0-3.574-1.601-3.574-3.575c0-1.974,1.6-3.575,3.574-3.575C25.195,7.689,26.795,9.29,26.795,11.264"/><circle fill="none" stroke="#BA351E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="23.22" cy="11.264" r="3.575"/><path fill="none" stroke="#BA351E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M37.465,11.617c-1.052-0.863-1.915,0.317-1.915,0.317c-3.168,4.688-11.083,4.145-11.083,4.145l-0.185-0.015c-0.396-0.076-0.611-0.087-1.062-0.087c-4.199,0-7.602,3.403-7.602,7.602h13.715c0-0.331-0.057-0.95-0.057-0.95s-0.299-3.202,0.615-4.361c2.474-0.308,5.758-1.242,7.574-3.929C37.465,14.339,38.72,12.647,37.465,11.617z"/><line fill="none" stroke="#BA351E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="37.465" y1="11.617" x2="44.23" y2="7.689"/></g></svg>',

    /* 1 technology/cloud */ '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="62px" height="62px" viewBox="0 0 62 62" enable-background="new 0 0 62 62" xml:space="preserve"><g><path fill="none" stroke="#BA351E" stroke-width="0.8592" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M44.458,11.629c0.001-0.038,0.011-0.072,0.011-0.11c0-4.663-3.78-8.443-8.444-8.443c-4.663,0-8.443,3.781-8.443,8.443c0,0.109,0.027,0.21,0.032,0.317c-0.655-0.327-1.383-0.528-2.165-0.528c-2.694,0-4.878,2.183-4.878,4.878c0,0.18,0.007,0.519-0.069,0.489c-0.309-0.122-1.165-0.489-1.733-0.489c-1.699,0-3.076,1.376-3.076,3.076c0,1.699,1.377,3.076,3.076,3.076h24.599c2.987,0,5.41-2.422,5.41-5.41C48.778,14.314,46.923,12.134,44.458,11.629z"/><line fill="none" stroke="#BA351E" stroke-width="0.8592" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.235" y1="22.338" x2="32.235" y2="37.069"/><path fill="none" stroke="#BA351E" stroke-width="0.8592" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M26.597,22.338v7.201c0,1.317-1.068,2.386-2.386,2.386H10.125c-1.317,0-2.385,1.068-2.385,2.385v7.442"/><path fill="none" stroke="#BA351E" stroke-width="0.8592" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M37.802,22.338v7.201c0,1.317,1.068,2.386,2.386,2.386h14.086c1.317,0,2.385,1.068,2.385,2.385v9.061"/><path fill="none" stroke="#11324D" stroke-width="0.8592" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M44.368,54.565H20.103c-0.949,0-1.718-0.769-1.718-1.718V38.788c0-0.949,0.769-1.718,1.718-1.718h24.265c0.949,0,1.718,0.77,1.718,1.718v14.059C46.086,53.796,45.317,54.565,44.368,54.565z"/><rect x="20.572" y="39.272" fill="none" stroke="#696969" stroke-width="0.8592" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="23.327" height="13.091"/><line fill="none" stroke="#11324D" stroke-width="0.8592" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="34.621" y1="54.565" x2="34.621" y2="58.924"/><line fill="none" stroke="#11324D" stroke-width="0.8592" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="29.849" y1="54.565" x2="29.849" y2="58.924"/>line fill="none" stroke="#11324D" stroke-width="0.8592" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="26.273" y1="58.924" x2="38.197" y2="58.924"/><line fill="none" stroke="#696969" stroke-width="0.8592" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="52.319" y1="45.406" x2="61" y2="45.406"/><line fill="none" stroke="#696969" stroke-width="0.8592" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="52.319" y1="56.195" x2="61" y2="56.195"/><path fill="none" stroke="#11324D" stroke-width="0.8592" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M60.141,58.924h-6.962c-0.474,0-0.859-0.385-0.859-0.859V44.23c0-0.474,0.385-0.859,0.859-0.859h6.962c0.474,0,0.859,0.385,0.859,0.859v13.834C61,58.539,60.615,58.924,60.141,58.924z"/><path fill="none" stroke="#11324D" stroke-width="0.8592" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M13.62,58.924H1.859C1.385,58.924,1,58.539,1,58.065V42.612c0-0.474,0.385-0.859,0.859-0.859H13.62c0.474,0,0.859,0.385,0.859,0.859v15.453C14.479,58.539,14.094,58.924,13.62,58.924z"/><rect x="2.642" y="43.371" fill="none" stroke="#696969" stroke-width="0.8592" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="10.195" height="12.989"/></g></svg>',

    /* 2 communication */    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="62px" height="62px" viewBox="0 0 62 62" enable-background="new 0 0 62 62" xml:space="preserve"><g><polyline fill="none" stroke="#696969" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="52.83,33.465 52.83,1 9.169,1 9.169,33.465 	"/><path fill="none" stroke="#11324D" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M52.83,21.994l4.558,5.734v28.683c0,2.524-2.066,4.589-4.589,4.589H9.201c-2.525,0-4.589-2.065-4.589-4.589V27.729l4.589-5.735"/><line fill="none" stroke="#11324D" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="43.62" y1="44.938" x2="57.388" y2="27.728"/><line fill="none" stroke="#11324D" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="4.613" y1="27.729" x2="18.38" y2="44.938"/><path fill="none" stroke="#11324D" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M57.201,57.691L34.244,37.098c-1.785-1.785-4.706-1.785-6.49,0L4.798,57.691"/><ellipse fill="none" stroke="#BA351E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="34.957" cy="18.723" rx="2.473" ry="8.407"/><line fill="none" stroke="#BA351E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="34.957" y1="10.317" x2="17.685" y2="15.262"/><line fill="none" stroke="#BA351E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="34.957" y1="27.13" x2="17.685" y2="22.185"/><path fill="none" stroke="#BA351E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M17.685,22.185c-0.547,0-0.989-1.55-0.989-3.462c0-1.911,0.442-3.461,0.989-3.461"/><path fill="none" stroke="#BA351E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M32.584,16.314c1.097,0.253,1.914,1.236,1.914,2.409c0,1.172-0.816,2.154-1.91,2.409"/><path fill="none" stroke="#BA351E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M16.632,21.132c-1.097-0.253-1.914-1.235-1.914-2.409c0-1.173,0.816-2.154,1.91-2.408"/><path fill="none" stroke="#BA351E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M28.07,25.387v2.967c0,0.544-0.428,0.867-0.951,0.717l-5.021-1.434c-0.523-0.15-0.951-0.717-0.951-1.261v-2.967"/><line fill="none" stroke="#BA351E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="39.997" y1="12.789" x2="44.308" y2="11.269"/><line fill="none" stroke="#BA351E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="39.997" y1="24.68" x2="44.308" y2="26.2"/><line fill="none" stroke="#BA351E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="40.169" y1="18.724" x2="45.78" y2="18.724"/></g></svg>',
  ];

  function buildDesktop() {
    var $tabs = $('#tabList').empty();
    var $panels = $('#panelContainer').empty();

    data.forEach(function (cat, i) {
      var count = cat.slides ? cat.slides.length : 0;
      var iconSvg = tabIcons[i % tabIcons.length];

      /* Tab button with icon box */
      $tabs.append(
        '<button class="tab-btn" data-i="' + i + '">'
        + '<span class="tab-icon-box">' + iconSvg + '</span>'
        + '<span class="tab-name">' + esc(cat.name) + '</span>'
        + '</button>'
      );

      /* Slide HTML */
      var slidesHtml = '';
      (cat.slides || []).forEach(function (s) {
        slidesHtml +=
          '<div class="slide-wrap" data-img="' + esc(s.image_url) + '" data-title="' + esc(s.title) + '">'
          + '<span class="slide-label">' + esc(s.title) + '</span>'
          + '<h2 class="slide-title">' + esc(s.description ? s.description.split(' ').slice(0, 4).join(' ').toUpperCase() : cat.name.toUpperCase()) + '</h2>'
          + '<a href="#" class="slide-learn">Learn More'
          + '<svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'
          + '</a>'
          + '</div>';
      });

      /* Panel — no nav arrows (dots only per design) */
      $panels.append(
        '<div class="cat-panel" id="panel-' + i + '">'
        + '<div class="content-slider" id="slider-' + i + '">' + slidesHtml + '</div>'
        + '<div class="slider-nav"></div>'
        + '</div>'
      );

      /* Init slick */
      var $sl = $('#slider-' + i);
      $sl.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        speed: 500,
        cssEase: 'ease'
      });

      /* After slide changes → update counter + col3 */
      $sl.on('afterChange', function (e, slick, cur) {
        var total = (data[i].slides || []).length;
        $('#ctr-' + i).text((cur + 1) + ' / ' + total);
        if (i === activeCat) updateFeatured(i, cur);
      });
    });

    /* Tab click */
    $(document).on('click', '.tab-btn', function () {
      setActiveTab($(this).data('i'));
    });

    /* Arrow clicks */
    $(document).on('click', '.arrow-prev', function () {
      $('#slider-' + $(this).data('p')).slick('slickPrev');
    });
    $(document).on('click', '.arrow-next', function () {
      $('#slider-' + $(this).data('p')).slick('slickNext');
    });
  }

  /* Switch active tab */
  function setActiveTab(i) {
    activeCat = i;
    activeSlide = 0;

    $('.tab-btn').removeClass('active');
    $('.tab-btn[data-i="' + i + '"]').addClass('active');

    $('.cat-panel').removeClass('active');
    $('#panel-' + i).addClass('active');

    $('#slider-' + i).slick('slickGoTo', 0, true);
    updateFeatured(i, 0);
  }

  /* Update Col 3 image */
  function updateFeatured(catI, slideI) {
    var slides = (data[catI] || {}).slides || [];
    var slide = slides[slideI];
    if (!slide) return;

    var $img = $('#featImg');
    $img.addClass('fading');
    setTimeout(function () {
      $img.attr('src', slide.image_url).attr('alt', slide.title);
      $('#featCaption').text(slide.title);
      $img.removeClass('fading');
    }, 250);
  }

  /* ───────────────────────────────────────────────
     BUILD — MOBILE ACCORDION
  ─────────────────────────────────────────────── */
  function buildMobile() {
    var $acc = $('#accordionContainer').empty();

    data.forEach(function (cat, i) {
      var slidesHtml = '';
      var iconSvg = tabIcons[i % tabIcons.length];

      (cat.slides || []).forEach(function (s) {
        slidesHtml +=
          '<div class="mobile-slide" style="background-image:url(\'' + esc(s.image_url) + '\')">'
          + '<div class="mobile-slide-content">'
          + '<span class="slide-label">' + esc(s.title) + '</span>'
          + '<h3 class="slide-title">' + esc(s.description) + '</h3>'
          + '<a href="#" class="slide-learn">Learn More'
          + '<svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'
          + '</a>'
          + '</div></div>';
      });

      $acc.append(
        '<div class="acc-item">'
        + '<button class="acc-trigger' + (i === 0 ? ' open' : '') + '" data-acc="' + i + '">'
        + '<span class="acc-left"><span class="tab-icon-box">' + iconSvg + '</span>' + esc(cat.name) + '</span>'
        + '<span class="acc-icon"></span>'
        + '</button>'
        + '<div class="acc-panel' + (i === 0 ? ' open' : '') + '" id="acc-' + i + '">'
        + '<div class="mobile-slider" id="mslider-' + i + '">' + slidesHtml + '</div>'
        + '</div>'
        + '</div>'
      );
    });

    /* Init first accordion's slider */
    initMobileSlider(0);

    /* Accordion toggle */
    $(document).on('click', '.acc-trigger', function () {
      var idx = $(this).data('acc');
      var isOpen = $(this).hasClass('open');

      $('.acc-trigger').removeClass('open');
      $('.acc-panel').removeClass('open');

      if (!isOpen) {
        $(this).addClass('open');
        $('#acc-' + idx).addClass('open');
        initMobileSlider(idx);
      }
    });
  }

  function initMobileSlider(i) {
    var $s = $('#mslider-' + i);
    if (!$s.hasClass('slick-initialized')) {
      $s.slick({ slidesToShow: 1, slidesToScroll: 1, dots: true, arrows: true, speed: 450 });
    }
  }

  /* ───────────────────────────────────────────────
     HELPERS
  ─────────────────────────────────────────────── */
  function esc(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function sampleData() {
    return [
      {
        id: 1, name: 'Learning',
        slides: [
          { id: 1, title: 'Digital Learning Infrastructure', description: 'Usability enchancement and Training for Transaction Portal for Customers', image_url: 'images/DL-Learning-1.jpg' }
        ]
      },
      {
        id: 2, name: 'Technology',
        slides: [
          { id: 2, title: 'New Technologies', description: 'Usability enchancement and Training for Transaction Portal for Customers', image_url: 'images/DL-Technology.jpg' }
        ]
      },
      {
        id: 3, name: 'Communication',
        slides: [
          { id: 3, title: 'Communication Matters', description: 'Usability enchancement and Training for Transaction Portal for Customers', image_url: 'images/DL-Communication.jpg' }
        ]
      }
    ];
  }
});