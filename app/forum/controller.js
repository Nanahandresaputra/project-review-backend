import Forum from "./model.js";

export const indexForum = async (req, res, next) => {
  try {
    const forum = await Forum.find();
    return res.json(forum);
  } catch (err) {
    next(err);
  }
};

export const detailForum = async (req, res, next) => {
  try {
    const { id } = req.params;
    const forum = await Forum.findById(id);
    return res.json(forum);
  } catch (err) {
    next(err);
  }
};

export const createForum = async (req, res, next) => {
  console.log(req.body);
  try {
    const payload = req.body;
    const forum = new Forum(payload);
    await forum.save();
    return res.json(forum);
  } catch (err) {
    if (err && err.name === "ValidationError") {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
    next(err);
  }
};

export const deleteForum = async (req, res, next) => {
  try {
    const {id} = req.params;
    const forum = await Forum.findByIdAndDelete(id);
    return res.json(forum);
  } catch (err) {
    next(err);
  }
}
