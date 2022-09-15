import '../Character/Character.css';

export default function Character({ head, body, bottoms }) {
  return (
    <div className="character">
      <h1>You At Your Coziest:</h1>
      <div className="images">
        <img src={`${process.env.PUBLIC_URL}/${head}.png`} />
        <img src={`${process.env.PUBLIC_URL}/${body}.png`} />
        <img src={`${process.env.PUBLIC_URL}/${bottoms}.png`} />
      </div>
    </div>
  );
}
