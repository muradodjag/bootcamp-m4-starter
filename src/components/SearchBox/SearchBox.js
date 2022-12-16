import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeSearch } from '../../redux/Movies/actions';


import './SearchBox.css';

const mapStateToProps = (state) => {
    return {
        searchLine: state.reducerMovies.searchLine
    }
};

const mapDispatchToProps = dispatch => (
    {
        onChangeSearch: (text) => dispatch(changeSearch(text))
    }
)

function SearchBox({ onChangeSearch }) {
    const [searchLine, setSearchLine] = useState('')
    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        onChangeSearch(searchLine);
    }
    useEffect(() => {
        onChangeSearch('')
    })

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                >
                    Искать
                </button>
            </form>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);