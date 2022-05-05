import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Services from './components/Service/Service'
import Social from './components/Socials/Social'
import Testimonial from './components/Testimonial/Testimonial'
import Blog from './components/Blog/Blog'
import Accordian from './components/Accordian/Accordian'
import Accolades from './components/Accolades/Accolades'
import { Form } from './components/Popup/Form'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Service from './components/Service/Service'
import { Media } from './components/Media/Media'
import Publication from './components/Publication/Publication'
import ContactUs from './components/ContactUs/ContactUs'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route,Routes} from 'react-router-dom'
import Modal from './components/Modal/Modal'
import CarouselUse from './components/Carousel/CarouselUse'
import Responsive from './components/Gallery/Responsive'
import Book from './components/Book/Book'
import SliderSync from './components/SliderSync/SliderSync'
import TestimonialSlider from './components/TestimonialSlider/TestimonialSlider'
import Coaching from './components/Coaching/Coaching'
import {Helmet} from "react-helmet";
import Testimonial2 from './components/Testimonial/Testimonial2'
 import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'



const Home = () => {
const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
}
  return (
    <div>
         <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='center'
                className='blablabla2'
            >
      <Modal toggleDrawer={toggleDrawer}/>
      </Drawer>
      <Helmet>

      <script type="application/ld+json">
        {JSON.stringify(

        {"@context":"http:\/\/schema.org","@type":"LocalBusiness","name":"Sohni Juneja", "description":"Sohni Juneja is a name to reckon with in the make-up and fashion industry with over 10 years of experience and is ranked among the top makeup artists.","image":"https://sohnijuneja.com/wp-content/themes/sohnijuneja/images/sohni.jpg","url":"https://sohnijuneja.com/","address":{"@type":"PostalAddress","addressLocality":"Dehradun"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","ratingCount":"258","bestRating":"5"}
      
      }
      )}
      
      </script>
     
     <script type="application/ld+json">
     {JSON.stringify(

{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Which locations does professional makeup artist Sohni juneja serve?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sohni Juneja is ranked among the Best Bridal makeup artists in Delhi, she also has a makeup studio in Dehradun and extends her makeup services worldwide."
    }
  },{
    "@type": "Question",
    "name": "Why is Sohni Juneja considered as one of the best makeup artists all over India?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sohni Juneja is one of the best freelance makeup artists in India. She offers you all the services not only at her makeup studio but also at your respective venue. To give you a smooth and trouble-free makeover experience, she travels within the city, outstations, and at your doorstep as well."
    }
  },{
    "@type": "Question",
    "name": "Why choose Sohni Juneja for Party Makeup?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "If you want amazing party looks, then choose the party makeup artist in Delhi-Sohni Juneja. She offers makeup with the best products that suit your skin perfectly and covers all the imperfections of the skin."
    }
  },{
    "@type": "Question",
    "name": "Does Professional makeup artist in Delhi Sohni Juneja offer all kinds of bridal makeup services?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The professional makeup artist in Delhi offers bridal makeup, party makeup, and hairstyling. With this Sohni Juneja offers engagement makeup, party makeup services, wedding makeup tips, and product recommendations."
    }
  },{
    "@type": "Question",
    "name": "What services are included in Bridal makeup packages offered by Sohni Juneja?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sohni Juneja provides exclusive bridal makeup services to her clients. She is an expert in grooming her brides. She offers makeup services to the brides by using high-quality makeup products so that bride can get a long-lasting look."
    }
  }]
}
)}

</script>
<script type="application/ld+json"> 
{JSON.stringify(

{
"@context" : "http://schema.org",
"@type" : "BeautySalon",
"address" : {
"@type": "PostalAddress",
"addressLocality": "Delhi",
"addressRegion": "Delhi",
"postalCode": "110048",
"streetAddress": "R - 255 2nd Floor, G K- 1 Delhi - 110048" },
"name":"Sohni Juneja",
"url":"https://sohnijuneja.com/",
"email":"junejasohni@gmail.com",
"telephone":"9999963537",
"openingHours": [
"Mo-Sa 10:00-21:00"],
"aggregateRating":{
"@type":"AggregateRating",
"ratingValue":"4.8",
"reviewCount":"258"}
} 
)}

</script>

<script type="application/ld+json">
{JSON.stringify(

{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sohni Juneja",
  "alternateName": "Makeup by Sohni Juneja",
  "url": "https://sohnijuneja.com/",
  "logo": "https://sohnijuneja.com/wp-content/themes/sohnijuneja/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "9999963537",
    "contactType": "sales",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/makeupbysohnijuneja",
    "https://www.instagram.com/sohni_juneja/"
  ]
}
)}

</script>


<script type="application/ld+json">
{JSON.stringify(

{
    "@context": "http://schema.org",
    "@type": "School",
    "name": "Makeup by Sohni Juneja",
    "description": "Sohni Juneja is a name to reckon with in the make-up and fashion industry with over 10 years of experience and is ranked among the top makeup artists.",
    "image": "https://sohnijuneja.com/wp-content/themes/sohnijuneja/images/sohni.jpg",
    "logo": "https://sohnijuneja.com/wp-content/themes/sohnijuneja/images/logo.png",
    "url": "https://sohnijuneja.com/",
    "telephone": "9999963537",
    "sameAs": ["https://www.facebook.com/makeupbysohnijuneja","https://www.instagram.com/sohni_juneja/"],
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "123, lane, opp. Sai Temple, Emerald Hills, Dehradun, Uttarakhand 248009",
        "addressLocality": "Dehradun",
        "postalCode": "248009",
        "addressCountry": "India (भारत)"
    }
}
)}

</script>
 
​




      </Helmet>
   
         <Navbar/>
         <Main/>
      

        <Book toggleDrawer={toggleDrawer}/>
        <Coaching/>
        <Social/>
        <TestimonialSlider/>

        <Blog/>
        <Accolades/>
        <Accordian/>
        <Footer/>
      
              
    </div>
  )
}

export default Home

//kjhfksdajhkjfashhdfsak