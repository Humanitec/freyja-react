import React, { useState } from 'react';
import { FjInlineEditor } from 'freyja/InlineEditor';
import Highlight from 'react-highlight';

function InlineEditorPage() {
  const [inlineH1Value, setInlineH1Value] = useState('This is an editable <h1> tag');
  const [inlineH2Value, setInlineH2Value] = useState('This is an editable <h2> tag');
  const [inlineH3Value, setInlineH3Value] = useState('This is an editable <h3> tag');
  const [inlineH4Value, setInlineH4Value] = useState('This is an editable <h4> tag');
  const [inlinePValue, setInlinePValue] = useState('This is an editable <p> tag');
  const [inlineLabelValue, setInlineLabelValue] = useState('This value is editable');

  return (
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
  
    <Highlight language="javascript">
{`
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
`}
    </Highlight>
    <h3>Labeled</h3>
    <FjInlineEditor
      label="Label"
      id="with-label"
      placeholder="Enter text"
      value={inlineLabelValue}
      onChange={e => setInlineLabelValue(e)} />

    <Highlight language="javascript">
{`
<FjInlineEditor
label="Label"
id="with-label"
placeholder="Enter text"
value={inlineLabelValue}
onChange={e => setInlineLabelValue(e)} />
`}
    </Highlight>
  </section>
  )
}

export default InlineEditorPage;