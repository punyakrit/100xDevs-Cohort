const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic

  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });

  res.json({
    msg: "Admin Account created Successfully",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic

  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  try {
    const newCourse = await Course.create({
      title: title,
      description: description,
      imageLink: imageLink,
      price: price,
    });
    res.json({
      msg: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch {
    res.json({
      msg: "Error Occured",
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic

  const allCourse =  await Course.find({})
  
  res.json({
    courses : allCourse
  })

});

module.exports = router;
