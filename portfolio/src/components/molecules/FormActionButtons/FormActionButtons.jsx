import React from "react";
import * as Styled from './FormActionButtons.styles.js';
import Button from "components/atoms/Button";
import PropTypes from 'prop-types';

const FormActionButtons = ({
    id,
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
        <Styled.ButtonContainer className={"form-main-button-container"}>
            {hasSubmit && <Button id={`form-${id}-submit`} buttonType={"submit"} text={submitText ?? "Submit"} onClick={handleSubmit} className={"submit-form-btn"}/>}
            {hasEdit && <Button id={`form-${id}-edit`} buttonType={"button"} text={editText ?? "Edit"} onClick={handleEdit} className={"edit-form-btn"}/>}
            {hasCancel && <Button id={`form-${id}-cancel`} buttonType={"button"} text={cancelText ?? "Cancel"} onClick={handleCancel} className={"cancel-form-btn"}/>}                
            {hasDelete && <Button id={`form-${id}-delete`} buttonType={"button"} text={deleteText ?? "Delete"} onClick={handleDelete} className={"delete-form-btn"}/>}
        </Styled.ButtonContainer>
    )
};

FormActionButtons.propTypes = {
    id: PropTypes.string,
    hasSubmit: PropTypes.bool,
    submitText: PropTypes.string,
    handleSubmit: PropTypes.function,
    hasEdit: PropTypes.bool,
    editText: PropTypes.string,
    handleEdit: PropTypes.function,
    hasCancel: PropTypes.bool,
    cancelText: PropTypes.string,
    handleCancel: PropTypes.function,
    hasDelete: PropTypes.bool,
    deleteText: PropTypes.string,
    handleDelete: PropTypes.function
}

export default FormActionButtons;