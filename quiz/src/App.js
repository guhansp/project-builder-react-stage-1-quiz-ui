import './App.css';
import HomeComponent from './component/HomeComponent';
import QuizComponent from './component/QuizComponent';
import ResultComponent from './component/ResultComponent';


function App() {
  return (
    <div className="App">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <HomeComponent/> 
            <QuizComponent/> 
            <ResultComponent/>          

      
    </div>
  );
}

export default App;
