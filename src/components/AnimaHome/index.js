// import React from 'react';
// import './index.css';

// function App() {
//   return <Home {...homeData}  />;
// }

// export default App;

// function Home(props) {
//   const {
//     image16,
//     followUsOn,
//     image17,
//     screenshot20220312At1229,
//     screenshot20220312At1230,
//     testimonials,
//     blog,
//     accolades,
//     x1,
//     x2,
//     x3,
//     x4,
//     property1Frame272Props,
//     aboutFalseProps,
//     bookFalseProps,
//     schoolFalseProps,
//     property1Frame18Props,
//     property1Frame182Props,
//     fAQ1FalseProps,
//     fAQ2FalseProps,
//     fAA3FalseProps,
//     fAQ4FalseProps,
//   } = props;

//   return (
//     <div className="home screen" >
//       <PhoneNav  />
//       <div className="frame-271" >
//         <div className="frame-270" >
//           <Property1Frame272 {...property1Frame272Props}  />
//         </div>
//       </div>
//       <AboutFalse
//         aboutSohniJuneja={aboutFalseProps.aboutSohniJuneja}
//         line12={aboutFalseProps.line12}
        
//       />
//       <BookFalse
//         rectangle32={bookFalseProps.rectangle32}
//         bookServices={bookFalseProps.bookServices}
//         line16={bookFalseProps.line16}
        
//       />
//       <SchoolFalse
//         sohniJunejaSchoolOfMakeup={schoolFalseProps.sohniJunejaSchoolOfMakeup}
//         line17={schoolFalseProps.line17}
        
//       />
//       <div className="instagram" >
//         <div className="group-107" >
//           <img className="icon-instagram"  src={image16} />
//           <div className="overlap-group" >
//             <div className="follow-us-on poppins-medium-tundora-16px" >
//               {followUsOn}
//             </div>
//             <img className="image-17"  src={image17} />
//           </div>
//         </div>
//         <div className="frame-24" >
//           <div className="screenshot-at-container" >
//             <img className="screenshot-2022-03-12-at-1229"  src={screenshot20220312At1229} />
//             <img className="screenshot-2022-03-12-at-1230"  src={screenshot20220312At1230} />
//           </div>
//         </div>
//       </div>
//       <div className="testimonials" >
//         <div className="group-33" >
//           <div className="testimonials-1 poppins-medium-tundora-18px" >
//             {testimonials}
//           </div>
//         </div>
//       </div>
//       <Property1Frame18
//         ellipse6={property1Frame18Props.ellipse6}
//         vatsalaWilson={property1Frame18Props.vatsalaWilson}
//         loremIpsumDolorSi={property1Frame18Props.loremIpsumDolorSi}
        
//       />
//       <div className="blog" >
//         <div className="blog-1 poppins-medium-tundora-18px" >
//           {blog}
//         </div>
//       </div>
//       <Property1Frame182 {...property1Frame182Props}  />
//       <div className="frame-276" >
//         <div className="accolades poppins-medium-tundora-20px" >
//           {accolades}
//         </div>
//       </div>
//       <div className="icons" >
//         <img className="x1"  src={x1} />
//         <img className="x2"  src={x2} />
//         <img className="icons-item"  src={x3} />
//         <img className="icons-item"  src={x4} />
//       </div>
//       <Frame148  />
//       <div className="frame-276-1" >
//         <FAQ1False frame43Props={fAQ1FalseProps.frame43Props}  />
//         <FAQ2False frame432Props={fAQ2FalseProps.frame432Props}  />
//         <FAA3False frame433Props={fAA3FalseProps.frame433Props}  />
//         <FAQ4False frame434Props={fAQ4FalseProps.frame434Props}  />
//       </div>
//       <Footer  />
//     </div>
//   );
// }


// function PhoneNav() {
//   return (
//     <div className="phone-nav" >
//       <div className="flex-row" >
//         <img
//           className="icon-call"
          
//           src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/vector@2x.png"
//         />
//         <img
//           className="image-22"
          
//           src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/image-22@2x.png"
//         />
//         <div className="group-307" >
//           <img
//             className="line-16"
            
