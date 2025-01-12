import React from 'react';
import Navbar from '../../components/Nav/Navbar';
import Banner from './Banner';
import Footer from '../../components/Footer/Footer';
import Contacts from '../../components/Contacts/Contacts';
import FAQs from '../../components/FAQs/FAQs';
import CTA from '../../components/CTA/CTA';

const Home = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <Navbar />
            <Banner/>
            <CTA/>
            <FAQs/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

export default Home;