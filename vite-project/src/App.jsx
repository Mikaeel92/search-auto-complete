import React, { useEffect, useState } from 'react'
import Suggestion from './Suggestion'

const SearchAutoComplete = () => {

    const [users, setUsers] = useState([])
    const [searchParams, setSearchParams] = useState('')
    const [ShowDropDown, setShowDropDown] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])
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
    }, [])

    const handleChange = (e) => {
        const input = e.target.value.toLowerCase();
        setSearchParams(input);
        if (input.length > 1) {
          const filteredData =
            users && users.length
              ? users.filter((item) => item.toLowerCase().indexOf(input) > -1)
              : [];
          setFilteredUsers(filteredData);
          setShowDropDown(true);
        } else {
          setShowDropDown(false);
        }}
    const handleClick = (e) => {
        setShowDropDown(false)
        setSearchParams(e.target.innerText)
        setFilteredUsers([])}

    if(loading) {return <div>Data is Loading Please Wait...</div>}
    if(errorMsg !== null) {return <div>Error, {errorMsg}</div>}

  return (
    <div className='flex flex-col item-center justify-center h-screen w-screen bg-gray-200'>
        <input 
        value={searchParams} onChange={handleChange} 
        placeholder='Search Users Here...' 
        className='p-2 bg-purple-500 text-white font-bold rounded-md w-[600px] mx-auto'/>
        {ShowDropDown && <Suggestion handleClick={handleClick} data={filteredUsers}/>}
    </div>
  )
}
export default SearchAutoComplete