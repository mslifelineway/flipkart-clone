const router = require("express").Router();
const slugify = require("slugify");
const category = require("../models/category");
router.post("category/add", (req, res) => {
  const cat = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };
  if (req.body.parentId) {
    cat.parentId = req.body.parentId;
  }

  cat.save((err, category) => {
    if (err) {
      return res.json({
        status: false,
        result: err,
        message:
          "Category couldn't added due to internal issue! please try again...",
      });
    }
    if (category) {
      return res.json({
        status: true,
        result: category,
        message: "Category added successfully!",
      });
    }
    return res.json({
      status: false,
      result: err,
      message:
        "Category couldn't added due to internal issue! please try again...",
    });
  });
});

module.exports = router;
