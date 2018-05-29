export default {
  id: 'lifecycle-methods',
  title: 'New Lifecycle methods',
  source: (
`class LifecycleComponent extends React.Component {
  static getDerivedStateFromProps(props, state) {
    // recalculate state based on the props
    return newState || null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // record relevant DOM state right before the DOM is updated
    return snapshot;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // gets the snapshot returned by getSnapshotBeforeUpdate
  }
}
`)
}
