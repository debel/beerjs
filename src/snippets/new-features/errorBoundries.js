export default {
  id: 'error_boundries',
  title: 'Error Boundires',
  comment: 'Catch errors in the children components',
  source: (
`class CatcherInTheRye extends React.Component {
  state = { hasError: null }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError
      ? "Something went wrong"
      : this.props.children;
  }
}`)
};
