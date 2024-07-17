"use client";
import Carousel from "../common/Carousel";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Testimonial1 from "../assets/testimonials/Testimonal-1.png"
import Testimonial2 from "../assets/testimonials/Testimonal-2.png"
import Testimonial3 from "../assets/testimonials/Testimonal-3.png"

import { Fade } from "react-awesome-reveal";

const Reviews = () => {
  const slides = [
    {
      src: Testimonial1,
      text: '"Paydrop has helped me send and receive money with little to no complications. Its what everyone who wants to be on top of their money needs!"',
      name: "Kerlin Shah",
      country: "UK",
    },
    {
      src: Testimonial2,
      text: '"Using Paydrop has streamlined my financial transactions like never before. Highly recommended for anyone looking to simplify their finances!"',
      name: "Elena Rodriguez",
      country: "Spain",
    },
    {
      src: Testimonial3,
      text: '"Paydrop has been a game changer for my daily financial dealing. It allows for quick and secure money transfers, which saves me a lot of time and effort."',
      name: "Thomas Morgan",
      country: "USA",
    },
  ];

  return (
    <section
      id="reviews"
      className="flex max-w-7xl flex-col items-center justify-between px-8 py-20 lg:m-auto lg:flex-row lg:px-12"
    >
      <article className="mb-10 flex flex-col items-center justify-center lg:w-1/2 lg:items-start">
        <Fade
          cascade
          direction="up"
          delay={400}
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className="mb-4 max-w-[16ch] text-center text-4xl font-semibold text-gray-800 lg:w-full lg:text-left">
            Join Other thousands of people growing with PayDrop
          </h2>
        </Fade>
        <Fade
          cascade
          direction="up"
          delay={600}
          damping={1e-1}
          triggerOnce={true}
        >
          <StoreLinks type={BtnTypes.Standard} />
        </Fade>
      </article>
        <Fade
          cascade
          direction="right"
          delay={400}
          damping={1e-1}
          triggerOnce={true}
        >
          <Carousel slides={slides} />
        </Fade>
    </section>
  );
};

export default Reviews;
