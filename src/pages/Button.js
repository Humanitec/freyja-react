import React from 'react';
import { FjButton } from 'freyja/Button';
import Highlight from 'react-highlight';

function ButtonPage() {
  return (
    <section>
      <h3>Button</h3>
      <h4>Variants</h4>
      <FjButton>Primary</FjButton>
      <FjButton variant="secondary">Secondary</FjButton>
      <Highlight language="javascript">
{
`<FjButton>Primary</FjButton>
<FjButton variant="secondary">Secondary</FjButton>`
}
      </Highlight>
      <h4>Sizes</h4>
      <FjButton>Default</FjButton>
      <FjButton size="small">Small</FjButton>
      <FjButton size="micro">Micro</FjButton>
      <Highlight language="javascript">
{
`<FjButton>Default</FjButton>
<FjButton size="small">Small</FjButton>
<FjButton size="micro">Micro</FjButton>`
}
      </Highlight>
    </section>
  )
}

export default ButtonPage;