<?php
header('Content-Type:text/html;charset=utf-8');

$type = $_REQUEST['type'];
$user = $_REQUEST['user'];
$pass = $_REQUEST['pass'];

// 1.连接数据库
$link = mysqli_connect('localhost','root','123456','txt');
if (!$link) {
    echo '{"err":0,"msg":"连接失败"}';
    die();
}
// 2.设置字符集
mysqli_set_charset($link,'utf8');
// 3.判断是登录还是注册
if ($type === 'login') {
   $login_sql = "select * from account where user='$user' and pass='$pass'";
   $login_res = mysqli_query($link,$login_sql);
   $login_arr = mysqli_fetch_all($login_res);
   if (count($login_arr) > 0) {
       echo '{"err":1,"msg":"登录成功"}';
   } else {
        echo '{"err":-1,"msg":"账号或密码错误"}';
   }
}
if ($type === 'add') {
    $add_sql = "select * from account where user='$user'";
    $add_res = mysqli_query($link,$add_sql);
    $add_arr = mysqli_fetch_all($add_res);
    if (count($add_arr) > 0) {
        echo '{"err":2,"msg":"用户名已被占用"}';
        die();
    }
    $insert_sql = "insert into account(user,pass) values('$user','$pass')";
    mysqli_query($link,$insert_sql);
    $num = mysqli_affected_rows($link);//返回受影响条数
    if ($num > 0) {
        echo '{"err":3,"msg":"注册成功"}';
    } else {
        echo '{"err":4,"msg":"注册失败"}';
    }
}

// 关闭连接
mysqli_close($link);

?>
