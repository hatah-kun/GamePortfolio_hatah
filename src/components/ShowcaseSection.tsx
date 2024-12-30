// import React, { ReactNode } from 'react';
import { EmblaOptionsType } from "embla-carousel";
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
  // SliderNextButton,
  // SliderPrevButton,
} from "../components/ui/carousel";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import UnderLineLabel from "./ui/UnderLineLabel";
// import Image from 'next/image';
// import { imgPreview } from '@/components/website/constant';
const ShowcaseSection = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };

  // const colors = ["red", "blue", "green", "yellow"];

  // const itemSelected = (selectedIndex: number) => {
  //   console.log(`Selected item index: ${selectedIndex}`);
  //   const newColor = colors[selectedIndex];

  //   const parentDiv = document.getElementById("showcase_sec");
  //   if (parentDiv) {
  //     console.log(`Changing background color to: ${newColor}`);
  //     parentDiv.style.backgroundColor = newColor;
  //   } else {
  //     console.log("parentDiv is not defined");
  //   }
  // };

  return (
    <div
      id="showcase_sec"
      className={`h-screen w-full flex flex-col justify-center items-center`}
    >
      <Carousel
        options={OPTIONS}
        isAutoPlay={true}
        isScale={true}
        className="w-full"
      >
        <SliderContainer>
          <Slider className="sm:w-[55%] w-[90%]">
            <div className="bg-blue-500 h-[420px] sm:h-full 2xl:h-[450px] rounded-lg"></div>
          </Slider>
          <Slider className="sm:w-[55%] w-[90%]">
            <div className="bg-green-500 h-[420px] sm:h-full 2xl:h-[450px] rounded-lg"></div>
          </Slider>
          <Slider className="sm:w-[55%] w-[90%]">
            <div className="bg-yellow-500 h-[420px] sm:h-full 2xl:h-[450px] rounded-lg"></div>
          </Slider>
          <Slider className="sm:w-[55%] w-[90%]">
            <div className="bg-red-500 h-[420px] sm:h-full 2xl:h-[450px] rounded-lg"></div>
          </Slider>
          <Slider className="sm:w-[55%] w-[90%]">
            <div className="bg-orange-500 h-[420px] sm:h-full 2xl:h-[450px] rounded-lg"></div>
          </Slider>
          <Slider className="sm:w-[55%] w-[90%]">
            <div className="bg-violet-500 h-[420px] sm:h-full 2xl:h-[450px] rounded-lg"></div>
          </Slider>
        </SliderContainer>
        {/* <SliderPrevButton className="p-2 border-2 rounded-full left-4 bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-sm text-primary disabled:opacity-20">
          <ChevronLeft className="w-8 h-8" />
        </SliderPrevButton>
        <SliderNextButton className=" p-2 border-2 rounded-full top-[50%] bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-sm text-primary disabled:opacity-20">
          <ChevronRight className="w-8 h-8" />
        </SliderNextButton> */}
        <div className="flex justify-center py-4">
          <SliderDotButton />
        </div>
      </Carousel>
    </div>
  );
};

// const SlideContent = () => {
//   return (
//     <div className="bg-red-500 rounded-xl h-[400px] w-full">
//       <div className="absolute top-0 z-30 bg-gradient-to-tr from-black/75 to-transparent w-full h-full flex justify-between items-end p-10 opacity-0 hover:opacity-100 transition-all duration-300">
//         <div className="w-1/3">
//           <h1 className="text-4xl">Game Title</h1>
//           <p>Platform</p>
//           <p>Genre</p>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
//             ab, laboriosam ea mollitia aut unde beatae perferendis praesentium
//             suscipit nemo doloribus ipsum consequuntur illum quo excepturi ut
//             quia. Voluptate, nobis.
//           </p>
//           <button className="px-5 py-2 bg-customColor-primary">
//             Watch Trailer
//           </button>
//         </div>

//         <div className="text-right">
//           <p>Role</p>
//           <UnderLineLabel class="text-lg" content="Lead Programmer" />
//         </div>
//       </div>
//       <div className="w-full h-full overflow-hidden">
//         <img
//           src="https://res.cloudinary.com/dnboyrq9m/image/upload/v1735368905/hatah/GAME_DEVELOPMENT_JOHN_ABIEL_NICOLAS_COVER_ART_FILE_landscape_wcqopw.jpg"
//           alt="game poster"
//           className="object-cover"
//         />
//       </div>
//     </div>
//   );
// };

export default ShowcaseSection;
