import Quesionare from './model.js';

export const indexQusionare = async (req, res, next) => {
    try {
        const quesionare = await Quesionare.find();
        return res.json(quesionare); 
    } catch (err) {
       next(err);
    };
};

export const createQusionare = async (req, res, next) => {
    console.log(req.body);
    try {
        const payload = req.body;
        const quesionare = new Quesionare(payload);
        await quesionare.save();
        return res.json(payload);
    } catch (err) {
        next(err);
    }
}

