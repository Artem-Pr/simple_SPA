import React from "react";
import Slider from 'react-slick';
import cx from 'classnames';
import style from "./GalleryComponent.module.scss";
import {useWindowSize} from "../Hooks/useWindowSize";


export default function GalleryComponent(props) {
    const {
        title,
        images,
        slidesPerView,
    } = props;

    const size = useWindowSize();

    function Arrow(props) {
        const {onClick, direction} = props;
        return (
            <svg className={cx(style.arrow, direction === 'right' ? style.arrowRight : style.arrowLeft)}
                 onClick={onClick} width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.9992 0C7.17884 0.00159992 0.00159992 7.17884 0 16.0008C0 24.8228 7.17724 32 16.0008 32C24.8228 31.9984 32 24.8212 32 16.0008C32 7.17884 24.8228 0.00159992 15.9992 0ZM16.0008 28.8002C8.94195 28.8002 3.19984 23.058 3.19984 16.0008C3.20144 8.94355 8.94355 3.20144 15.9992 3.19984C23.058 3.20144 28.8002 8.94355 28.8002 16.0008C28.8002 23.0564 23.058 28.7986 16.0008 28.8002Z"/>
                <path d="M16.02 9.59302L9.6123 16.0007L16.02 22.4068V17.6006H22.4101V14.4008H16.02V9.59302Z"/>
            </svg>
        );
    }

    function Paging() {
        return (
            <div className={cx(style.paging, "position-absolute paging")}> </div>
        );
    }


    return (
        <section className="mb-5 pb-5">
            <h1>{title}</h1>
            <div className={style.sliderContainer}>
                <Slider
                    slidesToShow={size.width > 768 ? slidesPerView : 1}
                    slidesToScroll={1}
                    infinite={true}
                    dots={true}
                    arrows={size.width > 768}
                    prevArrow={<Arrow direction={'left'}/>}
                    nextArrow={<Arrow direction={'right'}/>}
                    customPaging={Paging}
                >
                    {images.map(item => <div key={item} className={cx(style.sliderWrapper, "p-3")}><img
                        className={cx(style.sliderImg, "w-100 h-100")} src={item} alt="autumn"/></div>)}
                </Slider>
            </div>
        </section>
    );
}