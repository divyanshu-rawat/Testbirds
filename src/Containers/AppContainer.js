

import App from '../Components/App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { save_json_data } from '../ActionCreators';


const mapStateToProps = (state) => {
	return { state : state}
}

export default connect(mapStateToProps)(App);