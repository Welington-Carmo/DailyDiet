import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { ArrowIconDefinedType, ArrowButtonStyleType, DynamicArrowButton } from "./styles";

type arrowButtonProps = TouchableOpacityProps & {
    color?: ArrowButtonStyleType;
    direction: ArrowIconDefinedType;
}

export default function ArrowButton({ color = 'PRIMARY', direction, ...rest }: arrowButtonProps) {
    return (
        <TouchableOpacity {...rest} style={{ alignSelf: direction === "upRight" ? 'flex-end' : 'flex-start' }}>
            <DynamicArrowButton type={color} direction={direction}>
            </DynamicArrowButton>
        </TouchableOpacity>
    );
}