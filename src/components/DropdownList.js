import React from 'react'
import { useCity } from '../context/GetCoordinates';

function DropdownList() {
    const { cityName, setCityName } = useCity();

    const handleChange = (event) => {
        setCityName(event.target.value)
    }

    return (
        <form>
            <select className='w-50 py-1 bg-secondary text-light fs-4 text-center' value={cityName} onChange={handleChange}>
                <option value="istanbul">istanbul</option>
                <option value="ankara">ankara</option>
                <option value="izmir">izmir</option>
                <option value="bursa">bursa</option>
                <option value="adana">adana</option>
                <option value="gaziantep">gaziantep</option>
                <option value="kayseri">kayseri</option>
                <option value="konya">konya</option>
                <option value="antalya">antalya</option>
                <option value="kastamonu">kastamonu</option>
            </select>
        </form>
    )
}

export default DropdownList