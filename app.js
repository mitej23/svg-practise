// let draw = SVG().addTo("body").size(300, 300);
// var rect = draw.rect("100%", "100%").attr({ fill: "#f06" });

const start = document.getElementById("start");
const end = document.getElementById("end");

//

draggable1 = new PlainDraggable(end);
draggable2 = new PlainDraggable(start);

draggable1.onDrag = function () {
  console.log("darageed");
  if (en !== undefined) {
    line.position();
  }
};

draggable2.onDrag = function () {
  console.log("darageed");
  if (st !== undefined) {
    line.position();
  }
};

var st, en, line;

var evaluateDClick = false;

function dclick() {
  evaluateDClick = !evaluateDClick;
  const arr = [];
  console.log("dclicked", evaluateDClick);
  if (evaluateDClick) {
    start.addEventListener("click", (e) => {
      start.style.backgroundColor = "red";
      arr.push(e.target.id);
    });
    end.addEventListener("click", (e) => {
      end.style.backgroundColor = "red";
      arr.push(e.target.id);
      if (arr.length === 2) {
        st = document.getElementById(arr[0]);
        en = document.getElementById(arr[1]);
        console.log(st, en);
        done();
      }
    });
  }
}

function done() {
  line = new LeaderLine(st, en);
  console.log(line);
  console.log(st, en, " \n before");
}
