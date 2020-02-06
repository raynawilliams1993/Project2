var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts
  app.get("/api/posts", function (req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    // 1. Add a join here to include all of the Authors to these posts
    db.Post.findAll({
      where: query,
      include: [db.Author]
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function (req, res) {
    // 2. Add a join here to include the Author who wrote the Post
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Author]
    }).then(function (dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function (req, res) {
    db.Post.create(req.body).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function (req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbPost) {
        res.json(dbPost);
      });
  });
<<<<<<< HEAD
  
}
=======
 rayna_dev
  
}
=======
  //test route 
  app.post("/api/signup", function(req, res){
    console.log(req.body.test)
    res.json({message: "server respons"})
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
   });
  })
};
 master
>>>>>>> c43cbaf42133ade6fdedf6e8e6b615e3ae141a8b
