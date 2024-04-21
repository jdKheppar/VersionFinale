const User = require("./../database/models/users.model");
const bcrypt = require("bcryptjs");

// Register function
exports.register = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body.authObj;
  console.log(username, password);
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).send("User already exists.");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user and save to database
    const newUser = new User({
      username,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).send("User successfully registered.");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
};

// Login function
exports.login = async (req, res) => {
  const { username, password } = req.body.authObj;
  try {
    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send("User not found.");
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials.");
    }

    res.status(201).send("Login successful");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
};
