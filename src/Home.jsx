import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Services from "./components/Service/Service";

import Testimonial from "./components/Testimonial/Testimonial";
import Blog from "./components/Blog/Blog";
import Accordian from "./components/Accordian/Accordian";
import Accolades from "./components/Accolades/Accolades";
import { Form } from "./components/Popup/Form";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import { Media } from "./components/Media/Media";
import Publication from "./components/Publication/Publication";
import ContactUs from "./components/ContactUs/ContactUs";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import CarouselUse from "./components/Carousel/CarouselUse";
import Responsive from "./components/Gallery/Responsive";
import Book from "./components/Book/Book";
import SliderSync from "./components/SliderSync/SliderSync";
import TestimonialSlider from "./components/TestimonialSlider/TestimonialSlider";
import Coaching from "./components/Coaching/Coaching";
import { Helmet } from "react-helmet";
import Testimonial2 from "./components/Testimonial/Testimonial2";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Group from "./components/Group/Group";
import Social from "./components/Socials/Social";




const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [faltu,setFaltu]=React.useState();
  const data = [

    {
        id:"1",
        title:"Bridal Look",
        image:"./Images/Rectangle 98.png",
        price: 
            {
               SJ: [17000,20000],
               Senior_SJ : [26000,29000] ,
               Junior_SJ : [23000,26000]

            }
        
    },
    {
      id:"2",
      title:"Party Look",
      image:"./Images/Rectangle41.png",
      price: 
          {
             SJ: [16000,21000],
             Senior_SJ : [26000,29000] ,
             Junior_SJ : [8000,12000]

          }
      
  },
  {
    id:"3",
    title:"Fashion",
    image:"./Images/Rectangle31.png",
    price: 
        {
           SJ: [25000,30000],
           Senior_SJ : [18000,23000] ,
           Junior_SJ : [14000,19000]

        }
    
},
{
  id:"4",
  title:"Pre-Wedding",
  image:"./Images/Rectangle42.png",
  price: 
      {
         SJ: [17000,20000],
         Senior_SJ : [26000,29000] ,
         Junior_SJ : [23000,26000]

      }
  
}
  ]

  const toggleDrawer = (num) => {
    if(num===1)
    {
      setFaltu(data[0])

    }
    if(num===2)
    {
      setFaltu(data[1])
    }
    if(num===3){
      setFaltu(data[2])
    }
    if(num===4)
    {
      setFaltu(data[3])
    }
    setIsOpen((prevState) => !prevState);
  };

  const [expanded, setExpanded] = React.useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="center"
        className="blablabla2"
      >
        <Modal  data={faltu} toggleDrawer={toggleDrawer} />
      </Drawer>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>
        Awarded No 1 Bridal Makeup Artists in Delhi NCR Dehradun 2022
        </title>
        <meta
          name="description"
          content="Sohni Juneja is one of the top and professional bridal makeup artist in Delhi &amp; Dehradun. Offer best wedding makeup, party and event makeup services to clients."
        />
        <meta
          name="keywords"
          content="sohni juneja, professional makeup artist, makeup artist in Dehradun, makeup artist in Delhi NCR, makeup artist in delhi, bridal makeup artist in delhi ncr, bridal makeup in dehradun, makeup schools in delhi ncr, makeup schools in dehradun"
        />
        <meta
          name="google-site-verification"
          content="eStAc0QCTNYuA85jcmU-A0fnBU6N3nSP5Da3gZYCltA"
        />
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="noodp,noydir" />
        <link rel="canonical" href="https://sohnijuneja.com/" />
        <link
          rel="icon"
          type="image/png"
          href="https://sohnijuneja.com/wp-content/uploads/2018/09/sohni-juneja-bridal-makeup-artist-favicon-2.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@JunejaSohni" />
        <meta
          name="twitter:description"
          content="Sohni Juneja is a name to reckon with in the make-up and fashion industry with over 10 years of experience and is ranked among the top makeup artists"
        />
        <meta
          name="twitter:title"
          content="Sohni Juneja | Professional Makeup Artist in Delhi NCR"
        />
        <meta name="twitter:url" content="https://twitter.com/junejasohni" />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_images/920209467047739392/dO9Drh8K_400x400.jpg"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Makeup artist in DELHI NCR Dehradun- Sohni Juneja"
        />
        <meta
          property="og:description"
          content="Sohni Juneja is a name to reckon with in the make-up and fashion industry with over 10 years of experience and is ranked among the top makeup artists"
        />
        <meta property="og:url" content="https://sohnijuneja.com/" />
        <meta
          property="og:site_name"
          content="Sohni Juneja | Professional Makeup Artist In Delhi NCR"
        />
        <meta
          property="og:image"
          content="https://sohnijuneja.com/Images/sliImg/Rectangle11.png"
        />
        <meta
          property="og:video"
          content="https://www.youtube.com/watch?v=sQuygyaSnxI"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Sohni Juneja",
            image: "https://sohnijuneja.com/Images/sliImg/Rectangle11.png",
            description:
              "Sohni Juneja is a name to reckon with in the make-up and fashion industry with over 10 years of experience and is ranked among the top makeup artists.",
            brand: {
              "@type": "Brand",
              name: "Sohni Juneja | Professional Makeup Artist In Delhi NCR",
            },
            offers: {
              "@type": "AggregateOffer",
              url: "https://sohnijuneja.com/",
              priceCurrency: "",
              lowPrice: "",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "258",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            name: "Sohni Juneja",
            description:
              "Sohni Juneja is a name to reckon with in the make-up and fashion industry with over 10 years of experience and is ranked among the top makeup artists.",
            image:
              "https://sohnijuneja.com/wp-content/themes/sohnijuneja/images/sohni.jpg",
            url: "https://sohnijuneja.com/",
            address: { "@type": "PostalAddress", addressLocality: "Dehradun" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "258",
              bestRating: "5",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Which locations does professional makeup artist Sohni juneja serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sohni Juneja is ranked among the Best Bridal makeup artists in Delhi, she also has a makeup studio in Dehradun and extends her makeup services worldwide.",
                },
              },
              {
                "@type": "Question",
                name: "Why is Sohni Juneja considered as one of the best makeup artists all over India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sohni Juneja is one of the best freelance makeup artists in India. She offers you all the services not only at her makeup studio but also at your respective venue. To give you a smooth and trouble-free makeover experience, she travels within the city, outstations, and at your doorstep as well.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Sohni Juneja for Party Makeup?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you want amazing party looks, then choose the party makeup artist in Delhi-Sohni Juneja. She offers makeup with the best products that suit your skin perfectly and covers all the imperfections of the skin.",
                },
              },
              {
                "@type": "Question",
                name: "Does Professional makeup artist in Delhi Sohni Juneja offer all kinds of bridal makeup services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The professional makeup artist in Delhi offers bridal makeup, party makeup, and hairstyling. With this Sohni Juneja offers engagement makeup, party makeup services, wedding makeup tips, and product recommendations.",
                },
              },
              {
                "@type": "Question",
                name: "What services are included in Bridal makeup packages offered by Sohni Juneja?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sohni Juneja provides exclusive bridal makeup services to her clients. She is an expert in grooming her brides. She offers makeup services to the brides by using high-quality makeup products so that bride can get a long-lasting look.",
                },
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "BeautySalon",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Delhi",
              addressRegion: "Delhi",
              postalCode: "110048",
              streetAddress: "R - 255 2nd Floor, G K- 1 Delhi - 110048",
            },
            name: "Sohni Juneja",
            url: "https://sohnijuneja.com/",
            email: "junejasohni@gmail.com",
            telephone: "9999963537",
            openingHours: ["Mo-Sa 10:00-21:00"],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "258",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sohni Juneja",
            alternateName: "Makeup by Sohni Juneja",
            url: "https://sohnijuneja.com/",
            logo: "https://sohnijuneja.com/wp-content/themes/sohnijuneja/images/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "9999963537",
              contactType: "sales",
              areaServed: "IN",
              availableLanguage: "en",
            },
            sameAs: [
              "https://www.facebook.com/makeupbysohnijuneja",
              "https://www.instagram.com/sohni_juneja/",
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "School",
            name: "Makeup by Sohni Juneja",
            description:
              "Sohni Juneja is a name to reckon with in the make-up and fashion industry with over 10 years of experience and is ranked among the top makeup artists.",
            image:
              "https://sohnijuneja.com/wp-content/themes/sohnijuneja/images/sohni.jpg",
            logo: "https://sohnijuneja.com/wp-content/themes/sohnijuneja/images/logo.png",
            url: "https://sohnijuneja.com/",
            telephone: "9999963537",
            sameAs: [
              "https://www.facebook.com/makeupbysohnijuneja",
              "https://www.instagram.com/sohni_juneja/",
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "123, lane, opp. Sai Temple, Emerald Hills, Dehradun, Uttarakhand 248009",
              addressLocality: "Dehradun",
              postalCode: "248009",
              addressCountry: "India (भारत)",
            },
          })}
        </script>

        {/* password: 19263568723 */}
        ​
      </Helmet>

      <Navbar />
      <Group />
      <Accordion className="close-desk"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            className="typi"
            variant="h5"
            style={{ color: "rgb(70,67,67)" }}
            sx={{}}
          >
            ABOUT SOHNI JUNEJA
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Main />
        </AccordionDetails>
      </Accordion>

      <Accordion className="book"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          // display:"none",
          // border:"none ",
          // borderTop:"none",

          // boxShadow:"none",
          // outline:"none",
          width: "100vw",
          marginTop: "1px",
        }}
        // className="mainDiiv"
      >
        <AccordionSummary
          sx={
            {
              // display:"none",
            }
          }
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{ color: "rgb(70,67,67)" }}
            sx={{}}
            className="type"
            variant="h5"
          >
            BOOK SERVICES
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="space2">
          <Book toggleDrawer={toggleDrawer} />
        </AccordionDetails>
      </Accordion>
      <Accordion className="coach"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          // display:"none",
          // border:"none ",
          // borderTop:"none",

          // boxShadow:"none",
          // outline:"none",
          width: "100vw",
          marginTop: "2px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{ color: "rgb(70,67,67)" }}
            variant="h5"
            className="typo"
          >
            SOHNI JUNEJA SCHOOL OF MAKEUP
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Coaching />
        </AccordionDetails>
      </Accordion>

      {/* <Social/> */}
     

      <Social />

  

      <TestimonialSlider />

      <Blog />
    
      <Accolades />
      <Accordian />
      <Footer />
  
    </div>
  );
};

export default Home;

//kjhfksdajhkjfashhdfsak
