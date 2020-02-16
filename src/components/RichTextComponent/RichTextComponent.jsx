import React from "react";
import Parser from 'html-react-parser';

export default function RichTextComponent(props) {
    const {
        width,
        title,
        text,
    } = props;

    return (
        <div className={`col-${width}`}>
            <h2 className="mb-3">{title}</h2>
            <div>{Parser(text)}</div>
        </div>
    );
}