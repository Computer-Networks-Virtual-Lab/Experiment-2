var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;

var setBtn = $("#setBtn");
var addBtn = document.querySelector("#addBtn");
var grid = document.querySelectorAll(".grid");

function onAddLineInSvg() {
  var node_ = $(".node");
  var switch_ = $(".switch");
  var grid_ = $(".grid");

  $(
    `<line x1="${y1 + 10}" y1="${x1 + 10}" x2="${y2 + 10}" y2="${
      x2 + 10
    }" style='stroke: white; stroke-width: 3px'></line>`
  ).prependTo(document.querySelector("svg"));
  $(".lines").html($(".lines").html());

  node_.css({ "z-index": "1" });
  switch_.css({ "z-index": "1" });
  grid_.css({ "z-index": "-1" });
}
setBtn.click(onAddLineInSvg);

addBtn.addEventListener("click", () => {
  var node_ = $(".node");
  var switch_ = $(".switch");
  var grid_ = $(".grid");

  node_.css({ "z-index": "-1" });
  switch_.css({ "z-index": "-1" });
  grid_.css({ "z-index": "1" });

  grid.forEach((item) => {
    item.addEventListener("click", () => {
      var x = gsap.getProperty(item, "top");
      var y = gsap.getProperty(item, "left");
      console.log(`X: ${x}, Y: ${y}`);
      document.body.addEventListener("keypress", (e) => {
        if (e.key == "o") {
          x1 = x;
          y1 = y;
        }
        if (e.key == "p") {
          x2 = x;
          y2 = y;
        }
        console.log(`X1: ${x1}, Y1: ${y1}, key: ${e.key}`);
        console.log(`X2: ${x2}, Y2: ${y2}, key: ${e.key}`);
        console.log(e.key);
      });
    });
  });
});
