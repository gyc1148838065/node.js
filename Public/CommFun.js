
function SelfAddDay(D1){ // 日期自增一天一直到现在 
    //let D1 = '2019-07-31';
    while (true) {
        let D =new Date(D1) //如何日期自动+1
        D = new Date((D/1000+86400)*1000)
        D=getDay2(D)
        // D应该是2019-07-02
        let curD = getDay(0)
        
        if(D == curD){
            return null
        }else{
            D1 = D
            console.log(D1)
        }
    }
} 

function Sleep(delay){  //Sleep函数作用就是让程序停止几秒后运行
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
      continue;
    }
}






var getCurDate = function () {

    let DD = new Date();

    let y = DD.getFullYear();
    let m = DD.getMonth()+1;
    let d = DD.getDate();
    if(m<10){
        m='0'+m;
    }
    if (d<10){
        d = '0'+d;
    }
    let StrDate = y+'-'+ m + '-'+d;
    return StrDate;
};
function getDay2(NewDate) {
    var today = new Date(NewDate);
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();

    tMonth = doHandleMonth(tMonth + 1);
    tDate = doHandleMonth(tDate);
    return tYear+"-"+tMonth+"-"+tDate;

}
function getDay(day,curDay){//0  -7
    if (curDay == undefined){
        var today = new Date();
    }else {
        var today = new Date(curDay);
    }
    var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
    today.setTime(targetday_milliseconds); //注意，这行是关键代码

    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();

    tMonth = doHandleMonth(tMonth + 1);
    tDate = doHandleMonth(tDate);
    return tYear+"-"+tMonth+"-"+tDate;

}
function doHandleMonth(month){
    var m = month;

    if(month.toString().length == 1){

        m = "0" + month;

    }
    return m;
}
//两个时间相差天数 兼容firefox chrome
function datedifference(sDate1, sDate2,type) {    //sDate1和sDate2是2006-12-18格式
    var dateSpan,
        tempDate,
        iDays;
    sDate1 = Date.parse(sDate1);
    sDate2 = Date.parse(sDate2);
    dateSpan = sDate2 - sDate1;
    dateSpan = Math.abs(dateSpan);
    iDays = Math.floor(dateSpan / (24 * 3600 * 1000));

    if(type==0){
        iDays = iDays;
    }else {
        iDays = iDays +1;
    }
    return iDays
};
function FormatData(num){
    if(num == undefined||num == null||num==''){
        return 0;
    }
    if(typeof num == 'string'){
        var items=num.split('-');
        return parseInt(items[1]);
    }else {
        return 0;
    }

}

module.exports={
    getCurDate,
    datedifference,
    FormatData,
    CheckIsNull,
    getDay,
    QueryAnyStu,
    getDay2,
    Sleep,
    SelfAddDay
};
