import styled from 'styled-components'

export const WrappDashboard=styled.div`
    min-height:300px;
    max-height:500px;
    border:solid 1px #eee;
    margin:0px 25px;
    box-shadow:10px 10px 10px 10px #eee;
    border-radius:20px;
    padding:10px 10px;
`

export const WrapContainer=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:50px;
`

export const Row = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:10px;
`

export const Col = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:10px;
    margin: 2rem;
    border-radius: 20px;
    border: solid 1px #000;
    padding: 1.5rem;
    width: 150px;
`

export const Span = styled.span`
    font-size:0.8rem;
    color:#000;
`

export const Tr = styled.tr`
    border-radius: 20px;
    box-shadow: 0px 0px 20px 1px grey;
`

export const Th = styled.th`
    min-width: 110px;
    padding: 8px;
`

export const Table = styled.table`
    width: 100%;
    border-spacing: 0 15px;
    position: relative;
`

export const H2 = styled.h2`
    margin: 0px;
    padding: 0px;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
`

export const Sticky = styled.thead`
    position: sticky;
    top: 1rem;
    background-color: #fff;
    z-index: 1;
`
