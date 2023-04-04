import { WeatherProvider } from './context/WeatherContext';
import { GetCoordinatesByLocationProvider } from './context/GetCoordinates';
import WeatherBox from './components/WeatherBox';
import "./App.css";
import DropdownList from './components/DropdownList';


const App = () => {
    return (
        <div className='container'>
            <GetCoordinatesByLocationProvider>
                <WeatherProvider>
                    <div className='bg-image'></div>
                    <div className="bg-dark-text">
                        <div className='text-center my-4'>
                            <h1>HAVA DURUMU APP</h1>
                        </div>
                        <DropdownList />
                        <WeatherBox />
                    </div>
                </WeatherProvider>
            </GetCoordinatesByLocationProvider>
        </div>
    )
}

export default App;