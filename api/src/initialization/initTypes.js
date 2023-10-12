const axios = require("axios");
const { Type } = require("../db");

async function initTypes() {         
    const response = await axios.get("https://pokeapi.co/api/v2/type/");
    const types = response.data.results.map((type) => ({
        name: type.name,        
    }));                
    await Type.bulkCreate(types);
    //console.log("Table types: " + JSON.stringify(types));
}    

module.exports = initTypes;
