import React from 'react'
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import { withRouter } from 'react-router-dom';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }
    }

    componentDidMount = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=bb8c8423cc0f9585fb8815acd2b1f4ba',
            { method: 'GET' });
        const data = await res.json();
        console.log('Movies :- ', data);
        this.setState({ movies: data.results })
    }

    onClickHandler = (event) => {
        const movieId = event.currentTarget.dataset.id_key;
        this.props.history.push(`/movies/${movieId}`);
    }

    render() {
        const { searchText } = this.props;
        const searchedMovies = this.state.movies
            .filter(movie => movie.title.toLowerCase().includes(searchText.toLowerCase()))
        searchedMovies.sort((a, b) => (new Date(b.release_date) -  new Date(a.release_date) ));

        return (
            <div className="homepage" >
                <Directory movies={searchedMovies} onClickHandler={this.onClickHandler} />
            </div>
        )
    }
}

export default withRouter(HomePage);