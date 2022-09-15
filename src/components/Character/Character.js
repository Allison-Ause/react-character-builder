import '../Character/Character.css';

export default function Character({ head, body, bottoms }) {
  return (
    <div className="character">
      <h1>You At Your Coziest:</h1>
      <div className="images">
        <img className="head" src={`${process.env.PUBLIC_URL}/${head}.png`} />
        <img className="body" src={`${process.env.PUBLIC_URL}/${body}.png`} />
        <img className="bottoms" src={`${process.env.PUBLIC_URL}/${bottoms}.png`} />
      </div>
    </div>
  );
}
