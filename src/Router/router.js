
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddTeamMember from '../Containers/Team-Members-Container/AddTeamMemberContainer';
import ShowTeamMembers from '../Containers/All-Members-Container/ShowAllMembersContainer';
import Welcome from '../Components/Welcome'


const AppRouter = () => (
  <Router>
    <div>

      <Route exact path="/" component={Welcome}/>
      <Route path="/addteammember" component={AddTeamMember}/>
      <Route path="/showallmembers" component={ShowTeamMembers}/>
     
    </div>
  </Router>
)


export default AppRouter