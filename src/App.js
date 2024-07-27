import Header from './components/Header'
import Nav from './components/Nav'
import Home from './pages/Home'
import NewPosts from './pages/NewPosts'
import PostPage from './pages/PostPage'
import Edit from './pages/Edit'
import Footer from './components/Footer'
import PageNotFound from './pages/PageNotFound'
import { Route, Routes } from 'react-router-dom'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <div className="App">
      <Header title='React Blog SPA' />
      <DataProvider>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/edit' element={<Edit />} />
          <Route exact path='/posts' element={<NewPosts />} />
          <Route path='/posts/:id' element={<PostPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
