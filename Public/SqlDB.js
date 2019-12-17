

function creatSQL(name){  //name 是库名
    const configData = require('../config');
    const Sequelize = require('sequelize');//ORM框架
    let DB = configData.configMysql;
    var Sequelize1 = new Sequelize(name,DB.username,DB.password,{
        host:DB.host,
        dialect:'mysql',
       /* dialectOptions:{

        },*/
        define: {
            //charset: 'latin1'
            /*dialectOptions: {
                collate: 'utf8_general_ci'
            }*/
        },
        pool:{
            max: 5, // 连接池中最大连接数量
            min: 0, // 连接池中最小连接数量
            idle: 10000 //如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
            //有点不懂不明白
        },
        logging:false,
        timezone: '+08:00' //东八时区
    });
    return Sequelize1
}
let Sequelize=creatSQL(DB.DBname);  //指定数据库

module.exports={
    Sequelize
};
