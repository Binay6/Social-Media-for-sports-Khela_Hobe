import {
  deleteUser,
  followUser,
  getUser,
  getUserFriends,
  getUserProfile,
  unfollowUser,
  updateProfilePicture,
  updateUser,
} from "../services/user.service.js";

export const updateUserController = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await updateUser(req.params.id, req.body);
      res.status(200).json({
        user,
        message: "Account has been updated Successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.status(500).json("you can only update your account");
  }
};

export const updateProfilePictureController = async (req, res) => {
    try {
      const user = await updateProfilePicture(req.params.id, req.file.path);
      //console.log(req.body);
      res.status(200).json({
        user,
        message: "Profile Picture has been updated Successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
};




export const deleteUserController = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await deleteUser(req.params.id);
      res.status(200).json({
        message: "Account has been deleted Successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.status(500).json("you can only delete your account");
  }
};

export const getUserController = async (req, res) => {
  try {
    const user = await getUser(req.params.id);
    const { password, ...data } = user._doc;
    res.status(200).json({
      userInfo: data,
      message: "Account has been fetched Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const getUserProfileController = async (req, res) => {
  try {
    const user = await getUserProfile(req.query);
    const { password, ...data } = user._doc;
    res.status(200).json({
      userInfo: data,
      message: "Account has been fetched Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const followUserController = async (req, res) => {
  try {
    const data = await followUser(req.body, req.params);
    res.status(200).json({
      data,
      message: "Follow User Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const unfollowUserController = async (req, res) => {
  try {
    const data = await unfollowUser(req.body, req.params);
    res.status(200).json({
      data,
      message: "UnFollow User Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const getUserFriendsController = async (req, res) => {
  try {
    const friends = await getUserFriends(req.params);
    res.status(200).json({
      friends,
      message: "Friends have fetched Successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
