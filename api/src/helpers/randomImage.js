const { _getByIDAPI } = require("../controllers/_getByID");

module.exports = async (floor, top) => {

  if (floor > 0 & top <= 1292) {
    
    const randomID = Math.floor(Math.random() * (top - floor + 1) + floor);  
    const response = await _getByIDAPI(randomID);    
    const randomImage = response.image;    

    return randomImage;
  }   
  else return null;
};
