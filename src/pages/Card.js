import React from 'react';
import { FjCard } from 'freyja/Card';
import Highlight from 'react-highlight';

function CardPage() {
  return (
    <section>
      <h3>Card</h3>
      <FjCard
        content="This is the card body!">
        This is the card header!
      </FjCard>
      <Highlight language="javascript">
{`
<FjCard
  content="This is the card body!">
  This is the card header!
</FjCard>
`}
      </Highlight>
    </section>
  )
}

export default CardPage;