import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import { AboutMb } from "../Mobile/AboutMb/AboutMb";

const About = () => {
  return (
    <>
    <div className="Container">
      <Navbar className="navbar-check" />
      <h2>About Us</h2>
      <div className="About-Section">
        <div className="First">
          <img src="./Images/Rectangle 6.webp" alt="Bridal makeup artist in Delhi "></img>
        </div>
        <div className="Second">
          <p className="numberone">
            <b>Sohni Juneja</b>, a product of <b>National Institute of Fashion Technology
            (Delhi)</b> where she got her proficiency in her passion for Designing
            and Styling. During the tenure of the course, she interned with the
            Designer Duo, Aashima and Leena and later joined the prestigious
            label of Designer Raghavendra Rathore as a stylist and made her
            presence felt.
          </p>
          <p className="numberone">
            You made me feel so comfortable (not to forget the soft brush touch,
            asmr feeling), I couldn't have picked a better makeup artist.
          </p>
          <div className="hidden">
          <p className="mob">
            Her Quest for adding more feathers to her cap and wanting to have
            the ability to give people a whole body makeover took her to Pearl
            Academy, in association with Developments at London Institute (DALI)
            at <b>London College of Fashion</b>, where she took up Fashion Media Makeup
            and topped her Batch.
          </p>
          <p>
            Emoting with the feminine desires of looking their best on their
            special day, <b>Sohni Juneja</b> has vowed many a bride with her power to
            transform. She understands what works on models for the runways must
            be translated differently for the everyday woman. With her dainty,
            yet sure strokes she can take you to ̰ completely different
          </p>
          <p>
            realms, from Smokey to well-defined, she masters it all, wanting to
            add drama to each look differently every time.
          </p>
          </div>
        </div>
      </div>

      <div className="show">
          <p className="mob">
            Her Quest for adding more feathers to her cap and wanting to have
            the ability to give people a whole body makeover took her to Pearl
            Academy, in association with Developments at London Institute (DALI)
            at <b>London College of Fashion</b>, where she took up Fashion Media Makeup
            and topped her Batch.
          </p>
          <p>
            Emoting with the feminine desires of looking their best on their
            special day, <b>Sohni Juneja</b> has vowed many a bride with her power to
            transform. She understands what works on models for the runways must
            be translated differently for the everyday woman. With her dainty,
            yet sure strokes she can take you to ̰ completely different
          </p>
          <p>
            realms, from Smokey to well-defined, she masters it all, wanting to
            add drama to each look differently every time.
          </p>
          </div>

      <div className="outer">
        <p>
          Her immense innovation when it comes <b>fashion/catwalk makeup</b> has also
          made her one of the most sought after with fashion photographers like
          Sarang Sena known for professionalism and versatility. Sohni did 54
          shoots for a famous modeling agency in 5 days in Goa. Alongside she is
          also working as a Freelancer for renowned <b>international magazines like
          Grazia</b>, and other modeling agencies. Her constant innovation has also
          gave her opportunity to showcase her excellece in Styling and Makeup
          at fashion shows.
        </p>

        <p>
          Having a keen interest in sharing her knowledge about the same Sohni
          Juneja also takes regular sessions in various finishing schools across
          the country. Sohni Juneja is one on the best <b>Bridal makeup artist in
          South Delhi</b> and providing her professional services all over india.
        </p>

        <p>
          Sohni Juneja has been awarded The Garhwal post - Daughters of
          Uttarakhand award for Excellence in the art of makeup from his
          Excellency The Governor of Uttarakhand. She was also awarded Woman
          Achiever's Award 2018 organised by Amar Ujaala.
        </p>
      </div>

      <div className="Last">
        <h3>Famous Bridal Makeup Artist In Delhi</h3>
        <p>
          Sohni Juneja is an extremely famous bridal makeup artist in Delhi. A
          professional with experience, Sohni Juneja is skilled and truly an
          expert in every sense of the word. Creative and incredibly passionate,
          she transforms every bride into nothing short of a dream. With her
          professionalism, Sohni Juneja can hide anything you consider a
          shortcoming, and assist you to exude an unmatched level of confidence.
          
        </p>
        <p>She is the makeup artist you need if you're in search of a glam look
          for your wedding day. Each bride is unique and so are her needs. To
          exhibit the beauty of her clients, she grasps the essence of this
          understanding.</p>
      </div>

      <Footer/>

     
    </div>

    <div className="aboutmb">
     <AboutMb/>
     </div>
    </>
  );
};

export default About;
