let RedisOpe = require("./Public/Redis");
const RedisC = new RedisOpe.RedisOpe
const  Redis = RedisC.linkRedis
const Sequelize = require('./Public/SqlDB');
const Fun =require('./Public/CommFun')
const Model= require('./Model/shujutongji');
let Observer = require("./Controller/index");
const config = require("./config")

global.Redis = Redis

Redis.select(config.configMysql.redisName,(err)=>{  //选择相应得数据库
    if (err){
        console.log("error when select the db");
    } else {
         console.log("select db ok")
    }
});


global.y='null';


Observer.on('creatTable',function(){

    let date =Fun.getDay(0)
    var date1=new Date; 
    let y = date1.getFullYear()+1
    //date = '2019-12-31'

    let item= date.split('-') //用于检测是不是最后一天
    if(item[1] =='12'&& item[2] == '31'){ //最后一天了
        y= parseInt(item[0])+ 1 
        let M =new Model(y)  //定义模型，模型不能写死了
        console.log(y,'开始')
        try{
            Sequelize.Sequelize.sync().then(function (res) {
                console.log('创建了表')
            })
        }catch (e) {
            console.log(e)
        }
    }else{
        let M =new Model(item[0])   
    }
})

//Observer.emit('creatTable')
 //redis用的是哈希,所以先吧格式定一下
 
let SchoolinitJson={  //学校的
    keys:'',
    schoolid:0,
    total:0,
    total_1:0,
    normal:0,
    normal_1:0,
    eat_13:0,
    eat_13_1:0,
    normal_13:0,
    normal_13_1:0,
    normal_19:0,
    normal_19_1:0,
    match:0,
    match_1:0,
    ai_total:0,
    ai_13:0,
    ai_19:0,
    n_win:0,
    n_lost:0,
    n_draw:0,
    m_win:0,
    m_lost:0,
    m_draw:0,
    ai_win_13:0,
    ai_lost_13:0,
    ai_win_19:0,
    ai_lost_19:0,
    pt_work:0,
    xx_work:0,
    jc_work:0,
    fl_work:0,
    yy_download:0,
    chuangguan:0,
    date:0,
}

let FxinitJson={  //学校的
    keys:'',
    schoolid:0,
    fenxid:0,
    total:0,
    total_1:0,
    normal:0,
    normal_1:0,
    eat_13:0,
    eat_13_1:0,
    normal_13:0,
    normal_13_1:0,
    normal_19:0,
    normal_19_1:0,
    match:0,
    match_1:0,
    ai_total:0,
    ai_13:0,
    ai_19:0,
    n_win:0,
    n_lost:0,
    n_draw:0,
    m_win:0,
    m_lost:0,
    m_draw:0,
    ai_win_13:0,
    ai_lost_13:0,
    ai_win_19:0,
    ai_lost_19:0,
    pt_work:0,
    xx_work:0,
    jc_work:0,
    fl_work:0,
    yy_download:0,
    chuangguan:0,
    date:0,
}

let ClassinitJson={  //班级的
    keys:'',
    schoolid:0,
    classid:0,
    total:0,
    total_1:0,
    normal:0,
    normal_1:0,
    eat_13:0,
    eat_13_1:0,
    normal_13:0,
    normal_13_1:0,
    normal_19:0,
    normal_19_1:0,
    match:0,
    match_1:0,
    ai_total:0,
    ai_13:0,
    ai_19:0,
    n_win:0,
    n_lost:0,
    n_draw:0,
    m_win:0,
    m_lost:0,
    m_draw:0,
    ai_win_13:0,
    ai_lost_13:0,
    ai_win_19:0,
    ai_lost_19:0,
    pt_work:0,
    xx_work:0,
    jc_work:0,
    fl_work:0,
    yy_download:0,
    chuangguan:0,
    date:0,
}
let XinboinitJson={  
    keys:'',
    xinboid:0,
    total:0,
    total_1:0,
    normal:0,
    normal_1:0,
    eat_13:0,
    eat_13_1:0,
    normal_13:0,
    normal_13_1:0,
    normal_19:0,
    normal_19_1:0,
    match:0,
    match_1:0,
    ai_total:0,
    ai_13:0,
    ai_19:0,
    n_win:0,
    n_lost:0,
    n_draw:0,
    m_win:0,
    m_lost:0,
    m_draw:0,
    ai_win_13:0,
    ai_lost_13:0,
    ai_win_19:0,
    ai_lost_19:0,
    pt_work:0,
    xx_work:0,
    jc_work:0,
    fl_work:0,
    yy_download:0,
    chuangguan:0,
    date:0,
}

