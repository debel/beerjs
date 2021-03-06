const lazyLoading = {
  id:'lazyloadable',
  title: 'Loadable HOC',
  comment: 'Loading a component then rendering it',
  source: (
`import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./myCoolComponent'),
  loading: () => 'Loading...'
});

<LoadableComponent someData={42} />
`)  
};

const conditionalLoading = {
  id: 'conditional-loading',
  title: 'Conditional Loading',
  comment: 'Dynamically select which component gets loaded',
  source:(
`const DataView = Loadable({
  loader: () => (appConfig.view === 'graph'
    ? import('./graphView')
    : import('./tableView')
})

<DataView data={data} />
`)
};

const fullstackComponent = {
  id: 'fullstack-component',
  title: 'Fullstack Components',
  comment: 'The server renders the component. Client-side props used as server-side params.',
  source:(
`const UserProfile = Loadable({
  loader: ({ id }) => componentRegistry.fetch({
    name: 'user-profile',
    version: 'latest',
    params: { id }
  })
})

<UserProfile id="usr-7245" />
`)
};

export { lazyLoading, conditionalLoading, fullstackComponent };