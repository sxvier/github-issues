import './App.css';
import IssueList from './pages/IssueList';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import IssueDetail from "./pages/IssueDetail";




function App() {
  // let { IssueList } = useParams();
  return (
    <Router>
      <div className="App">
        <Container>
          <Switch>
            <Route exact path="/">
              <IssueList />
            </Route>
            <Route path="/issues/:issueId">
              <IssueDetail />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}


export default App;
