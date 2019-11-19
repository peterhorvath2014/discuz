import React from 'react';
import {Helmet} from "react-helmet";

import {DiscussionPage} from "./DiscussionsPage";

import "antd/dist/antd.css";
import './App.css';

function App() {
    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Discuz</title>
            </Helmet>
            <DiscussionPage/>
        </div>
    );
}

export default App;
