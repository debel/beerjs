const dynamicContext1 = {
  id:"dynamic-context-1",
  title:"Dynamic context",
  source: (
`class DynamicContextProvider extends React.Component {
  state = {
    data: props.initially,
    setData: newData => this.setState((prevState) => (
      shallowCompare(newData, prevState.data)
        ? null
        : { data, setData }
    ))
  }

  render() {
    return <InternalContext.Provider value={this.state}>
      {this.props.children}
    </InternalContext.Provider>
  }
}`)
};

const dynamicContext2 = {
  id: "dynamic-context-2",
  title: "Dynamic context",
  source: (
`<DynamicContext.Provider initially={{ theme: 'dark' }}>
  <ThemeToggle />
  <Preview />
</DynamicContextProvider>

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

export { dynamicContext1, dynamicContext2 };
