// Import necessary modules and initialize the Express.js router
const router = require("express").Router();
const { User } = require("../../models");

// Route to create a new user
router.post("/", async (req, res) => {
  try {
    // Create a new user using the provided request body data
    const userData = await User.create(req.body);

    // Save the user's session data (user_id and logged_in status)
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // Respond with a success status and the user data
      res.status(200).json(userData);
    });
  } catch (err) {
    // Handle any errors and respond with a 400 status and the error message
    res.status(400).json(err);
  }
});

// Route to handle user login
router.post("/login", async (req, res) => {
  try {
    // Find a user with the provided email in the request body
    const userData = await User.findOne({ where: { email: req.body.email } });

    // If no user is found, respond with an error message
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Check if the provided password matches the user's stored password
    const validPassword = await userData.checkPassword(req.body.password);

    // If the password is invalid, respond with an error message
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Save the user's session data (user_id, user_name, and logged_in status)
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      // Respond with the user data and a success message
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    // Handle any errors and respond with a 400 status and the error message
    res.status(400).json(err);
  }
});

// Route to handle user logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    // If the user is logged in, destroy their session to log them out
    req.session.destroy(() => {
      res.status(204).end(); // Respond with a success status and no content
    });
  } else {
    // If the user is not logged in, respond with a 404 status
    res.status(404).end();
  }
});

// Export the router
module.exports = router;
