
module.exports = (sequelize, DataTypes) => {
    let List = sequelize.define("List", {
        item: {
            type: DataTypes.STRING,
            allowNull: true
        },
        is_done: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    })
    return List
}