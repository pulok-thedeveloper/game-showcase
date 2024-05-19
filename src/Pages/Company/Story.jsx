const Story = () => {
  return (
    <div className="bg-[#110C1D] px-12 sm:px-16 md:px-24 xl:px-36 pt-40 pb-20 text-white relative">
      <div className="absolute top-1 left-0 w-0 z-10 h-0 border-l-[99vw] border-l-transparent border-b-[5vw] border-b-[#110C1D] -mt-[5vw]"></div>
      <div className="title mb-8">
        <h2 className="permanent-marker-regular text-6xl mb-3">
          <span> Our</span> <span className="text-[#EB8F1E]">Story</span>
        </h2>
      </div>
      <p className="description leading-loose font-light mb-10">
        Welcome to [Company Name], where imagination meets innovation to create
        unforgettable gaming experiences. Our journey began with a shared
        passion for storytelling and a love for the intricate art of game
        design. We are a team of visionary developers, artists, and storytellers
        dedicated to pushing the boundaries of interactive entertainment.
      </p>

      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg text-[#EB8F1E] mb-5">
            From Humble Beginnings
          </h3>
          <div className="flex flex-col gap-5 leading-loose font-light">
            <p>
              Our story starts in [Year Founded], when a group of friends with a
              common dream decided to turn their passion for gaming into a
              reality. What began in a small garage with a handful of computers
              has since grown into a dynamic studio known for creating immersive
              and groundbreaking games. Despite our growth, we’ve never lost
              sight of our original vision: to create games that captivate,
              challenge, and inspire.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg text-[#EB8F1E] mb-5">
            Innovation at Our Core
          </h3>
          <div className="flex flex-col gap-5 leading-loose font-light">
            <p>
              At [Company Name], we believe that great games are born from
              innovation and creativity. Each project we undertake is driven by
              a desire to explore new ideas and to redefine the gaming
              landscape. Our talented team brings a diverse range of skills and
              perspectives to the table, ensuring that every game we develop is
              unique and engaging.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg text-[#EB8F1E] mb-5">
            Creating Worlds, One Pixel at a Time
          </h3>
          <div className="flex flex-col gap-5 leading-loose font-light">
            <p>
              Every game we create is a labor of love, crafted with meticulous
              attention to detail. From the initial concept art to the final
              lines of code, we pour our hearts into every aspect of
              development. Our games are more than just entertainment; they are
              worlds waiting to be explored, stories waiting to be told, and
              challenges waiting to be conquered.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg text-[#EB8F1E] mb-5">
            Community and Collaboration
          </h3>
          <div className="flex flex-col gap-5 leading-loose font-light">
            <p>
              We believe that the best games are created in collaboration with
              our community. We actively seek feedback from players and
              incorporate it into our development process. This open dialogue
              ensures that our games not only meet but exceed the expectations
              of our audience. Our players are at the heart of everything we do,
              and their support drives us to continually improve and innovate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
