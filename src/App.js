import './App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import AnimatedRoutes from './components/AnimatedRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync, updateDataAsync } from './redux/gallerySlice';
import { useEffect } from 'react';



function App() {
  const { paintingsData, isLoading } = useSelector(state => state.data);
  console.log("paintingsData", paintingsData)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAsync())
  }, [dispatch])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
