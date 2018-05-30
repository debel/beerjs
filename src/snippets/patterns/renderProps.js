export default {
  id:'render-props',
  title:'Render Props',
  comment: 'HOC provides data to a callback. You control rendering',
  source:(
`<DataFetcher
  url="/data.json"
  render={data => <Graph data={data} />}
/>

<MyContext.Consumer>
  {contextValue => <h1>{contextValue}</h1>}
</MyContext.Consumer>

<Route path="/dashboard">
  <Dashboard />
</Route>`)
};