//             src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/line-16@2x.png"
//           />
//           <img
//             className="line-1"
            
//             src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/line-16@2x.png"
//           />
//           <img
//             className="line-1"
            
//             src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/line-16@2x.png"
//           />
//         </div>
//       </div>
//       <img
//         className="line-12"
        
//         src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/line-12@2x.png"
//       />
//     </div>
//   );
// }


// function Property1Frame272(props) {
//   const {
//     bridalLook,
//     rectangle321,
//     party,
//     fashion,
//     surname,
//     rectangle14,
//     rectangle33,
//     rectangle322,
//     property1Frame271Props,
//   } = props;

//   return (
//     <div className="hero-section" >
//       <div className="frame-270-1" >
//         <Property1Frame271 {...property1Frame271Props}  />
//       </div>
//       <div className="overlap-group1" >
//         <div className="looks poppins-medium-black-12px" >
//           <div className="bridal-look" >
//             {bridalLook}
//           </div>
//           <div className="flex-col" >
//             <img className="rectangle-32"  src={rectangle321} />
//             <div className="party poppins-medium-black-12px" >
//               {party}
//             </div>
//           </div>
//           <div className="fashion" >
//             {fashion}
//           </div>
//           <div className="surname" >
//             {surname}
//           </div>
//         </div>
//         <img className="rectangle-14"  src={rectangle14} />
//         <img className="rectangle-33"  src={rectangle33} />
//         <div className="rectangle-45 border-1px-tundora" ></div>
//         <img className="rectangle-32-1"  src={rectangle322} />
//       </div>
//     </div>
//   );
// }


// function Property1Frame271(props) {
//   const {
//     rectangle30,
//     moreThan,
//     rectangle391,
//     rectangle382,
//     group277Props,
//     group2781Props,
//     group2782Props,
//     group2783Props,
//   } = props;

//   return (
//     <div className="bridal-slider" >
//       <div className="group-288" >
//         <div className="overlap-group-1" >
//           <img className="rectangle-30"  src={rectangle30} />
//           <div className="group-277 border-1px-black" >
//             <img className="more-than"  src={moreThan} />
//           </div>
//           <Group277 src={group277Props.src}  />
//         </div>
//         <div className="group-285" >
//           <div className="ellipse-38" ></div>
//           <div className="ellipse" ></div>
//           <div className="ellipse" ></div>
//         </div>
//       </div>
//       <div className="group-289" >
//         <Group278  />
//         <div className="flex-col-1" >
//           <img className="rectangle-3"  src={rectangle391} />
//           <div className="group-286" >
//             <div className="ellipse-4" ></div>
//             <div className="ellipse-4-1" ></div>
//             <div className="ellipse" ></div>
//           </div>
//         </div>
//         <Group278 className={group2781Props.className}  />
//       </div>
//       <div className="group-290" >
//         <Group278 className={group2782Props.className}  />
//         <div className="flex-col-2" >
//           <img className="rectangle-3"  src={rectangle382} />
//           <div className="group-287" >
//             <div className="ellipse-4" ></div>
//             <div className="ellipse-45" ></div>
//             <div className="ellipse-4-1" ></div>
//           </div>
//         </div>
//         <Group278 className={group2783Props.className}  />
//       </div>
//     </div>
//   );
// }


// function Group277(props) {
//   const { src } = props;

//   return (
//     <div className="group-276 border-1px-black" >
//       <img className="more-than-1"  src={src} />
//     </div>
//   );
// }


// function Group278(props) {
//   const { className } = props;

//   return (
//     <div className={`group-278 border-1px-black ${className || ""}`} >
//       <img
//         className="more-than-2"
        
//         src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/more-than-1@2x.png"
//       />
//     </div>
//   );
// }


// function AboutFalse(props) {
//   const { aboutSohniJuneja, line12 } = props;

//   return (
//     <div className="accordian-1" >
//       <div className="frame-23" >
//         <div className="frame-22" >
//           <div className="about-sohni-juneja poppins-medium-tundora-16px" >
//             {aboutSohniJuneja}
//           </div>
//           <img
//             className="vector"
            
