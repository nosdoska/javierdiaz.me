import React from "react";
import isMobile from "is-mobile";

const COLORS = [
  "red",
  "blue",
  "yellow",
  "green",
  "indigo",
  "purple",
  "gray",
  "orange",
  "teal",
];

export default function Home() {
  const [color, setColor] = React.useState<string>("red");

  function onMouseOver(
    color: string
  ): (event: React.MouseEvent<HTMLDivElement>) => void {
    return (event: React.MouseEvent<HTMLDivElement>) => {
      setColor(color);
    };
  }

  React.useEffect(() => {
    let interval = null;
    if (isMobile()) {
      interval = setInterval(() => {
        setColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
      }, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="absolute bg-transparent grid grid-cols-3 grid-rows-3 z-10 w-screen h-screen">
        <div onMouseOver={onMouseOver("red")} />
        <div onMouseOver={onMouseOver("blue")} />
        <div onMouseOver={onMouseOver("yellow")} />
        <div onMouseOver={onMouseOver("green")} />
        <div onMouseOver={onMouseOver("indigo")} />
        <div onMouseOver={onMouseOver("purple")} />
        <div onMouseOver={onMouseOver("gray")} />
        <div onMouseOver={onMouseOver("orange")} />
        <div onMouseOver={onMouseOver("teal")} />
      </div>

      <div
        style={{
          transition: "all 500ms ease",
        }}
        className={`w-screen h-screen bg-${color}-500 flex items-center justify-center flex-col text-center`}
      >
        <h2 className="text-6xl md:text-bigest text-white font-bold tracking-tighter leading-tight">
          Javier <span className="hidden md:inline text-6xl md:text-bigest">Díaz</span>{" "}
          <span className="hidden xl:inline text-6xl md:text-bigest">Gómez</span>
        </h2>
        <h5 className="text-2xl md:text-4xl text-white opacity-50 font-bold tracking-tighter">
          Front End Software Engineer
        </h5>
      </div>
    </>
  );
}
