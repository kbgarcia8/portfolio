import React from "react";
import PropTypes from "prop-types";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input"
import Label from "components/atoms/Label"
import LabeledInput from "components/molecules/LabeledInput";
import NestedEditableOption from "components/molecules/NestedEditableOption";
import FormActionButtons from "components/molecules/FormActionButtons";
import * as Styled from "./Form.styles.js";

const Form = ({
    fieldsets = null, //* if a form has differrent fieldsets
    legendText, //* if form has no fieldsets, depends if you have fieldset for solo form
    isExpandable = false, //* if form has no fieldsets this is default to false - to add inputs
    id,
    formInputs, //* object that contains the input fields information to make it reusable
    labelAndInputContainerClass,
    labelClassName,
    inputClassName,
    handleEditableInputEntryChange, //* handles change on editable inputs
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
    children //* if there are nodes to be inserted after submit/edit/cancel buttons usually in login or signup forms
}) => {
    return (
        <Styled.Form id={`${id}-form`} className={className} onSubmit={handleSubmit}>
            {fieldsets !== null
                ? fieldsets.map((fieldset, fieldsetIdx) => (
                    <Styled.FieldsetWrapper key={`${fieldset.legend}-${fieldsetIdx}`} >
                        <Styled.FormFieldset id={`${id}-form-fieldset-${fieldsetIdx}`} className="form-fieldset">
                            {fieldset.legend && <Styled.FormLegend>{fieldset.legend}</Styled.FormLegend>}
                            {fieldset['inputs'].length !== 0
                            ? fieldset['inputs'].map((input, inputIndex) => (
                                <React.Fragment key={`form-${id}-${inputIndex}`}>
                                <LabeledInput
                                    className={`${labelAndInputContainerClass} ${input?.uniqueClass}`}
                                    name={fieldset.legend}
                                    type={input.type ?? 'text'}
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
                                //* For editable data e.g. address entry, education entry
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
                            : (fieldset.expandable ? <Styled.FieldsetNoEntryMessage>{`No entry yet on ${fieldset.legend}. Click "+" button to add entry.`}</Styled.FieldsetNoEntryMessage> : "")
                            }
                        </Styled.FormFieldset>
                        {fieldset.expandable && 
                            <Styled.ButtonContainer className={"add-input-button-space"}>
                                <Button id={`expand-${fieldset.legend}-inputs`} buttonType={"button"} text={"+"} onClick={handleAddingInputEntry} className={`add-input-entry`}/>
                            </Styled.ButtonContainer>
                        }
                    </Styled.FieldsetWrapper>
                ))
                : <Styled.FieldsetWrapper>
                    <Styled.FormFieldset id={`${id}-form-fieldset`} className="form-fieldset">
                        {legendText && <Styled.FormLegend>{legendText}</Styled.FormLegend>}
                        {formInputs.length !== 0
                        ? formInputs.map((input, inputIndex) => (
                            <React.Fragment key={`form-${id}-${inputIndex}`}>
                                <LabeledInput
                                    className={`${labelAndInputContainerClass} ${input?.uniqueClass}`}
                                    name={legendText}
                                    type={input.type ?? 'text'}
                                    checked={!!input?.checked}
                                    id={input?.id ?? `${legendText}-input`}
                                    label={input.label}
                                    additionalInfo={input.additionalInfo}
                                    direction={input.direction}
                                    icon={input.icon} //* svg only
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
                        : (isExpandable ? (<Styled.FieldsetNoEntryMessage>{`No entry yet on ${legendText}. Please click "+" button to add`}</Styled.FieldsetNoEntryMessage>) : "")
                        }
                    </Styled.FormFieldset>
                    {isExpandable && <Styled.ButtonContainer className={"add-input-button-space"}>
                        <Button id={`expand-${legendText}-inputs`} buttonType={"button"} text={"+"} onClick={handleAddingInputEntry} className={`add-input-entry`}/>
                    </Styled.ButtonContainer>}
                </Styled.FieldsetWrapper>
            }
            <FormActionButtons
                id={id}
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
            <Styled.ChildrenContainer className={"children-container"}>
                {children}
            </Styled.ChildrenContainer>
        </Styled.Form>
    );
}

//* Props Validation
const validateEditableData = (props, propName, componentName) => {
    const inputs = props.fieldsets?.flatMap(fieldset => fieldset.inputs) || [];

    for (const input of inputs) {
        if (input.editable) {
            // ? check if there is an editing property in input object if it is editable
            if (
                typeof input !== "object" ||
                !input.hasOwnProperty("editing") ||
                typeof input.editing !== "boolean"
            ) {
                return new Error(
                    `Invalid prop data in ${componentName}. When editable is true, data must have an editing key with a boolean value.`
                );
            }

            // ! Ensure required editable-related props are present
            const requiredProps = ["onclickedit", "editicon", "onclickdelete", "deleteicon", "onclicksave", "onclickcancel"];
            for (const key of requiredProps) {
                if (typeof input[key] === "undefined") {
                    return new Error(
                        `Invalid prop ${key} in ${componentName}. This prop is required when editable is true.`
                    );
                }
            }
        }

        // ? If input type is a radio must have a checked porperty
        if (input.type === "radio") {
            if (
                typeof input !== "object" ||
                !input.hasOwnProperty("checked") ||
                typeof input.checked !== "boolean"
            ) {
                return new Error(
                    `Invalid prop data in ${componentName}. When type is "radio", data must have a checked key with a boolean value.`
                );
            }
        }
    }
    return null;
};
// ! PropTypes by default are considered function that takes argument as follows: function/PropTypes (props, propName, componentName, location, propFullName)
const inputShape = PropTypes.arrayOf(
    PropTypes.shape({
    uniqueClass: PropTypes.string,
    labelText: PropTypes.string,
    additionalInfo: PropTypes.string,
    direction: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    editable: PropTypes.bool, 
    value: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    pattern: PropTypes.string,
    editableInformation: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            info: PropTypes.string,
            type: PropTypes.string

        })
    ),
    dataAttributes: PropTypes.object,
    onchange: PropTypes.func,
    // ? Props below are required when input is editable
    onClickEdit: PropTypes.func,
    editIcon: PropTypes.element,
    onClickDelete: PropTypes.func,
    deleteIcon: PropTypes.element,
    onClickSave: PropTypes.func,
    onClickCancel: PropTypes.func
    })
)

Form.propTypes = {
    fieldsets: (props, propName, componentName) => {
        // ? PropTypes.checkPropTypes(propTypes, props, propName, componentName, location, propFullName);
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
    isExpandable: PropTypes.bool,
    id: PropTypes.string,
    formInputs: inputShape,
    labelAndInputContainerClass: PropTypes.string,
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