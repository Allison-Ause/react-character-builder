export default function Controls({ head, setHead }) {
  return (
    <div className="controls">
      <label>Head</label>
      <select value={head} onChange={(e) => setHead(e.target.value)}>
        <option default value="pompom-head">
          Pom Pom
        </option>
        <option value="scrunchie-head">Scrunchie</option>
        <option value="beanie-head">Beanie</option>
        <option value="wrap-head">Wrap</option>
      </select>
      {/* <label>Body</label>
      <select>
        <option>Dino</option>
        <option>Knit</option>
        <option>Hoodie</option>
        <option>Kitty</option>
      </select>
      <label>Bottoms</label>
      <select>
        <option>Sweatpants</option>
        <option>Shorts</option>
        <option>Comfy Jeans</option>
        <option>Skirt</option>
      </select> */}
    </div>
  );
}