//             src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/vector-1@2x.png"
//           />
//         </div>
//         <img className="line-12-1"  src={line12} />
//       </div>
//     </div>
//   );
// }


// function BookFalse(props) {
//   const { rectangle32, bookServices, line16 } = props;

//   return (
//     <div className="accordian-5" >
//       <div className="frame-30" >
//         <div className="overlap-group-2" >
//           <div className="frame-31" >
//             <img className="rectangle-32-2"  src={rectangle32} />
//             <div className="book-services poppins-medium-tundora-16px" >
//               {bookServices}
//             </div>
//           </div>
//           <img
//             className="vector-1"
            
//             src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/vector-2@2x.png"
//           />
//         </div>
//       </div>
//       <img className="line-16-1"  src={line16} />
//     </div>
//   );
// }


// function SchoolFalse(props) {
//   const { sohniJunejaSchoolOfMakeup, line17 } = props;

//   return (
//     <div className="accordian-5-1" >
//       <div className="frame-36" >
//         <div className="overlap-group-3" >
//           <div className="frame-37" >
//             <p className="sohni-juneja-school-of-makeup poppins-medium-tundora-16px" >
//               {sohniJunejaSchoolOfMakeup}
//             </p>
//             <img className="line-17"  src={line17} />
//           </div>
//           <img
//             className="vector-2"
            
//             src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/vector-2@2x.png"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


// function Property1Frame18(props) {
//   const { ellipse6, vatsalaWilson, loremIpsumDolorSi } = props;

//   return (
//     <div className="testimonials-2" >
//       <div className="group-257" >
//         <div className="testimonials-3" >
//           <div className="group-33-1" >
//             <img className="ellipse-6"  src={ellipse6} />
//           </div>
//           <div className="flex-col-3" >
//             <div className="vatsala-wilson poppins-medium-tundora-17px" >
//               {vatsalaWilson}
//             </div>
//             <p className="lorem-ipsum-dolor-si montserrat-normal-tundora-14px" >
//               {loremIpsumDolorSi}
//             </p>
//           </div>
//         </div>
//         <div className="group-container" >
//           <div className="group-255" ></div>
//           <div className="group-256" >
//             <div className="ellipse-26" ></div>
//             <div className="ellipse-27" ></div>
//           </div>
//         </div>
//       </div>
//       <div className="group-259" >
//         <Testimonials  />
//         <Group256  />
//       </div>
//       <div className="group-260" >
//         <Testimonials  />
//         <Group258  />
//       </div>
//     </div>
//   );
// }


// function Testimonials() {
//   return (
//     <div className="testimonials-4" >
//       <div className="group-33-2" >
//         <img
//           className="ellipse-6-1"
          
//           src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/ellipse-6@2x.png"
//         />
//       </div>
//       <div className="flex-col-4" >
//         <div className="vatsala-wilson-1 poppins-medium-tundora-17px" >
//           Vatsala Wilson
//         </div>
//         <p className="lorem-ipsum-dolor-si-1 montserrat-normal-tundora-14px" >
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec posuere mauris, ut lacinia lectus. Donec ut
//           enim mauris. Sed molestie Lorem ipsum dolor sit amet,
//         </p>
//       </div>
//     </div>
//   );
// }


// function Group256(props) {
//   const { className } = props;

//   return (
//     <div className={`group-256-1 ${className || ""}`} >
//       <div className="ellipse-25" ></div>
//       <div className="ellipse-26-1" ></div>
//       <div className="ellipse-27-1" ></div>
//     </div>
//   );
// }


// function Group258(props) {
//   const { className } = props;

//   return (
//     <div className={`group-258 ${className || ""}`} >
//       <div className="ellipse-25-1" ></div>
//       <div className="ellipse-26-2" ></div>
//       <div className="ellipse-27-2" ></div>
//     </div>
//   );
// }


// function Property1Frame182(props) {
//   const {
//     rectangle201,
//     rosewaterBenefits1,
//     rectangle202,
//     excitingEyeMakeupTrendsIn2021,
//     rectangle203,
//     rosewaterBenefits2,
//     group2861Props,
//     group2862Props,
//     group256Props,
//     group258Props,
//   } = props;

