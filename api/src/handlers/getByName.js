const { _getByNameAPI, _getByNameDB } = require("../controllers/_getByName");

const getByName = async (req, res) => {
    const name = req.query.name.toLowerCase();

    try {
        const dbResponse = await _getByNameDB(name);

        if (dbResponse) res.status(200).json({ success: true, data: dbResponse,
            message: 'Pokemon found in the database' });
        else {
            const apiResponse = await _getByNameAPI(name);          

            res.status(200).json({ success: true, data: apiResponse,
            message: 'Pokemon found in the API' });
        }         
    } catch (error) {
        res.status(404).json({
            error: true,
            status: 404,
            message: "That pokemon doesn't exist yet",
          });
    }
};

module.exports = {
    getByName,
};



