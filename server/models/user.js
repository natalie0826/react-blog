'use strict';

const bcrypt  = require('bcrypt-nodejs');

module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define('user', {
        email: {
            type: Sequelize.CHAR(80),
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        name: {
            type: Sequelize.CHAR(80),
            allowNull: false,
            validate: {
                len: {
                    args: [3, 80],
                    msg: 'Name is not valid. It should be between 3 and 80 characters long.'
                }
            }
        },
        surname: {
            type: Sequelize.CHAR(80),
            allowNull: false,
            validate: {
                len: {
                    args: [3, 80],
                    msg: 'Surname is not valid. It should be between 3 and 80 characters long.'
                }
            }
        },
        password: {
            type: Sequelize.CHAR(255),
            validate: {
                len: {
                    args: [6, 80],
                    msg: 'Password is not valid. It should be between 6 and 80 characters long.'
                }
            }
        },
        roleId: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        },
        avatarUrl: {
            type: Sequelize.CHAR(255),
            defaultValue: 'http://via.placeholder.com/100x100'
        },
        birthday: {
            type: Sequelize.CHAR(255),
            allowNull: true,
        },
        job: {
            type: Sequelize.CHAR(255),
            allowNull: true,
        },
        country: {
            type: Sequelize.CHAR(255),
            allowNull: true,
        },
        interestedIn: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        vk: {
            type: Sequelize.CHAR(255),
            allowNull: true,
        },
        twitter: {
            type: Sequelize.CHAR(255),
            allowNull: true,
        },
        facebook: {
            type: Sequelize.CHAR(255),
            allowNull: true,
        },
        github: {
            type: Sequelize.CHAR(255),
            allowNull: true,
        }
    }, {
        timestamps: true,
        hooks: {
            afterValidate: function (user) {
                user.password = bcrypt.hashSync(user.password);
            }
        }
    });

    User.associate = function (models) {
        User.hasMany(models.post),

        User.hasMany(models.comment),

        User.hasMany(models.followers),

        User.hasMany(models.bookmarks);
    };

    return User;
};
