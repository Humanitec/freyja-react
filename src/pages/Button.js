import React from 'react';
import { FjButton } from 'freyja/Button';
import Highlight from 'react-highlight';

function ButtonPage() {
  return (
    <div className="page-content">
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
      <FjButton size="large">Large</FjButton>
      <FjButton>Default</FjButton>
      <FjButton size="small">Small</FjButton>
      <FjButton size="micro">Micro</FjButton>
      <Highlight language="javascript">
{
`<FjButton size="large">Large</FjButton>
<FjButton>Default</FjButton>
<FjButton size="small">Small</FjButton>
<FjButton size="micro">Micro</FjButton>`
}
      </Highlight>
    </div>
  )
}

export default ButtonPage;