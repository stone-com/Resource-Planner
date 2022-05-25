// import react admin
import {fetchUtils, Admin, Resource } from 'react-admin';
import authProvider from '.utils/authProvider';
// import rest provider
import simpleRestProvider from 'ra-data-simple-rest';
import ProjectList from './components/ProjectList.js';
import Dashboard from './components/Dashboard.js';
import ProjectCreate from './components/ProjectCreate.js';
import ProjectEdit from './components/ProjectEdit.js';
import ResourceList from './components/ResourceList.js';
import ResourceCreate from './components/ResourceCreate.js';
import theme from './theme';

//httpClient to pass through the auth token via the header
const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth'));
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);



function App() {
  return (
    // React admin provider, using restprovider and passing in API url.
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
      title='Resource Planner'
      authProvider={authProvider}
    >
      <Resource name='projects' create={ProjectCreate} edit={ProjectEdit} />
      <Resource name='resources' list={ResourceList} create={ResourceCreate} />
    </Admin>
  );
}

export default App;