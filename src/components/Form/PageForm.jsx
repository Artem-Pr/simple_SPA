import React, {useEffect, useState} from "react";
import {Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import cx from "classnames";
import style from "./PageForm.module.scss";
import dataImg from "../../assets/images/date.svg";
import vectorImg from "../../assets/images/vector.svg";
import Parser from 'html-react-parser';
import {DayPickerSingleDateController} from "react-dates";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {useWindowSize} from "../Hooks/useWindowSize";


export default function PageForm(props) {
    const {
        title,
        fields,
        field_groups,
        submit_button,
    } = props;

    const requiredFieldsArr = fields.filter(item => item.required).map(item => item.name);

    const size = useWindowSize();
    const [checkbox, setCheckbox] = useState(false);
    const [checkSubmit, setCheckSubmit] = useState(requiredFieldsArr);
    const [datePickerState, setDatePickerState] = useState();
    const [dateState, setDateState] = useState('');
    const [dateFocused, setDateFocused] = useState(false);
    const [datePicker, setDatePicker] = useState(false);

    useEffect(() => {
        datePickerState && setDateState(datePickerState.format('YYYY-MM-DD'));
    }, [datePickerState]);

    const handleDate = (e) => {
        e.preventDefault();
        setDatePicker(!datePicker);
    };

    const checkValue = (e) => {
        let newArr = [];
        if (e.target.value) newArr = checkSubmit.filter(item => item !== e.target.name);
        else newArr = [...checkSubmit, e.target.name];
        setCheckSubmit(newArr);
    };


    return (
        <section>
            <h2 className="mb-5">{title}</h2>
            <Form>
                <Row className={cx(style.rowWrapper, "mb-3")} form>
                    {Object.keys(field_groups).map(groupsName =>
                        <div className={cx(field_groups[groupsName], style.colWrapper, "d-flex flex-wrap")}
                             key={groupsName}>
                            {fields.filter(item => item.group === groupsName).map(item =>
                                <FormGroup key={item.name}
                                           className={cx(style.formGroup, "mb-4 px-3 d-flex flex-column flex-grow-1")}>
                                    <Label className={cx(style.fieldName, "d-flex flex-column")}
                                           for={item.name}>{item.label}</Label>

                                    {item.type !== "date" ? "" :
                                        <div className="position-relative">
                                            <Input className={cx(style.field, style.unstyled, "pr-5")} type={item.type}
                                                   name={item.name}
                                                   onChange={e => {
                                                       e.target.required && checkValue(e);
                                                       setDateState(e.target.value)
                                                   }}
                                                   onClick={e => handleDate(e)}
                                                   value={dateState}
                                                   id={item.name} required={item.required}/>
                                            <img className={cx(style.dataImg, style.zIndex, "position-absolute")}
                                                 onClick={e => handleDate(e)}
                                                 src={dataImg}
                                                 alt="date"/>
                                            <div className={cx(style.zIndex,
                                                size.width <= 768 ? style.positionFixed : "position-absolute",
                                                datePicker ? "visible" : "invisible")}>
                                                <DayPickerSingleDateController
                                                    date={datePickerState}
                                                    onDateChange={date => {
                                                        item.required && checkValue({target: {
                                                                name: item.name,
                                                                value: date.toString()
                                                            }});
                                                        setDatePickerState(date);
                                                        setDatePicker(!datePicker);
                                                    }}
                                                    onFocusChange={({focused}) => setDateFocused(focused)}
                                                    focused={dateFocused}
                                                    onOutsideClick={() => datePicker && setDatePicker(!datePicker)}
                                                    orientation={size.width > size.height ? "horizontal" : "vertical"}
                                                    numberOfMonths={size.width <= 768 ? 2 : 1}
                                                />
                                            </div>
                                        </div>
                                    }

                                    {item.type !== "textarea" ? "" :
                                        <Input className={cx(style.field, style.textArea, "flex-grow-1")}
                                               onChange={e => e.target.required && checkValue(e)}
                                               type={item.type} name={`textarea${item.name}`} required={item.required}
                                               id={`textarea${item.name}`}/>
                                    }

                                    {item.type === "date" || item.type === "textarea" ? "" :
                                        <Input className={style.field} type={item.type} required={item.required}
                                               onChange={e => e.target.required && checkValue(e)}
                                               name={item.name} id={item.name}/>
                                    }
                                </FormGroup>
                            )}
                        </div>
                    )}
                </Row>
                {fields.filter(item => item.name === "agreement").map(item =>
                    <label key={item.name} className={style.checkboxContainer}>
                        {Parser(item.label)}
                        <Input className={style.fieldName} type={item.type}
                               onChange={e => setCheckbox(!checkbox)}
                               checked={checkbox} name={item.name} id={`checkbox${item.name}`} required/>
                        <div className={style.checkmark}>
                            {!checkbox ? '' : <img className={cx(style.dataImg, style.vectorImg, "position-absolute")}
                                                   src={vectorImg}
                                                   alt="data"/>
                            }
                        </div>
                    </label>
                )}
                <Button className={cx("btn btn-primary",
                    checkSubmit.length || !checkbox ? "disabled" : '')}
                        type="submit" value="Submit">{submit_button.text}</Button>
            </Form>
        </section>
    );
}