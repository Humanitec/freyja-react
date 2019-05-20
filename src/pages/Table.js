import React from 'react';
import { FjButton } from 'freyja/Button';
import { FjTable } from 'freyja/Table';
import Highlight from 'react-highlight';

function TablePage() {
  return (
    <section>
      <h3>Table</h3>
      <FjTable
        columns={[
          { label: 'Full name', prop: 'name', template: (item) => {return <b>{item}</b>}, flex: '1' },
          { label: 'Email', prop: 'email', flex: '3' },
          { label: 'Last activity', prop: 'activity', template: (item) => {return <small style={{'color': '#aaa'}}>{item}</small>}, flex: '1' },
          { label: 'Options', prop: 'options', template: () => {return <FjButton variant="secondary" size="small">&hellip;</FjButton>}, flex: 'none' },
        ]}
        rows={[
          { name: 'Arthur Bailey', email: 'arthur-93@example.com', activity: 'Today' },
          { name: 'Billy West', email: 'billy.west@example.com', activity: 'Yesterday' },
          { name: 'Douglas Weaver', email: 'douglas-89@example.com', activity: '2 days ago' }
        ]}
      />
      <Highlight language="javascript">
{
`<FjTable
  columns={[
    { label: 'Full name', prop: 'name', template: (item) => {return <b>{item}</b>}, flex: '1' },
    { label: 'Email', prop: 'email', flex: '3' },
    { label: 'Last activity', prop: 'activity', template: (item) => {return <small style={{'color': '#aaa'}}>{item}</small>}, flex: '1' },
    { label: 'Options', prop: 'options', template: () => {return <FjButton variant="secondary" size="small">&hellip;</FjButton>}, flex: 'none' },
  ]}
  rows={[
    { name: 'Arthur Bailey', email: 'arthur-93@example.com', activity: 'Today' },
    { name: 'Billy West', email: 'billy.west@example.com', activity: 'Yesterday' },
    { name: 'Douglas Weaver', email: 'douglas-89@example.com', activity: '2 days ago' }
  ]}
/>`
}
      </Highlight>
    </section>
  );
}

export default TablePage;