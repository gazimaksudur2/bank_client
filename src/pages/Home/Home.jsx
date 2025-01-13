import React from 'react';
import Navbar from '../../components/Nav/Navbar';
import Banner from './Banner';
// import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Contacts from '../../components/Contacts/Contacts';
import FAQs from '../../components/FAQs/FAQs';
import CTA from '../../components/CTA/CTA';
import NewsLetter from '../../components/NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <Navbar />
            <Banner/>
            <CTA/>
            <FAQs/>
            <Contacts/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default Home;