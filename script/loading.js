$(".loading_bottom").load("./../pages/bottom.html");

var loadingpass_zhuce = document.querySelector(".loadingpass_zhuce");
loadingpass_zhuce.onclick = function () {
  console.log(123);
  location.href = "./../pages/zhuce.html";
};

var tltNum = document.querySelector(".loadingsecond_input1");
var tltPass = document.querySelector(".loadingsecond_input2");
var denglu = document.querySelector(".loadingpasss_denglu");

// 登陆的账号密码校核-----------
denglu.onclick = function () {
  if (!tltNum.value || !tltPass.value) {
    alert("账号或密码不能为空！");
    return false;
  }

  if (localStorage.getItem(tltNum.value) == tltPass.value) {
    alert("登陆成功自动跳转到首页");
    location.href = "./../pages/index.html";
  } else {
    alert("账号或密码错误");
  }
};
