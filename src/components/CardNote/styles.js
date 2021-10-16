import styled from 'styled-components'
import { Link } from '@reach/router'
export const Wrapp=styled.div`
    min-height:100px;
    background:white;
     padding:10px;
   
`

export const P=styled.p`
    overflow: auto;
    &.date{
        margin:0px 10px 0px 10px;
    }
`
export const Span=styled.span`
    font-weight:bold;
`

export const WrappDate=styled.div`
  display:flex;
  align-items:center;
  margin:10px 0px 10px 0px;

`
export const WrappIcon=styled.div`
    display: flex;
    justify-content: flex-end;
`

export const LinkWrapp=styled(Link)`
    color:black;
    text-decoration:none;
`

