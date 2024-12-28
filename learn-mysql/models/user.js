
module.exports = (sequelize,DataTypes)=>{
    return sequelize.define('user',{ //테니블명과 각 컬럼의 스펙을 mysql과 같게 작성,세번째 인자는 테이블 옵션
        name:{
            type : DataTypes.STRING(20), //mysql과 자료형이 약간 다름 varchar -> string,int->integer,timyint->boolean,datetime->date
            allowNull: false,
            unique: true,
        },
        age:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        married: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
        },
        comment:{
            type: DataTypes.TEXT,
            allowNull:true,
        },
        created_at:{
            type: DataTypes.DATE,
            allowNull:false,
            defaultValue: DataTypes.NOW,
        },
    },
    {timestamps:false,}
);
};