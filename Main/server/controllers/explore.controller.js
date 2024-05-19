import { createExplore, deleteExplore, getAllExplores } from "../services/explore.service.js";
import Explore from "../models/explore.model.js"; 

export const createExploreController = async (req, res) => {
  try {
    const { userId, desc } = req.body;
    const newExplore = await Explore.create({ userId, desc });
    res.status(200).json({
      newExplore,
      message: "Explore entry has been created Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Explore creation Failed",
      err,
    });
  }
};

export const deleteExploreController = async (req, res) => {
  try {
    const deletedExplore = await deleteExplore(req.params, req.body);
    res.status(200).json({
      deletedExplore,
      message: "Explore entry has been deleted Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Explore deletion failed",
      err,
    });
  }
};

export const getAllExploresController = async (req, res) => {
  try {
    const explores = await getAllExplores();
    res.status(200).json({
      explores,
      message: "Explores have been fetched Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Explores fetch failed",
      err,
    });
  }
};
