const configData = require('../config').configMysql;
class RedisOpe{
    constructor(){
        this.Redis = require("redis");
        this.linkRedis = this.Redis.createClient(configData.redisPort,configData.redisHost);    //
    }
    async createRedis(callback){
           await this.linkRedis.on("error",function (error){
                /*console.log("RedisServer is error!\n" + error);*/
                callback('error');
            });
            await this.linkRedis.on('connect',function(){
                /*console.log('redis connect success!');*/
                callback('ok');
            });
        }

}

module.exports={
    RedisOpe
};
//redis操作完成记得关闭redis,关闭方法linkRedis.end(true);
