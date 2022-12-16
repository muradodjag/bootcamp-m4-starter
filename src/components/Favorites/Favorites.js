import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeTitle, deleteFromList } from '../../redux/Favorites/actions';
import './Favorites.css';

const mapStateToProps = (state) => {
    return {
        favorite: state.reducerFavorite.favorite
    }
}
const mapDispatchToProps = dispatch => ({
    onDeleteFromList: (idx) => dispatch(deleteFromList(idx)),
    onClick: (title) => dispatch(changeTitle(title))
})

function Favorites({ favorite, onDeleteFromList, onClick }) {
    const [title, setTitle] = useState('');
    const [data, setData] = useState([]);
    const [process, setProcess] = useState(false);
    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const getListLinks = (event) => {
        event.preventDefault()
        setProcess(true);
        fetch("https://acb-api.algoritmika.org/api/movies/list/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "title": title,
                "movies": favorite.movies.map(({ imdbID }) => ([`${imdbID}`]))
            }),
        })
            .then(res => { return res.json() })
            .then(data => {
                setData(data)
                setProcess(false)
                console.log(data)
            })
    }

    return (
        <div className="favorites">
            <input value={title} className="favorites__name" placeholder="Введите название списка" onChange={onChangeTitle} />
            <ul className="favorites__list">
                {
                    favorite.movies.map((movie) => (
                        <li key={movie.imdbID} className="favorites__list-item">{movie.Title} ({movie.Year}) <button onClick={() => onDeleteFromList(movie.imdbID)}>X</button></li>
                    ))



                }
            </ul>

            {

                !data?.id ?
                    <button type="button" className="favorites__save" disabled={!title} onClick={getListLinks}>{process ? "Идет запрос..." : "Сохранить список"}</button> :
                    <Link to={{ pathname: `/list/${data.id}`, state: { ...data } }}>Перейти к списку</Link>

            }

        </div>

    );

}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);