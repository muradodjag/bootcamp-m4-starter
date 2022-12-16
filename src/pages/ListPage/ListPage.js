import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ListPage.css';

function ListPage() {
    const location = useLocation();
    const [data, setData] = useState([]);
    console.log(location.state)
    const { id } = location.state;

    const getFavMovies = async (id) => {

        const res = await fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
        const data = await res.json();
        setData(data);


    }
    useEffect(() => {
        getFavMovies(id)
    }, [id])


    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список</h1>
            <ul>
                {data.movies?.map((item) => {
                    return <FavMovies item={item} key={item}> </FavMovies>
                })}
            </ul>
        </div>
    );

}

function FavMovies({ item }) {
    const [movie, setMovie] = useState([])

    const getMovie = async () => {
        const res = await fetch(`http://www.omdbapi.com/?i=${item}&apikey=cdd098d5`)
        const data = await res.json()
        console.log(data)
        setMovie(data)
    }


    useEffect(() => {
        getMovie()
    }, [])


    return (
        <li key={item.imdbID}>
            <a href={`https://www.imdb.com/title/${item}/`} target="_blank">{movie.Title} ({movie.Year})</a>
        </li>
    );

}

export default ListPage;