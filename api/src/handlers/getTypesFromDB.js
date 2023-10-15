const { _getTypesFromDB } = require("../controllers/_getTypesFromDB");

const getTypes = async (req, res) => {
    try {
        await _getTypesFromDB(req, res);
    } catch (error) {
        console.error("Error handling types request:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    getTypes,
};
