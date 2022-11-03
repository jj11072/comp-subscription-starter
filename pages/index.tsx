import { benefitOne, benefitTwo } from '../components/Data';


import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';
import Faq from '../components/Faq';
import SectionTitle from '../components/SectionTitle';
import VideoPlayer from '../components/Video';
import React from 'react';

export default function Home() {

  return (
    <>
      <Hero />
      <SectionTitle
        pretitle="Our Benefits"
        title=" Why should you work with us?"
      >
        Comp is here to empower you with insight just when you require it, and
        help make you and your business better.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle pretitle="About us" title="Meet the team!">
        We are a team of experts who are passionate about technology and data.
        We are here to help you make better decisions.
      </SectionTitle>
      <VideoPlayer />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        We are proud to have worked with some of the best companies in the
        world. Here's what they have to say about us.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
    </>
  );
}
