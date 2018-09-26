
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddTeamMember from '../Containers/AddTeamMemberContainer';
import ShowTeamMembers from '../Containers/ShowTeamMembersContainer';
import Welcome from '../Components/Welcome'


const AppRouter = () => (
  <Router>
    <div>

      <Route path="/" component={Welcome}/>
      <Route exact path="/addteammember" component={AddTeamMember}/>
      <Route path="/showteammembers" component={ShowTeamMembers}/>
     
    </div>
  </Router>
)


export default AppRouter