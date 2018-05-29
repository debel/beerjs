export default {
  id: 'fragments2',
  title:'Fragments',
  comment: 'return multiple elements without a wrapper',
  source: (
`const ArrayOfNumbers = () => [1, 2, 3];

const PartOfAList = () => (
  <React.Fragment>
    <li>3</li>
    <li>4</li>
  </React.Fragment>
);`)
};
