

import Member from '../Components/Member';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { delete_team_member } from '../ActionCreators';

const mapStateToProps = (state) => {
	console.log('Member State',state)
	return { state : state}
}

// const mapDispatchToProps = (dispatch) => bindActionCreators({delete_team_member}, dispatch);
export default connect(mapStateToProps)(Member);
