import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const name=useSelector(function(state){
    return state.currentUser.name
  });

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{name}</h1>

      <input type="text" value={name} onChange={(evt)=>{
dispatch({
  type: 'edit-user-name',
  payload: {
    name: evt.target.value
  }
})
      }}/>
    </div>
  );
}

export default App;
