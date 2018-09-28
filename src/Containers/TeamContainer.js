


import Team from '../Components/Team';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { delete_team_member } from '../ActionCreators';

const mapStateToProps = (state) => {
	return { state : state}
}
const mapDispatchToProps = (dispatch) => bindActionCreators({ delete_team_member }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Team);
