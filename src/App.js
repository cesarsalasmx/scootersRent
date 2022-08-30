import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters';
import GitList from './components/git-list';
import Search from './components/search';
function App() {
  return (
    <Layout>
      <Profile />
      <Filters />
      <GitList />
      <Search />
    </Layout>
  );
}

export default App;
