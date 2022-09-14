export default function Character({ head }) {
  return (
    <div className="character">
      <h1>You At Your Coziest:</h1>
      <div className="images">
        <img src={`${process.env.PUBLIC_URL}/${head}.png`} />
        {/* <img>Body Image</img>
        <img>Bottoms Image</img> */}
      </div>
    </div>
  );
}
