import { connect } from 'react-redux';
import MainForm from '../components/MainForm';
import { addNewTodo } from '../actions/addNewTodo';

const mapStateToProps = (state) => {
    return {
        mappedState: state.todoReducer
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        addNewTodo: (data)=>(dispatch(addNewTodo(data)))
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(MainForm);