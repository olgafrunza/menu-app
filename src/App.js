import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import axios from "axios";

const url = "https://cwbarry.pythonanywhere.com/menu/";

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const temp = ["all"];

    data.forEach((item) => {
      if (!temp.includes(item.category)) temp.push(item.category);
    });
    setCategory(temp);
    setMenu(data);
  }, [data]);

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data.menu));
    console.log("inside useeffect", data);
  }, []);

  const handleFilter = (selected) => {
    if (selected === "all") setMenu(data);
    else {
      const newData = data.filter((item) => item.category === selected);
      setMenu(newData);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories cat={category} handleFilter={handleFilter} />
        <Menu data={menu} />
      </section>
    </main>
  );
}

export default App;
