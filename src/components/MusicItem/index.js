import React from 'react';
import { Track } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import Like from '../Images/Like/heart.png';
import Unlike from '../Images/Like/heart-full.png';
import Redirect from '../Images/Redirect/redirect.png';

export default function MusicItem(props) {
    
    const item = props.data;

    const dispatch = useDispatch();

    const favorites = useSelector(state => state.ListFavorites.musics);


    function AddFavorites(item) {

        dispatch({
            type: 'ADD_FAVORITES',
            payload: item
        })
    }


    function DelFavorites(item) {

        dispatch({
            type: 'DEL_FAVORITES',
            payload: item
        })
    }


    return <>

        <Track>

            <div className="content">

                <div className="content-photo">

                    <div className="album-photo">

                        <img src={item.album.cover} alt="album-cover" />

                    </div>

                </div>

                <div className="music-info">

                    <div className="music-title">

                        <h2> {item.title} - {item.album.title} </h2>

                    </div>

                    <div className="music-artist">

                        <h2> Artist: {item.artist.name} </h2>

                    </div>

                    <div className="music-player">

                        <audio className="player" controls> <source src={item.preview} type="audio/mp3" /> </audio>

                    </div>


                    <div className="buttons">

                        <a className="redirect-button" href={item.link} target="_blank"> 

                            <img src={Redirect} />
                        
                        </a>

                        { favorites.some(favorite => favorite.id == item.id) ?

                            <a className="redirect-button fav-button" onClick={ () => DelFavorites(item) }> 
                                <img src={Unlike} />
                            </a>
                        :
                            <a className="redirect-button fav-button" onClick={ () => AddFavorites(item) }> 
                                <img src={Like} />
                            </a>
                        }


                    </div>

                </div>

            </div>

        </Track>

    </>

};