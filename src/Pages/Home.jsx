import React from 'react'
import HeroSection from '../components/HeroSection'
import AimSection from '../components/AimSection';
import VisionSection from '../components/VisionSection';
import DonationSection from '../components/DonationSection';

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection  />
      <AimSection/>
      <VisionSection/>
      <DonationSection/>
    </React.Fragment>
  );
}

export default Home
