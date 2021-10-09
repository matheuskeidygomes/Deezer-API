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

                padding-top:15px;

                .redirect-button {
                    font-family: 'Didact Gothic', sans-serif;
                    background: #2C2C2C;
                    color: white;
                    font-weight:bold;
                    border-radius:18px;
                    font-size:15px;
                    flex:3;
                    border-style:none;
                    cursor:pointer;
                    text-decoration:none;
                    text-align:center;
                    line-height:60px;   
                    
                    :hover {
                        background-color:#525252;
                        -webkit-transition: 0.5s ease-out;
                        -moz-transition: 0.5s ease-out;
                        -o-transition: 0.5s ease-out;
                        transition: 0.5s ease-out;
                    }
                }
    
            }

        }
        
    }

`;