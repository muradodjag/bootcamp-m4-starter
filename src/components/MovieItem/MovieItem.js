import React from 'react';
import { connect } from 'react-redux';
import { addToList, deleteFromList } from '../../redux/Favorites/actions';
import './MovieItem.css';

const mapStateToProps = (state) => {
    return {
        movies: state.reducerMovies.movies,
        favorite: state.reducerFavorite.favorite
    }
};

const mapDispatchToProps = dispatch => ({
    onAddToFav: (id, movies) => dispatch(addToList(id, movies)),
})

function MovieItem({ Title, Year, Poster, onAddToFav, imdbID, movies }) {

    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>


                <button type="button" className="movie-item__add-button" onClick={() => { onAddToFav(imdbID, movies) }}>Добавить в список</button>


            </div>
        </article>
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
