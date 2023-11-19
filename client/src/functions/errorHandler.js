const errorHandler = (error) => {
  
  if (error.response && error.response.data) {
    const errorMessage = error.response.data.message || 'Unknown error';
    const errorCode = error.response.data.status || 500; 
    return(`(${errorCode}) ${errorMessage}`);
  } else {
    return('Unknown error occurred');
  } 
}

export default errorHandler;

 