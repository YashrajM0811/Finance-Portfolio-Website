"use client";
import Klarna from "../assets/logo-wall/klarna.png";
import Stripe from "../assets/logo-wall/stripe.png";
import PayPal from "../assets/logo-wall/paypal.png";
import Bedc from "../assets/logo-wall/bedc.png";
import MasterCard from "../assets/logo-wall/mastercard.png";
import MTN from "../assets/logo-wall/mtn.png";
import Airtel from "../assets/logo-wall/airtel.png";
import Payoneer from "../assets/logo-wall/payoneer.png";
import Visa from "../assets/logo-wall/visa.png";
import Mobile from "../assets/logo-wall/mobile.png";
import Ikeja from "../assets/logo-wall/ikeja.png";
import DsTv from "../assets/logo-wall/dstv.png";
import LogoWall from "../common/LogoWall";

import { Fade } from "react-awesome-reveal";

const Partners = () => {
  return (
    <section id="partners" className="mt-20 flex flex-col bg-gray-50 py-20">
      <article className="mb-10 w-full px-8 text-center lg:px-12">
        <Fade
          cascade
          direction="up"
          delay={400}
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className="mb-4 text-4xl font-semibold text-gray-800">
            Transact seamlessly with...
          </h2>
        </Fade>
        <Fade
          cascade
          direction="up"
          delay={600}
          damping={1e-1}
          triggerOnce={true}
        >
          <p>
            Connect your other accounts to Paydrop seamlessly. Paydrop supports
            200+ <br /> integrations with other payment platforms like stripe,
            paypal payoneer and others
          </p>
        </Fade>
      </article>

      <div className="xl:flex xl:justify-center">
        <Fade
          cascade
          direction="left"
          delay={400}
          damping={1e-1}
          triggerOnce={true}
        >
          <LogoWall
            src1={Klarna}
            src2={Airtel}
            src3={Bedc}
            alt1="Klarna"
            alt2="Airtel"
            alt3="Bedc"
          />
        </Fade>
        <Fade
          cascade
          direction="right"
          delay={600}
          damping={1e-1}
          triggerOnce={true}
        >
          <LogoWall
            src1={DsTv}
            src2={Ikeja}
            src3={MTN}
            alt1="DsTv"
            alt2="Ikeja"
            alt3="MTN"
          />
        </Fade>
      </div>
      <div className="xl:flex xl:justify-center">
        <Fade
          cascade
          direction="left"
          delay={400}
          damping={1e-1}
          triggerOnce={true}
        >
          <LogoWall
            src1={MasterCard}
            src2={Mobile}
            src3={PayPal}
            alt1="MasterCard"
            alt2="Mobile"
            alt3="PayPal"
          />
        </Fade>
        <Fade
          cascade
          direction="right"
          delay={600}
          damping={1e-1}
          triggerOnce={true}
        >
          <LogoWall
            src1={Payoneer}
            src2={Stripe}
            src3={Visa}
            alt1="Payoneer"
            alt2="Stripe"
            alt3="Visa"
          />
        </Fade>
      </div>
    </section>
  );
};

export default Partners;
