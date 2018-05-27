module.exports = (sequelize, Sequelize) => {
    const Followers = sequelize.define('followers', {
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        followedId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        followerId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    Followers.associate = function (models) {
        Followers.belongsTo(models.user, {
            onDelete: 'CASCADE',
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Followers;
}
