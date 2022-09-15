import { useState } from 'react';

import Controls from '../Controls/Controls';
// import Catchphrase from '../Catchphrase/Catchphrase';
// import Display from '../Display/Display';
import Character from '../Character/Character';

export default function Main() {
  const [head, setHead] = useState('pompom-head');
  const [body, setBody] = useState('dino-body');
  const [bottoms, setBottoms] = useState('sweatpants-bottoms');
  return (
    <div>
      <Controls
        head={head}
        setHead={setHead}
        body={body}
        setBody={setBody}
        bottoms={bottoms}
        setBottoms={setBottoms}
      />
      {/* <Catchphrase /> */}
      {/* <Display /> */}
      <Character head={head} body={body} bottoms={bottoms} />
    </div>
  );
}
