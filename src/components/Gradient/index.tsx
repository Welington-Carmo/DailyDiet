import { Opacaty, GradientContainer } from "./styles";

export default function Gradient() {
    var gradientElements = []
    for (var i = 1; i <= 30; i++) {
        gradientElements.push(
            <Opacaty key={i} style={{ opacity: 0.033 * i }} />
        )
    }
    return (
        <GradientContainer>
            {gradientElements}
        </GradientContainer>
    );
}