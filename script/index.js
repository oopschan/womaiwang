var nav_thrThr = document.querySelector(".nav_thrThr");
var nav_thrFloat = document.querySelector(".nav_thrFloat");

// 将index.js引出去到外面的文件;
$(".header_nav").load("./header.html");
$(".index_yinrubottom").load("./bottom.html");

// 点击商品跳转list页面
$(".food_box1").click(function () {
  location.href = "./../pages/list.html";
});

// 点击团购跳转到list 页面
$(".nav_thrTwo").click(function () {
  location.href = "./../pages/list.html";
});

// 浮动起来的导航效果
$(".warpFou_Two").on("mouseenter", ".warpFou_TwoLi", function () {
  // console.log(this);
  $(this).children(".warp_showing").css("display", "block");
});
$(".warpFou_Two").on("mouseleave", ".warpFou_TwoLi", function () {
  // console.log(this);
  $(this).children(".warp_showing").css("display", "none");
});

// 因为全部的li用的是相同的类名，所以触发事件时候还触发了其他li事件累加起来了
// $(".warpFou_TwoLi").mouseenter(function () {
//   $(".warp_showing").css("display", "block");
// });
// $(".warpFou_TwoLi").mouseleave(function () {
//   $(".warp_showing").css("display", "none");
// });
// $(".warpFou_TwoLi1").mouseenter(function () {
//   $(".warp_showing").css("display", "block");
// });
// $(".warpFou_TwoLi1").mouseleave(function () {
//   $(".warp_showing").css("display", "none");
// });

// 轮播图的效果------------

var imgs = document.querySelectorAll(".wrapFou1_main img");
var nums = document.querySelectorAll(".wrapFou1_num li");
var prev = document.querySelector(".wrapFou1_prev");
var next = document.querySelector(".wrapFou1_next");
var timer;
// 当前显示图片的下标
var showIndex = 0;
// 上次显示图片的下标
var prevIndex = 0;

// 进入页面执行
animate(imgs[showIndex], { opacity: 1 }, function () {
  // 自动播放下一页
  timer = setInterval(function () {
    moveNext();
  }, 2000);
});

function moveNext() {
  // 重置上次显示的样式
  imgs[prevIndex].className = "";
  nums[prevIndex].className = "";
  // imgs[prevIndex].style.opacity = 0.02;

  // 下标递增
  showIndex++;
  // 判断临界值
  if (showIndex >= imgs.length) {
    showIndex = 0;
  }
  // 当前显示的样式
  imgs[showIndex].className = "wrapFou1_show";
  nums[showIndex].className = "wrapFou1_active";
  // 更新上次显示的下标
  prevIndex = showIndex;

  // 开始动画
  animate(imgs[showIndex], { opacity: 1 });
}

function movePrev() {
  // 重置上次显示的样式
  imgs[prevIndex].className = "";
  nums[prevIndex].className = "";
  imgs[prevIndex].style.opacity = 0.02;

  // 下标递减
  showIndex--;
  // 判断临界值
  if (showIndex < 0) {
    showIndex = imgs.length - 1;
  }
  // 当前显示的样式
  imgs[showIndex].className = "wrapFou1_show";
  nums[showIndex].className = "wrapFou1_active";
  // 更新上次显示的下标
  prevIndex = showIndex;

  // 开始动画
  animate(imgs[showIndex], { opacity: 1 });
}

// 点下一页
next.onclick = function () {
  // 清除所有计时器
  clearInterval(timer);
  clearInterval(imgs[showIndex].timer);

  // 切换到下一页
  moveNext();

  // 开启自动播放到下一页
  timer = setInterval(function () {
    moveNext();
  }, 2000);
};

// 点上一页
prev.onclick = function () {
  // 清除所有计时器
  clearInterval(timer);
  clearInterval(imgs[showIndex].timer);

  // 切换到上一页
  movePrev();

  // 开启自动播放到下一页
  timer = setInterval(function () {
    moveNext();
  }, 2000);
};

for (var i = 0, len = nums.length; i < len; i++) {
  nums[i].index = i;
  nums[i].onclick = function () {
    // 清除所有计时器
    clearInterval(timer);
    clearInterval(imgs[showIndex].timer);

    // 重置上次显示的样式
    imgs[prevIndex].className = "";
    nums[prevIndex].className = "";
    imgs[prevIndex].style.opacity = 0.02;

    showIndex = this.index;

    // 当前显示的样式
    imgs[showIndex].className = "wrapFou1_show";
    nums[showIndex].className = "wrapFou1_active";
    // 更新上次显示的下标
    prevIndex = showIndex;

    // 开始动画
    animate(imgs[showIndex], { opacity: 1 });

    // 开启自动播放到下一页
    timer = setInterval(function () {
      moveNext();
    }, 2000);
  };
}

// 上下页切换图片 效果
$(".warpFou_Thr").mouseenter(function () {
  $(this).find(".wrapFou1_prev").css("display", "block");
  $(this).find(".wrapFou1_next").css("display", "block");
});
$(".warpFou_Thr").mouseleave(function () {
  $(this).find(".wrapFou1_prev").css("display", "none");
  $(this).find(".wrapFou1_next").css("display", "none");
});

// --------------------tab选项卡-----------------------
var food_sele = document.querySelectorAll(".food_sele li");
var food_show2_tab1 = document.querySelectorAll(".food_show2_tab1");
// console.log(food_show2_tab1);
function clearClass() {
  food_sele[0].className = "";
  food_show2_tab1[0].className = "food_show2_tab1";
  food_sele[1].className = "";
  food_show2_tab1[1].className = "food_show2_tab1";
}

food_sele[0].onmouseenter = function () {
  clearClass();
  food_sele[0].className = "active";
  food_show2_tab1[0].className = "food_show2_tab1 show";
};
food_sele[1].onmouseenter = function () {
  clearClass();
  food_sele[1].className = "active";
  food_show2_tab1[1].className = "food_show2_tab1 show";
};
