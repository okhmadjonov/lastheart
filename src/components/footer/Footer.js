import React from 'react';

import rip from '../../assets/img/ripp.png';
import goldlogo from '../../assets/img/goldlogo.png';
import './footer.css';


function Footer(){
    return(
<div className="footer">
            <div className="footer_img">
                <img src={rip} alt="Footer Top" />
            </div>
            <div className="footer_bottom">
                <div className="footer_logo">
                    <a href="/">
                        <img  src={goldlogo} alt="Footer img" />
                    </a>
                    <p> © SparkleHeart 2020. <br /> Visas tiesības aizsargātas.</p>
                </div>
                <div className="footer_links">
                    <ul>
                        <li style={{marginTop:"-12px", marginLeft:"4px"}}><a href="/">Ideja</a></li>
                        <li><a href="/">Piesaki Sapni</a></li>
                        <li><a href="/">Uzņēmējiem</a></li>
                        <li><a href="/">Sapņu banka</a></li>
                        <li><a href="/">Sapņus atbalsta</a></li>
                        <li><a href="/">Iedvesmas stāsti</a></li>
                    </ul>
                </div>
                <div className="footer_bank">
                    <ul>
                        <li><a href="/">Biedrība SparkleHeart</a></li>
                        <li><a href="/">Reģistrācijas nr. 40008293119</a></li>
                        <li><a href="/">Banka: SWEDBANK A/S</a></li>
                        <li><a href="/">LV52HABA0551047652465</a></li>
                    </ul>
                </div>
                <div className="footer_address">
                    <ul>
                        <li><a href="/">Juris Gogulis</a></li>
                        <li><a href="/">juris.gogulis@sparkleheart.org</a></li>
                        <li><a href="/">+37126890034</a></li>
                        <li><a href="/">Biķernieku iela 24a - 5, LV-1006</a></li>
                        <li style={{fontSize:"36px", marginTop:"15px"}}>
                            <a href="/" style={{marginRight:"30px"}}><i class="fab fa-facebook-f"></i></a>
                            <a href="/"><i class="fab fa-instagram"></i></a>
                        </li>
                        <li><a href="/">Privātuma politika</a></li>

                    </ul>
                </div>

            </div>
           
        </div>
    )
}

export default Footer;