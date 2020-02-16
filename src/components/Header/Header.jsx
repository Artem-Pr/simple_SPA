import React from "react";
import style from "./Header.module.scss";
import {Container} from 'reactstrap';

export default function Header() {
    return (
        <header className={style.header}>
            <Container className="d-flex h-100 align-items-center">
                <span>Тестовое задание</span>
            </Container>
        </header>
    )
};