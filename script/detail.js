$(".toubuyinru").load("./../pages/header.html");
$(".detail_bot111").load("./../pages/bottom.html");

// 数字增加、减少的效果
var detail_jianhao = $1(".detail_jianhao");
var detail_number = $1(".detail_number");
var detail_jiahao = $1(".detail_jiahao");

// 加法
detail_jiahao.onclick = function () {
  var valnu = detail_number.innerHTML;
  var valnu1 = Number(valnu);
  valnu1 += 1;
  detail_number.innerHTML = valnu1;
};

// 减法
detail_jianhao.onclick = function () {
  var valnu = detail_number.innerHTML;

  var valnu1 = Number(valnu);
  valnu1 -= 1;
  if (valnu <= 1) {
    valnu1 = 1;
  }
  detail_number.innerHTML = valnu1;
};

// 点击跳转到首页
$(".detail_firstp").click(function () {
  location.href = "./../pages/index.html";
});
// 点击跳转到团购页面
$(".detail_shopping").click(function () {
  location.href = "./../pages/list.html";
});

// ————————————————————————放大镜部分————————————————
var left = document.querySelector(".detail_goodsleft");
var mask = document.querySelector(".detail_maxmask");
var maxBox = document.querySelector(".detail_goodsright");
var maxImg = document.querySelector(".detail_goodsright img");

left.onmouseenter = function () {
  mask.style.display = "block";
  maxBox.style.display = "block";
};
left.onmouseleave = function () {
  mask.style.display = "none";
  maxBox.style.display = "none";
};
left.onmousemove = function (ev) {
  var e = ev || event;
  // 蒙板的定位值
  var maskX = e.pageX - offset(left, false).left - mask.clientWidth / 2;
  var maskY = e.pageY - offset(left, false).top - mask.clientHeight / 2;

  // 边界判断
  if (maskX <= 0) {
    maskX = 0;
  }
  if (maskX >= left.clientWidth - mask.clientWidth) {
    maskX = left.clientWidth - mask.clientWidth;
  }
  if (maskY <= 0) {
    maskY = 0;
  }
  if (maskY >= left.clientHeight - mask.clientHeight) {
    maskY = left.clientHeight - mask.clientHeight;
  }
  mask.style.left = maskX + "px";
  mask.style.top = maskY + "px";

  // 移动比例
  var scaleX = maskX / (left.clientWidth - mask.clientWidth);
  var scaleY = maskY / (left.clientHeight - mask.clientHeight);

  // 大图移动的坐标
  var maxImgX = scaleX * (maxImg.clientWidth - maxBox.clientWidth);
  var maxImgY = scaleY * (maxImg.clientHeight - maxBox.clientHeight);

  maxImg.style.left = -maxImgX + "px";
  maxImg.style.top = -maxImgY + "px";
};

// 下面三个移动的照片
$(".detail_goodsbott").on("mouseenter", "img", function () {
  $(this).parent().css("border", "1px solid red");
  $(".detail_goodsleft img").prop("src", $(this).prop("src"));
  $(".detail_goodsright img").prop("src", $(this).prop("src"));
});
$(".detail_goodsbott").on("mouseleave", "img", function () {
  $(this).parent().css("border", "1px solid #ededed");
});

// ajax的部分
var send_src = getCookie("good");
let str = ``;
// console.log();
$.ajax({
  url: "./../data/data.json",
  type: "GET",
  dataType: "json",
  success: function (data) {
    data.forEach((ele, index) => {
      console.log(send_src, ele["src1"]);
      // console.log(ele, index);
      if (ele["src1"] == send_src) {
        // console.log(ele);
        str += `
        <div class="mirr_min1">
        <img src="${ele["src1"]}" alt="" />
        </div>
        <div class="mirr_min2">
        <img src="${ele["src2"]}" alt="" />
         </div>
         <div class="mirr_min3">
        <img src="${ele["src3"]}" alt="" />
         </div>`;
        $(".detail_goodsleft").children().eq(0).attr("src", ele["src1"]);
        $(".detail_goodsright").children().eq(0).attr("src", ele["src1"]);

        //标题
        $(".detailtitle").text(ele["title"]);
        //价格
        $(".detail_price").text(ele["price"]);
      }
    });
    $(".detail_goodsbott").html(str);
  },
});
