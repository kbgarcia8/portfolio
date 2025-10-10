import React from "react";
import PropTypes from "prop-types";
import Button from "src/components/atoms/Button";
import Input from "src/components/atoms/Input"
import Label from "src/components/atoms/Label"
import LabeledInput from "components/molecules/LabeledInput";
import NestedEditableOption from "components/molecules/NestedEditableOption";
import FormActionButtons from "components/molecules/FormActionButtons";
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
                                <LabeledInput
                                    name={fieldset.legend}
                                    checked={!!input?.checked}
                                    id={input?.id ?? `${fieldset.legend}-input`}
                                    label={input.label}
                                    additionalInfo={input.additionalInfo}
                                    direction={input.direction}
                                    icon={input.icon} //svg only
                                    labelClass={labelClassName}
                                    placeholder={input?.placeholder}
                                    onchange={input.onchange}
                                    value={input.value}
                                    required={!!input.required}
                                    dataAttributes={input.dataAttributes}
                                    inputClass={inputClassName}
                                    ref={input?.ref}
                                    disabled={!!input?.disabled}
                                    pattern={input?.pattern}
                                    rows={input?.rows}
                                    cols={input?.cols}
                                    isEditable={!!input?.editable}
                                    editIcon={input?.editIcon}
                                    onClickEdit={input?.onclickedit}
                                    deleteIcon={input?.deleteicon}
                                    onClickDelete={input?.onclickdelete}
                                    idx={inputIndex}
                                />
                                {/*For editable data e.g. address entry, education entry*/}
                                {(input.editable && input.editing) && <NestedEditableOption
                                    legend={`${fieldset.legend} ${inputIndex+1}`}
                                    idx={inputIndex}
                                    editableInformation={input?.editableInformation}
                                    onchangeOfEditableOption={handleEditableInputEntryChange}
                                    onClickSaveEdit={input?.onclicksave}
                                    onClickCancelEdit={input?.onclickcancel}
                                    onClickDeleteEntry={input?.onclickdelete}
                                />}
                                </React.Fragment>
                            ))
                            : (fieldset.expandable ? <styled.FieldsetNoEntryMessage>{`No entry yet on ${fieldset.legend}. Click "+" button to add entry.`}</styled.FieldsetNoEntryMessage> : "")
                            }
                        </styled.FormFieldset>
                        {fieldset.expandable && 
                            <styled.ButtonContainer className={"add-input-button-space"}>
                                <Button id={`expand-${fieldset.legend}-inputs`} buttonType={"button"} text={"+"} onClick={handleAddingInputEntry} className={`add-input-entry`}/>
                            </styled.ButtonContainer>
                        }
                    </styled.FieldsetWrapper>
                ))
                : <styled.FieldsetWrapper $fieldsetHeight={fieldsetHeight}>
                    <styled.FormFieldset id={`${id}-form-fieldset`}>
                        {legendText && <styled.FormLegend>{legendText}</styled.FormLegend>}
                        {formInputs.length !== 0
                        ? formInputs.map((input, inputIndex) => (
                            <React.Fragment key={`form-${id}-${inputIndex}`}>
                                <LabeledInput
                                    name={legendText}
                                    checked={!!input?.checked}
                                    id={input?.id ?? `${legendText}-input`}
                                    label={input.label}
                                    additionalInfo={input.additionalInfo}
                                    direction={input.direction}
                                    icon={input.icon} //svg only
                                    labelClass={labelClassName}
                                    placeholder={input?.placeholder}
                                    onchange={input.onchange}
                                    value={input.value}
                                    required={!!input.required}
                                    dataAttributes={input.dataAttributes}
                                    inputClass={inputClassName}
                                    ref={input?.ref}
                                    disabled={!!input?.disabled}
                                    pattern={input?.pattern}
                                    rows={input?.rows}
                                    cols={input?.cols}
                                    isEditable={!!input?.editable}
                                    editIcon={input?.editIcon}
                                    onClickEdit={input?.onclickedit}
                                    deleteIcon={input?.deleteicon}
                                    onClickDelete={input?.onclickdelete}
                                    idx={inputIndex}
                                />
                                {/*For editable data e.g. address entry, education entry*/}
                                {(input.editable && input.editing) && <NestedEditableOption
                                    legend={`${legendText} ${inputIndex+1}`}
                                    idx={inputIndex}
                                    editableInformation={input?.editableInformation}
                                    onchangeOfEditableOption={handleEditableInputEntryChange}
                                    onClickSaveEdit={input?.onclicksave}
                                    onClickCancelEdit={input?.onclickcancel}
                                    onClickDeleteEntry={input?.onclickdelete}
                                />}
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
            <FormActionButtons
                hasSubmit={hasSubmit}
                submitText={submitText}
                handleSubmit={handleSubmit}
                hasEdit={hasEdit}
                editText={editText}
                handleEdit={handleEdit}
                hasCancel={hasCancel}
                cancelText={cancelText}
                handleCancel={handleCancel}
                hasDelete={hasDelete}
                deleteText={deleteText}
                handleDelete={handleDelete}
            />
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