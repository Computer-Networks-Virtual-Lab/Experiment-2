var container = $("#container");
var fixedNode = $("#fixedNode");
var fixedSwitch = $("#fixedSwitch");
var pointer = 0;

var width = 20;
var height = 20;
var rows = 24;
var cols = 57;
var snap = 20;

// CREATING CLONES OF NODE
function onCloneNode() {
  console.log("inside node clone");

  $(`<div class='node node${pointer}'></div>`)
    .css({ top: 0, left: 0 })
    .prependTo(container);

  const nodeVar = $(`.node${pointer}`);
  console.log("nodeVar :: ", nodeVar);

  Draggable.create(nodeVar, {
    bounds: container,
    onDrag: function () {
      TweenLite.to(nodeVar, 0.5, {
        x: Math.round(this.x / snap) * snap,
        y: Math.round(this.y / snap) * snap,
        ease: Back.easeOut.config(2),
      });
    },
  });
  pointer += 1;
}
fixedNode.click(onCloneNode);

// CREATING CLONES OF SWICTH
function onCloneSwitch() {
  console.log("inside switch clone");

  $(`<div class='switch switch${pointer}'></div>`)
    .css({ top: 0, left: 0 })
    .prependTo(container);

  const switchVar = $(`.switch${pointer}`);
  console.log("switchVar :: ", switchVar);

  Draggable.create(switchVar, {
    bounds: container,
    onDrag: function () {
      TweenLite.to(switchVar, 0.5, {
        x: Math.round(this.x / snap) * snap,
        y: Math.round(this.y / snap) * snap,
        ease: Back.easeOut.config(2),
      });
    },
  });
  pointer += 1;
}
fixedSwitch.click(onCloneSwitch);

// BACKGROUND GRIDS
for (var i = 0; i < rows * cols; i++) {
  var y = Math.floor(i / cols) * height;
  var x = (i * width) % (cols * width);
  $(`<div grid-cell class='grid'></div>`).css({ top: y, left: x }).prependTo(container);
}

// document.querySelectorAll(".grid").forEach(item => {
//   item.addEventListener('click', event => {
//     // var x1 = gsap.getProperty(item, 'x');
//     // var y1 = gsap.getProperty(itme, 'y');
//     // console.log(`X: ${x1}, Y: ${y1}`);
//     console.log("clicked");
//   })
// })
