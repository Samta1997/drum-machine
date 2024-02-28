import { createGlobalStyle } from "styled-components";
export const GlobalStyle=createGlobalStyle`
html,body{
    box-sizing:border-box;
    margin:0;
    background-color:#96c6fc;
}
#root{
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
}
.grid-items{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:10px;
    margin:30px;
    height:260px;
}
.drum-pad{
    background-color:grey;
    width:70px;
    height:70px;
    text-align:center;
    font-size:20px;
    box-shadow:1px 1px 6px 3px black;
    cursor:pointer;
    &:active{
        background-color:yellow;
    }
}
#key{
    margin-top:22.5px;
    width:30px;
    margin-left:20px;
}
#container{
    display:flex;
    align-items:center;
    max-width:800px;
    margin:0 auto;
    background-color:#bad5f4;
    height:400px;
    border:6px solid yellow;
    
}
#display{
    height:230px;
    width:250px;
    font-size:20px;
    display:flex;
    flex-direction:column;
    gap:40px;
    justify-content:center;
    align-items:center;
    width:300px;  
}
#clip-name{
    background-color:#1076dc;
    padding:9px;
    border-radius:4px;
    color:white;  
}

button{
    background-color:grey;
    padding:10px;
    border-radius:4px;
    cursor:pointer;
    border:none;
    font-size:15px;
   
}

#slide{
    cursor:pointer;
}
@media(max-width:767px){
    #container{
       display:flex;
       flex-direction:column;
       height:80vh;
        
    }
    #display{
        gap:30px;
        margin-top:-10px;
    }


    
}
`