import React from "react";
import * as Styled from './LabeledInput.styles.js';
import Label from "components/atoms/Label";
import Input from "components/atoms/Input";
import PropTypes from 'prop-types';

const LabeledInput = ({
    className,
    name,
    type,
    checked,
    id,
    label,
    additionalInfo,
    direction,
    icon,
    labelClass,
    placeholder,
    onchange,
    value,
    required,
    dataAttributes,
    inputClass,
    ref, 
    disabled,
    pattern,
    rows,
    cols,
    isEditable,
    editIcon,
    onClickEdit,
    deleteIcon,
    onClickDelete,
    idx,
    children
}) => {
    return(
        <Styled.LabelAndInputContainer className={`${className} ${name}-label-input-container ${checked ? "selected" : ""}`}>
            {type !== 'radio' && <Label htmlFor={id} textLabel={label} additionalInfo={additionalInfo} $labelDirection={direction} svg={icon} className={labelClass} />}
            <Input
                id={id}
                placeholderText={placeholder}
                onChange={onchange}
                value={value}
                type={type}
                isRequired={required}
                dataAttributes={dataAttributes}
                className={`${inputClass || ""}`}
                ref={ref}
                checked={!!checked}
                disabled={!!disabled}
                pattern={pattern}
                rows={rows}
                cols={cols}
            />
            {type === 'radio' && <Label htmlFor={id} textLabel={label} addtionalInfo={additionalInfo} $labelDirection={direction} svg={icon} className={labelClass} />}
            {/* If input (usually radio) acting as selection/option */}
            {isEditable && <Styled.EditableInputButtonContainer className={"input-edit-buttons"}>
                    <Button id={`editable-${id}-edit-btn`} svg={editIcon} buttonType={"button"} onClick={onClickEdit} className={`edit-radio-${idx}`} dataAttributes={dataAttributes}/>
                    <Button id={`editable-${id}-delete-btn`} svg={deleteIcon} buttonType={"button"} onClick={onClickDelete} className={`delete-radio-${idx}`} dataAttributes={dataAttributes}/>
                </Styled.EditableInputButtonContainer>}
            {children}
        </Styled.LabelAndInputContainer>
    )
}

LabeledInput.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    checked: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    additionalInfo: PropTypes.string,
    direction: PropTypes.string,
    icon: PropTypes.element,
    labelClass: PropTypes.string,
    placeholder: PropTypes.string,
    onchange: PropTypes.function,
    value: PropTypes.string,
    required: PropTypes.bool,
    dataAttributes: PropTypes.object,
    inputClass: PropTypes.string,
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any })
    ]),
    disabled: PropTypes.bool,
    pattern: PropTypes.string,
    rows: PropTypes.number,
    cols: PropTypes.number,
    isEditable: PropTypes.bool,
    editIcon: PropTypes.elemet,
    onClickEdit: PropTypes.function,
    deleteIcon: PropTypes.element,
    onClickDelete: PropTypes.function,
    idx: PropTypes.number,
    children: PropTypes.node
}

export default LabeledInput;