const suspend = {
  id:'suspend',
  title: 'Suspense',
  comment: 'Loading and caching data inside of render',
  source: (
`import { fetchData } from './api'
import { suspend } from './future/suspense';

const cachedOrFetchData = suspend(fetchData);

const DataGraph = ({ id }) => {
  const data = cachedOrFetchData(id);
  return <Graph data={data} />;
};`)
};

const suspendable = {
  id:'suspendable',
  title: 'Suspense',
  comment: 'Rendering inside a suspendable container',
  source: (
`import DataGraph from './dataGraph';
import { Suspendable } from './future/suspense';

<Suspendable>
  <DataGraph id="usr-123" />
</Suspendable>
`)
};

const suspendImpl = {
  id: 'suspend-implementation',
  title: 'Imitating suspense',
  comment: 'If data is not in the cache, throw a promise for getting it',
  source: (
`const suspend = fetcher => {
  const cache = Object.create(null);

  return (id) => {
    if (cache[id] !== undefined) {
      return cache[id];
    }

    throw fetcher(id).then(data => (cache[id] = data));
  };
 };`)
};
const suspendableImpl = {
  id: 'suspendable-implementation',
  title: 'Imitating suspense',
  comment: 'catch a promise for getting data, re-render when done',
  source: (
`class Suspendable extends Component {
  state = { loading: false, error: false };

  componentDidCatch(error) {
    this.setState({loading: true});
    error.then(()=>this.setState({loading:false,error:false}))
         .catch(()=>this.setState({loading:false,error:true}));
  }

  render() {
    return (this.state.error && this.props.error)
      || (this.state.loading && this.props.loading)
      || this.props.children;
  }
}`)
};

export { suspend, suspendable, suspendImpl, suspendableImpl };
