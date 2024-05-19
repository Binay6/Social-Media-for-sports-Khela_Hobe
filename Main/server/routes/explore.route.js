import express from "express";
import {
  createExploreController,
  deleteExploreController,
  getAllExploresController,
//   updateExploreController,
} from "../controllers/explore.controller.js";

const router = express.Router();

// Create Explore entry
router.post("/create-explore", createExploreController);

// Update Explore entry
// router.put("/update-explore/:id", updateExploreController);

// Delete Explore entry
router.delete("/delete-explore/:id", deleteExploreController);

// Get all Explore entries
router.get("/", getAllExploresController);

export default router;
