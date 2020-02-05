// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/test", function(req, res) {
    res.render("index" , {message:"hi" });
  });

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/cms.html"));
  });
  app.get("/login", function(req, res) {
    res.render("login", {message: "yo"});
  })
  // blog route loads blog.html
  // app.get("/handy", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/handy.html"));
  // });

  // // authors route loads author-manager.html
  // app.get("/authors", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  // });

};