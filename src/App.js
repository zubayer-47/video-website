import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import { fetchAllVideos } from "./features/videos/videosSlice";
import FilterByAuthor from "./pages/FilterByAuthor";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllVideos());
    }, [dispatch])
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videos/:videoId" element={<Video />} />
                <Route path="/author/:authorName" element={<FilterByAuthor />} />
                
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
