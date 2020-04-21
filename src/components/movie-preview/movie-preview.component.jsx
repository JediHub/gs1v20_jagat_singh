import React, { Component } from 'react';

import './movie-preview.styles.scss';

class MoviePreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDetail: {},
        };
    }

    componentWillMount = async () => {
        console.log('---------moview Priview componentWillMount------------');
        const currentMovieId = this.props.match ? this.props.match.params.movieId : '';
            await this.initMovieData(currentMovieId);
    }

    componentDidUpdate = async (prevProps) => {
        console.log('---------moview Priview componentDidUpdate------------');
        const currentMovieId = this.props.match.params.movieId;
        if (prevProps.match.params.movieId !== currentMovieId) {
            await this.initMovieData(currentMovieId);
        }
    }

    initMovieData = async (movieId) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=bb8c8423cc0f9585fb8815acd2b1f4ba`)
        const data = await res.json();
        await this.setState({ movieDetail: data }, () => console.log('state Updated'))
        console.log('Moview details :-  ', data);
    }

    render() {
        const { title, vote_average: rating, release_date, runtime: Length, Director = '--', poster_path: imageUrl, overview } = this.state.movieDetail;
        const moviewImage = `https://image.tmdb.org/t/p/w300${imageUrl}`
        return (
            <div className='movie-preview' >
                <div className='movie-image'>
                    <div className='background-image' style={{ backgroundImage: `url(${moviewImage})` }} />
                </div>
                <div className='movie-details' >
                    <h1 className='title'>{`${title} ( ${rating ? rating : 'NA' } )`}</h1>
                    <h2 className='subtitle'>{`${release_date} | ${Length ? Length : 'NA' } min | ${Director}`}</h2>
                    <span className='description'>
                        {overview}
                    </span>
                </div>
            </div>
        );
    }
}

export default MoviePreview;
