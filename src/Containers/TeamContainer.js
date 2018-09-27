


import Team from '../Components/Team';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {

	console.log('hey',state)
	return { state : state}
}

export default connect(mapStateToProps)(Team);