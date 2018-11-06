import { connect } from 'react-redux'
import Form from '../components/Form'
import { addNewTodo } from '../actions/addNewTodo'

const mapStateToProps = (state) => {
    return {
        state: state
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        addNewTodo: (data)=>(dispatch(addNewTodo(data)))
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Form);