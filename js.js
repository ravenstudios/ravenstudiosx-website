console.log("RavenStudiosX");
$(()=>{
  console.log("jquerry");

  $("#enigma").click(()=>{
    $("#internalPage").html('<object data="http://ravenstudiosx.com/enigma" width="1200px" height="750px" style="border:5px;  margin-left: -50px; ridge blue"/>');
  });

  $("#iss").click(()=>{
    $("#internalPage").html('<object data="http://ravenstudiosx.com/iss" width="1200px" height="800px" style="border:5px;  margin-left: -200px;  ridge blue"/>');
  });

  $("#tictactoe").click(()=>{
    $("#internalPage").html('<object data="http://ravenstudiosx.com/tictactoe" width="1000px" height="600px" style="border:5px;  margin-left: -10px; ridge blue"/>');

  });
});
//style="overflow:auto;border:5px ridge blue"
// margin-left: -200px;;
