import {ResetCSS} from './components/global/resetcss'
import Layout from './components/layout';
import ProfileCard from './components/profileCard';
import Header from './components/header';
import Repositories from './components/repositories'

import api from './services/api';


function App() {
  console.log(api)
  return (
    <div className="App">
      <main>
        <ResetCSS/>
        <Layout>
        
            <Header />
            <ProfileCard />
            <Repositories />
        </Layout>  
      </main>
    </div>
  );
}

export default App;
