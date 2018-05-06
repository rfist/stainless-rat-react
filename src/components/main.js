import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PageInfo from './page-info'
import StartPage from './start-page'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main className="col-md-6 offset-md-3">
        <Switch>
            <Route path='/start' component={StartPage}/>
            <Route path='/page/:pageId' component={PageInfo}/>
        </Switch>
    </main>
)

export default Main