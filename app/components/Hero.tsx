export default function Hero() {
  return (
    <div className="hero container m-auto relative flex items-center h-screen">
      <div className="flex-1/4 ml-5 mr-5">
        <h1 className="hero__title text-5xl font-bold mb-5">
          Find and Show details of a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          This is a case study for a Front end developer!
        </p>
      </div>
      <div className="hero__image flex-1/2">
        <img
          src="/hero.png"
          alt="hero"
          className="relative z-10 object-contain"
        />
         <img
          src="/hero-bg.png"
          alt="hero-background"
          className="absolute z-0 top-[-120px]"
        />
      </div>
    </div>
  );
}