//   return (
//     <div className="blogs" >
//       <div className="group-container-1" >
//         <div className="overlap-group2" >
//           <div className="blog-2" >
//             <img className="rectangle-20-1"  src={rectangle201} />
//             <p className="rosewater-benefits poppins-normal-tundora-15px" >
//               {rosewaterBenefits1}
//             </p>
//           </div>
//           <Group286 src={group2861Props.src}  />
//           <Group286
//             src={group2862Props.src}
//             className={group2862Props.className}
            
//           />
//         </div>
//         <div className="group-257-2" >
//           <div className="ellipse-25-2" ></div>
//           <div className="ellipse-2" ></div>
//           <div className="ellipse-2" ></div>
//         </div>
//       </div>
//       <div className="flex-col-5" >
//         <div className="blog-3" >
//           <img className="rectangle-20"  src={rectangle202} />
//           <p className="exciting-eye-makeup-trends-in-2021 poppins-normal-tundora-15px" >
//             {excitingEyeMakeupTrendsIn2021}
//           </p>
//         </div>
//         <Group256 className={group256Props.className}  />
//       </div>
//       <div className="flex-col-6" >
//         <div className="blog-4" >
//           <img className="rectangle-20"  src={rectangle203} />
//           <p className="rosewater-benefits-1 poppins-normal-tundora-15px" >
//             {rosewaterBenefits2}
//           </p>
//         </div>
//         <Group258 className={group258Props.className}  />
//       </div>
//     </div>
//   );
// }


// function Group286(props) {
//   const { src, className } = props;

//   return (
//     <div className={`group-286-1 border-1px-black ${className || ""}`} >
//       <img className="more-than-3"  src={src} />
//     </div>
//   );
// }


// function Frame148() {
//   return (
//     <div className="frame-148" >
//       <div className="fa-qs poppins-medium-tundora-20px" >
//         FAQ’s
//       </div>
//     </div>
//   );
// }


// function FAQ1False(props) {
//   const { frame43Props } = props;

//   return (
//     <div className="faq1" >
//       <Frame43 line36={frame43Props.line36}  />
//     </div>
//   );
// }


// function Frame43(props) {
//   const { line36 } = props;

//   return (
//     <div className="frame-43" >
//       <div className="frame-42" >
//         <div className="group-138" >
//           <p className="how-do-i-book-an-appointment poppins-normal-tundora-16px" >
//             How do I book an appointment?
//           </p>
//         </div>
//         <img
//           className="vector-3"
          
//           src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/vector-4@2x.png"
//         />
//       </div>
//       <img className="line-36"  src={line36} />
//     </div>
//   );
// }


// function FAQ2False(props) {
//   const { frame432Props } = props;

//   return (
//     <div className="faq2" >
//       <Frame432 line36={frame432Props.line36}  />
//     </div>
//   );
// }


// function Frame432(props) {
//   const { line36 } = props;

//   return (
//     <div className="frame-43-1" >
//       <div className="frame-42-1" >
//         <div className="group-138-1" >
//           <div className="how-to-reschedule-cancel poppins-normal-tundora-16px" >
//             How to reschedule/ cancel?
//           </div>
//         </div>
//         <img
//           className="vector-4"
          
//           src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/vector-4@2x.png"
//         />
//       </div>
//       <img className="line-36-1"  src={line36} />
//     </div>
//   );
// }


// function FAA3False(props) {
//   const { frame433Props } = props;

//   return (
//     <div className="faq3" >
//       <Frame433 line36={frame433Props.line36}  />
//     </div>
//   );
// }


// function Frame433(props) {
//   const { line36 } = props;

//   return (
//     <div className="frame-43-2" >
//       <div className="frame-42-2" >
//         <div className="group-138-2" >
//           <p className="how-much-is-the-minimum-advance poppins-normal-tundora-16px" >
//             How much is the minimum advance?
//           </p>
//         </div>
//         <img
//           className="vector-5"
          
//           src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/vector-4@2x.png"
//         />
//       </div>
//       <img className="line-36-2"  src={line36} />
//     </div>
//   );
// }


