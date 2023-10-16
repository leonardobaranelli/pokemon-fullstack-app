const validate = (req, res, next) => {
    const { name, health, attack, defense, speed, height, weight, types, image } = req.body;
  
    const requiredFields = [name, health, attack, defense, speed, height, weight, types, image];

    if (!requiredFields.every(Boolean)) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    next();
};

module.exports = validate;