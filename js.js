console.log("RavenStudiosX");
$(()=>{
  console.log("jquerry");

  $("#enigma").click(()=>{
    $("#internalPage").html('<object data="http://ravenstudiosx.com/enigma" class="enigma"/>');
    $('html, body').animate({
      scrollTop: ($('#internalPage').offset().top)
    },500);
  });

  $("#iss").click(()=>{
    $("#internalPage").html('<object data="http://ravenstudiosx.com/iss" class="iss"/>');
    $('html, body').animate({
      scrollTop: ($('#internalPage').offset().top)
    },500);
  });

  $("#tictactoe").click(()=>{
    $("#internalPage").html('<object data="http://ravenstudiosx.com/tictactoe" class="tictactoe"/>');
    $('html, body').animate({
      scrollTop: ($('#internalPage').offset().top)
    },500);
  });

  $("#bttf").click(()=>{
    $("#internalPage").html('<object data="http://ravenstudiosx.com/bttf" class="bttf"/>');
    $('html, body').animate({
      scrollTop: ($('#internalPage').offset().top)
    },500);
  });

  $("#modes").click(()=>{
    $("#internalPage").html('<object data="http://ravenstudiosx.com/modes" class="modes"/>');
    $('html, body').animate({
      scrollTop: ($('#internalPage').offset().top)
    },500);
  });

  $("#pomodoro").click(()=>{
    $("#internalPage").html('<object data="http://ravenstudiosx.com/pomodoro" class="pomodoro"/>');
    $('html, body').animate({
      scrollTop: ($('#internalPage').offset().top)
    },500);
  });


});
