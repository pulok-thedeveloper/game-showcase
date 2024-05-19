/* eslint-disable react/prop-types */
const Features = ({game}) => {
    return (
      <div>
        <h3 className="text-lg text-[#EB8F1E] mb-5">Features Include:</h3>
        <ul className="leading-loose list-disc px-10">
          {game?.features?.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    );
};

export default Features;