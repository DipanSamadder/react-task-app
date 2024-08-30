
import Home from './pages/Home';
import AllTasks from './pages/AllTasks';
import CompletedTasks from './pages/CompletedTasks';
import InCompltedTasks from './pages/InCompltedTasks';
import ImportantTasks from './pages/ImportantTasks';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="p-2 bg-gray-900 text-white h-screen relative">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}>
            <Route index element={<AllTasks/>}/>
            <Route path="/completed-tasks" element={<CompletedTasks/>}/>
            <Route path="/incompleted-tasks" element={<InCompltedTasks/>}/>
            <Route path="/important-tasks" element={<ImportantTasks/>}/>
          </Route>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
      </Router>
      
    </div>
  )
}
