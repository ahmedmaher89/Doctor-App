import React from "react";
import Banner from "../componats/Banner/Banner";
import "./Contact.css";
import Formcontact from "./Formcontact";
import Footrs from "../componats/Footer/Footrs";

const Contact = () => {
  return (
    <div className="conpage">
      <Banner title="Contact Us" smtitle="Contact Us" />
      <section className="contact-us">
        <div className="container">
          <div className="contact-wraper">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Formcontact />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="side">
                  <div className="overlay">
                    <div>
                      <h3>Contact Us For Any Informations</h3>
                      <li>
                        <i className="fa-solid fa-map-location"></i>Location
                      </li>
                      <hr />
                      <p>
                        Contact Us For Any Informations Location 2005 Stokes
                        Isle Apt. 896, Venaville 10010, USA
                      </p>
                      <li>
                        <i className="fa-regular fa-envelope"></i> Email & Phone
                      </li>
                      <hr />
                      <p>
                        Contact Us For Any Informations Location 2005 Stokes
                        Isle Apt. 896, Venaville 10010, USA Email & Phone
                        info@yourdomain.com (+68) 120034509
                      </p>
                      <li>
                        <i className="fa-solid fa-globe"></i> Follow Us
                      </li>
                      <hr />
                      <ul>
                        <li>
                          <i className="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                          <i className="fa-brands fa-linkedin"></i>
                        </li>
                        <li>
                          <i className="fa-brands fa-instagram"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-area0 section-sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="feature-container feature-bx4 feature4">
                <div className="icon-md feature-icon">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div className="icon-content">
                  <h5 className="ttr-title">Contact Number</h5>
                  <p>+001 123 456 790</p>
                  <p>+002 3424 44 00</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="feature-container feature-bx4 feature3">
                <div className="icon-md feature-icon">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAsVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAk2wLSAAAAOnRSTlMA4+8b5RkV6hId7PfyzwcLvm8zDo0lIVDEhQO4k7KKo1cr118u3ko6yp2QXNN7aEAed0Xa+4Bjrpip/mziQgAAB/ZJREFUeNrtnet2ojAURg8MCN5ABLReqq3XaW29tbWdvP+DzYzT5sSJEiUQ0rXcP2dcy10JH+ckASAftv2649T7W/g+THrkk14Tvgl3NUKpLeBb0CEHRKA/5VvyH70WaM7q5cvVpIPkZQVaE3yJVjdxvHklnwSgL/7Dl+V0dfizP4SgKZM6HcYl2FN6//qXJ02zb0EH8RtQnmn2jUFDBnRobIFhNSoq+3y3JCDu0YEwB+bTLjTpoGnclwS4PmTFrF+3zEoyVUKjblQ5YGQSGimVZEyr3p9BFjQbRCmNJkizdYhiHOnaMDaJcswY5GiQAmhIDo6vlDUsBRhfSS83QIbkL69BbJcVYMfBv3JlCDL8y9gNKAGvoHWQIJySP1RsUMaPyv6iKlNf2Qb5g+GCMtx/32jLS5dAGaWr9HGu0lfpq3TR0r4rgV+ItBdZjgRW5BUgHRFJIvXSYUW6QwmVS7vSLU3FVS4NHVnptyLSIxpZRmqsUVRQ5JXt1JT968XlKn2VvkprJu1Ni5GeepCeoFqMdDWAtPh9QgqQ3vPgQyru66Q4aVKfQAruHCKQDtd2atahQJpUFqlmApOlu325gumxe0Ka0oGLwFXLHEvTjkia3F6UfM0ngihvApDRHM5mSRfYTkde6OTYbtHvf13CeXh9uudh8XRSGgay0gM4KT26o4f6wz8r6X7SIVWCpCmEgdwUwiBpCgHcW4LZd0HSdQqdrMET3RRm3xv96F3RBVO7ggMpCZsm3c198VVe3KADdZ2QdHSbwzDUoTT1PmgkzIVJVw10qaep0msAx/Dpn2Vt9WkCVtOkbVATTLq1Tp1LCbOvySWdSU9V3dqtzqktoB1MOv16RMy+CJAyJl2sY2PbavBbQOc06R58PbtxH8uh1ZGky1S6ZJ+mdK40SuIW0O4Hs9UyU2nv0TCdU5jGo3eBNJt9H10sNoYlyFY6Sl+aojRSGuJsPO0UFpCttG+KOpcL11zGtJOCGq426S2NTUcNTELpxVlKQyd9Y8tLt3qEYrLSxFhleiJGL451CuflosXP+QvhpCmbbCOvVT5Fy70k8oJXwktXLKyl9Lu44AZ4q8JIj+4fjvaRtrXv9RVK285ezj5afw4nI0ba8qBzbEu5b3z+rzL8vbThM0lXwzPXsxhpo8y24Y9AeVS+xTyi34gGe5w2wNpgpX8c1FKNFk2AjmN1PFCI17Ec/Mb40OkHJw3diGbfDOfsXFCM6x4pOPoeHJcG2NUw+zSAJl1tCXBSGuZP9Ewt/HYa/4GbQOCkcWIa+8gimdzQ8oLacdLcxFh1DAWyYJIOhNLQdpjRXxSYdHcglj7Ivp8xqIdPOrH0Yfa1oQBmbNKJpJFxkdmHNzUuAS6QZu64+qU4+/whcxfYZdLgqs4+fvXEBpE0z4YepR0oY8ze1JhCGtoWrfsUZV83YpIunTSUe2qzr3XDJF1aaejSvt1SkH0zgzuyAmnhIwKeIWc2wvpBLM1nX66tossmnYS0ytuo7+tM0slI88dtCTmx40ahrDTMrHzrvi7bvWYlDWvMvnvInBiTLoY00uLUl8g+4XHsQjppcfa9QaY880knL83PTr3bkBmlIVOXyUiLk7SZadLhVUBemmfzitmnIOkkpflz5iOD7PM+2LNbXlqcfTeTDJOuBblI8+s1ZtKv482DwSCYJxwOdrdPF/KS5mdR2qeFPn/ExumPLNi9BblLYxc38gStacKW4tDAS6wCacw+Jzz+R90QhpvjUnGV7Bm6oEIas6+XcOlEake7PX8/Pfu6AVAmDbMRIU+TxAYNGXRPpOfLDFRKQzgeh4Dw04BPz88jGmnrYx8Nli6olBa3pn0XwH0UtcU6SAf/T+/scGuJptIhW7DxbbGrozQm3W3p2JTgz4l+0guuYOOfLqaZNCZdBWOZWw6JujpJM8XffXI5p4+0qMz2+lg46yLNJR0PZt+zFtIul3SiKcHipbE1fU+0cX9hW1y09MI8exlsQ7NvV6g0Jp3TvuR8jbzipFuJSSfIPkXS8pOpXS77VEvj9XkJZzOm2dcpQLr0S3RzlXhKULX0hKk5JRZX1EjzNZ3MMtZOpXRE+6iZZFfmKZDmkk5+wUKJNLtdqCu/NFRpq5DGpNvltd1AXlqcdPLLnflKz+vZbTYMHzD7JKTzSjrxcsg4N2k8e4xZ5jNS3Xyk1w28LS2HbSmxrLRgc1CapBNn31320s95bcMam5h9mUgLbhrNelNbz04hrSTpeHzMvlV20guJGVuJmRMZae+ReQNATmxfcI5KSppPuhbkRovJUwlpPukgV5h5V1npN4nZZYnsk5HGpPspSLqMs6+cXhrvzR76oAD2fTBppXc1TDpFLGndF6SS9vpM0iljhdnnXyTN38qvkPUtJuyl0m1HvqaTzz6BtIKkk7qZSCxtczWdWpqYfetzpeeFv3kKs89YnSe9rGrwjq+AyT6xtM89hUIx/OH2RdJxQ5f31jHZFydLtysavSGQeZBOknRHr/eRHT6yiJfWIenED4fipVdTot079jAWjC0vzT7GS6u3GQZVJvvKB9IAWMrOQSuYR8sBsNKj7S0zeDQDT7XedsRIm8ySpIbgXeEmlUZMTd86e1c5sASHIPUJaMqf7EMcwH3DVS2HxhedKu5uhog6R274Q1tCd0CtI+hR6frU0phpnUr3oEa+HTVokG9HA5oW+WYYTYD1Mrgl34b3YFlm3h5vag99v/1vJ/9cWfQWNaMAAAAASUVORK5CYII="
                    alt=""
                  />
                </div>
                <div className="icon-content">
                  <h5 className="ttr-title">Email Address</h5>
                  <p>info@yourdomain.com</p>
                  <p>example@support.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="feature-container feature-bx4 feature2">
                <div className="icon-md feature-icon">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div className="icon-content">
                  <h5 className="ttr-title">Address</h5>
                  <p>
                    2005 Stokes Isle Apt. 896, Venaville <br /> 10010, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footrs/>
    </div>
    
  );
};

export default Contact;
