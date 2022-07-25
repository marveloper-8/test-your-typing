import {FC} from 'react';
// interface
import { ResultModel } from '../../../public/helpers/interface';
// styling
import * as STYLE from '../../../styles/styles/Result';

const Result: FC<ResultModel> = ({wpm, accuracy, wordCount, setSection}) => {
    return (
        <STYLE.Wrapper>
            <div>
                <div>Time Up!</div>
                <STYLE.Head>Result</STYLE.Head>
                <STYLE.Container>
                    <div>
                        <h1>{wpm}</h1>
                        Words Per Minute
                    </div>
                    <div>
                        <h1>{wordCount}</h1>
                        Word Points
                    </div>
                    <div>
                        <h1>{accuracy}%</h1>
                        Typing Accuracy
                    </div>
                </STYLE.Container>
                <STYLE.SetupButton onClick={() => setSection('setup')}>START AGAIN</STYLE.SetupButton>
            </div>
        </STYLE.Wrapper>
    );
};

export default Result;