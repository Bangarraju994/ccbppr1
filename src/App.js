import './App.css';
import UserProfile from './Components/UserProfiles'

const userDetails = [
{
  uniqueNo: 1,
  name: 'Robert',
  age: 28
}, 
{
  uniqueNo: 2,
  name: 'Rahim',
  age: 25
},
{
  uniqueNo: 3,
  name: 'Ram',
  age: 26
},
{
  uniqueNo: 4,
  name: 'Rizwan',
  age: 24

},
{
  uniqueNo: 5,
  name: 'Rozer',
  age: 29
}
];

const App = () => (
  <div>
    <h1> Users List </h1>
    <ul>
      {
        userDetails.map((eachItem) => (<UserProfile userDetails={eachItem} />))
      }
    </ul>
  </div>
)
  


export default App;
