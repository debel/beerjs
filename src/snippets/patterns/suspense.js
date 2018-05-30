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
  comment: 'Loading and caching data inside of render',
  source: (
`import DataGraph from './dataGraph';
import { Suspendable } from './future/suspense';

<Suspendable>
  <DataGraph id="usr-123" />
</Suspendable>
`)
};

export { suspend, suspendable };