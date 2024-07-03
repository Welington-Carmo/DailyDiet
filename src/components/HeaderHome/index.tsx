import { Container, ImageBox, Logo, PerfilImage } from "./styles";

import LogoImg from '@assets/logo.png';
import PerfilImg from '@assets/perfil_image.jpg'


export default function HeaderHome() {
    return (
        <Container>
            <Logo source={LogoImg} />
            <ImageBox>
                <PerfilImage source={PerfilImg} />
            </ImageBox>
        </Container>
    )
}