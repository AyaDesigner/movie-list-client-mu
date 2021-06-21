import axios from 'axios';


export const loadMoviesAction = () => {
    return dispatch => {
        return axios
            .get('https://agile-island-00923.herokuapp.com/movies')
            .then((response) => {
                dispatch({
                    type: 'LOAD_MOVIES',
                    value: response.data
                })
            })
    }
};




export const searchMoviesAction = (searchKeyword) => {
    return dispatch => {
        return axios
            .get(`https://agile-island-00923.herokuapp.com/search?searchKeyword=${searchKeyword}`)
            .then((response) => {
                dispatch({
                    type: 'LOAD_MOVIES',
                    value: response.data
                })
            })
    }
};