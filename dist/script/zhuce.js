$(".zhuce_bottom").load("./../pages/bottom.html");

// 点击 请登录 自动跳转到登陆页面

var zhucetop_con2 = document.querySelector(".zhucetop_con2");
zhucetop_con2.onclick = function () {
  console.log(123);
  location.href = "./../pages/loading.html";
};

// --------------判断账号
var zhuce_account = document.querySelector(".zhuce_account");
var zhuce_tips1 = document.querySelector(".zhuce_tips1");

// console.log(zhuce_tips1.innerHTML);
zhuce_account.onblur = function () {
  var valzh1 = zhuce_account.value;

  var reg = /^1[3456789]\d{9}$/;

  reg.test(valzh1);
  if (!reg.test(valzh1)) {
    zhuce_tips1.innerHTML = "！请输入长度为11位数的电话号码";
  } else {
    zhuce_tips1.innerHTML = " ";
  }
};

var zhuce_psw = document.querySelector(".zhuce_psw");
var zhuce_tips2 = document.querySelector(".zhuce_tips2");

zhuce_psw.onblur = function () {
  var valmm1 = zhuce_psw.value;
  var reg = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))(?!^.*[\u4E00-\u9FA5].*$)^\S{6,20}$/;
  reg.test(valmm1);
  if (!reg.test(valmm1)) {
    zhuce_tips2.innerHTML =
      "请输入6-20位密码，包含大小写英文、数字、特殊符号至少两种以上";
  } else {
    zhuce_tips2.innerHTML = " ";
  }
};

var zhuce_now = document.querySelector(".zhuce_now");

// zhuce_now.onclick = function () {
//   alert("注册成功，自动跳转到登陆页面");
//   location.href = "./../pages/loading.html";
// };

// 注册的数据处理---------------
zhuce_now.onclick = function () {
  if (true) {
    if (!zhuce_account.value || !zhuce_psw.value) {
      alert("账号或密码不能为空！");
      return false;
    }
    var reg = /^1[3456789]\d{9}$/;
    reg.test(zhuce_account.value);
    if (!reg.test(zhuce_account.value)) {
      alert("账号请输入为11位纯数字手机号码");
      return false;
    }
    if (localStorage.getItem(zhuce_account.value)) {
      alert("该用户已被注册");
      return false;
    }

    alert("注册成功，自动跳转到登陆页面");
    location.href = "./../pages/loading.html";
  }

  localStorage.setItem(zhuce_account.value, zhuce_psw.value);
};
