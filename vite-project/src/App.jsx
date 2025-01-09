import React, { useEffect, useState } from 'react'

const App = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchApi = async () => {
    try {
        setLoading(true)
        const res = await fetch('https://dummyjson.com/users')
        const data = await res.json()
        if(data && data.users && data.users.length) {
          setUsers(data.users.map((item) => item.firstName))
            setLoading(false)}}
    catch (e) {
        setErrorMsg(e.message)
        setLoading(false)}}

  useEffect(() => {
    fetchApi()
  },[])
  
  return (
    <div>App</div>
  )
}
export default App