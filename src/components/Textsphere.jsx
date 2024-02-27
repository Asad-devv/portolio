import React, { useEffect, useState, useRef } from "react";
import "./CSS/Textsphere.css"
import TagCloud from "TagCloud";
const TextSphere = () => {
  const [instance, setInstance] = useState(null)
  // const [isMobile, setIsMobile] = useState(false);
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width:500px)");
  //   setIsMobile(mediaQuery.matches);
  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches);
  //   };
  //   mediaQuery.addEventListener("change", handleMediaQueryChange);

  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  // Animation settings for Text Cloud
  useEffect(() => {
    if(!instance){
    const container = ".tagcloud";
    const texts = [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React",
      "Vue",
      "Nuxt",
      "NodeJS",
      "Babel",
      "Jquery",
      "ES6",
      "GIT",
      "GITHUB",
    ];
    let radii;
    function radiusValue() {
      if (window.screen.width <= 778) {
        radii = 160;

      } else {
        radii = 160;
      }
      return radii;
    }

    const options = {
      radius: radiusValue(),
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 435,
      keep:true,
      size:1,
    };

    const inst  = TagCloud(container, texts, options);
    setInstance(inst)
    // container.destroy()
    console.log(instance)
  }
  }, [ instance]);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud lg:text-[1.4rem]  sm:text-[0.3rem] "></span>
      </div>
    </>
  );
};

export default TextSphere