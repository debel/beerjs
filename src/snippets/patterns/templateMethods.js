export default {
  title:'Template Components',
  comment:'HOC controls rendering. Your component must fit its interface',
  source:(
`// display the component if the path matches
<Route path="/dashboard" component={Dashboard} />

// use listItem to render each list element
<ListView listItem={MyItem} />

// show loading, fetch data
// then render display with the data
<DataFetcher
  url="/data.json"
  loading={Loading}
  display={Graph} 
/>`)
}
  