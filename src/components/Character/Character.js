export default function Character({ head, body }) {
  return (
    <div className="character">
      <h1>You At Your Coziest:</h1>
      <div className="images">
        <img src={`${process.env.PUBLIC_URL}/${head}.png`} />
        <img src={`${process.env.PUBLIC_URL}/${body}.png`} />
      </div>
    </div>
  );
}
