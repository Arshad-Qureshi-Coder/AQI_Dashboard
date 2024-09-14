
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import  DashboardProvider  from './Components/DashboardUseContext/DashboardProvider';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DashboardProvider>
        <Dashboard />
        </DashboardProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;



// import React from 'react';
// import './App.css'

// import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
// import YouTubeSidebar from './Components/YoutubeSlider';

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <YouTubeSidebar />
//         <div className="content">
//           <Routes>
//             <Route path="/" exact component={Home} />
//             <Route path="/explore" component={Explore} />
//             <Route path="/subscriptions" component={Subscriptions} />
//             <Route path="/library" component={Library} />
       
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// const Home = () => <div>Home Page</div>;
// const Explore = () => <div>Explore Page</div>;
// const Subscriptions = () => <div>Subscriptions Page</div>;
// const Library = () => <div>Library Page</div>;

// export default App;

