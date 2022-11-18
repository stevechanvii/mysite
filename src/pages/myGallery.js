import React, { useState, useCallback } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

import Layout from "../components/layout"

import img1 from "../images/exp/1.jpg"
import img1_2 from "../images/exp/1_2.jpg"
import img2 from "../images/exp/2.jpg"
import img2_2 from "../images/exp/2_2.jpg"
import img3 from "../images/exp/3.jpg"
import img4 from "../images/exp/4.jpg"
import img5 from "../images/exp/5.jpg"
import img6 from "../images/exp/6.jpg"
import img7 from "../images/exp/7.jpg"
import img8 from "../images/exp/8.jpg"
import img9 from "../images/exp/9.jpg"
import img10 from "../images/exp/10.jpg"
import img11 from "../images/exp/11.jpg"
import img12 from "../images/exp/12.jpg"
import img12_1 from "../images/exp/12_1.jpg"
import img13 from "../images/exp/13.jpg"
import img14 from "../images/exp/14.jpg"
import img15 from "../images/exp/15.jpg"
import img15_2 from "../images/exp/15_2.jpg"
import img16 from "../images/exp/16.jpg"
import img20 from "../images/exp/20.jpg"
import img21 from "../images/exp/21.jpg"
import img22 from "../images/exp/22.jpg"
import img23 from "../images/exp/23.jpg"
import img25 from "../images/exp/25.jpg"
import img26 from "../images/exp/26.jpg"
import img27 from "../images/exp/27.jpg"
import img28 from "../images/exp/28.jpg"
import img29 from "../images/exp/29.jpg"
import img30 from "../images/exp/30.jpg"
import img31 from "../images/exp/31.jpg"
import img32 from "../images/exp/32.jpg"
import img33 from "../images/exp/33.jpg"
import img34 from "../images/exp/34.jpg"
import img35 from "../images/exp/35.jpg"

const images = [
  // Melbourne Marathon Training Session 2022

  {
    src: img1,
    title: "Body building",
    width: 3,
    height: 4,
  },
  {
    src: img1_2,
    title: "Running",
    width: 4,
    height: 3,
  },
  {
    src: img2,
    title: "Hiking - Toorongo Falls",
    width: 4,
    height: 3,
  },
  {
    src: img2_2,
    title: "Hiking - Wilsons Prom",
    width: 4,
    height: 3,
  },
  {
    src: img3,
    title: "Hiking - Bancoora Beach",
    width: 4,
    height: 3,
  },
  {
    src: img4,
    title: "Hiking - Bancoora Beach",
    width: 4,
    height: 3,
  },
  {
    src: img5,
    title: "Diving",
    width: 4,
    height: 3,
  },
  {
    src: img6,
    title: "Ski",
    width: 3,
    height: 4,
  },
  {
    src: img7,
    title: "Ski",
    width: 3,
    height: 4,
  },
  {
    src: img8,
    title: "Coffee",
    width: 1,
    height: 1,
  },
  {
    src: img9,
    title: "Coffee",
    width: 1,
    height: 1,
  },
  {
    src: img10,
    title: "Harbin - Saint Sophia's Church",
    width: 4,
    height: 3,
  },
  {
    src: img11,
    title: "Beijing",
    width: 4,
    height: 3,
  },
  {
    src: img12,
    title: "Beijing - The Forbidden City",
    width: 4,
    height: 3,
  },
  {
    src: img12_1,
    title: "Beijing - The Forbidden City",
    width: 4,
    height: 3,
  },
  {
    src: img13,
    title: "Shanghai",
    width: 4,
    height: 3,
  },
  {
    src: img14,
    title: "Shanghai",
    width: 4,
    height: 3,
  },
  {
    src: img15_2,
    title: "Shanghai",
    width: 4,
    height: 3,
  },
  {
    src: img15,
    title: "Hongkong",
    width: 4,
    height: 3,
  },
  {
    src: img16,
    title: "Hongkong",
    width: 4,
    height: 3,
  },
  {
    src: img20,
    title: "Melbourne",
    width: 4,
    height: 3,
  },
  {
    src: img21,
    title: "Melbourne Star",
    width: 4,
    height: 3,
  },
  {
    src: img22,
    title: "Melbourne - Albert Park",
    width: 4,
    height: 3,
  },
  {
    src: img23,
    title: "Melbourne",
    width: 4,
    height: 3,
  },
  {
    src: img25,
    title: "Melbourne",
    width: 3,
    height: 4,
  },
  {
    src: img26,
    title: "Melbourne - Dockland",
    width: 4,
    height: 3,
  },
  {
    src: img27,
    title: "Melbourne",
    width: 3,
    height: 4,
  },
  {
    src: img28,
    title: "Melbourne",
    width: 3,
    height: 4,
  },
  {
    src: img29,
    title: "Flinders Pier",
    width: 4,
    height: 3,
  },
  {
    src: img30,
    title: "Melbourne",
    width: 4,
    height: 3,
  },
  {
    src: img31,
    title: "Melbourne - F1",
    width: 4,
    height: 3,
  },
  {
    src: img32,
    title: "Sydney - Bondi Beach",
    width: 4,
    height: 3,
  },
  {
    src: img33,
    title: "Sydney - Bondi Beach",
    width: 4,
    height: 3,
  },
  {
    src: img34,
    title: "Sydney - Zoo",
    width: 3,
    height: 4,
  },
  {
    src: img35,
    title: "Sydney - Opera House",
    width: 4,
    height: 3,
  },
]

const GalleryPage = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <Layout>
      <div id="mygallery">
        <Gallery photos={images} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={images.map((x, index) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                  alt: `${x.title}-${index}`,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </Layout>
  )
}

export default GalleryPage
