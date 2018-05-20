const express = require('express');
const app     = express();
const router  = express.Router();

const models        = require('../../models');
const baseFunctions = require('./base');

const dbconfig   = require('../../config/database');
const Sequelize  = require('sequelize');
const sequelize  = new Sequelize(dbconfig.database, dbconfig.connection.user, dbconfig.connection.password, {
    dialect: 'mysql'
});

router.get('', (req, res) => {
    models.category.findAll()
        .then((categories) => {
            const categoriesRes = [];
            categories.map((category) => {
                categoriesRes.push({
                    id: category.dataValues.id,
                    name: category.dataValues.name
                });
            });
            res.send(categoriesRes);
            return;
        })
        .catch((error) => {
            const answer = baseFunctions.getAnswer(false, 500, error);
            res.send(answer);
            return;
        })
});

router.get('/:categoryId/posts', (req, res) => {
  const categoryId = req.params.categoryId;
  console.log('i am here', categoryId);

  models.post.findAndCountAll({
      where: { 'categoryId': categoryId },
      include: [
         { model: models.user, attributes: ['name', 'surname'] },
         { model: models.category, attributes: ['name'] },
         { model: models.tagsinpost, include: [
             { model: models.tag, attributes: ['name'] }
         ]},
      ],
      attributes: Object.keys(models.post.attributes).concat([
          [sequelize.literal('(SELECT COUNT(*) FROM comments WHERE comments.postId = post.id)'), 'comments']
      ]),
      order: [ ['dateCreate', 'DESC'] ],
      limit: Number(req.query.limit) || 5000,
      offset: Number(req.query.offset) || 0
  })
      .then((foundedPosts) => {
        let resultPosts = {
          count: 0,
          rows: []
        };
        resultPosts.count = foundedPosts.count;
        foundedPosts.rows.map(foundedPost => {
          let tags = [];
          foundedPost.dataValues.tagsinposts.map((tagInPost) => {
              tags.push(tagInPost.tag.name)
          });
          let answer = {
              id: foundedPost.dataValues.id,
              title: foundedPost.dataValues.title,
              subtitle: foundedPost.dataValues.subtitle,
              category: foundedPost.dataValues.category.name,
              dateCreate: foundedPost.dataValues.dateCreate,
              text: foundedPost.dataValues.text,
              imageUrl: foundedPost.dataValues.imageUrl,
              comments: foundedPost.dataValues.comments,
              tags: tags,
              author: foundedPost.dataValues.user.name + ' ' + foundedPost.dataValues.user.surname,
              userId: foundedPost.dataValues.userId
          };
          resultPosts.rows.push(answer);
        });
        res.status(200).send(resultPosts);
      })
          /*let tags = [];
          foundedPost.dataValues.tagsinposts.map((tagInPost) => {
              tags.push(tagInPost.tag.name)
          });

          let answer = {
              id: foundedPost.dataValues.id,
              title: foundedPost.dataValues.title,
              subtitle: foundedPost.dataValues.subtitle,
              dateCreate: foundedPost.dataValues.dateCreate,
              text: foundedPost.dataValues.text,
              tags: tags,
              author: foundedPost.dataValues.user.name + ' ' + foundedPost.dataValues.user.surname,
              userId: foundedPost.dataValues.userId
          }

          res.status(200).send(answer);
          return;
      })
      .catch((error) => {
          const answer = baseFunctions.getAnswer(false, 500, error);
          res.send(answer);
          return;
      })*/

  /*
            .then((posts) => {
                let modifiedPosts = {
                    count: 0,
                    rows: []
                };
                posts.map((post) => {
                    if(post.dataValues.tagsinposts.length) {
                        modifiedPosts.rows.push(post);
                    }
                });
                modifiedPosts.count = modifiedPosts.rows.length;
                res.send(modifiedPosts);
                return;
            })
            .catch((error) => {
                console.log(error);
                const answer = baseFunctions.getAnswer(false, 500, error);
                res.send(answer);
                return;
            });*/
})

module.exports = router;
