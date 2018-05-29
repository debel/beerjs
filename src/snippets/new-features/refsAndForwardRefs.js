const refs = {
  id: 'refs',
  title: 'createRef',
  comment: 'a substitute for string refs',
  source: (
`class FocusedInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return <input {...this.props} ref={this.inputRef} />;
  }
}`)
};

const forwardRefs = {
  id: 'forwardRefs',
  title: 'Forward Refs',
  comment: 'expose a child component\'s ref to the parent',
  source: (
`const DarkSlide = React.forwardRef((props, ref) => (
  <Slide {...props} bgColor="black" textColor="white" ref={ref}>
    {props.children}
  </Slide>
)`)
};

export { refs, forwardRefs };
