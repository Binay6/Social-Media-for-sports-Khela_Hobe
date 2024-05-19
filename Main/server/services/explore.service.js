import ExploreModel from "../models/explore.model.js";

export const createExplore = async (body) => {
  try {
    const newExplore = new ExploreModel({
      ...body,
    });

    await newExplore.save();

    return newExplore;
  } catch (error) {
    throw error;
  }
};

export const updateExplore = async (params, body) => {
  try {
    const updatedExplore = await ExploreModel.findById(params.id);
    if (updatedExplore.userId === body.userId) {
      await ExploreModel.updateOne({
        $set: body,
      });
      return updatedExplore;
    } else {
      throw new Error("You can update only your explore entry");
    }
  } catch (error) {
    throw error;
  }
};

export const deleteExplore = async (params, body) => {
  try {
    const deletedExplore = await ExploreModel.findById(params.id);
    if (deletedExplore.userId === body.userId) {
      await ExploreModel.deleteOne();
      return deletedExplore;
    } else {
      throw new Error("You can delete only your explore entry");
    }
  } catch (error) {
    throw error;
  }
};

export const getAllExplores = async () => {
  try {
    const explores = await ExploreModel.find();
    return explores;
  } catch (error) {
    throw error;
  }
};
