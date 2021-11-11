import React from 'react';
import { Track } from './styled';
import { useSelector, useDispatch } from 'react-redux';

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

                        <h2> Track: {item.title} </h2>

                    </div>

                    <div className="music-artist">

                        <h2> Artist: {item.artist.name} </h2>

                    </div>

                    <div className="music-album">

                        <h2> Album: {item.album.title} </h2>

                    </div>

                    <div className="music-player">

                        <audio className="player" controls> <source src={item.preview} type="audio/mp3" /> </audio>

                    </div>

                    <div className="buttons">

                        <a className="redirect-button" href={item.link} target="_blank"> View in Deezer </a>

                    </div>

                    <div className="buttons">


                        { favorites.some(favorite => favorite.id == item.id) ?

                            <a className="redirect-button" onClick={ () => DelFavorites(item) }> 
                                Delete Favorite
                            </a>
                        :
                            <a className="redirect-button" onClick={ () => AddFavorites(item) }> 
                                Add Favorites
                            </a>
                        }


                    </div>

                </div>

            </div>

        </Track>

    </>

};