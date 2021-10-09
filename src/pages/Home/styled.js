import styled from 'styled-components';

export const Container = styled.div`
    background-color:#2F2F2F;   
    min-height:450px;
`;

export const Content = styled.div`
    max-width:1000px;
    margin:auto;
    padding-top:10px
`;

export const ErrorMessage = styled.div`
    border:2px solid red;
    border-radius:10px;
    background-color:#F68181;
    padding:10px;
    font-size:15px;
`;

export const InputArea = styled.div`
`;

export const SearchInput = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap');

    display:flex;
    padding:10px;
    padding-top:15px;

    .search-item {
        flex:1;
        height:40px;
        border-radius:10px;
        padding:20px;
        background-color:rgb(25,25,25);
        color:white;
        font-weight:bold;
        font-family: 'Didact Gothic', sans-serif;
        font-size:20px;
        border:0;
    }

    .search-item:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    } 
`;

export const ListTitle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap');

    color:white;
    font-weight:bold;
    font-family: 'Didact Gothic', sans-serif;
    font-size:20px;

    h2 {
        margin:0px;
        padding:10px;
    }
`;

export const ListMusic = styled.div`
    flex-wrap:wrap;
    display:flex;

`;

