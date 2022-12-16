import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
 tr{
   border: 1px solid black;
 }
 td{
   border: 1px solid black;
   text-align: center;
   padding-top: 10px;
   padding-bottom: 10px;
   padding-left: 50px;
   padding-right: 50px;
   text-transform: capitalize;
 }

 th{
   border: 1px solid black;
   background-color: aqua;
   text-transform: uppercase;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 20px;
padding-right: 20px;
 }
 `