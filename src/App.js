import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Amplify from '@aws-amplify/core'
import { API } from 'aws-amplify'
import { listArchiveItems } from './graphql/queries'

import MainPage from './pages/MainPage'
import EditPage from './pages/EditPage'
import MixshowPage from './pages/MixshowPage'

import awsExports from './aws-exports'

import './App.css'

Amplify.configure(awsExports)

function App() {
  const [archiveItems, setArchiveItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let apiData = await API.graphql({ query: listArchiveItems })
        return apiData
      } catch (err) {
        console.log(err)
      }
    }
    fetchItems().then((data) => {
      setArchiveItems(data)
      console.log(archiveItems)
    })
  }, [])

  // define page routes
  const routes = (
    <Switch>
      <Route path='/' exact>
        <MainPage />
      </Route>
      <Route path='/edits'>
        <EditPage />
      </Route>
      <Route path='/mixshows'>
        <MixshowPage />
      </Route>
    </Switch>
  )

  return (
    <Router>
      <div className='App'>{routes}</div>
    </Router>
  )
}

export default App
