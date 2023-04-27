import { Section_Browse } from "../Home/Section_Browse";
import { byCategory, byMake, howTuroWorks } from "./data";
import { GiRaceCar } from "react-icons/gi";
export const WorkSection = () => {
  return (
    <section className="py-[10vh] px-5 md:px-[5vw] lg:px[10vw] ">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-y-6">
        <h1 className="text-6xl col-span-1 font-bold underline underline-offset-8 ">
          Wish to know how RollSafer works?
        </h1>
        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2">
          <p className="col-span-1 text-black/70 md:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            aut accusantium qui debitis minus ipsa, incidunt totam non sapiente
            libero officiis hic nesciunt. Maxime error omnis similique aliquid
            consectetur reiciendis.
          </p>
        </div>
      </div>
      {/* Header Ends */}

      {/* Section */}
      <section className="mt-[10vh]">
        <section className="my-10 grid grid-cols-1 md:grid-cols-2 items-center md:gap-x-10 gap-y-10 md:gap-y-10">
          {howTuroWorks.map((item, index) => (
            <div className="col-span-1 flex flex-col gap-y-5" key={index}>
              <div className="flex text-2xl gap-x-3 items-center">
                <span className="flex justify-center items-center w-[60px] h-[60px] border border-black/50 text-black/50 rounded-full ">
                  {index + 1}
                </span>
                <h1>{item.heading}</h1>
              </div>
              <p className="text-xl md:text-lg text-black/70">
                {item.paragraph}
              </p>
            </div>
          ))}
          <div className="col-span-1 hidden md:flex items-center">
            <span className="text-2xl text-black/60">Vrooooooooooom</span>
            <GiRaceCar size={300} className=" px-0" />
          </div>
        </section>
        <section>
          <hr />
          <div className="my-10 flex flex-col gap-y-10">
            <div className="flex text-4xl gap-x-3 items-center justify-center">
              <span className="flex justify-center items-center w-[70px] h-[70px]  bg-black/20 text-white rounded-full ">
                1
              </span>
              <h1 className="text-black/50">Find the perfect car</h1>
            </div>
            <div className="gap-y-2 flex flex-col items-center justify-center ">
              <h1 className="text-lg">
                Browse the world’s largest car sharing marketplace
              </h1>

              <p className="italic w-[100%] md:w-[50%] text-center">
                Whether it’s an SUV for a family road trip, a pickup truck for
                some errands, or a classic sports car for a special night out,
                find the perfect car for all kinds of occasions and budgets on
                Turo.
              </p>
            </div>
            <Section_Browse data={byMake} text={"Cars"} />
            <Section_Browse data={byCategory} text={"Category"} />
          </div>
        </section>
      </section>
      {/* Section Ends */}
    </section>
  );
};
