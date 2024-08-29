import React from 'react';
import styles from './Tierlist.module.css';

function Tierlist() {
  return(
    <>
    <div className="tierlist-container">
  <table className="tierlist-table">
    <tr>
      <th>Tier</th>
      <th>Personnages</th>
    </tr>
    <tr>
      <td>S</td>
      <td>
        <img src="./charicon/punisher.png" alt="Punisher" />
        <img src="./charicon/Rocket Racoon.png" alt="Rocket Racoon" />
        <img src="./charicon/Spider-Man.png" alt="Spider-Man" />
        <img src="./charicon/Venom.png" alt="Venom" />
      </td>
    </tr>
    <tr>
      <td>A+</td>
      <td>
        <img src="./charicon/Hera.png" alt="Hera" />
        <img src="./charicon/hulk.png" alt="Hulk" />
        <img src="./charicon/loki.png" alt="Loki" />
        <img src="./charicon/Magneto.png" alt="Magneto" />
        {/* <img src="./winter.png" alt="winter" /> */}
      </td>
    </tr>
    <tr>
    <td>
      <img src="./charicon/Adam.png" alt="" />
      <img src="./charicon/Black-Panthere.png" alt="" />
      <img src="./charicon/Groot.png" alt="" />
      <img src="./charicon/Lady-Frost.png" alt="" />
      <img src="./charicon/Magic.png" alt="" />
      <img src="./charicon/IronMan.png" alt="" />
      <img src="./charicon/Strange.png" alt="" />
      <img src="./charicon/storm.png" alt="" />
      <img src="./charicon/Mantis.png" alt="" />
      {/* <img src="./captain.png" alt="" /> */}
    </td>
  </tr>
  <tr>
    <td>B</td>
    <td>
      <img src="./charicon/Jeff.png" alt="" />
      <img src="./charicon/Namor.png" alt="" />
      <img src="./charicon/penny parker.png" alt="" />
      <img src="./charicon/Star lord.png" alt="" />
      <img src="./charicon/Thor.png" alt="" /></td>
  </tr>
  <tr>
    <td>C</td>
    <td><img src="./charicon/Wanda.png" alt="" /></td>
  </tr>
  </table>
</div>
    </>
  );
};
export default Tierlist