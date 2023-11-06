export default CountDown;
export class CountDown {
    static propTypes: {
        id: any;
        digitStyle: any;
        digitTxtStyle: any;
        timeLabelStyle: any;
        separatorStyle: any;
        timeToShow: any;
        showSeparator: any;
        size: any;
        until: any;
        onChange: any;
        onPress: any;
        onFinish: any;
    };
    constructor(props: any);
    state: {
        until: number;
        lastUntil: any;
        wentBackgroundAt: any;
    };
    timer: number;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    _handleAppStateChange: (currentAppState: any) => void;
    getTimeLeft: () => {
        seconds: number;
        minutes: number;
        hours: number;
        days: number;
    };
    updateTimer: () => void;
    renderDigit: (d: any) => any;
    renderLabel: (label: any) => any;
    renderDoubleDigits: (label: any, digits: any) => any;
    renderSeparator: () => any;
    renderCountDown: () => any;
    render(): any;
}
export namespace CountDown {
    namespace defaultProps {
        export { DEFAULT_DIGIT_STYLE as digitStyle };
        export { DEFAULT_DIGIT_TXT_STYLE as digitTxtStyle };
        export { DEFAULT_TIME_LABEL_STYLE as timeLabelStyle };
        export { DEFAULT_TIME_LABELS as timeLabels };
        export { DEFAULT_SEPARATOR_STYLE as separatorStyle };
        export { DEFAULT_TIME_TO_SHOW as timeToShow };
        export let showSeparator: boolean;
        export let until: number;
        export let size: number;
        export let running: boolean;
    }
}
declare namespace DEFAULT_DIGIT_STYLE {
    let backgroundColor: string;
}
declare namespace DEFAULT_DIGIT_TXT_STYLE {
    let color: string;
}
declare namespace DEFAULT_TIME_LABEL_STYLE {
    let color_1: string;
    export { color_1 as color };
}
declare namespace DEFAULT_TIME_LABELS {
    let d: string;
    let h: string;
    let m: string;
    let s: string;
}
declare namespace DEFAULT_SEPARATOR_STYLE {
    let color_2: string;
    export { color_2 as color };
}
declare const DEFAULT_TIME_TO_SHOW: string[];
