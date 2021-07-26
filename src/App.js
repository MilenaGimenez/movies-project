import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/home';
import NewMovies from './pages/new-movies';
import Popular from './pages/popular';
import Search from './pages/search';
import Movie from './pages/movie';
import Error404 from './pages/error404';

//Components
import MenuTop from './components/MenuTop';

const App = () => {

  const { Header, Content} = Layout;

  return (
    <Layout>
      <Router>
        <Header>
          <MenuTop />
        </Header>
        <Content>
          <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/new-movies' exact={true} component={NewMovies} />
            <Route path='/popular' exact={true} component={Popular} />
            <Route path='/search' exact={true} component={Search} />
            <Route path='/movie:id' exact={true} component={Movie} />
            <Route path='*' exact={true} component={Error404} />
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
};

export default App;
