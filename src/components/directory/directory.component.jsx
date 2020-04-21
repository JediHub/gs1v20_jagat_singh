import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({ movies, onClickHandler}) => {
    
    return (
        <div className="directory-menu">
            {movies.map((movie) =>
                (<MenuItem key={movie.id} movieDetail={movie} onClickHandler={onClickHandler} />
                )
            )}
        </div>
    );
}

export default Directory;