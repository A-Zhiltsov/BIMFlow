import React from 'react';
import ReactDOMServer from 'react-dom/server';

const chapterName = 'Lorem';

const Content = () => (
    <div >
      <h3>Eu ullamco deserunt nisi deserunt exercitation aliqua sit.</h3>
      <p>
        Culpa consequat ex mollit sit do ad proident aliquip quis consectetur non nisi voluptate eiusmod. Nulla aute labore aliquip eiusmod deserunt qui labore velit pariatur ut minim ut in. Magna ad aute eiusmod quis dolore deserunt ad. Consectetur sint elit sint excepteur et est ad.

Adipisicing sit commodo culpa ipsum labore ullamco dolor. Quis proident amet in enim duis reprehenderit quis officia. Sunt dolore incididunt occaecat mollit duis ex est consectetur ut duis enim voluptate velit anim.
      </p>
    </div>
  );
  
const Chapter1 = ReactDOMServer.renderToStaticMarkup(<Content />);

export default Chapter1;