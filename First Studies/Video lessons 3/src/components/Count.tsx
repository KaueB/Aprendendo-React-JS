import './style/Count.css'

type CountProps = {
    numberCount: number;
}

export function Count(props: CountProps) {
    return (
        <p>
            Contanto {props.numberCount}
        </p>
    )
}