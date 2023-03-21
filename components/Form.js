import styles from '@/styles/Form.module.css'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
const Form = () => {
    const [country , setCountry] = useState("")
    const [name1 , setName1] = useState("")
    const [name2 , setName2] = useState("")
    const [name3 , setName3] = useState("")
    const [flagUrl , setFlagUrl] = useState()
    const [exist , setExist] = useState()
    const [error , setError] = useState(false)
    const [population , setPopulation] = useState()
    const [area , setArea] = useState()
    const [capital , setCapital] = useState()
    const [mapLink , setMapLink] = useState()
    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`).then(res=>res.json()).then(data=>{
            setFlagUrl(data[0].flags.png)
            setName1(data[0].altSpellings[1])
            setName2(data[0].altSpellings[2])
            setName3(data[0].altSpellings[3])
            setArea(data[0].area)
            setPopulation(data[0].population)
            setCapital(data[0].capital[0])
            setMapLink(data[0].maps.googleMaps)
            console.log(data[0].maps.googleMaps)
            setError(false)
            setExist(true)
        }).catch(err=>{
            console.log(err)
            setExist(false)
            setError(true)
        })
    }
    return ( 
        <div className={styles.formPage}>
            <form className={styles.form} onSubmit = {handleSubmit}>
                <input type="text" placeholder='enter the country name' className={styles.formInput} value = {country} onChange = {e =>{setCountry(e.target.value)}}/>
                <button className={styles.formButton}
                >SUBMIT</button>
            </form>
            
            <div className={styles.countryDetail}>
                
                {exist && <img className={styles.countryFlag} src={flagUrl} alt="" />}
                {exist && <div className={styles.names}>ALTERNATE NAMES : {name1} , {name2} , {name3}</div>}
                {exist && <div className={styles.capital}>CAPITAL : {capital}</div>}
                {exist && <div className={styles.area}>AREA : {area}</div>}
                {exist && <div className={styles.population}>POPULATION : {population}</div>}
                {exist && <div className={styles.maps}><Link href = {mapLink} target = '_blank'
                 >SEE ON GOOGLE MAPS</Link></div>}
                {error && <div>this country dosent exist in the data</div>}
            </div>
        </div>
     );
}
 
export default Form;