import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Service.css";

const Services = () => {
  return (
    <>
    <Navbar/>
    <div className="wrapper">
      <div className="Service-Container">
        <h2 className="h2">Services</h2>

        <p>
          Sohni Juneja is a well Known Makeup Artist in Delhi for doing
          professional bridal makeup, party makeup and hairstyling. Her bridal
          services are tailored to meet the needs and requirements of the
          clients. Sohni J provides hairstyling, engagement makeup, bridal
          makeup as well as party makeup services. In addition to these, she
          also provides bridal makeup appointment, pre- wedding makeup tips,
          product recommendation to get the best of your look on your special
          day. Apart from the services, she also gives you special offers in
          hairstyling as well as bridal makeup.
        </p>
        <p>
          Professional makeup artist, Sohni Juneja not only provides you all the
          services at her makeup studio but also at your respective venue. To
          give you smooth and hassle free makeover experience, she also travels
          within the city, outstations and at your doorstep as well.
        </p>
      </div>

      <div className="button">
        <a>HAIR STYLING</a>
        <a>BRIDAL MAKEUP</a>
        <a>PARTY MAKEUP</a>
        <a>OFFERS</a>
      </div>

      <div className="Box-Container">
        <h2>HAIR STYLING</h2>
        <div className="Box">
          <div className="One">
            <img src="./Images/Rectangle 111.png"></img>
          </div>
          <div className="Two">
            <p>
              Sohni Juneja is a renowned professional makeup artist in Dehradun
              and Delhi. Having enormous knowledge about makeup and styling, she
              very well knows how to give attractive and charming look to her
              clients. She has been involved in providing her services of
              makeover to some well known T.V artists as well as celebs. She is
              successfully transforming lives of the women by making them
              beautiful.
            </p>
            <p>
              Get sensational look and let everyone adore your beauty with Delhi
              best makeup artist at affordable rates. Call us or book your
              appointment with Best wedding Makeup Artist in Delhi.
            </p>
            <p>
              As Makeup plays an important role in glamorizing the look of a
              person. It is always a great desire of every woman to look her
              best on her special day.
            </p>
            <p>
            From the elaborate and traditional, to
              the trendy and quirky, our experienced hands can give any twist to
              your tresses. Sohni Juneja provides hair style 	&#38; hair extension
              service from eccentric to knotty, to cultural and with latest
              tradition, you can get adorable look so that every eye can
              appreciate your look on the big day.
            </p>

            <p className="mobile-hair1">
            As Makeup plays an important role in glamorizing the look of a person. It is always a great desire of every woman to look her best on her special day.
            </p>

            <p className="mobile-hair2">From the elaborate and traditional, to the trendy and quirky, our experienced hands can give any twist to your tresses. Sohni Juneja provides hair style & hair extension service from eccentric to knotty, to cultural and with latest tradition, you can get adorable look so that every eye can appreciate your look on the big day.</p>

            <p className="mobile-outer1">Sohni Juneja is a renowned professional makeup artist in Dehradun and Delhi. Having enormous knowledge about makeup and styling, she very well knows how to give attractive and charming look to her clients. She has been involved in providing her services of makeover to some well known T.V artists as well as celebs. She is successfully transforming lives of the women by making them beautiful.

</p>

          <p className="mobile-outer2">Get sensational look and let everyone adore your beauty with
Delhi best makeup artist at affordable rates. Call us or book your
appointment with Best wedding Makeup Artist in Delhi.</p>

            <article>View Gallery</article>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
