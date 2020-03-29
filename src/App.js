import React from 'react';
import './App.css';
import ig1 from './Source/logo_hakita_hi_res-19.png';
import ig2 from './Source/contract_icon.png';
import ig3 from './Source/favicon.png';
import ig4 from './Source/protect_icon_x2.png';
import ig5 from './Source/trust_icon_x2.png';
import ig6 from './Source/user_needs_icon_x2.png';
function App() {
  return (
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
      <div className="imagebg">
        <div className="content">
          Urusan Legal jadi lebih <br/>
          gampang dengan hakita <br/>
          <button>Baca Artikel</button>
        </div>
      </div>
      <div align="center">
        <div className="ext1" align="left">
          <img src={ig4}/>
          <div className="exttitle">
            We Meet People’s Needs
          </div>
          <div className="extparagraf">
            Kami sadar bahwa hukum masih dianggap sebagai sesuatu yang menakutkan dan belum terjangkau untuk semua golongan.
             Inilah mengapa kami ada; untuk melawan stigma dan menjawab segala kebutuhan legal Anda.
          </div>
        </div>
        <div className="ext1" align="left">
          <img src={ig5}/>
          <div className="exttitle">
            We Provide Protection 
          </div>
          <div className="extparagraf">
            Dibantu oleh praktisi hukum dengan pengalaman lebih dari 10 tahun, HAKITA memastikan bahwa Anda mendapatkan 
            perlindungan hukum yang sesuai dengan hak Anda sebagai warga negara.</div>
        </div>
        <div className="ext1" align="left">
          <img src={ig6}/>
          <div className="exttitle">
            We Are Trustworthy
          </div>
          <div className="extparagraf">
            HAKITA hadir karena kami percaya bahwa hukum adalah hak semua orang. Semua yang kami lakukan di HAKITA selalu 
            selaras dengan misi kami untuk menjadikan hukum sebagai sesuatu yang mudah dimengerti dan dapat diakses oleh semua orang.</div>
        </div>
      </div>
      
      <h1 align="center">Product and Services</h1>
      <p align="center">Apapun kebutuhan legal Anda, biar HAKITA yang urus.</p>
      <div align="center">
        <div className="ext2" align="center">
          <img src={ig2}/>
          <p>Jasa Pembuatan PT</p>
          <span>Sekarang buat PT tidak harus mahal dan lama. Kami mengerti bahwa bisnis Anda perlu dilindungi hukum. Di HAKITA, kami membantu Anda membuat PT dengan proses yang cepat dan aman dengan harga terjangkau.</span>
        </div>
        <div className="ext2" align="center">
          <img src={ig2}/>
          <p>Jasa Pembuatan PT</p>
          <span>Sekarang buat PT tidak harus mahal dan lama. Kami mengerti bahwa bisnis Anda perlu dilindungi hukum. Di HAKITA, kami membantu Anda membuat PT dengan proses yang cepat dan aman dengan harga terjangkau.</span>
        </div>
        <div className="ext2" align="center">
          <img src={ig2}/>
          <p>Jasa Pembuatan PT</p>
          <span>Sekarang buat PT tidak harus mahal dan lama. Kami mengerti bahwa bisnis Anda perlu dilindungi hukum. Di HAKITA, kami membantu Anda membuat PT dengan proses yang cepat dan aman dengan harga terjangkau.</span>
        </div>
      </div>
      <div className="imagebg2" align="center">
        <div align="left">
          APAKAH ANDA TAHU:<br/> Kalau dari kasus tabrakan, Anda tidak perlu memberi SIM atau KTP kepada orang yang ditabrak
        </div>
      </div>
      <h1 align="center">Love Reading, Keep Reading</h1>
      <p className="p1">Punya pertanyaan soal hukum? Temukan jawabannya di blog HAKITA.</p>
      <div align="center">
        <div className="ext3">
          <p className="sp1">Hakita News</p>
          <p className="sp2">Perlindungan Hukum Dalam Belanja Online</p>
          <p className="sp3">2 weeks ago</p>
          <a href="#">Read more</a>
        </div>
        <div className="ext3">
          <p className="sp1">Hakita News</p>
          <p className="sp2">Perlindungan Hukum Dalam Belanja Online</p>
          <p className="sp3">2 weeks ago</p>
          <a href="#">Read more</a>
        </div>
        <div className="ext3">
          <p className="sp1">Hakita News</p>
          <p className="sp2">Perlindungan Hukum Dalam Belanja Online</p>
          <p className="sp3">2 weeks ago</p>
          <a href="#">Read more</a>
        </div>
      </div>
      <div align="center">
        <hr className="sm-line"/>
      </div>
      <h1 align="center">Have a question?</h1>
      <div align="center">
        <div className="a1">
          <img src={ig3}/>
          info@hakita.com
        </div>
        <div className="a1">
          <img src={ig3}/>
          Jl. Boulevard Barat Raya No. 27,
          Kelapa Gading Barat,
          Jakarta Utara
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

export default App;
