import React from 'react'
import './gallery.css';
import p1 from './images1.jpeg';
import p2 from './image2.jpeg';
import p3 from './image3.jpeg';
import p4 from './image4.jpeg';
import p5 from './image5.jpeg';
import p6 from './image6.jpeg';
import p7 from './image7.jpeg';
import p8 from './image8.jpeg';
function Gallery() {
    return (
        <div class="gallery" id="gallery">
            <header class="heading">
               <span><h1>Gallery</h1></span> 
            </header>
            <main>
                <div class="box"><img src={p1}/></div>
                <div class="box"><img src={p2}/></div>
                <div class="box"><img src={p3}/></div>
                <div class="box"><img src={p4}/></div>
                <div class="box"><img src={p5}/></div>
                <div class="box"><img src={p6}/></div>
                <div class="box"><img src={p7}/></div>
                <div class="box"><img src={p8}/></div>
            </main>
        </div>
    )
}

export default Gallery
