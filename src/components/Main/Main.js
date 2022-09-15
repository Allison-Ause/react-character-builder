import { useState } from 'react';

import Controls from '../Controls/Controls';
// import Catchphrase from '../Catchphrase/Catchphrase';
import Display from '../Display/Display';
import Character from '../Character/Character';

export default function Main() {
  const [head, setHead] = useState('pompom-head');
  const [headCount, setHeadCount] = useState(0);
  const [body, setBody] = useState('dino-body');
  const [bodyCount, setBodyCount] = useState(0);
  const [bottoms, setBottoms] = useState('sweatpants-bottoms');
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
      />
      {/* <Catchphrase /> */}
      <Display headCount={headCount} bodyCount={bodyCount} />
      <Character head={head} body={body} bottoms={bottoms} />
    </div>
  );
}
