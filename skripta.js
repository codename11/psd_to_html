$(document).ready(function(){

  $("#lupa1").click(function(){
      $("#search-form").addClass("slideInLeft");
      $("#search-form").css({"display": "block"});
      $("#lupa2").show(500,"linear");
      
      $(this).hide();
      $("#nav-left").hide();

  });

  $("#lupa2").click(function(event){
      event.preventDefault();
      alert("blah");
      
  });

  $('#myCarousel').carousel({
    interval: 10000
  })
  
  $('.carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    }
    else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });

  $(".row.prices").on("mouseenter", function () {
    console.log($(this).children()[0].style.borderRight);
    $(this).children()[0].style.borderRight = "0px dotted gray";
    $(this).children()[1].style.borderLeft = "1px dotted gray";
    $(this).addClass('scale');
    $(this).addClass('scaleTo');
    $(this).children()[1].children[1].style.display = "block";
  });

  $(".row.prices").on("mouseleave", function () {
    $(this).children()[0].style.borderRight = "1px dotted gray";
    $(this).children()[1].style.borderLeft = "0px dotted gray";
    $(this).removeClass('scaleTo');
    $(this).children()[1].children[1].style.display = "none";
  });
      
});