function splitJson(array){
    let a=['total','normal','eat_13','normal_13','normal_19','match']
    for (var item in array){
        for (var i=0;i<a.length;i++){
            if(item == a[i]){
                if(array[item] != 0 ){ //说明有值,无值就不操作
                    let vc =array[item].split('-')
                    array[item] = vc[0]
                    array[item+'_1'] = vc[1]
                }
            }
        }
    }
    return array
}

 async function ceshi(name1,items,schoolid,date,Obj){
    let name = items
    let NameArray = items.split('_')
    let addJson = ''
    if(name1 == 'school*'){
        addJson =  SchoolinitJson
      }else if(name1 == 'fx*'){
        addJson =  FxinitJson
      }else if(name1 == 'class*'){
        addJson =  ClassinitJson
      }else if(name1 == 'xinbo*'){
        addJson =  XinboinitJson
      }
     // console.log(name)
         await Redis.hgetall(name, async (err,res)=>{
             if(err){
             }else{
                addJson.keys = name
                if(name1 == 'school*'){
                    addJson.schoolid = schoolid
                  }else if(name1 == 'fx*'){
                    addJson.schoolid = schoolid
                    addJson.fenxid= NameArray[2]
                  }else if(name1 == 'class*'){
                    addJson.schoolid = schoolid
                    addJson.classid  = NameArray[2]
                  }else if(name1 == 'xinbo*'){
                    addJson.xinboid = NameArray[0]
                  }
               
               
               
               addJson.date = date
               
               for( var item in  res){
                   for (var Keyitem in addJson){
                       if(item == Keyitem){
                           addJson[item] = res[item]
                       }
                   }
               }
           
              addJson = splitJson(addJson)
             }
             
         
         
         try{
              if(name1 == 'school*'){
               //console.log(addJson)
                await  Obj.school_tongji.create(addJson).then(res=>{
                    if(res.length>0){
                        Redis.del(name)
                    }
                   
                })
              }else if(name1 == 'fx*'){
              //  console.log(addJson)
                await  Obj.fx_tongji.create(addJson).then(res=>{
                   // console.log(JSON.stringify(res))
                    if(res.length>0){
                        Redis.del(name)
                    }
                 })
              }else if(name1 == 'class*'){
             //   console.log(addJson)
                await  Obj.class_tongji.create(addJson).then(res=>{
                    if(res.length>0){
                        Redis.del(name)
                    }
                })
              }else if(name1 == 'xinbo*'){
               //    console.log(addJson)
                await  Obj.xinbo_tongji.create(addJson).then(res=>{
                    if(res.length>0){
                        Redis.del(name)
                    }
                })
              }
               
          }catch(e){
            console.log('插入报错,准备崩掉服务器：啦啦啦',c)
          }
        })
            //   await Redis.del(name)
         // console.log('执行结束')
}


let NameDB = ['school*','fx*','class*','xinbo*']

async function  a(name){  //执行一次全部存光
        let date =Fun.getDay(0)
        let item= date.split('-') 
        let M =new Model(item[0]) 
        let count = 0 
        let Num = 0
        let daycount = 0
        let CurDate = new Date
        // Redis.keys('school*2019-12-11', async function (err,v)
        Redis.keys(name, async function (err,v) { //学校
            var date=new Date;
            let y = date.getFullYear()  //获取系统年
            //操作100条休息2分钟
            console.log(name+'：'+v.length,'所有的条目数')
            let errorItem =[]
            for (var i=0;i<v.length;i++){
                //console.log(v[i])

                let array = v[i].split('_')  //对keys值进行分解

                let curDay =Fun.getDay(0)  //当前日期
                //console.log('name:'+v[i]+'日期:'+array[2]+'当前日期：'+curDay)
               let keydate = ''
                if(name == 'school*'){
                    keydate = array[2]
                  }else if(name == 'fx*'){
                    keydate = array[3]
                  }else if(name == 'class*'){
                    keydate = array[3]
                  }else if(name == 'xinbo*'){
                    keydate = array[1]
                  }


                
              //  let countDaty = Fun.datedifference(array[3],curDay)  
                let countDaty = Fun.datedifference(keydate,curDay) //亲妈炸了，学校的用2
                let D1  = new Date
                let D2 = D1 - CurDate
                if(D2 > 4000){
                    CurDate = D1
                    console.log(name+'目前运行到第：'+i+'个了')
                }
                if(countDaty<90){
                    daycount++
                    continue
                }
                //console.log(i)
                count++
                if(count%800 == 0 && count!= 0 ){
                    Num++
                   // console.log(name+':'+Num+'轮')
                   // console.log('3个月以内的:'+daycount+'个')
                    Fun.Sleep(100)
                }
              
                 // Observer.emit('ChangeSchool',v[i],curYear,array[1],array[2],M)  //key，年份，type类别，学校号，日期
               
                await  ceshi(name,v[i],array[1],keydate,M)
                if(i == v.length-1){
                  //  console.log(name+'结束了,一共有：'+count+'个')
                    //console.log(name+':'+errorItem)
                }
            }
            
        })
}
//  a('fx*')
//  a('class*')
//  a('xinbo*')
//  a('school*')





setInterval(function () { 
    let shijian=new Date()
    //时分秒
    let hours = shijian.getHours();
    let minutes = shijian.getMinutes();
    let seconds = shijian.getSeconds();

    if(hours=='00'&&minutes=='00'&&seconds<'22'&&seconds>'11'){
        Observer.emit('creatTable')  //执行数据库检查操作
        a('school*')
    }else if(hours=='00'&&minutes=='00'&&seconds<'22'&&seconds>'11'){
        a('fx*')
    }else if(hours=='02'&&minutes=='00'&&seconds<'22'&&seconds>'11'){
        a('class*')
    } else if(hours=='03'&&minutes=='00'&&seconds<'22'&&seconds>'11'){
        a('xinbo*')
        // 十秒运行一次
         //console.log('时:',shijian.getHours(),'分:',shijian.getMinutes(),'秒:',shijian.getSeconds())
    }

}, 10000);

