import { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [data, setData] = useState(null);

  const [showModal, setShowModal] = useState(false);

  function handleToogleModal() {
    setShowModal((wasModal) => !wasModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToogleModal={handleToogleModal} />
      )}
      {data && <Footer data={data} handleToogleModal={handleToogleModal} />}
    </>
  );
}

export default App;
