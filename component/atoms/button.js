export default function AtomButton({ customClass, background, color, value, width, height, padding, margin, border, radius }) {
    return (<>
        <button style={{
            className: customClass,
            background: background,
            color: color,
            width: width,
            height: height,
            padding: padding,
            margin: margin,
            border: border,
            borderRadius: radius,
        }}>
            {value}
        </button>


    </>);
}