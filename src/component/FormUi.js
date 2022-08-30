import './Style.css'
import FormData from './FormData'
import { useEffect, useRef } from 'react'
const FormUi = (id) => {
    const radiosWrapper = useRef();
    useEffect(() => {
        const findCheck = radiosWrapper.current.querySelector('input:checked')
        if (findCheck) {
            findCheck.checked = false
        }
    }, [FormData])


    const handleRadio = (value) => {
        console.log(value)
    }


    return (
        <div className="encounterDetails">
            <div className='formHeading'>
                <h2>View Encounter Details</h2>
            </div>
            {/* <div className='Symptoms'> */}
            <div className='heading'>
                <h2>Symptoms</h2>
                <div className='heading1'><h2>Doctors &<br /> Medicines</h2>
                    <div className='heading2'><h2>Lab &<br /> Parameters</h2>
                    </div>
                </div>
            </div>
            <div className='symptoms' ref={radiosWrapper} >

                {FormData.filter(item => item.title === "checkbox" && item.category === "symptom")
                    .map((item) => {
                        return <div key={item.id} className="symptomsData">
                            <div className="symptomsName">
                                <p>{item.name}</p>
                            </div>
                            <div className="symptomsCheckbox">
                                <div className="checkBox">
                                    <input type="radio" onClick={() => handleRadio()} className="checkBoxClass" value='yes' name={item.name} id="yes" />
                                    <label for="yes" className='checkBoxLabel'>Yes</label>
                                </div>
                                <div className="checkBox">
                                    <input type="radio" className="checkBoxClass" value="no" name={item.name} id="no" />
                                    <label for="no"   className='checkBoxLabel'>No</label>
                                </div>
                            </div>
                        </div>
                    })}
            </div>




            <div className="medicine" ref={radiosWrapper}>
                {FormData.filter(item => item.title === "checkbox" && item.category === "doctorsMedicine")
                    .map((item) => {
                        return <div className="symptomsData">
                            <div className="symptomsName">
                                <p>{item.name}</p>
                            </div>
                            <div className="symptomsCheckbox">
                                <div className="checkBox">
                                    <input type="radio" className="checkBoxClass" value='yes' name={item.name} id="yes" />
                                    <label for="yes" className={item.cName}>Yes</label>
                                </div>
                                <div className="checkBox">
                                    <input type="radio" className="checkBoxClass" value="no" name={item.name} id="no" />
                                    <label for="no" >No</label>
                                </div>
                            </div>
                        </div>
                    })}
            </div>
            
            <div className='text'>
                {FormData.filter(item => item.title === "textLabel").map((item) => {
                    return <div className='textData'>
                        <div className='inputData'>
                            <label for="input" >{item.name}</label>
                        </div>
                        <div className='inputText'>
                            <input type="text" id="input" />
                        </div>
                    </div>

                })}
            </div>


        </div>




    )
}
export default FormUi;