import { useState } from 'react';
// styling
import * as STYLE from '../styles/styles/App'
// containers
import Test from "./container/Test";
import Setup from "./container/Setup";
import Result from './container/Result';

const App = () => {
  const [section, setSection] = useState('setup')
  const [time, setTime] = useState(60)
  const [paragraphValue, setParagraphValue] = useState('')
  const [accuracy, setAccuracy] = useState(0);
  const [wpm, setWpm] = useState(0)
  const [wordCount, setWordCount] = useState('')
  return (
    <STYLE.App>
      <STYLE.Container>
        {section === 'setup' ? (
          <Setup
            time={time}
            setTime={setTime}
            setSection={setSection}
            paragraphValue={paragraphValue}
            setParagraphValue={setParagraphValue}
          />
        ) : section === 'test' ? (
          <Test
            time={time}
            paragraphValue={paragraphValue}
            setAccuracy={setAccuracy}
            setWpm={setWpm}
            setWordCount={setWordCount}
            setSection={setSection}
          />
        ) : (
          <Result
            wpm={wpm}
            wordCount={wordCount}
            accuracy={accuracy}
            setSection={setSection}
          />
        )}
      </STYLE.Container>
    </STYLE.App>
  )
}

export default App;
