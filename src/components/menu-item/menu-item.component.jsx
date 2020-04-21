import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ movieDetail, onClickHandler }) => {

    const { id, title = '', release_date, poster_path, vote_average } = movieDetail;
    const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    return (
        <div
            className={`menu-item`}
            data-id_key={id}
            onClick={onClickHandler} >
            <div className='background-image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='content'>
                <div className='content-header'>
                    <span className='content-title'> {title.toUpperCase()}</span>
                    <span className='rating'>{vote_average ? vote_average : 'NA'}</span>
                </div>
                <div className='description'>{release_date}</div>
            </div>
        </div>
    )
}

export default MenuItem;