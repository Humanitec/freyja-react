import React, { useState } from 'react';
import './App.css';

import FjButton from 'freyja/Button';
import FjCard from 'freyja/Card';
import FjContentSwitcher from 'freyja/ContentSwitcher';
import FjInlineEditor from 'freyja/InlineEditor';
import FjInputField from 'freyja/InputField';
import FjMenu from 'freyja/Menu';

function App() {
  const [menuOpened, toggleMenu] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inlineH1Value, setInlineH1Value] = useState('This is an editable <h1> tag');
  const [inlineH2Value, setInlineH2Value] = useState('This is an editable <h2> tag');
  const [inlineH3Value, setInlineH3Value] = useState('This is an editable <h3> tag');
  const [inlineH4Value, setInlineH4Value] = useState('This is an editable <h4> tag');
  const [inlinePValue, setInlinePValue] = useState('This is an editable <p> tag');
  const [inlineLabelValue, setInlineLabelValue] = useState('This value is editable');
  const switcherStateDefault = useState('option1');
  const switcherStateSmall = useState('option2');
  const switcherStateMicro = useState('option3');
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];
  return (
    <div className="App">
      <h1>Freyja Showcase</h1>
      <section>
        <h3>Freyja button</h3>
        <h4>Variants</h4>
        <FjButton>Primary</FjButton>
        <FjButton variant="secondary">Secondary</FjButton>
        <h4>Sizes</h4>
        <FjButton>Default</FjButton>
        <FjButton size="small">Small</FjButton>
        <FjButton size="micro">Micro</FjButton>
      </section>

      <section>
        <h3>Freyja card</h3>
        <FjCard
          content="This is the card body!">
          This is the card header!
        </FjCard>
      </section>

      <section>
        <h3>Freyja content switcher</h3>
        <h4>Sizes</h4>
        <FjContentSwitcher options={options} active={switcherStateDefault} />
        <FjContentSwitcher options={options} active={switcherStateSmall} size="small" />
        <FjContentSwitcher options={options} active={switcherStateMicro} size="micro" />
      </section>
      
      <section>
        <h3>Freyja inline editor</h3>
        <h3>Tags</h3>
        <FjInlineEditor
          id="inline-h1"
          tag="h1"
          placeholder="Enter text"
          value={inlineH1Value}
          onChange={e => setInlineH1Value(e)} />
        <FjInlineEditor
          id="inline-h2"
          tag="h2"
          placeholder="Enter text"
          value={inlineH2Value}
          onChange={e => setInlineH2Value(e)} />
        <FjInlineEditor
          id="inline-h3"
          tag="h3"
          placeholder="Enter text"
          value={inlineH3Value}
          onChange={e => setInlineH3Value(e)} />
        <FjInlineEditor
            id="inline-h4"
            tag="h4"
            placeholder="Enter text"
            value={inlineH4Value}
            onChange={e => setInlineH4Value(e)} />
        <FjInlineEditor
          id="inline-p"
          tag="p"
          placeholder="Enter text"
          value={inlinePValue}
          onChange={e => setInlinePValue(e)} />
        
        <h3>Labeled</h3>
        <FjInlineEditor
          label="Label"
          id="with-label"
          placeholder="Enter text"
          value={inlineLabelValue}
          onChange={e => setInlineLabelValue(e)} />
      </section>

      <section>
        <h3>Freyja input field</h3>
        <FjInputField
          id="input" type="text" label="Label" value={inputValue} placeholder="placeholder"
          onChange={e => setInputValue(e.target.value)} error={!inputValue ? 'Value required' : ''} required="true" />
      </section>

      <section>
        <h3>Freyja menu</h3>
        <FjMenu
          xPosition="right"
          yPosition="center"
          open={menuOpened}
          setOpen={toggleMenu}
          menuItems={options}>
          <FjButton secondary onClick={() => toggleMenu(!menuOpened)}>Toggle menu</FjButton>
        </FjMenu>
      </section>
    </div>
  );
}

export default App;
