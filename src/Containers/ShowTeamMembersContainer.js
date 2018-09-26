

import ShowTeamMembers from '../Components/ShowTeamMembers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add_team_member } from '../ActionCreators';


const mapStateToProps = (state) => {
	return { state : state}
}

// const mapDispatchToProps = (dispatch) => bindActionCreators({ add_team_member }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(ShowTeamMembers);

export default connect(mapStateToProps)(ShowTeamMembers);