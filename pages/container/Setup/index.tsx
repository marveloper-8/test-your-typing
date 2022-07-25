import { FC, useEffect, useState } from 'react';
import randomWords from 'random-words'
// interface
import { SetupModel } from '../../../public/helpers/interface';
// data
import { timeArray } from '../../../public/helpers/data';
// styling
import * as STYLE from '../../../styles/styles/Setup';

const Setup: FC<SetupModel> = ({time, setTime, paragraphValue, setParagraphValue, setSection}) => {
    const generateRandomParagraph = () => {
        const words: any = randomWords(time * 2)
        setParagraphValue(words.join(' '))
    }
    const [custom, setCustom]: any = useState()
    useEffect(() => {
        setTime(custom * 60)
    }, [custom, setTime])

    const setupFunction = () => {
        if(paragraphValue.length === 0){
            alert('Input a text in the textbox to proceed')
        } else if(isNaN(time)){
            alert(`Select a time limit to proceed`)
        } else if(paragraphValue.length < time * 2){
            alert(`Paragraph must have more than ${time * 2} words`)
        } else {
            setSection('test')
        }
    }
    return (
        <div>
            <STYLE.Head>Typing Test</STYLE.Head>
            <STYLE.Container>
                <STYLE.Paragraph
                    value={paragraphValue}
                    onChange={(e: any) => setParagraphValue(e.target.value)}
                    placeholder="Generate a random paragraph or paste a paragraph to proceed..."
                />
                <div>
                    <STYLE.Section>
                        <h3>Time</h3>
                        <p>Set the time duration for the test in minutes</p>
                        {timeArray.map((item: any, index: number) => {
                            return (
                                <STYLE.Tabs 
                                    key={index}
                                    active={item.value === time}
                                    onClick={() => setTime(item.value)}
                                >
                                    {item.name}
                                </STYLE.Tabs>
                            )
                        })}
                        <STYLE.TabsInput
                            type="number"
                            placeholder="Custom..."
                            value={custom}
                            onChange={(e: any) => setCustom(parseInt(e.target.value))}
                            active={custom === (time / 60)}
                            onFocus={() => setTime(custom * 60)}
                        />
                    </STYLE.Section>
                    <STYLE.Section>
                        <h3>Paragraph</h3>
                        <STYLE.Button onClick={generateRandomParagraph}>Generate Random Paragraph</STYLE.Button> or copy and paste a paragraph into the textbox on the right
                    </STYLE.Section>
                    <STYLE.Section>
                        <STYLE.SetupButton onClick={() => setupFunction()}>
                            Start Test
                        </STYLE.SetupButton>
                    </STYLE.Section>
                </div>
            </STYLE.Container>
        </div>
    );
};

export default Setup;