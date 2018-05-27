module.exports = (sequelize, Sequelize) => {
    const Bookmarks = sequelize.define('bookmarks', {
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        postId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    Bookmarks.associate = function (models) {
        Bookmarks.belongsTo(models.post, {
            onDelete: 'CASCADE',
            foreignKey: {
                allowNull: false
            }
        });

        Bookmarks.belongsTo(models.user, {
            onDelete: 'CASCADE',
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Bookmarks;
}
