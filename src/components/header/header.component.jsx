import React from 'react';
import './header.styles.scss';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/home-black.svg';
import SearchBox from '../search-box/search-box.component';

const Header = (props) => { 
    console.log(props);
    return (
        <div className='header'>
            { props.location.pathname.match(/movies[/][1-9]/g) ? <h2>Movie Detail</h2> : <SearchBox {...props} />   }
            <div className='options'>
                <Link className='option' to='/movies'>
                    <Home className='home-logo' />
                </Link>
            </div>
        </div>
    );
}

export default withRouter(Header);