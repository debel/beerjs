export default {
  id: 'no-state-change',
  title: 'Nothing changed, actually',
  comment: 'Returning null from the setState callback will no longer trigger a re-render',
  source: (
`this.setState((prevState, props) => (
  props.selected === prevState.selected
    ? null
    : { selected: props.selected })
)
`)
};
