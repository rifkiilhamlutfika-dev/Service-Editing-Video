export default function Section4() {
  const dataVideoYoutube = [
    "https://www.youtube.com/embed/xzMw_LNhQz4?si=HSnTVPeIyIG8yWF4",
    "https://www.youtube.com/embed/o2l-r212J4Q?si=BdCsSzH-DoLQ7A-M",
    "https://www.youtube.com/embed/zSeUIBVgqvE?si=oDPsCLU4xMIk4ZQq",
    "https://www.youtube.com/embed/ShNm-uQEcA8?si=ydJA066OJruNLYYb",
  ];

  return (
    <section className="flex flex-col items-center mt-24 mb-24">
      <h2 className="uppercase font-bold mb-5 text-xl opacity-65">
        Preview Videos
      </h2>
      <div className="overflow-auto overflow-x-scroll max-w-full">
        <div className="flex items-center gap-5 w-max">
          {dataVideoYoutube.map((data, index) => (
            <div
              className="aspect-video w-[30rem] rounded-lg overflow-hidden"
              key={index}
            >
              <iframe
                width="100%"
                height="100%"
                src={data}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
