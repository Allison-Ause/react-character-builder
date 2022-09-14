export default function Controls({ head, setHead, body, setBody }) {
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
      <label>Body</label>
      <select value={body} onChange={(e) => setBody(e.target.value)}>
        <option default value="dino-body">
          Dino
        </option>
        <option value="knit-body">Knit</option>
        <option value="hoodie-body">Hoodie</option>
        <option value="kitty-body">Kitty</option>
      </select>
      {/* <label>Bottoms</label>
      <select>
        <option>Sweatpants</option>
        <option>Shorts</option>
        <option>Comfy Jeans</option>
        <option>Skirt</option>
      </select> */}
    </div>
  );
}
