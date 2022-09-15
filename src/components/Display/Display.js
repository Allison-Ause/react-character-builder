export default function Display({ headCount, bodyCount }) {
  return (
    <div className="display">
      <p>{`Getting real cozy can be tough, huh? You've adorned your head ${headCount} different times already!
      A comfy warm layer sometimes takes ${bodyCount} times before it feels just right.`}</p>
      {/* <ul>
        This will have a map function from catchphrases to make li pieces. Returning array of
        catchphrases with new addition
      </ul> */}
    </div>
  );
}
