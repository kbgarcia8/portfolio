import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import {DefaultInput, TextArea} from "./Input.styles.js";
import * as Styled from "./Input.styles.js";

const Input = forwardRef(({ 
    id,
    placeholderText,
    onChange,
    value,
    type,
    isRequired,
    dataAttributes,
    checked,
    disabled,
    pattern,
    className,
    /* needed when input type is textarea */
    rows = 5,
    cols = 30,
}, ref) => {
    return (
        type !== "textarea"
        ? <Styled.DefaultInput
            id={id}
            name={id}
            placeholder={placeholderText}
            onChange={onChange}
            value={value}
            type={type}
            required={isRequired}
            {...dataAttributes}
            className={className}
            ref={ref}
            checked={checked}
            disabled={disabled}
            pattern={pattern}
        />
        : <Styled.TextArea
            id={id}
            placeholder={placeholderText}
            onChange={onChange}
            value={value}
            rows={rows}
            cols={cols}
            {...dataAttributes}
            className={className}
            ref={ref}
            disabled={disabled}
        />
    );
});

Input.propTypes = {
    id: PropTypes.string.isRequired,
    placeholderText: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'radio', 'checkbox', 'date', 'file', 'hidden']),
    isRequired: PropTypes.bool,
    dataAttributes: PropTypes.object, 
    checked: PropTypes.bool,
    className: PropTypes.string,
    rows: PropTypes.number,
    cols: PropTypes.number,
};

export default Input;