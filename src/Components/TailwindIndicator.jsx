const TailwindIndicator = () => {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-2 left-2 z-50 flex size-36 items-center justify-center rounded-full bg-violet-500 p-4 font-mono text-4xl text-white">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm
      </div>
      <div className="hidden md:block lg:hidden  xl:hidden 2xl:hidden">md</div>
      <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
};

export default TailwindIndicator;
