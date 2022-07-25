import { FC, useEffect, useRef, useState } from 'react';
// data
import { keyValues } from '../../../public/helpers/data';
// interface
import { TestModel } from '../../../public/helpers/interface';
// styling
import * as STYLE from '../../../styles/styles/Test'

const Test: FC<TestModel> = ({time, paragraphValue, setWpm, setAccuracy, setSection, setWordCount}) => {
    const [key, setKey] = useState('')
    const toType = paragraphValue ? paragraphValue.split('') : []
    const [added, setAdded]: any = useState([])
    const [value, setValue]: any = useState('')
    
    const addedPositive = added.filter((item: any) => item.status === "correct")
    const accuracy = Math.floor((100 * addedPositive.length) / added.length)

    const wpm = Math.round((added.length / 5) / (time / 60))

    const valueAdd = added.map((item: any) => item.value).join('')

    const paragraphArray = value.length > 0 ? paragraphValue.substring(0, value.length).split(' ') : []
    const valueArray = value.length > 0 ? valueAdd.split(' ') : []
    const wordCheck = valueArray.length > 0 ? valueArray.map((item: any, index: number) => item === paragraphArray[index]) : []

  const [timer, setTimer] = useState(time);
  const id: any = useRef(null);
  const clear=()=>{
    window.clearInterval(id.current)
    }
    useEffect(()=>{
        id.current=window.setInterval(()=>{
        setTimer((time: any)=>time-1)
        },1000)
        return ()=>clear();
    },[])

    useEffect(()=>{
        if(timer===0){
            clear()
            setWpm(wpm)
            setAccuracy(accuracy)
            setSection('result')
            setWordCount(`${wordCheck.filter((item: any) => item).length} / ${valueArray.length}`)
        }
    },[timer])

    useEffect(() => {
        const valueArray = value.split('')
        if(valueArray[valueArray.length - 1] !== undefined){
            added.push({
                value: toType[added.length] === ' ' ? ' ' : valueArray[valueArray.length - 1],
                status: valueArray[valueArray.length - 1] === toType[added.length] ? "correct" : "wrong"
            })
        }
    }, [value])

    var minutes = Math.floor(timer / 60);
    var seconds = timer - minutes * 60;

    console.log('test ', paragraphArray, valueArray, wordCheck, added)

    return (
        <>
            <STYLE.Timer>
                <div>{wpm} WPM</div>
                <div>{minutes}:{seconds} minutes remaining</div>
                <div>{isNaN(accuracy) ? 0 : accuracy}% Accuracy</div>
            </STYLE.Timer>
            <STYLE.ParagraphContainer>
                <STYLE.Paragraph>
                    <div>{paragraphValue}</div>
                </STYLE.Paragraph>
                <STYLE.Paragraph>
                    <div>
                        {toType.map((item: string, index: number) => (
                            <STYLE.Text 
                                key={index}
                                status={added[index] ? added[index].status : ''}
                            >
                                {item}
                            </STYLE.Text>
                        ))}
                    </div>
                    <STYLE.ParagraphInput 
                        type='text' 
                        value={value}
                        onKeyDown={(event: any) => {
                            var name = event.key;
                            setKey(name)
                        }}
                        onKeyUp={() => setKey('')}
                        onChange={(e: any) => setValue(e.target.value)}
                    />
                </STYLE.Paragraph>
            </STYLE.ParagraphContainer>
            <STYLE.Keyboard>
                {keyValues.map((item: any, index: number) => {
                    return (
                        <STYLE.KeyContainer 
                            key={index}
                            keys={item.data.length}
                        >
                            {item.data.map((itemInner: any, indexInner: number) => {
                                return (
                                    <STYLE.Key 
                                        key={indexInner}
                                        active={itemInner.name === "SPACE" ? key === ' ' : key === itemInner.name.toLowerCase()}
                                    >
                                        {itemInner.name}
                                    </STYLE.Key>
                                )
                            })}
                        </STYLE.KeyContainer>
                    )
                })}
            </STYLE.Keyboard>
        </>
    );
};

export default Test;