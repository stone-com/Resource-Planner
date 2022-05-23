// import react admin
import { Admin, Resource } from 'react-admin';
// import rest provider
import simpleRestProvider from 'ra-data-simple-rest';
import ProjectList from './components/ProjectList.js';
import Dashboard from './components/Dashboard.js';
import ProjectCreate from './components/ProjectCreate.js';
import ProjectEdit from './components/ProjectEdit.js';
import ResourceList from './components/ResourceList.js';
import ResourceCreate from './components/ResourceCreate.js';
import theme from './theme';

const dataProvider = simpleRestProvider('http://localhost:3000');

function App() {
  return (
    // React admin provider, using restprovider and passing in API url.
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
      title='Resource Planner'
      // theme={theme}
    >
      <Resource name='projects' create={ProjectCreate} edit={ProjectEdit} />
      <Resource name='resources' list={ResourceList} create={ResourceCreate} />
    </Admin>
  );
}

export default App;
