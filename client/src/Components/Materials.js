import React from "react";

const Materials = () => {
  return (
    <>
      <section>
        <ul>
          <li>
            <a href="#tornillos">Tornillos</a>
          </li>
          <li>
            <a href="#tuercas">Tuercas</a>
          </li>
        </ul>
        <form>
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">BUSCAR</button>
        </form>
      </section>
    </>
  );
};

export default Materials;
