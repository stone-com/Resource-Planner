// import react admin
import { Admin, Resource } from 'react-admin';
// import rest provider
import simpleRestProvider from 'ra-data-simple-rest';
import ProjectList from './components/ProjectList.js';
import Dashboard from './components/Dashboard.js';
import ProjectCreate from './components/ProjectCreate.js';
import ProjectEdit from './components/ProjectEdit.js';

const dataProvider = simpleRestProvider('http://localhost:3000');

function App() {
  return (
    // React admin provider, using restprovider and passing in API url.
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
      title='Resource Planner'
    >
      <Resource name='projects' list={ProjectList} create={ProjectCreate} edit={ProjectEdit}/>
    </Admin>
  );
}

export default App;
