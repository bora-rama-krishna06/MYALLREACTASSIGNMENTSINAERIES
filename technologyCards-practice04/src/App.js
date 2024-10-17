import './App.css'
import UserProfile from './components/UserProfile'

const cardsList = [
  {
    id: 1,
    nam: 'Data scientists',
    role:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    url: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    nam: 'IoT Developer',
    role:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    url: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    nam: 'VR Developer',
    role:
      'A VR developer creates completely new digital environments that people can see.',
    url: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    nam: 'ML Engineer',
    role:
      'Machine learning engineers feed data into models defined by data scientists.',
    url: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => (
  <div className=".grid-container ">
    <h1 className="text">Learn 4.0 Technologies</h1>
    <p className="text1">
      Get trained by alumni of IITs and top companies like
      Amazon,Microsoft,Intel,
      <br />
      Nvidia,Qualcomn,etc.Learn from professional involved in Product <br />
      Devolopment.
    </p>
    <ul className="box">
      {cardsList.map(eachItem1 => (
        <UserProfile key={eachItem1.id} userDetails={eachItem1} />
      ))}
    </ul>
  </div>
)

export default App
