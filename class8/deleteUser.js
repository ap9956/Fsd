const deleteUser = async (userDetails,FILE)=>{
    const express = require("express");
const router = express.Router();
const User = require("../models/User"); // your user model

// DELETE user by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User deleted successfully",
      user: deletedUser
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;