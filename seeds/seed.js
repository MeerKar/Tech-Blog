const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

// Import data from JSON files
const userData = require("./userData.json");
const postData = require("./postData.json");
const commentData = require("./commentData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Create users using bulkCreate with individual hooks
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Create posts and associate them with random users
  const posts = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  for (const comment of commentData) {
    // Randomly select a post for each comment
    const randomPost = posts[Math.floor(Math.random() * posts.length)];

    await Comment.create({
      ...comment,
      post_id: randomPost.id,
    });
  }

  // Exit the script
  process.exit(0);
};

// Call the seedDatabase function to seed the database
seedDatabase();
