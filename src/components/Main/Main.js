import { useState } from 'react';

import '../Main/Main.css';

import Controls from '../Controls/Controls';
import Catchphrase from '../Catchphrase/Catchphrase';
import Display from '../Display/Display';
import Character from '../Character/Character';
import background from '../../backgrounds/armchair.jpg';

export default function Main() {
  const [head, setHead] = useState('pompom-head');
  const [headCount, setHeadCount] = useState(0);
  const [body, setBody] = useState('dino-body');
  const [bodyCount, setBodyCount] = useState(0);
  const [bottoms, setBottoms] = useState('sweatpants-bottoms');
  const [bottomsCount, setBottomsCount] = useState(0);
  const [catchphrases, setCatchphrases] = useState([]);
  const [currentCatchphrase, setCurrentCatchphrase] = useState('');
  return (
    <div className="main" style={{ backgroundImage: `url(/backgrounds/${background})` }}>
      {/* TODO: come back to background after shrinking components */}
      <Controls
        head={head}
        setHead={setHead}
        setHeadCount={setHeadCount}
        body={body}
        setBody={setBody}
        setBodyCount={setBodyCount}
        bottoms={bottoms}
        setBottoms={setBottoms}
        setBottomsCount={setBottomsCount}
      />
      <Catchphrase
        setCatchphrases={setCatchphrases}
        currentCatchphrase={currentCatchphrase}
        setCurrentCatchphrase={setCurrentCatchphrase}
      />
      <Display
        headCount={headCount}
        bodyCount={bodyCount}
        bottomsCount={bottomsCount}
        catchphrases={catchphrases}
      />
      <Character head={head} body={body} bottoms={bottoms} />
    </div>
  );
}
