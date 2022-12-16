import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeMoviesList } from '../../redux/Movies/actions';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const mapStateToProps = (state) => {

    return {
        search: state.reducerMovies.searchLine,
        movies: state.reducerMovies.movies
    }
};

const mapDispatchToProps = dispatch => ({
    onClickSearch: (movies) => dispatch(changeMoviesList(movies))
})

function Movies({ search, movies, onClickSearch }) {

    const getMovies = async () => {
        if (search) {
            const resp = await fetch(`http://www.omdbapi.com/?s=${search.trim()}&apikey=eded1b16`);
            const data = await resp.json();
            onClickSearch(data?.Search)
        }
        else {
            onClickSearch([])
        }
    }

    useEffect(() => {
        getMovies()
    }, [search])
    return (
        <ul className="movies">
            {movies?.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
            ))}
        </ul>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);