import axios from "axios"

export const getCountries = async () => {
    try {
        const countries = await axios.get("https://restcountries.com/v3.1/all")
        return countries.data
    } catch (err) {
        console.log(err)
    }
}