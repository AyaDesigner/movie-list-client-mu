const moviesReducer = (state = [], action) => {
    const movies = [...state] ;
  
    switch (action.type) {
      case 'LOAD_MOVIES':
        return action.value;
      default:
        return movies;
    }
  };
  
  export default moviesReducer;