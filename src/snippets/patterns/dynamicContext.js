const dynamicContext1 = {
  id: "dynamic-context-2",
  title: "Pattern: Dynamic context",
  source: (
`<DynamicContext.Provider initially={{ theme: 'dark' }}>
  <ThemeToggle />
  <Preview />
</DynamicContext.Provider>

const ThemeToggle = () => (
  <DynamicContext.Consumer>
    {({ data: { theme }, setData }) => (
      <button onClick={() => setData({ theme: other(theme) })}>
        Toggle Theme
      </button>
    )}
  </DynamicContext.Consumer>
)
`)
};

const dynamicContext2 = {
  id:"dynamic-context-1",
  title:"Dynamic context",
  source: (
`class DynamicContextProvider extends React.Component {
  state = {
    data: props.initially,
    setData: newData => this.setState((prevState) => (
      hasChanged(prevState.data, newData)
        ? { data: merge(prevState.data, newData), setData }
        : null
    ))
  }

  render() {
    return <InternalContext.Provider value={this.state}>
      {this.props.children}
    </InternalContext.Provider>
  }
}`)
};

export { dynamicContext1, dynamicContext2 };
