var rowNumber;
var colNumber;
var cellWidth;
var cellHeight;

$(document).ready(function() {
  rowNumber = 16;
  colNumber = 16;
  cellWidth = ($("div#gridArea").width()) / colNumber;
  cellHeight = ($("div#gridArea").height()) / rowNumber;

  CreateTable();

  $("button").click(function() {
    rowNumber = prompt("What is the new cell number on each side?", 16);
    colNumber = rowNumber;
    $("tr").remove();
    cellWidth = ($("div#gridArea").width()) / colNumber;
    cellHeight = ($("div#gridArea").height()) / rowNumber;
    CreateTable();
  });
});

function CreateTable() {
  for (var i = rowNumber; i > 0; i--) {
    $("table").append("<tr id=" + i + "></tr>");
    for (var j = colNumber; j > 0; j--) {
      $("tr#" + i + "").append("<td><div class='cell' style='position:relative;width:" + cellWidth + "px;height:" + cellHeight + "px;background-color:'blue'></td>");
    }
  }
  HoverCells();
}

function HoverCells() {
  $("div.cell").mouseenter(function() {

    if ($(this).css("background-color") === "rgb(255, 255, 255)") {
      $(this).css("background-color", "#" + (Math.random() * 0xFFFFFF << 0).toString(16));
    } else {
      var opac = $(this).css("opacity");
      $(this).css("opacity", opac - 0.1);
    }

  });

}

