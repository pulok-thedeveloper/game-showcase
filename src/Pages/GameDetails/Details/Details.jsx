/* eslint-disable react/prop-types */
const Details = ({game}) => {
  return (
    <div>
      <div className="mb-10">
        <h3 className="text-lg text-[#EB8F1E] mb-5">About this game</h3>
        <div className="flex flex-col gap-5 leading-loose font-light">
          <p>{game?.description}</p>
          <p>{game?.note}</p>
        </div>
      </div>
      <div className="mb-10">
        <h3 className="text-lg text-[#EB8F1E] mb-5">Game info</h3>
        <div className="flex gap-10">
          <ul className="flex flex-col">
            <li className="py-5">Version</li>
            <li className="py-5">Updated on</li>
            <li className="py-5">Category</li>
            <li className="py-5">Downloads</li>
            <li className="py-5">Download Size</li>
            <li className="py-5">Required OS</li>
            <li className="py-5">Released on</li>
            <li className="py-5">Devices</li>
            <li className="py-5">Players Interact</li>
            <li className="py-5">Languages</li>
          </ul>
          <ul className="flex flex-col">
            <li className="py-5">:</li>
            <li className="py-5">:</li>
            <li className="py-5">:</li>
            <li className="py-5">:</li>
            <li className="py-5">:</li>
            <li className="py-5">:</li>
            <li className="py-5">:</li>
            <li className="py-5">:</li>
            <li className="py-5">:</li>
            <li className="py-5">:</li>
          </ul>
          <ul className="flex flex-col">
            <li className="py-5 font-light">{game?.version}</li>
            <li className="py-5 font-light">{game?.updated_at}</li>
            <li className="py-5 font-light">{game?.category}</li>
            <li className="py-5 font-light">{game?.downloads}+ downloads</li>
            <li className="py-5 font-light">{game?.download_size} MB</li>
            <li className="py-5 font-light">{game?.required_os}</li>
            <li className="py-5 font-light">{game?.released_date}</li>
            <li className="py-5 font-light">
              {game?.devices?.map((device, i) => (
                <span key={i}>
                  {device}
                  {i + 1 < game?.devices?.length ? " , " : ""}
                </span>
              ))}
            </li>
            <li className="py-5 font-light">{game?.plyers_interact}</li>
            <li className="py-5 font-light">
              {game?.languages?.map((lang, i) => (
                <span key={i}>
                  {lang}
                  {i + 1 < game?.languages?.length ? " , " : ""}
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
