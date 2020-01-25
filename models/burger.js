module.exports = (sequelize,DataTypes) =>{
    const Model = sequelize.define('burger',{
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    
       
    });
    return Model;
}