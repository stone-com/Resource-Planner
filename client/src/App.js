// import react admin
import { Admin, Resource } from 'react-admin';
// import rest provider
import simpleRestProvider from 'ra-data-simple-rest';
import ProjectList from './components/ProjectList.js';

const dataProvider= simpleRestProvider('http://localhost:3000')

function App() {
  return (
  // React admin provider, using restprovider and passing in API url.
    <Admin dataProvider={dataProvider} title='Resource Planner'>
      <Resource name="projects" list={ProjectList} />
    </Admin>
  );
}

export default App;
