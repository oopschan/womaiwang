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
var header_leftLi3 = document.querySelector(".header_leftLi3");
header_leftLi3.onmouseenter = function () {
  float_tit.style.display = "block";
};
header_leftLi3.onmouseleave = function () {
  float_tit.style.display = "none";
};

$(".can").bind("click", function () {
  leftLi3.style.background = "#f5f5f5";
  float_tit.style.display = "none";
});

// 点击登录或注册跳转页面
var header_leftLi5 = $1(".header_leftLi5");
var header_leftLi6 = $1(".header_leftLi6");
var dengluxiao = $1(".dengluxiao");

header_leftLi5.onclick = function () {
  location.href = "./../pages/loading.html";
};
header_leftLi6.onclick = function () {
  location.href = "./../pages/zhuce.html";
};
dengluxiao.onclick = function () {
  location.href = "./../pages/loading.html";
};

var float_rightLi1 = document.querySelector(".float_rightLi1");
var header_floataccount = document.querySelector(".header_floataccount");

header_floataccount.onmouseenter = function () {
  float_rightLi1.style.display = "block";
};
header_floataccount.onmouseleave = function () {
  float_rightLi1.style.display = "none";
};
