import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password"); // not equal to ourself

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUserForSideBar", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
