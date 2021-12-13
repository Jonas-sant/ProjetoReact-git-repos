import Layout from './components/layout';
import ProfileCard from './components/profileCard';
import Repositories from './components/repositories';
import useGithub from './hooks/github-hooks';
import NoSearch from './components/nosearch'

function App() {
  const {githubState} = useGithub();
  
  return (
    <div className="App">
        
          <Layout>
            {githubState.hasUser ? <>
                                    {githubState.loading ? (<>Loading...</>):(<>
                                    <ProfileCard />
                                    <Repositories />
                                    </>)}
                                  </> : <div><NoSearch/></div>

            }
          
        </Layout> 
    </div>
  );
}

export default App;
