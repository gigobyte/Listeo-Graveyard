//Libraries
import React from 'react'
import { connect } from 'react-redux'
//Components
import { Row, Col } from 'reactstrap'
import TextField from 'material-ui/TextField'
import ChipInput from 'material-ui-chip-input'
import TextFieldLabel from '~/components/shared/TextFieldLabel'
import NewPlaylistThumbnailDropzone from '~/components/views/NewPlaylist/NewPlaylistThumbnailDropzone'
import Toggle from 'material-ui/Toggle'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import { Step, Stepper, StepLabel } from 'material-ui/Stepper'
//Styles and Media
import style from '~/styles/components/NewPlaylistCreateForm.scss'
import { textFieldFull, primaryButton } from '~/styles/shared.scss'
//Store
import store from '~/store'
import * as actions from '~/store/modules/newPlaylistForm'

@connect((store) => ({
    form: store.newPlaylistForm
}))
class NewPlaylistCreateForm extends React.Component {
    handleTextFieldChange = (field) => (event) => {
        store.dispatch(actions.updateField({field, value: event.target.value}))
    }

    handleToggleChange = (field) => (event, value) => {
        store.dispatch(actions.updateField({field, value}))
    }

    handleTagAdding = (tag) => {
        store.dispatch(actions.addTag(tag))
    }

    handleTagRemoving = (tag) => {
        store.dispatch(actions.removeTag(tag))
    }

    handleFormReset = () => {
        store.dispatch(actions.reset())
    }

    handleNextStep = () => {
        store.dispatch(actions.nextStep())
    }

    handlePreviousStep = () => {
        store.dispatch(actions.previousStep())
    }

    handlePlaylistCreate = () => {
        if(!this.props.form.errors.title) {
            store.dispatch(actions.createPlaylist({...this.props.form.values}))
        }
    }

    render() {
        const { values } = this.props.form

        function getStepTitle(stepIndex) {
            if(stepIndex === 0) {
                return 'Upload a thumbnail (Optional)'
            }
        }

        return (
            <Paper style={{padding: 20}}>
                <p class={style.stepTitle}>{getStepTitle(values.step)}</p>

                {values.step === 0 &&
                    <NewPlaylistThumbnailDropzone />
                }

                <Stepper activeStep={values.step} style={{paddingTop: 20, paddingBottom: 10}}>
                    <Step>
                        <StepLabel>Thumbnail</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Details</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Final touches</StepLabel>
                    </Step>
                </Stepper>
                <Row>
                    <Col md={{size: 4, offset: 4}}>
                        <FlatButton label="Back" onClick={this.handlePreviousStep} hoverColor="transparent" />
                        <RaisedButton class={primaryButton} label="Next" primary onClick={this.handleNextStep} />
                    </Col>
                </Row>
            </Paper>
        )
    }
}

export default NewPlaylistCreateForm
