$(".list_yinrutoubu").load("./../pages/header.html");
$(".list_listbottom").load("./../pages/bottom.html");

$(".list_firstpage").click(function () {
  location.href = "./../pages/index.html";
});

$(".list_xiangxiul li").click(function () {
  var src = $(this).children(0)[0].src;
  // console.log(src);
  setCookie({
    key: "good",
    val: src,
  });
  location.href = "./../pages/detail.html";
});
