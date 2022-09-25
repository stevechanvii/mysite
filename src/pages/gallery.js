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

import imageIronman_1_1 from "../images/gallery/ironman-1-1.jpg"
import imageIronman_1_2 from "../images/gallery/ironman-1-2.jpg"
import imageIronman_1_3 from "../images/gallery/ironman-1-3.jpg"
import imageIronman_1_4 from "../images/gallery/ironman-1-4.jpg"
import imageIronman_2_1 from "../images/gallery/ironman-2-1.jpg"
import imageIronman_2_2 from "../images/gallery/ironman-2-2.jpg"
import imageIronman_2_3 from "../images/gallery/ironman-2-3.jpg"

import imageMelbMara21_1_1 from "../images/gallery/melbmara21-1-1.jpg"
import imageMelbMara21_1_2 from "../images/gallery/melbmara21-1-2.jpg"
import imageMelbMara21_2_1 from "../images/gallery/melbmara21-2-1.jpg"
import imageMelbMara21_2_2 from "../images/gallery/melbmara21-2-2.jpg"
import imageMelbMara21_2_3 from "../images/gallery/melbmara21-2-3.jpg"
import imageMelbMara21_2_4 from "../images/gallery/melbmara21-2-4.jpg"
import imageMelbMara21_2_5 from "../images/gallery/melbmara21-2-5.jpg"

import imageMelbMaraTraining_1_1 from "../images/gallery/melbmaratraining-1-1.jpg"
import imageMelbMaraTraining_1_2 from "../images/gallery/melbmaratraining-1-2.jpg"
import imageMelbMaraTraining_1_3 from "../images/gallery/melbmaratraining-1-3.jpg"
import imageMelbMaraTraining_1_4 from "../images/gallery/melbmaratraining-1-4.jpg"
import imageMelbMaraTraining_2_1 from "../images/gallery/melbmaratraining-2-1.jpg"
import imageMelbMaraTraining_2_2 from "../images/gallery/melbmaratraining-2-2.jpg"
import imageMelbMaraTraining_2_3 from "../images/gallery/melbmaratraining-2-3.jpg"
import imageMelbMaraTraining_2_4 from "../images/gallery/melbmaratraining-2-4.jpg"
import imageMelbMaraTraining_2_5 from "../images/gallery/melbmaratraining-2-5.jpg"
import imageMelbMaraTraining_2_6 from "../images/gallery/melbmaratraining-2-6.jpg"
import imageMelbMaraTraining_2_7 from "../images/gallery/melbmaratraining-2-7.jpg"
import imageMelbMaraTraining_2_8 from "../images/gallery/melbmaratraining-2-8.jpg"
import imageMelbMaraTraining_2_9 from "../images/gallery/melbmaratraining-2-9.jpg"
import imageMelbMaraTraining_2_10 from "../images/gallery/melbmaratraining-2-10.jpg"

import imageMRC_2_1 from "../images/gallery/mrc-2-1.jpg"
import imageMRC_2_2 from "../images/gallery/mrc-2-2.jpg"
import imageMRC_2_3 from "../images/gallery/mrc-2-3.jpg"
import imageMRC_2_4 from "../images/gallery/mrc-2-4.jpg"
import imageMRC_2_5 from "../images/gallery/mrc-2-5.jpg"
import imageMRC_2_6 from "../images/gallery/mrc-2-6.jpg"
import imageMRC_2_7 from "../images/gallery/mrc-2-7.jpg"

import imageParkrun_1_1 from "../images/gallery/parkrun-1-1.jpg"
import imageParkrun_1_2 from "../images/gallery/parkrun-1-2.jpg"
import imageParkrun_1_3 from "../images/gallery/parkrun-1-3.jpg"
import imageParkrun_2_1 from "../images/gallery/parkrun-2-1.jpg"
import imageParkrun_2_2 from "../images/gallery/parkrun-2-2.jpg"
import imageParkrun_2_3 from "../images/gallery/parkrun-2-3.jpg"
import imageParkrun_2_4 from "../images/gallery/parkrun-2-4.jpg"
import imageParkrun_2_5 from "../images/gallery/parkrun-2-5.jpg"
import imageParkrun_2_6 from "../images/gallery/parkrun-2-6.jpg"
import imageParkrun_2_7 from "../images/gallery/parkrun-2-7.jpg"
import imageParkrun_2_8 from "../images/gallery/parkrun-2-8.jpg"
import imageParkrun_2_9 from "../images/gallery/parkrun-2-9.jpg"
import imageParkrun_2_10 from "../images/gallery/parkrun-2-10.jpg"
import imageParkrun_2_11 from "../images/gallery/parkrun-2-11.jpg"
import imageParkrun_2_12 from "../images/gallery/parkrun-2-12.jpg"
import imageParkrun_2_13 from "../images/gallery/parkrun-2-13.jpg"

