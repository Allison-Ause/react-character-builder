export default function Display({ headCount }) {
  return (
    <div className="display">
      <p>{`Getting real cozy can be tough, right? You've adorned your head ${headCount} different times already!`}</p>
      {/* <ul>
        This will have a map function from catchphrases to make li pieces. Returning array of
        catchphrases with new addition
      </ul> */}
    </div>
  );
}
