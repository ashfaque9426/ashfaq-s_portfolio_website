// eslint-disable-next-line no-unused-vars
import React from 'react';
import HomePageBanner from '../../components/HomePageBanner/HomePageBanner';
import MySkills from '../../components/MySkills/MySkills';
import ContactMeForm from '../../components/ContactMeForm/ContactMeForm';
import ProjectReviewHome from '../../components/ProjectReviewHome/ProjectReviewHome';
import HomePageAboutSection from '../../components/HomePageAboutSection/HomePageAboutSection';


const Home = () => {
    return (
        <main role='main'>
            <HomePageBanner />
            <HomePageAboutSection />
            <MySkills />
            <ProjectReviewHome />
            <ContactMeForm />
        </main>
    );
};

export default Home;