import React from "react";
import PropTypes from "prop-types";
import Button from "src/components/atoms/Button";
import Input from "src/components/atoms/Input"
import Label from "src/components/atoms/Label"
import * as styled from "./Form.styles.js";

const Form = ({
    fieldsets = null, // if a form has differrent fieldsets
    legendText, // if form has no fieldsets, depends if you have fieldset for solo form
    fieldsetHeight, // if form has no fieldsets this is required
    isExpandable = false, // if form has no fieldsets this is default to false - to add inputs
    id,
    formInputs, //object that contains the input fields information to make it reusable
    labelClassName,
    inputClassName,
    handleEditableInputEntryChange, //handles change on editable inputs
    handleAddingInputEntry,
    hasSubmit = false,
    hasCancel = false,
    hasDelete = false,
    hasEdit = false,
    submitText,
    handleSubmit,
    cancelText,
    handleCancel,
    deleteText,
    handleDelete,
    editText,
    handleEdit,
    className,
    children //if there are nodes to be inserted after submit/edit/cancel buttons usually in login or signup forms
}) => {
    {/*console.dir(paymentFieldSet, { depth: null });*/}
    return (
        <styled.Form id={`${id}-form`} className={className} onSubmit={handleSubmit}>
            {fieldsets !== null
                ? fieldsets.map((fieldset, fieldsetIdx) => (
                    <styled.FieldsetWrapper key={`${fieldset.legend}-${fieldsetIdx}`} $fieldsetHeight={fieldset.height}>
                        <styled.FormFieldset id={`${id}-form-fieldset-${fieldsetIdx}`}>
                            {fieldset.legend && <styled.FormLegend>{fieldset.legend}</styled.FormLegend>}
                            {field['inputs'].length !== 0
                            ? field['inputs'].map((input, inputIndex) => (
                                <React.Fragment key={`form-${id}-${inputIndex}`}>
                                <styled.LabelAndInputContainer className={`${fieldset.name}-label-input-container ${!!input?.checked ? "selected" : ""}`}>
                                    {input.type !== "radio" 
                                    ? 
                                    <>
                                    <Label htmlFor={input.id} textLabel={input.label} additionalInfo={input.additionalInfo} $labelDirection={input.direction} svg={input.icon} className={labelClassName} />
                                        <Input
                                            id={input.id}
                                            placeholderText={input.placeholder}
                                            onChange={input.onchange}
                                            value={input.value}
                                            type={input.type}
                                            isRequired={input.required}
                                            dataAttributes={input.dataAttributes}
                                            className={`${inputClassName || ""}`}
                                            ref={input.ref}
                                            checked={!!input?.checked}
                                            disabled={!!input?.disabled}
                                            pattern={input.pattern}
                                            rows={input.rows}
                                            cols={input.cols}
                                        /> 
                                        </>
                                        : <Label htmlFor={input.id} textLabel={input.label} addtionalInfo={input.additionalInfo} $labelDirection={input.direction} svg={input.image} className={labelClassName} />
                                    }
                                    {/* Below are for radio inputs acting selections */}
                                    {(input.editable && input.type ==="radio") &&
                                        <styled.EditableInputButtonContainer className={"input-edit-buttons"}>
                                            <Button id={`edit-radio-${input.id}-edit`} svg={input.editIcon} buttonType={"button"} onClick={input.onClickEdit} className={`edit-radio-${inputIndex}`} dataAttributes={input.dataAttributes}/>
                                            <Button id={`edit-radio-${input.id}-delete`} svg={input.deleteIcon} buttonType={"button"} onClick={input.onClickDelete} className={`delete-radio-${inputIndex}`} dataAttributes={input.dataAttributes}/>
                                        </styled.EditableInputButtonContainer>                                    
                                    }
                                </styled.LabelAndInputContainer>
                                {/* If radio inputs/selection is editable */}
                                {(input.editable && input.type ==="radio" && input['editing']) && 
                                        <styled.FormFieldset className={"radio-selection-fieldset"}>
                                            <styled.FormLegend>{`${fieldset.legend} ${inputIndex + 1}`}</styled.FormLegend>
                                            {/*These are editable data e.g. address entry, education entry */}
                                            {Object.keys(input['editableData']).map((keydata, keydataIndex) => (
                                                (keydata !== "checked" && keydata !== "editing") &&
                                                <styled.LabelAndInputContainer key={`${keydata}-${keydataIndex}`} className={"editable-input-container"}>
                                                    <Input
                                                        id={`editable-input-${keydataIndex}`}
                                                        placeholderText={keydata.charAt(0).toUpperCase() + keydata.slice(1)}
                                                        onChange={handleEditableInputEntryChange}
                                                        value={input['editableData'][keydata]}
                                                        type={"text"}
                                                        isRequired={true}
                                                        className={"editable-input"}                                                        
                                                        dataAttributes={{
                                                            "data-index": inputIndex, //should be inputIndex to correspond to radio button index and not with input increment
                                                            "data-key": keydata
                                                        }}
                                                    />
                                                </styled.LabelAndInputContainer>
                                            ))}                                            
                                            <styled.ButtonContainer className={"editable-input-button-space"}>
                                                <Button id={`editable-input-${inputIndex}-submit`} buttonType={"submit"} text={"Save"} onClick={input.onClickSave} className={"editable-input-btn"} dataAttributes={{"data-index": inputIndex}}/>
                                                <Button id={`editable-input-${inputIndex}-cancel`} buttonType={"button"} text={"Cancel"} onClick={input.onClickCancel} className={"editable-input-btn"} dataAttributes={{"data-index": inputIndex}}/>
                                                <Button id={`editable-input-${inputIndex}-delete`} buttonType={"button"} text={"Delete"} onClick={input.onClickDelete} className={"editable-input-btn"} dataAttributes={{"data-index": inputIndex}}/>
                                            </styled.ButtonContainer>
                                        </styled.FormFieldset>}
                                </React.Fragment>
                            ))
                            : (fieldset.expandable ? <styled.FieldsetNoEntryMessage>{`No entry yet on ${fieldset.legend}. Click "+" button to add entry.`}</styled.FieldsetNoEntryMessage> : "")
                            }
                        </styled.FormFieldset>
                        {fieldset.expandable && <styled.ButtonContainer className={"add-input-button-space"}>
                            <Button id={`expand-${fieldset.legend}-inputs`} buttonType={"button"} text={"+"} onClick={handleAddingInputEntry} className={`add-input-entry`}/>
                        </styled.ButtonContainer>}
                    </styled.FieldsetWrapper>
                ))
                : <styled.FieldsetWrapper $fieldsetHeight={fieldsetHeight}>
                    <styled.FormFieldset id={`${id}-form-fieldset`}>
                        {legendText && <styled.FormLegend>{legendText}</styled.FormLegend>}
                        {formInputs.length !== 0
                        ? formInputs.map((input, inputIndex) => (
                            <React.Fragment key={`form-${id}-${inputIndex}`}>
                            <styled.LabelAndInputContainer className={`label-input-container ${!!input?.checked ? "selected" : ""}`}>
                                {input.type !== "radio" && <Label htmlFor={input.id} textLabel={input.labelText} additionalInfo={input.additionalInfo} $labelDirection={input.direction} svg={input.svg} className={labelClassName} />}
                                    <Input
                                        id={input.id}
                                        placeholderText={input.placeholderText}
                                        onChange={input.mainOnChange}
                                        value={input.value}
                                        type={input.type}
                                        isRequired={input.isRequired}
                                        dataAttributes={input.dataAttributes}
                                        className={`${inputClassName || ""}`}
                                        ref={input.ref}
                                        checked={!!input?.checked}
                                        disabled={!!input?.disabled || !!input?.disabled}
                                        pattern={input.pattern}
                                        rows={input.rows}
                                        cols={input.cols}
                                    />
                                {input.type === "radio" && <Label htmlFor={input.id} textLabel={input.labelText} addtionalInfo={input.additionalInfo} $labelDirection={input.direction} svg={input.image} className={labelClassName} />}
                                {(input.editable && input.type ==="radio") &&
                                    <styled.EditableInputButtonContainer className={"input-edit-buttons"}>
                                        <Button id={`edit-radio-${input.id}-edit`} svg={input.editIcon} buttonType={"button"} onClick={input.onClickEdit} className={`edit-radio-${inputIndex}`} dataAttributes={input.dataAttributes}/>
                                        <Button id={`edit-radio-${input.id}-delete`} svg={input.deleteIcon} buttonType={"button"} onClick={input.onClickDelete} className={`delete-radio-${inputIndex}`} dataAttributes={input.dataAttributes}/>
                                    </styled.EditableInputButtonContainer>                                    
                                }
                            </styled.LabelAndInputContainer>
                            {(input.editable && input.type ==="radio" && input['editableData']['editing']) && 
                                    <styled.FormFieldset className={"editable-input-fieldset"}>
                                        <styled.FormLegend>{`${fieldset.legend} ${inputIndex + 1}`}</styled.FormLegend>
                                        {Object.keys(input['editableData']).map((keydata, keydataIndex) => (
                                            (keydata !== "checked" && keydata !== "editing") &&
                                            <styled.LabelAndInputContainer key={`${keydata}-${keydataIndex}`} className={"editable-input-container"}>
                                                <Input
                                                    id={`editable-input-${keydataIndex}`}
                                                    placeholderText={keydata.charAt(0).toUpperCase() + keydata.slice(1)}
                                                    onChange={handleEditableInputEntryChange}
                                                    value={input['editableData'][keydata]}
                                                    type={"text"}
                                                    isRequired={true}
                                                    className={"editable-input"}
                                                    dataAttributes={{
                                                        "data-index": inputIndex, //should be inputIndex to correspond to radio button index and not with input increment
                                                        "data-key": keydata
                                                    }}
                                                />
                                            </styled.LabelAndInputContainer>
                                        ))}                                            
                                        <styled.ButtonContainer className={"editable-input-button-space"}>
                                            <Button id={`editable-input-${inputIndex}-submit`} buttonType={"submit"} text={"Save"} onClick={input.onClickSave} className={"editable-input-btn"} dataAttributes={{"data-index": inputIndex}}/>
                                            <Button id={`editable-input-${inputIndex}-cancel`} buttonType={"button"} text={"Cancel"} onClick={input.onClickCancel} className={"editable-input-btn"} dataAttributes={{"data-index": inputIndex}}/>
                                            <Button id={`editable-input-${inputIndex}-delete`} buttonType={"button"} text={"Delete"} onClick={input.onClickDelete} className={"editable-input-btn"} dataAttributes={{"data-index": inputIndex}}/>
                                        </styled.ButtonContainer>
                                    </styled.FormFieldset>}
                            </React.Fragment>
                        ))
                        : (isExpandable ? (<styled.FieldsetNoEntryMessage>{`No entry yet on ${legendText}. Please click "+" button to add`}</styled.FieldsetNoEntryMessage>) : "")
                        }
                    </styled.FormFieldset>
                    {isExpandable && <styled.ButtonContainer className={"add-input-button-space"}>
                        <Button id={`expand-${legendText}-inputs`} buttonType={"button"} text={"+"} onClick={handleAddingInputEntry} className={`add-input-entry`}/>
                    </styled.ButtonContainer>}
                </styled.FieldsetWrapper>
            }
            <styled.ButtonContainer className={"form-main-button-container"}>
                {hasSubmit && <Button id={`form-${id}-submit`} buttonType={"submit"} text={submitText ? submitText : "Submit"} onClick={handleSubmit} className={"submit-form-btn"}/>}
                {hasEdit && <Button id={`form-${id}-edit`} buttonType={"button"} text={editText ? editText : "Edit"} onClick={handleEdit} className={"edit-form-btn"}/>}
                {hasCancel && <Button id={`form-${id}-cancel`} buttonType={"button"} text={cancelText ? cancelText : "Cancel"} onClick={handleCancel} className={"cancel-form-btn"}/>}                
                {hasDelete && <Button id={`form-${id}-delete`} buttonType={"button"} text={deleteText ? deleteText : "Delete"} onClick={handleDelete} className={"delete-form-btn"}/>}
            </styled.ButtonContainer>
            <styled.ChildrenContainer className={"children-container"}>
                {children}
            </styled.ChildrenContainer>
        </styled.Form>
    );
}