// function FAQ4False(props) {
//   const { frame434Props } = props;

//   return (
//     <div className="faq4" >
//       <Frame434 line36={frame434Props.line36}  />
//     </div>
//   );
// }


// function Frame434(props) {
//   const { line36 } = props;

//   return (
//     <div className="frame-43-3" >
//       <div className="frame-42-3" >
//         <div className="group-138-3" >
//           <div className="payment-methods poppins-normal-tundora-16px" >
//             Payment Methods
//           </div>
//         </div>
//         <img
//           className="vector-6"
          
//           src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/vector-4@2x.png"
//         />
//       </div>
//       <img className="line-36-3"  src={line36} />
//     </div>
//   );
// }


// function Footer() {
//   return (
//     <div className="footer" >
//       <div className="group-125" >
//         <div className="flex-row-1" >
//           <div className="overlap-group2-1" >
//             <div className="group-25" >
//               <div className="contact-us poppins-medium-tundora-16px" >
//                 Contact Us
//               </div>
//               <div className="flex-row-2" >
//                 <div className="overlap-group-container" >
//                   <div className="overlap-group1-1" >
//                     <img
//                       className="vector-7"
                      
//                       src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/vector-11@2x.png"
//                     />
//                   </div>
//                   <div className="overlap-group-4" >
//                     <img
//                       className="vector-7"
                      
//                       src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/vector-11@2x.png"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex-col-7 roboto-normal-tundora-12px" >
//                   <p className="x123-lane-opp-sai" >
//                     123, lane, opp. Sai Temple
//                     <br />
//                     Emerald Hills
//                     <br />
//                     Dehradun- 248001
//                   </p>
//                   <p className="r-255-2nd-floor" >
//                     R - 255, 2nd Floor, G K- 1<br />
//                     Delhi - 110048
//                   </p>
//                   <div className="phone" >
//                     +91-9999963537
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <img
//               className="icon-call-1"
              
//               src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/vector-8@2x.png"
//             />
//           </div>
//           <div className="flex-col-8" >
//             <div className="useful-links poppins-medium-tundora-16px" >
//               Useful Links
//             </div>
//             <div className="place roboto-normal-tundora-12px" >
//               Home
//             </div>
//             <div className="flex-col-item roboto-normal-tundora-12px" >
//               About Us
//             </div>
//             <div className="flex-col-item roboto-normal-tundora-12px" >
//               Services
//             </div>
//             <div className="flex-col-item roboto-normal-tundora-12px" >
//               Media
//             </div>
//             <div className="flex-col-item roboto-normal-tundora-12px" >
//               Blog
//             </div>
//             <div className="flex-col-item roboto-normal-tundora-12px" >
//               Gallery
//             </div>
//           </div>
//         </div>
//         <div className="flex-row-3" >
//           <img
//             className="icon-facebook"
            
//             src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/group-91@2x.png"
//           />
//           <img
//             className="group-92"
            
//             src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/group-92@2x.png"
//           />
//           <img
//             className="icon-linkedin"
            
//             src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/group-93@2x.png"
//           />
//           <img
//             className="icon-mail"
            
//             src="https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/group-94@2x.png"
//           />
//         </div>
//         <div className="copyrightsohnijunejacom roboto-normal-tundora-12px" >
//           copyright@sohnijuneja.com
//         </div>
//       </div>
//     </div>
//   );
// }

// const group277Data = {
//     src: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/more-than-1@2x.png",
// };

// const group2782Data = {
//     className: "group-279",
// };

// const group2783Data = {
//     className: "group-280",
// };

// const group2784Data = {
//     className: "group-281",
// };

// const property1Frame271Data = {
//     rectangle30: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/rectangle-30@2x.png",
//     moreThan: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/more-than@2x.png",
//     rectangle391: "",
//     rectangle382: "",
//     group277Props: group277Data,
//     group2781Props: group2782Data,
//     group2782Props: group2783Data,
//     group2783Props: group2784Data,
// };

