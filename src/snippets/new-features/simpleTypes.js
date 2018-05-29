export default {
  id:'text-components',
  title: 'Rendering strings',
  comment: 'React creates text nodes for components that return strings or numbers',
  source: (
`const HelloWorld = () => 'Hello World!';

const Pi = () => 3.14;

const Greeting = ({ prefix, firstName, lastName }) => (
  \`Dear \${prefix} \${firstName} \${lastName},\`
);`)
};
