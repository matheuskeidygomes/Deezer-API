import React, { useState, useEffect } from 'react';
import { Container, Content, InputArea, SearchInput, ListTitle, ListMusic } from './styled';
import MusicItem from '../../components/MusicItem/index';
import { useSelector } from 'react-redux';
import SadFace from '../../components/Images/NoFavorites/sad.png';


export default function Favorites() {

   const favorites = useSelector(state => state.ListFavorites.musics);

   const [MusicSearched, setMusicSearched] = useState('');

   const [searchList, setSearchList] = useState(favorites);

   const [FavoritesList, setFavoritesList] = useState(favorites);


   useEffect(() => {

      async function getFavorites() {

        setFavoritesList(favorites);

        setSearchList(favorites);
      }

      getFavorites();

   }, [favorites]);



   useEffect(() => {

      if (MusicSearched !== '') {
  
        setSearchList(FavoritesList.filter((item) => item.title.toLowerCase().indexOf(MusicSearched.toLowerCase()) > -1));
  
      } else {
  
        setSearchList(FavoritesList);

      }
  
   }, [MusicSearched]);



   return <>

      <Container>

         <Content>

            <InputArea>


               <SearchInput>

                  <input className="search-item" type="text" value={MusicSearched} onChange={e => setMusicSearched(e.target.value)} placeholder="Search your favorite song here..."/>

               </SearchInput>

            </InputArea>

            <ListTitle>

               <h2> Favorites </h2>

            </ListTitle>


            <ListMusic>

               {searchList.length > 0 ?

                  searchList.map((item, index) => (

                     <MusicItem key={index} data={item}/>

                  ))

               :

                  <div className="no-favorites"> 

                        <h3> Não há favoritos disponíveis. </h3>

                        <img src={SadFace} className="sad-face" />

                  </div>

               }

            </ListMusic>

         </Content>

      </Container>

   </>
}

