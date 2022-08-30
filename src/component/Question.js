import { useEffect, useState } from 'react';
import './Style.css'
import { Accordion, AccordionSummary, FormControlLabel, Typography } from '@mui/material'
import axios from 'axios'
import FormData from './FormData'
import FormUi from './FormUi';
import RadioForm from './RadioForm';
const Question = () => {
    // const [question, setQuestion] = useState([{questionText:"Question", option:[{optionText:"option 1"}], 
    //         open:true, required:false}])
    const [uiData , setUiData] =useState([])
    const [question, setQuestion] = useState(
        [{
            questionText: "What is your question ?",
            optionType: "radio",
            option: [
                { optionText: "option1" },
                { optionText: "option2" },
                { optionText: "option3" },
                { optionText: "option4" },

            ], open: true,
            required: false
        }]
    )

    const [type, setType] = useState();
    const questionType = (a) => {
        console.log(a)
        setType(a)
    }
    const addOption = (i) => {
        var optionOfQuestion = [...question]
        optionOfQuestion[i].option.push({ optionText: "option" })
    }
    const displayQuestion = () => {
        return (
            question.map((ques, i) => {
                return <div>
                    <Accordion expanded={question[i].open} className={question[i].open ? 'add-border' : ''}>
            <AccordionSummary elevation={1} style={{ width: '100%' }}>
                {question[i].open ? (
                    <div className='savedQuestion'>
                        <Typography style={{ fontSize: '20px' }}>
                            {i + 1}.{question[i].questionText}
                        </Typography>

                        {ques.option.map((q, j) => {
                            return <div key={j}>
                                <FormControlLabel disabled control={<input type={type}
                                    required={ques.type} />}
                                    label={<Typography style={{ fontSize: '13px', color: 'black' }}>
                                        {ques.option[j].optionText}
                                    </Typography>
                                    }
                                />

                            </div>
                        })}
                    </div>
                ) : ""}
            </AccordionSummary>

                    </Accordion>
                </div>
            })
        )
    }
    useEffect(()=>{
        data();
    }, [])

    const data=()=>{
        axios.get('http://localhost:8000/data/getData')
        .then((res)=>{
            console.log(res.data.data)
            setUiData(res.data.data)
            console.log(res.data.data)
        })
    }
    const[show, setShow]=useState(false)
console.log(uiData.Increase)
const yes=()=>{
    if(show==false){
    console.log("setshow true")
    setShow(true)
    }
    else if(show==true){
        console.log("set show is false")
        setShow(false)
    }
}

   
    return (
        <div>
        {/* <div className="question">
            <div className="questionData">
                {displayQuestion()}
                <label for="selectOption"></label>
                <select name="ques" id="quesSelect" onClick={(e) => questionType(e.target.value)}>
                    <option value="radio">Please select option</option>
                    <option value="checkbox">Multiple Question</option>
                    <option value="text">Text Question</option>
                </select>
                <button onClick={() => addOption()}>Add option</button>

            </div>
            </div>
        <div className='formUi'>
            
        {FormData.map((item)=>{
            if(item.title==="checkbox"){
                return <div className="checkFormItem">
                    <p>{item.name}</p>
                    <div className="checkBox">
                    <input  type="radio" onClick={yes} className="checkBoxClass" checked={show}  value='no'   id="yes"/>
                    <label for="yes" className={item.cName}>Yes</label>
                    </div>
                    <div className="checkBox">
                    <input type="radio"  className="checkBoxClass"  value="0" id="no"/>
                    <label for="no" >No</label>
                    </div>
                </div>
            }
            else{
                return <div className="textFormItem">
                    <p>{item.name}</p>
                    <input type="text" />
                </div>
            }
        })}
        </div>
 */}

    <FormUi />
    {/* <RadioForm /> */}
        </div>



    )
}
export default Question;