export default function Display({ headCount, bodyCount, bottomsCount }) {
  return (
    <div className="display">
      <p>{`Getting real cozy can be tough, huh? You've adorned your head ${headCount} different times already!
      A comfy warm layer sometimes takes ${bodyCount} times before it feels just right. 
      And you nailed that choice of bottoms in only ${bottomsCount} tries. 
      Now to grab a cup of tea and repeat some of your favorite relaxation mantras.`}</p>
      {/* <ul>
        This will have a map function from catchphrases to make li pieces. Returning array of
        catchphrases with new addition
      </ul> */}
    </div>
  );
}
