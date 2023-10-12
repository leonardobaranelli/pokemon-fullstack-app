const { getPokemonsAPI, getPokemonsDB } = require("../controllers/getPokemons");
const { errorHandler } = require('../helpers');

const getPokemons = async (req, res) => {
    const response = [];
    try {
        const apiResponse = await getPokemonsAPI();
        const dbResponse  = await getPokemonsDB();

        if(apiResponse && dbResponse){
            response.push(...apiResponse);
            response.push(...dbResponse);
            res.status(200).send(response);
        } 
            
        else if(apiResponse && !dbResponse){
            response.push(...apiResponse);    
            res.status(200).send(response);
        }

        else if(!apiResponse && dbResponse){
            response.push(...dbResponse);
            res.status(200).send(response);
        }

        else throw new Error("No response from API or database");
        
    } catch (error) {
        errorHandler(error, res);
    }
}

module.exports = {
    getPokemons,
}




