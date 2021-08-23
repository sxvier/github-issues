import { Container } from 'react-bootstrap';
import './App.css';
import IssueList from './components/IssueList';
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  return (
    <div className="App">
      <Container>
        <IssueList />
      </Container>
    </div>
  );
}

export default App;
