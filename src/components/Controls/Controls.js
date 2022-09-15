import '../Controls/Controls.css';

export default function Controls({
  head,
  setHead,
  setHeadCount,
  body,
  setBody,
  setBodyCount,
  bottoms,
  setBottoms,
  setBottomsCount,
}) {
  return (
    <div className="controls">
      <label>Head</label>
      <select
        value={head}
        onChange={(e) => {
          setHead(e.target.value);
          setHeadCount((prevState) => prevState + 1);
        }}
      >
        <option default value="pompom-head">
          Pom Pom
        </option>
        <option value="scrunchie-head">Scrunchie</option>
        <option value="beanie-head">Beanie</option>
        <option value="wrap-head">Wrap</option>
      </select>
      <label>Body</label>
      <select
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
          setBodyCount((prevState) => prevState + 1);
        }}
      >
        <option default value="dino-body">
          Dino
        </option>
        <option value="knit-body">Knit</option>
        <option value="hoodie-body">Hoodie</option>
        <option value="kitty-body">Kitty</option>
      </select>
      <label>Bottoms</label>
      <select
        value={bottoms}
        onChange={(e) => {
          setBottoms(e.target.value);
          setBottomsCount((prevState) => prevState + 1);
        }}
      >
        <option default value="sweatpants-bottoms">
          Softest Sweatpants
        </option>
        <option value="shorts-bottoms">Sleep Shorts</option>
        <option value="jeans-bottoms">Comfy Jeans</option>
        <option value="skirt-bottoms">Flowy Skirt</option>
      </select>
    </div>
  );
}
