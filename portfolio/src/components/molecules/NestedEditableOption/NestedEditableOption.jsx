import React from "react";
import * as Styled from './NestedEditableOption.styles.js';
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
        <Styled.FormFieldset className={"editable-selection-fieldset"}>
            <Styled.FormLegend>{`${legend} ${idx + 1}`}</Styled.FormLegend>
            {editableInformation.map((information, informationidx) => (
                <Styled.LabelAndInputContainer key={`${information.name}-${informationidx}`} className={"editable-selection-container"}>
                    <Input
                        id={`editable-selection-${informationidx}`}
                        placeholderText={information['name'].charAt(0).toUpperCase() + information['name'].slice(1)}
                        onChange={onchangeOfEditableOption}
                        value={information['info']}
                        type={information['type']}
                        isRequired={true}
                        className={"editable-selection"}                                       
                        dataAttributes={{
                            "data-index": informationidx, //* should be idx to correspond to radio button index and not with input increment
                            "data-key": information['info']
                        }}
                    />
                </Styled.LabelAndInputContainer>
            ))}                                            
            <Styled.ButtonContainer className={"editable-selection-button-space"}>
                <Button id={`editable-selection-${idx}-submit`} buttonType={"submit"} text={"Save"} onClick={onClickSaveEdit} className={"editable-selection-btn"} dataAttributes={{"data-index": idx}}/>
                <Button id={`editable-selection-${idx}-cancel`} buttonType={"button"} text={"Cancel"} onClick={onClickCancelEdit} className={"editable-selection-btn"} dataAttributes={{"data-index": idx}}/>
                <Button id={`editable-selection-${idx}-delete`} buttonType={"button"} text={"Delete"} onClick={onClickDeleteEntry} className={"editable-selection-btn"} dataAttributes={{"data-index": idx}}/>
            </Styled.ButtonContainer>
        </Styled.FormFieldset>
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