//Props Validation
const validateEditableData = (props, propName, componentName) => {
    const inputs = props.fieldsets?.flatMap(fieldset => fieldset.inputs) || [];

    for (const input of inputs) {
        if (input.editable) {
            if (
                typeof input !== "object" ||
                !input.hasOwnProperty("editing") ||
                typeof input.editing !== "boolean"
            ) {
                return new Error(
                    `Invalid prop \`data\` in \`${componentName}\`. When \`editable\` is true, \`data\` must have an \`editing\` key with a boolean value.`
                );
            }

            // Ensure required editable-related props are present
            const requiredProps = ["onClickEdit", "editIcon", "onClickDelete", "deleteIcon", "onClickSave", "onClickCancel"];
            for (const key of requiredProps) {
                if (typeof input[key] === "undefined") {
                    return new Error(
                        `Invalid prop \`${key}\` in \`${componentName}\`. This prop is required when \`editable\` is true.`
                    );
                }
            }
        }

        // Validation for radio inputs
        if (input.type === "radio") {
            if (
                typeof input !== "object" ||
                !input.hasOwnProperty("checked") ||
                typeof input.checked !== "boolean"
            ) {
                return new Error(
                    `Invalid prop \`data\` in \`${componentName}\`. When \`type\` is "radio", \`data\` must have a \`checked\` key with a boolean value.`
                );
            }
        }
    }
    return null;
};
/*
    PropTypes by default are considered function that takes argument as follows: function/PropTypes (props, propName, componentName, location, propFullName)
*/
const inputShape = PropTypes.arrayOf(
    PropTypes.shape({
    labelText: PropTypes.string,
    additionalInfo: PropTypes.string,
    labelDirection: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholderText: PropTypes.string,
    editable: PropTypes.bool, 
    mainOnChange: PropTypes.func, //handles change of main inputs (non-editable)
    //Make all props below required when input is editable
    onClickEdit: PropTypes.func,
    editIcon: PropTypes.element,
    onClickDelete: PropTypes.func,
    deleteIcon: PropTypes.element,
    onClickSave: PropTypes.func,
    onClickCancel: PropTypes.func,
    //Make all props above required when input is editable
    type: PropTypes.string,
    isRequired: PropTypes.bool,
    //disabled are up-ed here from data in inputShape of formInputs since it is applicable even if input is not radio which is usually the only type that requires a data attribute
    disabled: PropTypes.bool,
    pattern: PropTypes.string,
    data: PropTypes.object, //when there is an object data that needs to be incorporated in the input when clicked. Usually needed for radio inputs
    dataAttributes: PropTypes.object,
    })
)

