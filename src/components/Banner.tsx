import { FC } from "react";

const Banner: FC = () => {
  return (
    <div className="mb-24">
      <h1 className="tracking-tight font-extrabold text-5xl leading-4 text-tertiary sm:text-5xl sm:leading-[1] md:text-6xl md:leading-[1]">
        <span className="text-quaternary mr-4">Coffee</span>
        <span className="block text-primary xl:inline ">Conoisseur</span>
      </h1>
      <p className="text-lg font-medium mb-5 text-quaternary sm:mt-12 sm:max-w-xl md:mt-5">
        Discover your local coffee shop
      </p>
      <button className="hover:text-secondary hover:border-2 hover:border-white hover:bg-transparent transition-all border-2 border-secondary duration-150 ease-in-out  py-[0.875rem] px-[2.375rem] leading-7 text-lg bg-secondary cursor-pointer text-white outline-0 md:py-4 md:text-lg md:leading-5 md:px-10 ">
        View stores nearby
      </button>
    </div>
  );
};

export default Banner;
