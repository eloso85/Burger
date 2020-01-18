module.exports = (sequelize,DataTypes) =>{
    const Model = sequelize.define('Burger',{
        burger_name: DataTypes.STRINGS,
        devoured: DataTypes.BOOLEAN
    
       
    });
}