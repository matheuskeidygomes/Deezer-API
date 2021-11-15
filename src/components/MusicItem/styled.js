import styled from 'styled-components';

export const Track = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap');

    width:25%;

    @media only screen and (min-width:600px) and (max-width:900px) {

        width:33%;
  
    }

    @media only screen and (min-width:300px) and (max-width:600px) {

        width:100%;

    }

    .content {  

  
        background-color:rgb(25,25,25);  
        border-radius:10px;
        margin:20px 10px 20px 10px;  
     

        .content-photo {
            padding:13px;

            img {
                border-radius:10px;
                width:100%;
            }
        }

        .music-info {
            padding:5px 10px 10px 10px;  
            font-family: 'Didact Gothic', sans-serif;
            font-size:10px;
            color:White;
            display:flex;
            flex-direction:column;

            .music-title {

                h2 {
                    margin:0px;
                }

            }

            .music-artist {

                h2 {
                    margin:0px;
                    padding-top:15px
                }

            }

            .music-album {

                h2 {
                    margin:0px;
                    padding-top:15px
                }

            }

            .music-player {

                padding-top:15px;

                .player {
                    width:100%;
                    height:35px;
                    margin-top:10px;
                    margin-bottom:10px;
                }
    
            }
    
            .buttons {

                display:flex;
                margin-top:10px;

                .redirect-button {
                    font-family: 'Didact Gothic', sans-serif;
                    color: white;
                    font-weight:bold;
                    border-radius:18px;
                    font-size:15px;
                    flex:1;
                    border-style:none;
                    cursor:pointer;
                    text-decoration:none;
                    text-align:center;  
                    padding:10px;

                    img {
                        width:40px;
                    }
                    
                }

                .fav-button {
                    margin-left:5px;
                    padding:0px;
                    background-color:transparent;

                    img {
                        width:60px;
                    }

                }

                .fav-button:hover {

                }
    
            }

        }
        
    }

`;