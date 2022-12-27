import { connect } from 'react-redux';
import './StepCounter.css';
import { increment } from "./actions/action";
import { reset } from "./actions/action";

function UiSection(props) {

  const { steps = 0, dispatch } = props;

  return (
    <>
      <h3>You've walked {steps} steps today!</h3>
      <button className='add' onClick={()=>{
        dispatch(increment());
      }}>Add a step</button>
      <button className='reset' onClick={()=>{
        dispatch(reset());
      }}>Reset steps</button>
    </>
  ); 
}

const ConnectedAddStep = connect((state) => {
  return {
    steps: state
  };
})(UiSection);

function App() {
  return (
    <div className="App">
      <ConnectedAddStep />
    </div>
  );
}

export default App;
