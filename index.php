<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Full Stack Exam</title>

  <!-- Bootstrap 4 -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <!-- Slick -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Source+Sans+Pro:wght@300;400;600&display=swap" rel="stylesheet">

  <link href="style.css" rel="stylesheet">

</head>
<body>

<!-- Spinner -->
<div class="spinner-overlay" id="spinner"><div class="spinner"></div></div>

<!-- DESKTOP LAYOUT  (≥ 992px) -->
<div class="page-wrapper" id="desktopWrapper">

  <!-- Section heading -->
  <div class="section-heading">
    <h1>DelphianLogic in Action</h1>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo</p>
  </div>

  <div class="showcase" id="desktopView">

    <!-- COL 1: Tabs -->
    <aside class="col-tabs" id="colTabs">
      <div id="tabList"><!-- filled by JS --></div>
    </aside>

    <!-- COL 2: Content slider -->
    <div class="col-slider" id="colSlider">
      <div id="panelContainer"><!-- filled by JS --></div>
    </div>

    <!-- COL 3: Featured image -->
    <div class="col-image" id="colImage">
      <div class="img-inner">
        <img class="feat-img" id="featImg" src="" alt="">
      </div>
    </div>

  </div>

</div><!-- /page-wrapper -->

<!-- MOBILE LAYOUT  (< 992px) -->
<div class="mobile-view" id="mobileView">
  <div id="accordionContainer"><!-- filled by JS --></div>
</div>

<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
<script src="script.js"></script>
</body>
</html>
