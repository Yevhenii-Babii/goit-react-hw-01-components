import styled from 'styled-components';

export const List = styled.ul`
list-style:none; 
padding: 0;
display: block;
text-align: center;
`
export const ItemLi = styled.li`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10px;
gap: 10px
`

export const Text = styled.p`
margin-left: 10px;
`

export const Span = styled.span` 
   background-color: ${(props) => props.isOnline ? 'green' : 'red' } ;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`