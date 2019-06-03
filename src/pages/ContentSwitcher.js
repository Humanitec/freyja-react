import React, { useState } from 'react';
import { FjContentSwitcher } from 'freyja/ContentSwitcher';
import Highlight from 'react-highlight';

function ContentSwitcherPage() {
  const switcherStateLarge = useState('option1');
  const switcherStateDefault = useState('option2');
  const switcherStateSmall = useState('option3');
  const switcherStateMicro = useState('option4');
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' }
  ];
  return (
    <div className="page-content">
      <h3>Content Switcher</h3>
      <FjContentSwitcher options={options} active={switcherStateLarge} size="large" />
      <FjContentSwitcher options={options} active={switcherStateDefault} />
      <FjContentSwitcher options={options} active={switcherStateSmall} size="small" />
      <FjContentSwitcher options={options} active={switcherStateMicro} disabled={true}  size="micro" />
      <Highlight language="javascript">
{
`<FjContentSwitcher options={options} active={switcherStateLarge} size="large" />
<FjContentSwitcher options={options} active={switcherStateDefault} />
<FjContentSwitcher options={options} active={switcherStateSmall} size="small" />
<FjContentSwitcher options={options} active={switcherStateMicro} disabled={true}  size="micro" />`
}
      </Highlight>
    </div>
  )
}

export default ContentSwitcherPage;
