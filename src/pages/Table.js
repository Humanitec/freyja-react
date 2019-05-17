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
          { label: 'Full name', prop: 'name', template: (item) => {return <FjButton size="micro">{item}</FjButton>}, flex: '1' },
          { label: 'Email', prop: 'email', template: (item) => {return <b>{item}</b>},  flex: '3' },
          { label: 'Last activity', prop: 'activity', template: (item) => {return <div style={{'color': '#ccc'}}>{item}</div>}, flex: '1' },
        ]}
        rows={[
          { name: 'Andrew Shortall', email: 'andrew.shortall@humanitec.com', activity: 'Today' },
          { name: 'Aziz Haddad', email: 'aziz@humanitec.com', activity: 'Yesterday' },
          { name: 'Mughees Ilyas', email: 'mughees@humanitec.com', activity: 'Today' }
        ]}
      />
      <Highlight language="javascript">
{`<FjTable
  columns={[
    { label: 'Full name', prop: 'name', template: (item) => {return <FjButton size="micro">{item}</FjButton>}, flex: '1' },
    { label: 'Email', prop: 'email', template: (item) => {return <b>{item}</b>},  flex: '3' },
    { label: 'Last activity', prop: 'activity', template: (item) => {return <div style={{'color': '#ccc'}}>{item}</div>}, flex: '1' },
  ]}
  rows={[
    { name: 'Andrew Shortall', email: 'andrew.shortall@humanitec.com', activity: 'Today' },
    { name: 'Aziz Haddad', email: 'aziz@humanitec.com', activity: 'Yesterday' },
    { name: 'Mughees Ilyas', email: 'mughees@humanitec.com', activity: 'Today' }
  ]}
/>`}
      </Highlight>
    </section>
  );
}

export default TablePage;