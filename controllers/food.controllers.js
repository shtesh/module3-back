const Food = require("../model/food.model");

exports.getFood = async(req, res) => {
    const food = await Food.findOne(req.params.name);
    res.status(200).json(food);
}

exports.createFood = async(req, res) => {
    const { userId } = req.session;
    const { name, calories, fat, carbohydrates, protein } = req.body;
    const newFood = await Food.create({ user: userId, name, calories, fat, carbohydrates, protein});
    res.status(200).json(newFood);
}

exports.updateFood = async(req, res) => {

}

exports.deleteFood = async(req, res) => {
    await Food.findByIdAndDelete(req.params.food);
    res.status(200).json({ message: "this food has been deleted"});
};