import imagePizzaRun_1_1 from "../images/gallery/pizzarun-1-1.jpg"
import imagePizzaRun_1_2 from "../images/gallery/pizzarun-1-2.jpg"
import imagePizzaRun_2_1 from "../images/gallery/pizzarun-2-1.jpg"
import imagePizzaRun_2_2 from "../images/gallery/pizzarun-2-2.jpg"
import imagePizzaRun_2_3 from "../images/gallery/pizzarun-2-3.jpg"
import imagePizzaRun_2_4 from "../images/gallery/pizzarun-2-4.jpg"

import imageRunForKids_1_1 from "../images/gallery/runforkids-1-1.jpg"
import imageRunForKids_1_2 from "../images/gallery/runforkids-1-2.jpg"
import imageRunForKids_1_3 from "../images/gallery/runforkids-1-3.jpg"
import imageRunForKids_1_4 from "../images/gallery/runforkids-1-4.jpg"
import imageRunForKids_1_5 from "../images/gallery/runforkids-1-5.jpg"
import imageRunForKids_1_6 from "../images/gallery/runforkids-1-6.jpg"
import imageRunForKids_1_7 from "../images/gallery/runforkids-1-7.jpg"
import imageRunForKids_1_8 from "../images/gallery/runforkids-1-8.jpg"
import imageRunForKids_1_10 from "../images/gallery/runforkids-1-10.jpg"
import imageRunForKids_1_11 from "../images/gallery/runforkids-1-11.jpg"
import imageRunForKids_1_12 from "../images/gallery/runforkids-1-12.jpg"
import imageRunForKids_1_13 from "../images/gallery/runforkids-1-13.jpg"
import imageRunForKids_1_14 from "../images/gallery/runforkids-1-14.jpg"
import imageRunForKids_1_15 from "../images/gallery/runforkids-1-15.jpg"
import imageRunForKids_1_16 from "../images/gallery/runforkids-1-16.jpg"
import imageRunForKids_1_17 from "../images/gallery/runforkids-1-17.jpg"

import imageRunMelb_1_1 from "../images/gallery/runmelb-1-1.jpg"
import imageRunMelb_2_1 from "../images/gallery/runmelb-2-1.jpg"
import imageRunMelb_2_2 from "../images/gallery/runmelb-2-2.jpg"

