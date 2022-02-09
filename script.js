var container = $("#container");
var fixedNode = $("#fixedNode");
var pointer = 0;

var width = 50;
var height = 50;
var rows = 14;
var cols = 30;
var snap = 50;

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
