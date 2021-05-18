
export default function paragraph({
    customClass,
    value,
    size,
    color,
    weight,
    margin,
    padding,
}) {
    return (<>
        <p className={customClass}
            style={{
                fontSize: size,
                color: color,
                margin: margin,
                padding: padding,
                fontWeight: weight
            }}>
            {value}
        </p>
    </>);

}