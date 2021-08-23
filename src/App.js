import './App.css';
import IssueList from './components/IssueList';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom';
import Issue from './components/Issue';




function App() {
  // let { IssueList } = useParams();
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <IssueList />
        </Route>
        <Route path='/issue:id'>
          <Issue />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
