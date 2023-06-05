import './App.css';
import Container from './components/container/container';
import Tweet from './components/tweet/tweet';

function App() {
  return (
    <div className="App">
      <Container>
        <Tweet avatar="https://i.pravatar.cc/64" />
      </Container>
    </div>
  );
}

export default App;
