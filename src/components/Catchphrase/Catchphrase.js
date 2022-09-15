export default function Catchphrase({
  setCatchphrases,
  currentCatchphrase,
  setCurrentCatchphrase,
}) {
  const handleSaveCatchphrase = () => {
    setCatchphrases((prevCatchphrases) => [...prevCatchphrases, currentCatchphrase]);
    setCurrentCatchphrase('');
  };
  return (
    <div className="catchphrases">
      <label>Cozy Mantra:</label>
      <textarea
        value={currentCatchphrase}
        onChange={(e) => setCurrentCatchphrase(e.target.value)}
      ></textarea>
      <button onClick={handleSaveCatchphrase}>Save This Vibe</button>
    </div>
  );
}
