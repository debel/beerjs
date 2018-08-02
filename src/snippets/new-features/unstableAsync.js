export default {
  id:'async-rendering',
  title: 'Unstable_Async',
  comment: 'Mark a lower priorty part of the component tree',
  source: (
`const MyApp = () => {
  <div>
    <ImportantContent />
    <React.unstable_AsyncMode>
      <LowerPriorityContent />
    </React.unstable_AsyncMode>
  </div>
}

const root = ReactDOM.unstable_createRoot('#myDiv');
await root.render(<MyApp />);
`)
};
