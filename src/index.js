import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Context from './context'
import { Provider } from 'react-redux'
import store from '../src/store'
const client = new ApolloClient({
    uri:'https://plant-scaner-test.herokuapp.com',
    request: operation =>{
        const token= window.sessionStorage.getItem('token')
        const authorization=token ? `JWT ${token}` : ''
        operation.setContext({
            headers:{
                authorization
            }
        })
        
    },
    onError:error =>{
        console.log(error)
        const {errors}=error.response
        if(errors){
            //window.sessionStorage.removeItem('token')
           //window.location.href=window.location.href
        }
    }
})

ReactDOM.render(
    <Context.Provider>
        <ApolloProvider client={client}>
            <Provider store={store}>
             <App></App>
            </Provider>       
        </ApolloProvider>
    </Context.Provider>
,document.getElementById('app'))