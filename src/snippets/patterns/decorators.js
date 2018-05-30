export default {
  id:'decorators',
  title:'Decorating Components',
  comment: 'Extending component\'s functionality by wrapping them in HOCs',
  source:(
`const LoadingButton = withLoading(MyButton);
const ThemedLoadingButton = withTheme(LoadingButton);
const DisapearingThemedLoadingButton = withTransition(
  { fadeOut: 1000 },
  ThemedLoadingButton
);

const ConnectedView = redux.connect(
  stateToProps,
  dispatchToProps
)(MyView);`)
};

//
