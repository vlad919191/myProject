import icon1 from './icons/icon1.png'
import icon2 from './icons/icon2.png'
import icon3 from './icons/icon3.png'
import icon4 from './icons/icon4.png'
import icon5 from './icons/icon5.png'
import icon6 from './icons/icon6.png'
import icon7 from './icons/icon7.png'
import icon8 from './icons/icon8.png'
import icon9 from './icons/icon9.png'
import icon10 from './icons/icon10.png'
import icon11 from './icons/icon11.png'
import styles from './Navbar.module.css'
import React, { useState } from 'react';


function Navbar() {
  const [show, setShow] = useState("true");

  const toggleMenu = () =>{
    console.log("ashxatec");
  }

  return (
    <div className={styles.sideBar}>
      
      <div className={styles.head}>
        <div className={styles.head_p1}>
          <button onClick={toggleMenu}><img  src={icon1} alt="icon1" /></button>
        </div>
        <div className={styles.head_p2}>
          <div>
            <img src={icon2} alt="icon2" />
          </div>
          <div>
            <p>Զոյա Եսայան</p>
            <p>esayanzoya.y0@gmail.com</p>
          </div>
        </div>
        <input type="search" placeholder='Որոնել'/>
      </div>

      <div className={styles.content}>
        <ul>
          <li><img src={icon4} alt="icon4" /><a href='#1'>Գլխավոր էջ</a></li>
          <li><img src={icon5} alt="icon5" /><a href='#2'>Ավելացնել Ընկերություն</a></li>
          <li><img src={icon6} alt="icon6" /><a href='#3'>Ավելացնել նոր հաշիվ</a></li>
          <li><img src={icon7} alt="icon7" /><a href='#4'>Պահեստ</a></li>
          <div className={styles.content_p1}>
            <li><img src={icon8} alt="icon8" /><a href='#5'>Ծանուցումներ</a></li>
            <li><img src={icon9} alt="icon9" /><a href='#6'>Հարցեր</a></li>
          </div>
        </ul>
      </div>


      <div className={styles.footer}>
        <div></div>
        <div>
          <img src={icon10} alt="icon10" />
          <img src={icon11} alt="icon11" />
        </div>
      </div>
    </div>
  )
}

export default Navbar