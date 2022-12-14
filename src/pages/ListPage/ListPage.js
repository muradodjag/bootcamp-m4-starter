import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ListPage.css';

function ListPage() {
    const location = useLocation();
    const [data, setData] = useState([]);
    const { id } = location.state;

    const getFavMovies = async (id) => {
        try {
            const resp = await fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
            const data = await resp.json();
            setData(data);
        } catch (error) {
            setData([])
        }

    }
    useEffect(() => {
        getFavMovies(id)
    }, [id])


    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список</h1>
            <ul>
                {data.movies.map((item) => {
                    return <FavMovies item={item} key={item}> </FavMovies>
                })}
            </ul>
        </div>
    );

}

function FavMovies({ item }) {
    const [movie, setMovie] = useState([])
    const getMovieInfo = async () => {
        const resp = await fetch(`http://www.omdbapi.com/?i=${item}&apikey=eded1b16`)
        const data = await resp.json()
        setMovie(data);
    }

    useEffect(() => {
        getMovieInfo()
    }, [])
    return (
        <li key={item.imdbID}>
            <a href="https://www.imdb.com/title/tt0068646/" target="_blank">{item.title} ({item.year})</a>
        </li>
    );

}

export default ListPage;