import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { EditPostForm } from './features/posts/EditPostForm'
import { PostsMainPage } from './features/posts/PostsMainPage'
import { SinglePostPage } from './features/posts/SinglePostPage'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<PostsMainPage />}></Route>
          <Route path="/posts/:postId" element={<SinglePostPage />}></Route>
          <Route path="/editPost/:postId" element={<EditPostForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
