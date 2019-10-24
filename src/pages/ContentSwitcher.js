import React, { useState } from 'react';
import { FjContentSwitcher } from 'freyja/ContentSwitcher';
import Highlight from 'react-highlight';

function ContentSwitcherPage() {
  const switcherStateLarge = useState('option1');
  const switcherStateDefault = useState('option2');
  const switcherStateSmall = useState('option3');
  const switcherStateMicro = useState('option4');

  const switcherStateDisabled = useState('disabled');
  const switcherStateMultiple = useState(['option1', 'option2']);

  const switcherStateRequireNone = useState('option3');
  const switcherStateMultipleRequireNone = useState(['option1', 'option4']);

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' }
  ];
  return (
    <div className="page-content">
      <h3>Content Switcher</h3>
      <h4>Sizes</h4>
      <FjContentSwitcher options={options} active={switcherStateLarge} size="large" />
      <FjContentSwitcher options={options} active={switcherStateDefault} />
      <FjContentSwitcher options={options} active={switcherStateSmall} size="small" />
      <FjContentSwitcher options={options} active={switcherStateMicro} size="micro" />
      <Highlight language="javascript">
{
`<FjContentSwitcher options={options} active={switcherStateLarge} size="large" />
<FjContentSwitcher options={options} active={switcherStateDefault} />
<FjContentSwitcher options={options} active={switcherStateSmall} size="small" />
<FjContentSwitcher options={options} active={switcherStateMicro} size="micro" />`
}
      </Highlight>     

      <h4>Disabled</h4>
      <FjContentSwitcher options={options} active={switcherStateDisabled} disabled={true} />
      <Highlight language="javascript">
{
`<FjContentSwitcher options={options} active={switcherStateDisabled} disabled={true} />`
}
      </Highlight>
      
      <h4>Multiselect</h4>
      <FjContentSwitcher options={options} active={switcherStateMultiple} allowMultiple={true} />
      <Highlight language="javascript">
{
`<FjContentSwitcher options={options} active={switcherStateMultiple} allowMultiple={true} />`
}
      </Highlight>
      
      <h4>Require None</h4>
      <FjContentSwitcher options={options} active={switcherStateRequireNone} requireOne={false} />
      <FjContentSwitcher options={options} active={switcherStateMultipleRequireNone} allowMultiple={true} requireOne={false} />
      <Highlight language="javascript">
{
`<FjContentSwitcher options={options} active={switcherStateRequireNone} requireOne={false} />
<FjContentSwitcher options={options} active={switcherStateMultipleRequireNone} allowMultiple={true} requireOne={false} />`
}
      </Highlight>
    </div>
  )
}

export default ContentSwitcherPage;
