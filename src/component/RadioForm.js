import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormData from './FormData'
import { useEffect, useState, useRef } from 'react';


const RadioForm = () => {
    const radiosWrapper=useRef();
    const[data, setData] = useState([])
    const [check, setCheck] =useState('')
    const [value, setValue] =useState('')
    const [select, setSelect] =useState(false)
    useEffect(()=>{
         setData(FormData)
    }, [])

    const handleRadio = (id) => {
        console.log(id)
        setCheck(id)
        setData([...data])
    }

    return (
        <div>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    >
                    {data.map((item) => {
                        if (item.title === "checkbox") {
                            return <>
                                <p>{item.name}</p>
                                <FormControlLabel value="Yes"  control={<Radio />} label="Yes"
                                 onClick={()=>handleRadio(item.id)} checked={item.id===check} />
                                <FormControlLabel value="No"  control={<Radio />} label="No" />
                            </>
                        }
                    })}
                </RadioGroup>
            </FormControl>
        </div>
    )
}
export default RadioForm