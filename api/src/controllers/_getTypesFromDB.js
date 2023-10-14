const { Type } = require("../db");

const _getTypesFromDB = async (req, res) => {
    try {
        const types = await Type.findAll();

        if (types.length > 0) res.status(200).json(types);
        else res.status(404).json({ error: "No types found in the database" });
        
    } catch (error) {
        console.error("Error fetching types from the database:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    _getTypesFromDB,
};
