import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPost } from './redux/actions'
import axios from 'axios'
import Table from "./components/Table"

function App() {

  const dispatch = useDispatch()
  // URL for get data
  const API_URL = `http://localhost:5000/api/`

  useEffect(() => {
    const fetchData = async () => {
      axios.get(`${API_URL}posts`)
        .then(res => dispatch(getAllPost(res.data)))
        .catch(error => new Error(error))
    }
    fetchData()
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className="container">
      <h2>Тестовое задание React</h2>
      <div className="my-2">
        <Table />
      </div>
    </div>
  );
}

export default App;
