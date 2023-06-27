// eslint-disable-next-line no-unused-vars
import React from 'react';
import HomePageBanner from '../../components/HomePageBanner/HomePageBanner';
import MySkills from '../../components/MySkills/MySkills';
import ContactMeForm from '../../components/ContactMeForm/ContactMeForm';
import ProjectReviewHome from '../../components/ProjectReviewHome/ProjectReviewHome';


const Home = () => {
    return (
        <main role='main'>
            <HomePageBanner />
            <MySkills />
            <ProjectReviewHome />
            <ContactMeForm />
        </main>
    );
};

export default Home;