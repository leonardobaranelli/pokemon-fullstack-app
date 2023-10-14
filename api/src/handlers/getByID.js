const { _getByIDAPI, _getByIDDB } = require("../controllers/_getByID");
const { isIntegerID } = require('../helpers');

const getByID = async (req, res) => {
    const id = req.params.idPokemon;

    try {
        if (!isIntegerID(id)) {
            const response = await _getByIDDB(id);            
            
            if (response) return res.status(200).json(response);
            else throw { status: 404, message: 'Pokemon not found' };
        } else {
            const apiResponse = await _getByIDAPI(id);
        
            if (apiResponse) return res.status(200).json(apiResponse);
            else throw { status: 404, message: 'Pokemon not found' };        
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
    getByID,
};