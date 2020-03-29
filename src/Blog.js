import React from 'react';
import './App.css';
import ig1 from './Source/logo_hakita_hi_res-19.png';
import ig2 from './Source/gmbr1.jpg'
import ig3 from './Source/gmbr1160.jpg'

function Blog() {
    return(
        <div>
            <div className="navbar">
                Email: info@hakita.com
                <span className="stuff1">c1</span>
            </div>
            <div className="container">
                <div className="title">
                <img src={ig1} className="ig1"/>
                <p className="linkz"><a href="#">Home</a> <a href="#">About</a> <a href="#">Services</a> <a href="#">Blog</a> <a href="#">Contact</a> </p>
                </div>
            </div>
            <div className="blogTitle" align="center">
                <div>
                    <h1>BLOG</h1>
                </div>
            </div>
            <div align="center">
                <div className="blogcol" >
                    <div className="col1" align="left">
                        <div className="card">
                            <img src={ig2} />
                            <a href="#">
                                <p className="title1">Perlindungan Hukum Dalam Belanja Online</p>
                                <p className="date1">2 weeks ago in</p>
                                <p className="par">Di zaman sekarang, belanja online sudah menjadi hal yang biasa dilakukan. Tetapi, kita harus tetap hati-hati dengan adanya penipuan online.</p>
                                <p className="linkz1">Continue Reading</p>
                            </a>
                        </div>
                        <div className="card">
                            <img src={ig2} />
                            <a href="#">
                                <p className="title1">Perlindungan Hukum Dalam Belanja Online</p>
                                <p className="date1">2 weeks ago in</p>
                                <p className="par">Di zaman sekarang, belanja online sudah menjadi hal yang biasa dilakukan. Tetapi, kita harus tetap hati-hati dengan adanya penipuan online.</p>
                                <p className="linkz1">Continue Reading</p>
                            </a>
                        </div>
                        <div className="card">
                            <img src={ig2} />
                            <a href="#">
                                <p className="title1">Perlindungan Hukum Dalam Belanja Online</p>
                                <p className="date1">2 weeks ago in</p>
                                <p className="par">Di zaman sekarang, belanja online sudah menjadi hal yang biasa dilakukan. Tetapi, kita harus tetap hati-hati dengan adanya penipuan online.</p>
                                <p className="linkz1">Continue Reading</p>
                            </a>
                        </div>
                    </div>
                    <div className="col2" align="left">
                        <div className="search1">
                        S<input type="text" placeholder="Search..."/></div>
                        <div className="infoblog">
                            <img src={ig3} align="left"/><a href="">Perlindungan Hukum Dalam Belanja Online</a>
                            <p>March 17, 2020</p>
                        </div>
                        <div className="infoblog">
                            <img src={ig3} align="left"/><a href="">Perlindungan Hukum Dalam Belanja Online</a>
                            <p>March 17, 2020</p>
                        </div>
                        <div className="infoblog">
                            <img src={ig3} align="left"/><a href="">Perlindungan Hukum Dalam Belanja Online</a>
                            <p>March 17, 2020</p>
                        </div>
                        <div className="infoblog">
                            <img src={ig3} align="left"/><a href="">Perlindungan Hukum Dalam Belanja Online</a>
                            <p>March 17, 2020</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="ft1">
                    <h3>ABOUT US</h3>
                    <p>HAKITA adalah sebuah platform yang menjawab kebutuhan masyarakat Indonesia dalam membuat dan memproses dokumen legal yang aman dan terpercaya. Kami menggunakan teknologi otomasi untuk mempermudah proses pembuatan dokumen. </p>
                </div>
                <div className="ft2">
                    <h3>Contact Us</h3>
                    <p>Mail: info@hakita.com Alamat: Jl. Boulevard Barat Raya No.27, RW. 9, Kelapa Gading Barat - Jakarta Utara 14240 </p>
                </div>
            </div>
        </div>
    );
}
export default Blog 