
import './App.css';

function App() {

  return ( 
    <div className="App">
      <Job salary={9000} position="Intern" company="TMrnd" />
      <Job salary={12000} position="Junior" company="Google" />
      <Job salary={10000} position="Senior" company="Amazon" />

    </div>
  );
//   const name = <h1>Pedro</h1>

//   return (
//     <div className="App">
//       <User name="Eman" age={23} email="eman.gmail.com" />
//     </div>
//   );
// }

// const User = (props) => {

//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );


}

//components luar drpd the main component, mesti start dengan huruf besar
const Job = (props) => {

  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
}




export default App;
