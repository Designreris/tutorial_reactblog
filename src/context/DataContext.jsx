import { onValue, ref, remove, set, update } from 'firebase/database'
import { useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { database as db} from '../api/firebase'

const DataContext = createContext({})

export const DataProvider = ({children}) => {
  const navigate = useNavigate()
  
  // States //
  const [postData, setPostData] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editId, setEditId] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  // Import Post Data //
  useEffect(() => {
    try {
      const dbRef = ref(db, '/posts')
      onValue(dbRef, (snapshot) => {
        setPostData(snapshot.val())
      })
    } catch (error) {
      console.error(error)
    } 
  }, [])

  // Search //
  useEffect(() => {
    try {
      const resultsFilter = postData.filter( post => (
        ((post.body).toLowerCase()).includes((search.toLowerCase())) ||
        ((post.title).toLowerCase()).includes((search.toLowerCase()))
      ))
      setSearchResults(resultsFilter.reverse()) 
    } catch (error) {
      console.error(error)
    }
  },[postData, search])

  // Event Handler //
  const handleSubmit = () => {
    const newId = postData.length ? Number(postData[postData.length - 1].id) + 1 : 1
    const newPost = {
      id: newId, 
      date: Date(),
      title: postTitle,
      body: postBody
    }
    // Export Post Data
    let dbRef = ref(db, `/posts/${newId - 1}`)
    set(dbRef, newPost)

    setPostTitle('')
    setPostBody('')
    navigate("/")
  }

  const handleEdit = (id) => {
    navigate("/edit")
    const post = postData.find( post => (post.id).toString() === id )
    setEditId(id)
    setEditTitle(post.title)
    setEditBody(post.body)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const id = editId
    const post = {
      id: Number(id),
      date: Date(),
      title: editTitle,
      body: editBody
    }
    // Update Post Data
    let dbRef = ref(db, `/posts/${id - 1}`)
    update(dbRef, post)
    
    setEditId("")
    setEditTitle("")
    setEditBody("")
    navigate("/")
  }

  const handleDelete = (post) => {
    // Update Post Data
    let dbRef = ref(db, `/posts/${post.id - 1}`)
    remove(dbRef, post)
    navigate("/")
  }

  return (
    <DataContext.Provider value={{
      postData,
      search, setSearch, searchResults,
      postTitle, setPostTitle, postBody, setPostBody,
      editTitle, setEditTitle, editBody, setEditBody, 
      handleSubmit, handleEdit, handleUpdate, handleDelete,

    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext