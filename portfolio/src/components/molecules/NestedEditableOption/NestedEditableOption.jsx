import React from "react";
import * as styled from './NestedEditableOption.styles.js';
import Input from "components/atoms/Input";
import PropTypes from 'prop-types';

const NestedEditableOption = ({
    legend,
    idx,
    editableInformation,
    onchangeOfEditableOption,
    onClickSaveEdit,
    onClickCancelEdit,
    onClickDeleteEntry
}) => {
    return (
        <styled.FormFieldset className={"editable-selection-fieldset"}>
            <styled.FormLegend>{`${legend} ${idx + 1}`}</styled.FormLegend>
            {editableInformation.map((information, informationidx) => (
                <styled.LabelAndInputContainer key={`${information.name}-${informationidx}`} className={"editable-selection-container"}>
                    <Input
                        id={`editable-selection-${informationidx}`}
                        placeholderText={information['name'].charAt(0).toUpperCase() + information['name'].slice(1)}
                        onChange={onchangeOfEditableOption}
                        value={information['info']}
                        type={information['type']}
                        isRequired={true}
                        className={"editable-selection"}                                       
                        dataAttributes={{
                            "data-index": informationidx, //should be idx to correspond to radio button index and not with input increment
                            "data-key": information['info']
                        }}
                    />
                </styled.LabelAndInputContainer>
            ))}                                            
            <styled.ButtonContainer className={"editable-selection-button-space"}>
                <Button id={`editable-selection-${idx}-submit`} buttonType={"submit"} text={"Save"} onClick={onClickSaveEdit} className={"editable-selection-btn"} dataAttributes={{"data-index": idx}}/>
                <Button id={`editable-selection-${idx}-cancel`} buttonType={"button"} text={"Cancel"} onClick={onClickCancelEdit} className={"editable-selection-btn"} dataAttributes={{"data-index": idx}}/>
                <Button id={`editable-selection-${idx}-delete`} buttonType={"button"} text={"Delete"} onClick={onClickDeleteEntry} className={"editable-selection-btn"} dataAttributes={{"data-index": idx}}/>
            </styled.ButtonContainer>
        </styled.FormFieldset>
    )
}

NestedEditableOption.propTypes = {
    legend: PropTypes.string,
    idx: PropTypes.number,
    editableInformation: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            info: PropTypes.string,
            type: PropTypes.string

        })
    ),
    onchangeOfEditableOption: PropTypes.function,
    onClickSaveEdit: PropTypes.function,
    onClickCancelEdit: PropTypes.function,
    onClickDeleteEntry: PropTypes.function
}

export default NestedEditableOption;