import { ColorPicker, ColorPickerProps, GetProp, Input } from "antd";
import { useEffect, useMemo, useState } from "react";

type Color = GetProp<ColorPickerProps, 'value'>;

function MyColorPicker(props: any) {
    const [color, setColor] = useState<Color>(props.value);

    const [bw, setBW] = useState(false);

    const bgColor = useMemo<string>(
        () => (typeof color === 'string' ? color : color!.toHexString()),
        [color],
    );


    useEffect(() => {
        const tmp = JSON.parse(JSON.stringify(color))
        // console.log(tmp)
        setBW(true)
        if (tmp.metaColor) {
            if (tmp.metaColor.originalInput.v > 0.58) {
                setBW(false)
            }
        }
    }, [color]);

    const inputStyleBlack: React.CSSProperties = {
        backgroundColor: bgColor,
        textAlign: 'center',
        color: 'black',
        marginLeft: '10px',
        minWidth: '250px',
    };

    const inputStyleWhite: React.CSSProperties = {
        backgroundColor: bgColor,
        textAlign: 'center',
        color: 'white',
        marginLeft: '10px',
        minWidth: '250px',
    };

    return (
        <ColorPicker value={color} onChange={setColor} disabledAlpha onChangeComplete={(bgColor) => props.onChangeComplete(bgColor)}>
            {bw ? (
                <Input type="primary" style={inputStyleWhite} value={bgColor}></Input>
            ) :
                (<Input type="primary" style={inputStyleBlack} value={bgColor}></Input>)
            }

        </ColorPicker>
    );
}


export default MyColorPicker;