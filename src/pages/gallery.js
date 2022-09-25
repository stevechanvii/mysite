import React, { useState, useCallback } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

import Layout from "../components/layout"

import imageGreatOceanRoadMara_1_1 from "../images/gallery/greatoceanroadmara-1-1.jpg"
import imageGreatOceanRoadMara_1_2 from "../images/gallery/greatoceanroadmara-1-2.jpg"
import imageGreatOceanRoadMara_1_3 from "../images/gallery/greatoceanroadmara-1-3.jpg"
import imageGreatOceanRoadMara_2_1 from "../images/gallery/greatoceanroadmara-2-1.jpg"
import imageGreatOceanRoadMara_2_2 from "../images/gallery/greatoceanroadmara-2-2.jpg"
import imageGreatOceanRoadMara_2_3 from "../images/gallery/greatoceanroadmara-2-3.jpg"
import imageGreatOceanRoadMara_2_4 from "../images/gallery/greatoceanroadmara-2-4.jpg"

const images = [
  {
    src: imageGreatOceanRoadMara_1_1,
    author: "SteveChan",
    title: "Great Ocean Road Marathon",
    width: 4,
    height: 3,
  },
  {
    src: imageGreatOceanRoadMara_1_2,
    author: "SteveChan",
    title: "Great Ocean Road Marathon",
    width: 4,
    height: 3,
  },
  {
    src: imageGreatOceanRoadMara_1_3,
    author: "SteveChan",
    title: "Great Ocean Road Marathon",
    width: 4,
    height: 3,
  },
  {
    src: imageGreatOceanRoadMara_2_1,
    author: "SteveChan",
    title: "Great Ocean Road Marathon",
    width: 3,
    height: 4,
  },
  {
    src: imageGreatOceanRoadMara_2_2,
    author: "SteveChan",
    title: "Great Ocean Road Marathon",
    width: 3,
    height: 4,
  },
  {
    src: imageGreatOceanRoadMara_2_3,
    author: "SteveChan",
    title: "Great Ocean Road Marathon",
    width: 3,
    height: 4,
  },
  {
    src: imageGreatOceanRoadMara_2_4,
    author: "SteveChan",
    title: "Great Ocean Road Marathon",
    width: 3,
    height: 4,
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
