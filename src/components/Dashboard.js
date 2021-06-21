import React from 'react';
import { useEffect } from 'react';
import InputSearch from './InputSearch';
import MoviesList from './MoviesList';
import { loadMoviesAction } from '../redux/actions/moviesActions';
import { useDispatch } from 'react-redux';



const Dashboard = () => {

    const executeReduxAction = useDispatch();

    useEffect(() => {
        const actionToExecute = loadMoviesAction();
        executeReduxAction(actionToExecute);
      }, [executeReduxAction]);


    
    return ( 
        <div>
            <InputSearch/>
            <MoviesList/>        
        </div>
     );
}
 
export default Dashboard;