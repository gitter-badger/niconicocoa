var milkcocoa = new MilkCocoa('yieldijxl4pvn.mlkcca.com');
var ds = milkcocoa.dataStore('messages');

$("#js-submitBtn").on("click", function() {
  var sendtext = $("#js-inputText").val();
  console.log("send" + sendtext);

  ds.send({
    content: sendtext
  });
})

ds.on('send', function(event) {
  console.log(event.value.content);
});
