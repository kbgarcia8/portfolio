import React from "react";
import * as styled from './Labeled.styles.js';
import Label from "components/atoms/Label";
import Input from "components/atoms/Input";

const LabeledInput = ({
    name,
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
        <styled.LabelAndInputContainer className={`${name}-label-input-container ${!!checked ? "selected" : ""}`}>
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
            {isEditable && <styled.EditableInputButtonContainer className={"input-edit-buttons"}>
                    <Button id={`editable-${id}-edit-btn`} svg={editIcon} buttonType={"button"} onClick={onClickEdit} className={`edit-radio-${idx}`} dataAttributes={dataAttributes}/>
                    <Button id={`editable-${id}-delete-btn`} svg={deleteIcon} buttonType={"button"} onClick={onClickDelete} className={`delete-radio-${idx}`} dataAttributes={dataAttributes}/>
                </styled.EditableInputButtonContainer>}
            {children}
        </styled.LabelAndInputContainer>
    )
}

export default LabeledInput;