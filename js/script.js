$("#js_submitBtn").on("click", function() {
  var milkcocoa = new MilkCocoa('yieldijxl4pvn.mlkcca.com');
  var ds = milkcocoa.dataStore('messages');

  var sendtext = $("#js_inputText").val();
  console.log(sendtext);

  if (!sendtext == "") {
    ds.push({
      content: sendtext
    }, function() {
      location.reload();
    });
  }
})
