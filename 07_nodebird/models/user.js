module.exports = (sequelize,DataTypes)=>{
    sequelize.define('user',{//사용자 정보저장 모델
        email:{
            type: DataTypes.STRING(40),
            allowNull:true,
            unique:true,
        },
        nick: {
            type: DataTypes.String(15),
            allowNull:false,
        },
        password:{
            type: DataTypes.String(100),
            allowNull:true,
        },
        provider:{
            type: DataTypes.String(10),
            allowNull:false,
            defaultValue:'local', //sns로그인시 기본값 로컬
        },
        snsId:{
            type: DataTypes.String(30),
            allowNull:true,
        },
    },
        {timestamps:true,
            paranoid:true,
        }
    )
};