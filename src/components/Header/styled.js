import styled from 'styled-components';


export const HeaderArea = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap');
      
height: 75px;
background-color:black;


.container {
    max-width:1000px;
    margin:auto;
    display:flex;
    background-color:black;
}

.logo {
    flex:1;
    display:flex;
    align-items:center;
    height:70px;
    padding-left:15px;
}

nav { 
    display:flex;
    align-items:center;
    height:70px;
    font-family: 'Didact Gothic', sans-serif;
    font-size:17px;


    ul {
        list-style:none;
        padding:0px;
        margin:0px;
        display:flex;
    }
    

    li {
        padding:15px;

        a, button { 
            outline:0;
            border:0;
            background:none;
            color:white;
            text-decoration:none;
            font-weight:bold;

            &:hover {
                color:#CCC;
            }

        }
        
    }    
  
}

@media only screen and (min-width:390px) and (max-width:500px) {

    .logo {
        img {
            width:180px;
        }
    }
    
}

@media only screen and (min-width:350px) and (max-width:390px) {

    .logo {
        img {
            width:150px;
        }
    }
    
}

@media only screen and (min-width:0px) and (max-width:350px) {

    .logo {
        img {
            width:110px;
        }
    }
    
}


`;