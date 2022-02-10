var container = $("#container");
var fixedNode = $("#fixedNode");
var pointer = 0;

var width = 20;
var height = 20;
var rows = 34;
var cols = 70;
var snap = 10;

// CREATING CLONES OF PINK BOX
function onClone() {
  console.log("inside clone");

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
fixedNode.click(onClone);

// BACKGROUND GRIDS
for (var i = 0; i < rows * cols; i++) {
  var y = Math.floor(i / cols) * height;
  var x = (i * width) % (cols * width);
  $("<div grid-cell></div>").css({ top: y, left: x }).prependTo(container);
}
