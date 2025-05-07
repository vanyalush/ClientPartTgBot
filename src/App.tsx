import {Context} from "./index";
import {observer} from "mobx-react-lite";
import React, {FC, useContext, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import {Spinner} from "react-bootstrap";
import './App.css'

const App:FC = ()=> {

    const {store} = useContext(Context);
    useEffect( () => {
        if (localStorage.getItem("token")){
            store.checkAuth().catch(() => {
                localStorage.removeItem("token");
                store.setAuth(false);
            });
        } else{
            store.setAuth(false);
        }
    }, [])
    if(store.isLoading){
        return (
            <div>
                <Spinner animation="border" role="status"
                         style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default observer(App);