import React from 'react';

import { BoxContents, BoxContentsStyleType, SubTitle, Title } from "./styles";

type RecordProps = {
    title: string;
    subTitle: string;
    type?: BoxContentsStyleType;
}

export default function Record({ title, subTitle, type = 'PRIMARY' }: RecordProps) {
    return (
        <BoxContents type={type}>
            <Title>{title}</Title>
            <SubTitle type={type}>{subTitle}</SubTitle>
        </BoxContents>
    );
}