
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store";

import UsersPage from './components/Users/UsersPage';
import PostsPage from './components/Users/Posts/PostsPage';

function App() {
  return (
    <Provider store={store}>
      <Routes> 
        <Route path={"/"} exact element={<UsersPage />} />
        <Route path="/posts/:userId" element={<PostsPage />} />
        <Route
          path="*"
          element={
            <main>
              <p>Oops! No hay datos que mostrar...</p>
            </main>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App