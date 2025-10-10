import React from "react";
import * as styled from './FormActionButtons.styles.js';

const FormActionButtons = ({
    hasSubmit,
    submitText,
    handleSubmit,
    hasEdit,
    editText,
    handleEdit,
    hasCancel,
    cancelText,
    handleCancel,
    hasDelete,
    deleteText,
    handleDelete,
}) => {
    return(
        <styled.ButtonContainer className={"form-main-button-container"}>
            {hasSubmit && <Button id={`form-${id}-submit`} buttonType={"submit"} text={submitText ? submitText : "Submit"} onClick={handleSubmit} className={"submit-form-btn"}/>}
            {hasEdit && <Button id={`form-${id}-edit`} buttonType={"button"} text={editText ? editText : "Edit"} onClick={handleEdit} className={"edit-form-btn"}/>}
            {hasCancel && <Button id={`form-${id}-cancel`} buttonType={"button"} text={cancelText ? cancelText : "Cancel"} onClick={handleCancel} className={"cancel-form-btn"}/>}                
            {hasDelete && <Button id={`form-${id}-delete`} buttonType={"button"} text={deleteText ? deleteText : "Delete"} onClick={handleDelete} className={"delete-form-btn"}/>}
        </styled.ButtonContainer>
    )
};

export default FormActionButtons;