setTimeout(function() {
  var wrapperDom = $("<div></div>", {
    "id": "niconicocoa"
  });
  var setupedTextDom = $("<p></p>", {
    addClass: 'status'
  }).text("niconicocoa is ready");

  $("body").append(wrapperDom);
  wrapperDom.append(setupedTextDom);

  $("#punch-start-presentation-left").on("click", function() {
    setTimeout(function() {
      console.log("reset");
      wrapperDom.remove();
      $("body").append(wrapperDom);
    }, 1500);
  });

  var milkcocoa = new MilkCocoa('yieldijxl4pvn.mlkcca.com');
  var milkcocoaDS = milkcocoa.dataStore('messages');
  var num = 0;
  milkcocoaDS.on("push", function(sentData) {
    console.log(sentData.value.content);
    var commentDom = $("<p></p>", {
      addClass: "comment",
      "id": num
    }).text(sentData.value.content).css({
      top: (Math.random() * 90) + "%"
    });
    $("#niconicocoa").append(commentDom);
    setTimeout(function(id) {
      $("#niconicocoa #" + id).remove();
    }, 10000, num);
    num++;
  });

  milkcocoaDS.push({
    content: "niconicocoa setup done!"
  });
}, 1000);
