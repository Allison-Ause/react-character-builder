import { useState } from 'react';

import Controls from '../Controls/Controls';
import Catchphrase from '../Catchphrase/Catchphrase';
import Display from '../Display/Display';
import Character from '../Character/Character';

export default function Main() {
  const [head, setHead] = useState('pompom-head');
  const [headCount, setHeadCount] = useState(0);
  const [body, setBody] = useState('dino-body');
  const [bodyCount, setBodyCount] = useState(0);
  const [bottoms, setBottoms] = useState('sweatpants-bottoms');
  const [bottomsCount, setBottomsCount] = useState(0);
  const [catchphrases, setCatchphrases] = useState([
    'All I need is a good book!',
    'Hot tea and me.',
  ]);
  const [currentCatchphrase, setCurrentCatchphrase] = useState('');
  return (
    <div>
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
