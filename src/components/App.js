import React from 'react';
import UserList from '../containers/user-list'
import UserDetail from '../containers/user-detail'
function App() {
  return (
    <div className="App">
      <h2>Username List</h2>
      <UserList/>
      <h2>User Detail</h2>
      <UserDetail/>
    </div>
  );
}

export default App;
