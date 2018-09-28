

import ShowAllMembers from '../../Components/All-Members';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add_team_member } from '../../ActionCreators';


const mapStateToProps = (state) => {
	return { state : state}
}

export default connect(mapStateToProps)(ShowAllMembers);