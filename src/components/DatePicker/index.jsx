import { useEffect, useState } from 'react';
import { ExpandMore } from '@mui/icons-material';
import './style.css'


const DatePicker = ({isDate = true,isMonth = true,isYear = true ,onSelectDate,selectDate}) => {
    const [date,setDate] = useState({
        date : new Array(31),
        month : new Array(12),
        year : []
    });
    const dateHandler = (value) => {
        onSelectDate({ field : "date",value})
    }
    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for(let start = currentYear - 51 ; start <= currentYear - 21; start++) {
            years.push(start);
        }
        setDate({date : Array.from(date.date).map((elem,index) => index + 1),month : Array.from(date.month).map((elem,index) => index + 1),year : years});
    },[]) 
    useEffect(() => {
        console.log("month updated")
        const {date,month,year} = selectDate;
        if(month) {
            switch(month) {
                case 2:
                    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                        let d = Array.from(new Array(29)).map((e,i) => i + 1);
                        setDate( prev => ({...prev,date : d}));
                    } else {
                        let d = Array.from(new Array(28)).map((e,i) => i + 1);
                        setDate( prev => ({...prev,date : d}));
                    }
                    return ;
                case 4:
                case 6:
                case 9:
                case 11:
                    setDate((prev) => {
                        let d = Array.from(new Array(30)).map((e,i) => i + 1);
                        return {...prev,date : d};
                    } )
                    return;
                default : setDate((prev) => {
                    let d = Array.from(new Array(31)).map((e,i) => i + 1);
                    return {...prev,date : d};
                } )
                return;;
            }
        }
    },[selectDate.month,selectDate.year])
        const { year,date : d,month} = date;
    return <div className='date-conatiner'>
        {console.log(date)}
        { isDate && <SelectBox 
        options={d} 
        value={selectDate.date} 
        onSelect={dateHandler} 
        label="Date"/>}
        { isMonth && <SelectBox 
        options={month} value={selectDate.month} 
        onSelect={(value) => onSelectDate({field : "month" ,value})} 
        label="Month"/>}
            {
                isYear && <SelectBox 
                options={year} value={selectDate.year} 
                onSelect={(value) => onSelectDate({field : "year" ,value})} 
                label="Year"/>
            }
    </div>
}

export default DatePicker;


const SelectBox = ({value,options,label,onSelect}) => {
    const [showOptions,setShowOptions] = useState(false); 
    return <div className='select-container' onClick={() => setShowOptions(! showOptions)}>
        <div>
            <input type="text" value={value || label} onBlur={() => setTimeout(() =>setShowOptions(false),500)} /><ExpandMore/>
        </div>
        {
            showOptions && <ul>
            {
                options.map((option) => <li onClick={() => onSelect(option)} >{option}</li>)
            }
        </ul>
        }
    </div>
}