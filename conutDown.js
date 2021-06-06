//使用时间戳实现倒计时
//1
function countDown1(time){
    let time1 = +new Date();//返回当前时间总毫秒
    let time2 = +new Date(time);//返回用户输入时间总毫秒
    let times = (time2 - time1)/1000; //剩余时间的总秒数
    let d = parseInt(times / 60 / 60 / 24);//用户输入时间距离当前时间的天数
    d=d<10?'0'+d:d;                        //格式化日期
    let h = parseInt(times/60/60%24);//用户输入时间距离当前时间的小时数
    h = h<10?'0'+h:h;
    let m = parseInt(times/60%60);//用户输入时间距离当前时间的分钟数
    m = m<10?'0'+m:m;
    let s = parseInt(times%60);//用户输入时间距离当前时间的秒数
    s = s<10?'0'+s:s;
    return d+'天'+h+'时'+m+'分'+s+'秒';
}
console.log(countDown1('2021-9-1 08:00:00'));

//2
function countDown2(time){
    let time1 = +new Date();
    let time2 = +new Date(time);
    let times = (time2 - time1)/1000;
    let d = Math.floor(times / 60 / 60 / 24);
    d=d<10?'0'+d:d;
    let h = Math.floor(times/60/60%24);
    h = h<10?'0'+h:h;
    let m = Math.floor(times/60%60);
    m = m<10?'0'+m:m;
    let s = Math.floor(times%60);
    s = s<10?'0'+s:s;
    return d+'天'+h+'时'+m+'分'+s+'秒';
}
console.log(countDown2('2021-9-1 08:00:00'));
let date = new Date();
console.log(date);

