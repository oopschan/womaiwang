var ipt1 = document.querySelector(".ipt1");
var val1 = ipt1.value;

$(".ipt1").bind("focus", function () {
  // console.log(this.value);
  this.value = "";
  this.style.color = "red";
  // $(this).css("font-size", "16px");
});
$(".ipt1").bind("blur", function () {
  if (!this.value) {
    this.value = "粮油调味 新品来袭";
  } else {
    this.value = this.value;
  }
});

var float_tit = document.querySelector(".float_tit");
var leftLi3 = document.querySelector(".leftLi3");
var float_tit = document.querySelector(".float_tit");

$(".shen_zhen").toggle(
  function () {
    leftLi3.style.background = "white";
    float_tit.style.display = "block";
  },
  function () {
    leftLi3.style.background = "#f5f5f5";
    float_tit.style.display = "none";
  }
);

$(".can").bind("click", function () {
  leftLi3.style.background = "#f5f5f5";
  float_tit.style.display = "none";
});

var float_rightLi1 = document.querySelector(".float_rightLi1");
var rightLi1 = document.querySelector(".rightLi1");

$(".rightLi1").toggle(
  function () {
    float_rightLi1.style.display = "block";
  },
  function () {
    float_rightLi1.style.display = "none";
  }
);
