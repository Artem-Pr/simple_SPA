import React, {useEffect, useState} from 'react';
import {fetchData} from "../../api/api";
import GalleryComponent from "../GalleryComponent/GalleryComponent";
import style from "./Content.module.scss";
import RichTextComponent from "../RichTextComponent/RichTextComponent";
import {Container, Row} from "reactstrap";
import PageForm from "../Form/PageForm";
import cx from "classnames";

export default function Content() {

    const [state, setState] = useState();

    useEffect(() => {
        fetchData()
            .then(response => setState(response.data))
            .catch(error => console.log('Error', error.message))
    }, []);


    if (!state) return <div>Ошибка соединения!</div>
    return (
        <Container className={cx(style.content, "mb-5")}>
            {state.components.map((item, i) =>
                <div key={i} className="mb-5">
                    {item.type !== "GalleryComponent"
                        ? ""
                        : <GalleryComponent title={item.metadata.title}
                                            images={item.metadata.images}
                                            slidesPerView={item.metadata.slidesPerView}
                        />}
                    {item.type !== "RichTextComponent"
                        ? ""
                        : <Row>
                            {item.metadata.components.map(item =>
                                item.type !== "RichTextComponent" ? "" :
                                    <RichTextComponent width={item.col}
                                                       key={item.metadata.title}
                                                       title={item.metadata.title}
                                                       text={item.metadata.text}
                                    />
                            )}
                        </Row>
                    }
                </div>
            )}
            <PageForm title={state.form.title}
                      fields={state.form.fields}
                      field_groups={state.form.field_groups}
                      submit_button={state.form.submit_button}
            />
        </Container>
    );
}