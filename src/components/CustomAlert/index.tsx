import { Modal, ModalProps } from "react-native";

import CardButton from "@components/CardButton";

import { Container, ContainerButtons, CustomStatusBar, ExternContainer, Title, WidthButon } from "./styles";

type CustomAlertProps = ModalProps & {
    onClose: () => void;
    onConfirm: () => Promise<void>;
    title: string;
}

export default function CustomAlert({ title, onClose, onConfirm, ...rest }: CustomAlertProps) {
    return (
        <Modal
            transparent={true}
            {...rest}
            onRequestClose={onClose}
        >
            <CustomStatusBar />
            <ExternContainer>
                <Container>
                    <Title>{title}</Title>

                    <ContainerButtons>
                        <WidthButon>
                            <CardButton
                                color="SECONDARY"
                                haveIcon={false}
                                title="Cancelar"
                                onPress={onClose}
                            />
                        </WidthButon>

                        <WidthButon>
                            <CardButton
                                haveIcon={false}
                                title="Sim, excluir"
                                onPress={onConfirm}
                            />
                        </WidthButon>
                    </ContainerButtons>
                </Container>
            </ExternContainer>
        </Modal>
    );
}