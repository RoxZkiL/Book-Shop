import React from "react";
import MaterialsNavBar from "./MaterialsNavBar";
import style from "./Materials.module.css";
import image from "./media/imageMaterials.png";
import MaterialsTable from "./MaterialsTable";

const Materials = () => {
  function preventForm(e) {
    e.preventDefault();
  }
  return (
    <div className={style.body}>
      <img className={style.image} src={image} alt="not found" />
      <div className={style.navBar}>
        <MaterialsNavBar />
      </div>
      <form onSubmit={(e) => preventForm(e)}>
        <input
          className={style.input}
          type="text"
          placeholder="Search..."
          name="search"
        />
        <button className={style.button} type="submit">
          BUSCAR
        </button>
      </form>
      <div className={style.table}>
        <MaterialsTable />
      </div>
    </div>
  );
};

export default Materials;
