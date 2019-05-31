import React, { useState } from 'react';
import { FjToggle } from 'freyja/Toggle';
import Highlight from 'react-highlight';

function TogglePage() {
  return (
    <div className="page-content">
      <h3>Toggle</h3>
      <h4>States</h4>
      <FjToggle checked={useState(false)} onChange={e => console.log('Toggle is ' + e)} />
      <Highlight language="javascript">
{
`<FjToggle checked={useState(false)} onChange={e => console.log('Toggle is ' + e)} />`
}
      </Highlight>

      <FjToggle checked={useState(true)} onChange={e => console.log('Toggle is ' + e)} />
      <Highlight language="javascript">
{
`<FjToggle checked={useState(true)} onChange={e => console.log('Toggle is ' + e)} />`
}
      </Highlight>

      <h4>Sizes</h4>
      <FjToggle checked={useState(true)} size="large" />
      <Highlight language="javascript">
{
`<FjToggle checked={useState(true)} size="large" />`
}
      </Highlight>
      <FjToggle checked={useState(true)} />
      <Highlight language="javascript">
{
`<FjToggle checked={useState(true)} />`
}
      </Highlight>
      <FjToggle checked={useState(true)} size="small" />
      <Highlight language="javascript">
{
`<FjToggle checked={useState(true)} size="small" />`
}
      </Highlight>
      <FjToggle checked={useState(true)} size="micro" />
      <Highlight language="javascript">
{
`<FjToggle checked={useState(true)} size="micro" />`
}
      </Highlight>
    </div>
  );
}

export default TogglePage;