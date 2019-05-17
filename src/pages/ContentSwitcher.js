import React, { useState } from 'react';
import { FjContentSwitcher } from 'freyja/ContentSwitcher';
import Highlight from 'react-highlight';

function ContentSwitcherPage() {
  const switcherStateDefault = useState('option1');
  const switcherStateSmall = useState('option2');
  const switcherStateMicro = useState('option3');
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];
  return (
    <section>
      <h3>Content Switcher</h3>
      <FjContentSwitcher options={options} active={switcherStateDefault} />
      <FjContentSwitcher options={options} active={switcherStateSmall} size="small" />
      <FjContentSwitcher options={options} active={switcherStateMicro} size="micro" />
      <Highlight language="javascript">
{`
<FjContentSwitcher options={options} active={switcherStateDefault} />
<FjContentSwitcher options={options} active={switcherStateSmall} size="small" />
<FjContentSwitcher options={options} active={switcherStateMicro} size="micro" />
`}
      </Highlight>
    </section>
  )
}

export default ContentSwitcherPage;