Form.propTypes = {
    fieldsets: (props, propName, componentName) => {
        //PropTypes.checkPropTypes(propTypes, props, propName, componentName, location, propFullName);
        const propTypesError = PropTypes.checkPropTypes(
            {
                fieldsets: PropTypes.arrayOf(
                    PropTypes.shape({
                        legend: PropTypes.string.isRequired,
                        inputs: inputShape,
                        height: PropTypes.string,
                        expandable: PropTypes.bool,
                    })
                ),
            },
            props,
            propName,
            componentName,
            "prop",
            "Form"
        );

        if (propTypesError) {
            return propTypesError;
        }

        return validateEditableData(props, propName, componentName);
    },
    legendText: PropTypes.string,
    fieldsetHeight: PropTypes.string, 
    isExpandable: PropTypes.bool,
    id: PropTypes.string,
    formInputs: inputShape,    
    labelClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    handleEditableInputEntryChange: PropTypes.func,
    handleAddingInputEntry: PropTypes.func,
    hasSubmit: PropTypes.bool,
    hasCancel: PropTypes.bool,
    hasDelete: PropTypes.bool,
    hasEdit: PropTypes.bool,
    submitText: PropTypes.string,
    handleSubmit: PropTypes.func,
    cancelText: PropTypes.string,
    handleCancel: PropTypes.func,
    deleteText: PropTypes.string,
    handleDelete: PropTypes.func,
    editText: PropTypes.string,
    handleEdit: PropTypes.func,
};


export default Form;