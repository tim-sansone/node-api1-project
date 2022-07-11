import './App.css';
import React, { useState, useEffect } from "react"
import axios from "axios"

import Card from "./components/Card"
import Form from "./components/Form"


function App() {
  const [users, setUsers] = useState(null)

  const removeUser = id => {
    axios.delete(`http://localhost:9000/api/users/${id}`)
      .then(res => {
        const updatedUsers = users.filter(user => user.id !== res.data.id)
        setUsers(updatedUsers)
      })
      .catch(err => console.log(err))
  }

  const newUser = user => {
    axios.post('http://localhost:9000/api/users', user)
      .then(res => {
        console.log(res)
        setUsers([
          ...users,
          res.data
        ])
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get('http://localhost:9000/api/users')
    .then(res => {
      setUsers(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>Users</h1>
      <Form newUser={newUser} />
      <Card users={users} removeUser={removeUser}/>
    </>
  )
}

export default App;
