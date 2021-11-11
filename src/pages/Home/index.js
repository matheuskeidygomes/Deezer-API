import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, Content, InputArea, SearchInput, ListTitle, ListMusic, ErrorMessage } from './styled';
import MusicItem from '../../components/MusicItem/index';


export default function Home() {


   const [MusicSearched, setMusicSearched] = useState('');

   const [searchList, setSearchList] = useState([]);

   const [MusicList, setMusicList] = useState([]);

   const [Error, setError] = useState('');


   useEffect(() => {

      async function getMusics() {

         try {

            let res = await api.get("/search/track?q=eminem");

            let json = res.data;

            setMusicList(json.data);

            setSearchList(json.data);
         
         } catch (err) {

            setError(err);
         }

      }


      /*

      async function getMusics() {

         await api.get("/search/track?q=eminem").then((res) => {
   
            setMusicList(res.data.data);

            setSearchList(res.data.data);
           
         }).catch((error) => {

            setError(error);
         });

      }

      */

      getMusics();

   }, []);


   useEffect(() => {

      if (MusicSearched !== '') {
  
        setSearchList(MusicList.filter((item) => item.title.toLowerCase().indexOf(MusicSearched.toLowerCase()) > -1));
  
      } else {
  
        setSearchList(MusicList);

      }
  
   }, [MusicSearched]);


   return <>

      <Container>

         <Content>

            {Error &&
               <ErrorMessage> {Error} </ErrorMessage>
            }

            <InputArea>

               <SearchInput>

                  <input className="search-item" type="text" value={MusicSearched} onChange={e => setMusicSearched(e.target.value)} placeholder="Search your favorite song here..."/>

               </SearchInput>

            </InputArea>

            <ListTitle>

               <h2> Playlist </h2>

            </ListTitle>

            <ListMusic>

               {searchList.map((item, index) => (

                  <MusicItem key={index} data={item}/>

               ))}

            </ListMusic>

         </Content>

      </Container>

   </>
}

