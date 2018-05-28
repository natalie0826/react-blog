const express = require('express');
const app     = express();
const router  = express.Router();
const jwt     = require('jsonwebtoken');
const bcrypt  = require('bcrypt-nodejs');

const config        = require('../middleware/token');
const models        = require('../../models');
const baseFunctions = require('./base');

router.post('', (req, res) => {
    const data = req.body;
    if (!data) {
        let answer = baseFunctions.getAnswer(false, 400,  'Please, enter information');
        res.send(answer);
        return;
    }
    models.user.create(req.body)
        .then((insertedUser) => {
            const token = jwt.sign({email: insertedUser.email}, config.secret, {
                expiresIn: 60
            });
            const answer = {
                user: insertedUser,
                status: true,
                statusCode: 200,
                message: 'New user has been successfully created',
                token: token
            };
            res.send(answer);
            return;
        })
        .catch((error) => {
            const answer = baseFunctions.getAnswer(false, 500, 'Please, try again to sign up');
            res.send(answer);
            return;
        });
});

router.get('', (req, res) => {
    models.user.findAndCountAll({
        order: [ ['dateCreate', 'DESC'] ],
        limit: Number(req.query.limit) || 5000,
        offset: Number(req.query.offset) || 0
    })
      .then(foundedUsers => {
        res.status(200).send(foundedUsers);
      })
      .catch((error) => {
          const answer = baseFunctions.getAnswer(false, 500, error);
          res.send(answer);
      });
});

module.exports = router;