const images = [
  // Melbourne Marathon Training Session 2022
  {
    src: imageMelbMaraTraining_1_1,
    title: "Melbourne Marathon Training Session 2022",
    width: 4,
    height: 3,
  },
  {
    src: imageMelbMaraTraining_1_2,
    title: "Melbourne Marathon Training Session 2022",
    width: 4,
    height: 3,
  },
  {
    src: imageMelbMaraTraining_1_3,
    title: "Melbourne Marathon Training Session 2022",
    width: 4,
    height: 3,
  },
  {
    src: imageMelbMaraTraining_1_4,
    title: "Melbourne Marathon Training Session 2022",
    width: 4,
    height: 3,
  },
  {
    src: imageMelbMaraTraining_2_3,
    title: "Melbourne Marathon Training Session 2022",
    width: 3,
    height: 4,
  },
  {
    src: imageMelbMaraTraining_2_1,
    title: "Melbourne Marathon Training Session 2022",
    width: 3,
    height: 4,
  },
  {
    src: imageMelbMaraTraining_2_2,
    title: "Melbourne Marathon Training Session 2022",
    width: 3,
    height: 4,
  },
  {
    src: imageMelbMaraTraining_2_4,
    title: "Melbourne Marathon Training Session 2022",
    width: 3,
    height: 4,
  },
  {
    src: imageMelbMaraTraining_2_5,
    title: "Melbourne Marathon Training Session 2022",
    width: 3,
    height: 4,
  },
  {
    src: imageMelbMaraTraining_2_6,
    title: "Melbourne Marathon Training Session 2022",
    width: 3,
    height: 4,
  },
  {
    src: imageMelbMaraTraining_2_7,
    title: "Melbourne Marathon Training Session 2022",
    width: 3,
    height: 4,
  },
  {
    src: imageMelbMaraTraining_2_8,
    title: "Melbourne Marathon Training Session 2022",
    width: 3,
    height: 4,
  },
  {
    src: imageMelbMaraTraining_2_9,
    title: "Melbourne Marathon Training Session 2022",
    width: 3,
    height: 4,
  },
  {
    src: imageMelbMaraTraining_2_10,
    title: "Melbourne Marathon Training Session 2022",
    width: 3,
    height: 4,
  },

  // Great Ocean Road Marathon
  {
    src: imageGreatOceanRoadMara_1_1,
    title: "Great Ocean Road Marathon",
    width: 4,
    height: 3,
  },
  {
    src: imageGreatOceanRoadMara_1_2,
    title: "Great Ocean Road Marathon",
    width: 4,
    height: 3,
  },
  {
    src: imageGreatOceanRoadMara_1_3,
    title: "Great Ocean Road Marathon",
    width: 4,
    height: 3,
  },
  {
    src: imageGreatOceanRoadMara_2_1,
    title: "Great Ocean Road Marathon",
    width: 3,
    height: 4,
  },
  {
    src: imageGreatOceanRoadMara_2_2,
    title: "Great Ocean Road Marathon",
    width: 3,
    height: 4,
  },
  {
    src: imageGreatOceanRoadMara_2_3,
    title: "Great Ocean Road Marathon",
    width: 3,
    height: 4,
  },
  {
    src: imageGreatOceanRoadMara_2_4,
    title: "Great Ocean Road Marathon",
    width: 3,
    height: 4,
  },

  // Run for the Kids
  {
    src: imageRunForKids_1_1,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },
  {
    src: imageRunForKids_1_2,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },
  {
    src: imageRunForKids_1_3,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },
  {
    src: imageRunForKids_1_4,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },
  {
    src: imageRunForKids_1_5,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },
  {
    src: imageRunForKids_1_6,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },
  {
    src: imageRunForKids_1_7,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },
  {
    src: imageRunForKids_1_8,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },
  {
    src: imageRunForKids_1_10,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },
  {
    src: imageRunForKids_1_11,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },
  {
    src: imageRunForKids_1_12,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },
  {
    src: imageRunForKids_1_13,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },
  {
    src: imageRunForKids_1_14,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },
  {
    src: imageRunForKids_1_15,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },
  {
    src: imageRunForKids_1_16,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },
  {
    src: imageRunForKids_1_17,
    title: "Run For The Kids 2022",
    width: 3,
    height: 2,
  },

  // Melbourne Marathon 2021
  {
    src: imageMelbMara21_1_1,
    title: "Melbourne Marathon 2021",
    width: 4,
    height: 3,
  },
  {
    src: imageMelbMara21_1_2,
    title: "Melbourne Marathon 2021",
    width: 1,
    height: 1,
  },
  {
    src: imageMelbMara21_2_1,
    title: "Melbourne Marathon 2021",
    width: 3,
    height: 4,
  },
  {
    src: imageMelbMara21_2_2,
    title: "Melbourne Marathon 2021",
    width: 3,
    height: 4,
  },
  {
    src: imageMelbMara21_2_3,
    title: "Melbourne Marathon 2021",
    width: 3,
    height: 4,
  },
  {
    src: imageMelbMara21_2_4,
    title: "Melbourne Marathon 2021",
    width: 3,
    height: 4,
  },
  {
    src: imageMelbMara21_2_5,
    title: "Melbourne Marathon 2021",
    width: 3,
    height: 4,
  },

  // Parkrun
  {
    src: imageParkrun_1_1,
    title: "Parkrun",
    width: 2,
    height: 3,
  },
  {
    src: imageParkrun_1_2,
    title: "Parkrun",
    width: 3,
    height: 2,
  },
  {
    src: imageParkrun_1_3,
    title: "Parkrun",
    width: 3,
    height: 2,
  },
  {
    src: imageParkrun_2_1,
    title: "Parkrun",
    width: 2,
    height: 3,
  },
  {
    src: imageParkrun_2_2,
    title: "Parkrun",
    width: 2,
    height: 3,
  },
  {
    src: imageParkrun_2_3,
    title: "Parkrun",
    width: 2,
    height: 3,
  },
  {
    src: imageParkrun_2_4,
    title: "Parkrun",
    width: 2,
    height: 3,
  },
  {
    src: imageParkrun_2_5,
    title: "Parkrun",
    width: 2,
    height: 3,
  },
  {
    src: imageParkrun_2_6,
    title: "Parkrun",
    width: 2,
    height: 3,
  },
  {
    src: imageParkrun_2_7,
    title: "Parkrun",
    width: 2,
    height: 3,
  },
  {
    src: imageParkrun_2_8,
    title: "Parkrun",
    width: 2,
    height: 3,
  },
  {
    src: imageParkrun_2_9,
    title: "Parkrun",
    width: 2,
    height: 3,
  },
  {
    src: imageParkrun_2_10,
    title: "Parkrun",
    width: 2,
    height: 3,
  },
  {
    src: imageParkrun_2_11,
    title: "Parkrun",
    width: 3,
    height: 4,
  },
  {
    src: imageParkrun_2_12,
    title: "Parkrun",
    width: 3,
    height: 4,
  },
  {
    src: imageParkrun_2_13,
    title: "Parkrun",
    width: 3,
    height: 4,
  },

  // Mad Rabbit Crew
  {
    src: imageMRC_2_1,
    title: "Mad Rabbit Crew Training",
    width: 3,
    height: 4,
  },
  {
    src: imageMRC_2_2,
    title: "Mad Rabbit Crew Training",
    width: 3,
    height: 4,
  },
  {
    src: imageMRC_2_3,
    title: "Mad Rabbit Crew Training",
    width: 3,
    height: 4,
  },
  {
    src: imageMRC_2_4,
    title: "Mad Rabbit Crew Training",
    width: 3,
    height: 4,
  },
  {
    src: imageMRC_2_5,
    title: "Mad Rabbit Crew Training",
    width: 3,
    height: 4,
  },
  {
    src: imageMRC_2_6,
    title: "Mad Rabbit Crew Training",
    width: 3,
    height: 4,
  },
  {
    src: imageMRC_2_7,
    title: "Mad Rabbit Crew Training",
    width: 3,
    height: 4,
  },

  // Ironman 70.3 Melbourne
  {
    src: imageIronman_1_1,
    title: "Ironman 70.3 Melbourne",
    width: 3,
    height: 2,
  },
  {
    src: imageIronman_1_2,
    title: "Ironman 70.3 Melbourne",
    width: 3,
    height: 2,
  },
  {
    src: imageIronman_1_3,
    title: "Ironman 70.3 Melbourne",
    width: 3,
    height: 2,
  },
  {
    src: imageIronman_1_4,
    title: "Ironman 70.3 Melbourne",
    width: 3,
    height: 2,
  },
  {
    src: imageIronman_2_1,
    title: "Ironman 70.3 Melbourne",
    width: 2,
    height: 3,
  },
  {
    src: imageIronman_2_2,
    title: "Ironman 70.3 Melbourne",
    width: 2,
    height: 3,
  },
  {
    src: imageIronman_2_3,
    title: "Ironman 70.3 Melbourne",
    width: 2,
    height: 3,
  },

  // Pizza Run
  {
    src: imagePizzaRun_1_1,
    title: "Pizza Run",
    width: 4,
    height: 3,
  },
  {
    src: imagePizzaRun_1_2,
    title: "Pizza Run",
    width: 4,
    height: 3,
  },
  {
    src: imagePizzaRun_2_1,
    title: "Pizza Run",
    width: 3,
    height: 4,
  },
  {
    src: imagePizzaRun_2_2,
    title: "Pizza Run",
    width: 3,
    height: 4,
  },
  {
    src: imagePizzaRun_2_3,
    title: "Pizza Run",
    width: 3,
    height: 4,
  },
  {
    src: imagePizzaRun_2_4,
    title: "Pizza Run",
    width: 3,
    height: 4,
  },

  // Run Melbourne
  {
    src: imageRunMelb_1_1,
    title: "Run Melbourne 2022",
    width: 4,
    height: 3,
  },
  {
    src: imageRunMelb_2_1,
    title: "Run Melbourne 2022",
    width: 3,
    height: 4,
  },
  {
    src: imageRunMelb_2_2,
    title: "Run Melbourne 2022",
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
