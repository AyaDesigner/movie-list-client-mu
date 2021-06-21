import axios from 'axios';


export const loadMoviesAction = () => {
    return dispatch => {
        return axios
            .get('http://localhost:8000/movies')
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
            .get(`http://localhost:8000/search?searchKeyword=${searchKeyword}`)
            .then((response) => {
                dispatch({
                    type: 'LOAD_MOVIES',
                    value: response.data
                })
            })
    }
};