import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList, deleteFromList } from '../../redux/Favorites/actions';
import './MovieItem.css';

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        favorite: state.favorite[0]
    }
};

const mapDispatchToProps = dispatch => ({
    onAddToFav: (id) => dispatch(addToList(id)),
    onDeleteFromFav: (idx) => dispatch(deleteFromList(idx))
})

function MovieItem({ Title, Year, Poster, onAddToFav, imdbID }) {

    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>


                <button type="button" className="movie-item__add-button" onClick={() => { onAddToFav(imdbID) }}>Добавить в список</button> :


            </div>
        </article>
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);