import './App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import AnimatedRoutes from './components/AnimatedRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync } from './redux/gallerySlice';
import { useEffect } from 'react';



function App() {
  const { isLoading } = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAsync())
  }, [dispatch])

  if (isLoading) {
    return (
      <h1>Loading...</h1>
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
