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

    const [wordCollection, setWordCollection]: any = useState([])
    const [word, setWord]: any = useState([])
    const paragraphWordArray = paragraphValue.split(' ')

    useEffect(()=>{
        if(timer===0){
            clear()
            setWpm(wpm)
            setAccuracy(accuracy)
            setSection('result')
            setWordCount(`${wordCollection.filter((item: any) => item.status === "correct").length} / ${wordCollection.length + 1}`)
        }
    },[timer])

    useEffect(() => {
        const valueArray = value.split('')
        const spaceChecker = toType[added.length] === ' '

        if(valueArray[valueArray.length - 1] !== undefined){
            added.push({
                value: spaceChecker ? ' ' : valueArray[valueArray.length - 1],
                status: valueArray[valueArray.length - 1] === toType[added.length] ? "correct" : "wrong"
            })
        }

        if(spaceChecker){
            const wordCopy = [...word]
            wordCopy.pop()
            wordCollection.push({
                value: wordCopy.join(''),
                status: paragraphWordArray[wordCollection.length] === wordCopy.join('') ? "correct" : "wrong"
            })
            setWord([])
        }
    }, [value])

    var minutes = Math.floor(timer / 60);
    var seconds = timer - minutes * 60;

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
                        value={value}
                        onKeyDown={(event: any) => {
                            var name = event.key;
                            setKey(name)
                            word.push(name)
                        }}
                        onKeyUp={() => setKey('')}
                        onChange={(e: any) => {
                            setValue(e.target.value)
                            // setWord(e.target.value)
                        }}
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