// const property1Frame272Data = {
//     bridalLook: "Bridal look",
//     rectangle321: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/rectangle-32-1@2x.png",
//     party: "Party",
//     fashion: "Fashion",
//     surname: "Day Look",
//     rectangle14: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/rectangle-14@2x.png",
//     rectangle33: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/rectangle-33@2x.png",
//     rectangle322: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/rectangle-32@2x.png",
//     property1Frame271Props: property1Frame271Data,
// };

// const aboutFalseData = {
//     aboutSohniJuneja: "ABOUT SOHNI JUNEJA",
//     line12: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/line-12-1@2x.png",
// };

// const bookFalseData = {
//     rectangle32: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/rectangle-32-2@2x.png",
//     bookServices: "BOOK SERVICES",
//     line16: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/line-12-1@2x.png",
// };

// const schoolFalseData = {
//     sohniJunejaSchoolOfMakeup: "SOHNI JUNEJA SCHOOL OF MAKEUP",
//     line17: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/line-12-1@2x.png",
// };

// const property1Frame18Data = {
//     ellipse6: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/ellipse-6@2x.png",
//     vatsalaWilson: "Vatsala Wilson",
//     loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec posuere mauris, ut lacinia lectus. Donec ut enim mauris. Sed molestie Lorem ipsum dolor sit amet,",
// };

// const group2861Data = {
//     src: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/more-than-6@2x.png",
// };

// const group2862Data = {
//     src: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/more-than-7@2x.png",
//     className: "group-287-1",
// };

// const group2562Data = {
//     className: "group-257-1",
// };

// const group2582Data = {
//     className: "group-259-1",
// };

// const property1Frame182Data = {
//     rectangle201: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/rectangle-20@2x.png",
//     rosewaterBenefits1: "ROSEWATER BENEFITS: FROM ANTIOXIDANTS TO ANTI-AGING",
//     rectangle202: "",
//     excitingEyeMakeupTrendsIn2021: "EXCITING EYE MAKEUP TRENDS IN 2021",
//     rectangle203: "",
//     rosewaterBenefits2: "ROSEWATER BENEFITS: FROM ANTIOXIDANTS TO ANTI-AGING",
//     group2861Props: group2861Data,
//     group2862Props: group2862Data,
//     group256Props: group2562Data,
//     group258Props: group2582Data,
// };

// const frame43Data = {
//     line36: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/line-36@2x.png",
// };

// const fAQ1FalseData = {
//     frame43Props: frame43Data,
// };

// const frame432Data = {
//     line36: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/line-36@2x.png",
// };

// const fAQ2FalseData = {
//     frame432Props: frame432Data,
// };

// const frame433Data = {
//     line36: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/line-36@2x.png",
// };

// const fAA3FalseData = {
//     frame433Props: frame433Data,
// };

// const frame434Data = {
//     line36: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/line-36@2x.png",
// };

// const fAQ4FalseData = {
//     frame434Props: frame434Data,
// };

// const homeData = {
//     image16: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/image-16@2x.png",
//     followUsOn: "Follow Us On",
//     image17: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/image-17@2x.png",
//     screenshot20220312At1229: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/screenshot-2022-03-12-at-12-29@2x.png",
//     screenshot20220312At1230: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/screenshot-2022-03-12-at-12-30@2x.png",
//     testimonials: "TESTIMONIALS",
//     blog: "BLOG",
//     accolades: "ACCOLADES",
//     x1: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/1@2x.png",
//     x2: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/2@2x.png",
//     x3: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/3@2x.png",
//     x4: "https://anima-uploads.s3.amazonaws.com/projects/62639930645ccfe831e3b7d3/releases/6263c9b38e83de9ed801bad0/img/4@2x.png",
//     property1Frame272Props: property1Frame272Data,
//     aboutFalseProps: aboutFalseData,
//     bookFalseProps: bookFalseData,
//     schoolFalseProps: schoolFalseData,
//     property1Frame18Props: property1Frame18Data,
//     property1Frame182Props: property1Frame182Data,
//     fAQ1FalseProps: fAQ1FalseData,
//     fAQ2FalseProps: fAQ2FalseData,
//     fAA3FalseProps: fAA3FalseData,
//     fAQ4FalseProps: fAQ4FalseData,
// };

