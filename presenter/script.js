var wrapper = $("<div></div>",{
  "id":"niconicocoa"
}).css({
  position:"fixed",
  top: 0,
  height: "100%",
  left: 0,
  width: "100%",
  zIndex: 99999999999999999,
  pointerEvents: "none",
  color: "#fff",
  textShadow:"1px 2px 0 #000,1px -2px 0 #000,-1px 2px 0 #000,-1px -2px 0 #000,2px 1px 0 #000,2px -1px 0 #000,-2px 1px 0 #000,-2px -1px 0 #000,1px 1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,-1px -1px 0 #000"
});


$("body").on("click",function(){
  wrapperSetup();
})

(function wrapperSetup(){
  $("body").remove(wrapper);
  $("body").append(wrapper);
})

(function setup(){

var milkcocoa = new MilkCocoa('yieldijxl4pvn.mlkcca.com');
var ds = milkcocoa.dataStore('messages');
ds.on("send",function(sentData){
  console.log(sentData);
  var text = $("<p>" + sentData.value.content + "</p>",{
    "class":"comment"
  }).css({
    position:"absolute",
    top: "50%"
  });
  $("#niconicocoa").append(text);
});
