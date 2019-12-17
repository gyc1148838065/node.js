let Sequelize = require("../Public/SqlDB");
let sequelize = require('sequelize');
let configData = require('../config');
let config=configData.configMysql
//let Sequelize=creatDB.creatSQL('shujutongji');  //指定数据库

/*var date=new Date;
var y = date.getFullYear()
y = '2020'*/

 Sequelize = Sequelize.Sequelize  

class DBModel{  //根据不同的年份建立不同的SQL模型
    constructor(year){
        this.school_tongji = '',
        this.class_tongji = '',
        this.fx_tongji = '',
        this.xinbo_tongji = ''
        this.creatModel(year)
    }

    creatModel(year){
        let school_tongji=Sequelize.define(config.DBname+year,{
            id:{
                type:sequelize.BIGINT(11),
                autoIncrement: true,
                primaryKey:true,
            },
            keys:sequelize.STRING(32),
            schoolid:sequelize.STRING(20),
            total:sequelize.STRING(32),
            total_1:sequelize.STRING(32),
            normal:sequelize.STRING(32),
            normal_1:sequelize.STRING(32),
            eat_13:sequelize.STRING(32),
            eat_13_1:sequelize.STRING(32),
            normal_13:sequelize.STRING(32),
            normal_13_1:sequelize.STRING(32),
            normal_19:sequelize.STRING(32),
            normal_19_1:sequelize.STRING(32),
            match:sequelize.STRING(32),
            match_1:sequelize.STRING(32),
            ai_total:sequelize.BIGINT(11),
            ai_13:sequelize.BIGINT(4),
            ai_19:sequelize.BIGINT(11),
            n_win:sequelize.BIGINT(11),
            n_lost:sequelize.BIGINT(11),
            n_draw:sequelize.BIGINT(11),
            m_win:sequelize.BIGINT(11),
            m_lost:sequelize.BIGINT(11),
            m_draw:sequelize.BIGINT(11),
            ai_win_13:sequelize.BIGINT(11),
            ai_lost_13:sequelize.BIGINT(11),
            ai_win_19:sequelize.BIGINT(11),
            ai_lost_19:sequelize.BIGINT(11),
            pt_work:sequelize.BIGINT(11),
            xx_work:sequelize.BIGINT(11),
            jc_work:sequelize.BIGINT(11),
            fl_work:sequelize.BIGINT(11),
            yy_download:sequelize.BIGINT(11),
            chuangguan:sequelize.BIGINT(11),
            date:sequelize.DATE,
        },{
            freezeTableName: true,
            timestamps: false,
        });
        let class_tongji=Sequelize.define(config.DBname+year,{
            id:{
                type:sequelize.BIGINT(11),
                autoIncrement: true,
                primaryKey:true,
            },
            keys:sequelize.STRING(32),
            schoolid:sequelize.STRING(20),
            classid:sequelize.STRING(20),
            total:sequelize.STRING(32),
            total_1:sequelize.STRING(32),
            normal:sequelize.STRING(32),
            normal_1:sequelize.STRING(32),
            eat_13:sequelize.STRING(32),
            eat_13_1:sequelize.STRING(32),
            normal_13:sequelize.STRING(32),
            normal_13_1:sequelize.STRING(32),
            normal_19:sequelize.STRING(32),
            normal_19_1:sequelize.STRING(32),
            match:sequelize.STRING(32),
            match_1:sequelize.STRING(32),
            ai_total:sequelize.BIGINT(11),
            ai_13:sequelize.BIGINT(4),
            ai_19:sequelize.BIGINT(11),
            n_win:sequelize.BIGINT(11),
            n_lost:sequelize.BIGINT(11),
            n_draw:sequelize.BIGINT(11),
            m_win:sequelize.BIGINT(11),
            m_lost:sequelize.BIGINT(11),
            m_draw:sequelize.BIGINT(11),
            ai_win_13:sequelize.BIGINT(11),
            ai_lost_13:sequelize.BIGINT(11),
            ai_win_19:sequelize.BIGINT(11),
            ai_lost_19:sequelize.BIGINT(11),
            pt_work:sequelize.BIGINT(11),
            xx_work:sequelize.BIGINT(11),
            jc_work:sequelize.BIGINT(11),
            fl_work:sequelize.BIGINT(11),
            yy_download:sequelize.BIGINT(11),
            chuangguan:sequelize.BIGINT(11),
            date:sequelize.DATE,
        },{
            freezeTableName: true,
            timestamps: false,
        });
        let fx_tongji=Sequelize.define(config.DBname+year,{
            id:{
                type:sequelize.BIGINT(11),
                autoIncrement: true,
                primaryKey:true,
            },
            keys:sequelize.STRING(32),
            schoolid:sequelize.STRING(20),
            fenxid:sequelize.STRING(20),
            total:sequelize.STRING(32),
            total_1:sequelize.STRING(32),
            normal:sequelize.STRING(32),
            normal_1:sequelize.STRING(32),
            eat_13:sequelize.STRING(32),
            eat_13_1:sequelize.STRING(32),
            normal_13:sequelize.STRING(32),
            normal_13_1:sequelize.STRING(32),
            normal_19:sequelize.STRING(32),
            normal_19_1:sequelize.STRING(32),
            match:sequelize.STRING(32),
            match_1:sequelize.STRING(32),
            ai_total:sequelize.BIGINT(11),
            ai_13:sequelize.BIGINT(4),
            ai_19:sequelize.BIGINT(11),
            n_win:sequelize.BIGINT(11),
            n_lost:sequelize.BIGINT(11),
            n_draw:sequelize.BIGINT(11),
            m_win:sequelize.BIGINT(11),
            m_lost:sequelize.BIGINT(11),
            m_draw:sequelize.BIGINT(11),
            ai_win_13:sequelize.BIGINT(11),
            ai_lost_13:sequelize.BIGINT(11),
            ai_win_19:sequelize.BIGINT(11),
            ai_lost_19:sequelize.BIGINT(11),
            pt_work:sequelize.BIGINT(11),
            xx_work:sequelize.BIGINT(11),
            jc_work:sequelize.BIGINT(11),
            fl_work:sequelize.BIGINT(11),
            yy_download:sequelize.BIGINT(11),
            chuangguan:sequelize.BIGINT(11),
            date:sequelize.DATE,
        },{
            freezeTableName: true,
            timestamps: false,
        });
        let xinbo_tongji=Sequelize.define(config.DBname+year,{
            id:{
                type:sequelize.BIGINT(11),
                autoIncrement: true,
                primaryKey:true,
            },
            keys:sequelize.STRING(32),
            xinboid:sequelize.STRING(20),
            total:sequelize.STRING(32),
            total_1:sequelize.STRING(32),
            normal:sequelize.STRING(32),
            normal_1:sequelize.STRING(32),
            eat_13:sequelize.STRING(32),
            eat_13_1:sequelize.STRING(32),
            normal_13:sequelize.STRING(32),
            normal_13_1:sequelize.STRING(32),
            normal_19:sequelize.STRING(32),
            normal_19_1:sequelize.STRING(32),
            match:sequelize.STRING(32),
            match_1:sequelize.STRING(32),
            ai_total:sequelize.BIGINT(11),
            ai_13:sequelize.BIGINT(4),
            ai_19:sequelize.BIGINT(11),
            n_win:sequelize.BIGINT(11),
            n_lost:sequelize.BIGINT(11),
            n_draw:sequelize.BIGINT(11),
            m_win:sequelize.BIGINT(11),
            m_lost:sequelize.BIGINT(11),
            m_draw:sequelize.BIGINT(11),
            ai_win_13:sequelize.BIGINT(11),
            ai_lost_13:sequelize.BIGINT(11),
            ai_win_19:sequelize.BIGINT(11),
            ai_lost_19:sequelize.BIGINT(11),
            pt_work:sequelize.BIGINT(11),
            xx_work:sequelize.BIGINT(11),
            jc_work:sequelize.BIGINT(11),
            fl_work:sequelize.BIGINT(11),
            yy_download:sequelize.BIGINT(11),
            chuangguan:sequelize.BIGINT(11),
            date:sequelize.DATE,
        },{
            freezeTableName: true,
            timestamps: false,
        });


        this.school_tongji = school_tongji,
        this.class_tongji = class_tongji,
        this.fx_tongji = fx_tongji,
        this.xinbo_tongji = xinbo_tongji
    }
}


module.exports = DBModel
