import { useState } from 'react';

import Controls from '../Controls/Controls';
// import Catchphrase from '../Catchphrase/Catchphrase';
// import Display from '../Display/Display';
import Character from '../Character/Character';

export default function Main() {
  const [head, setHead] = useState('pompom-head');
  return (
    <div>
      <Controls head={head} setHead={setHead} />
      {/* <Catchphrase /> */}
      {/* <Display /> */}
      <Character head={head} />
    </div>
  );
}
