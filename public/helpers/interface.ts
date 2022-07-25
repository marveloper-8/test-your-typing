export interface TestModel {
    active?: boolean;
    keys?: number;
    status?: string;
    time?: any;
    paragraphValue?: any;
    setWordCount?: any;
    setWpm?: any;
    setAccuracy?: any;
    setSection?: any;
}

export interface SetupModel {
    active?: boolean;
    time?: any;
    setTime?: any;
    paragraphValue?: any;
    setParagraphValue?: any;
    setSection?: any;
}

export interface ResultModel {
    wpm?: number;
    accuracy?: number;
    setSection?: any;
    wordCount?: string;
}