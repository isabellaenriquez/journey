import React, { useState, useEffect, useRef } from 'react';
import Popup from 'reactjs-popup';
import { exercises } from './exercises.json';
import './Exercises.css';

function Exercises(props) {
    const [stepDuration, setStepDuration] = useState(0);
    const [currentStep, setCurrentStep] = useState("");
    const [steps, setSteps] = useState([]);
    const [open, setOpen] = useState(false);

    var step = useRef(0);

    useEffect(() => {
    }, [])

    useEffect(() => {
        setOpen(props.open);
        if (props.open === true) {
            var exercise = exercises[Math.floor(Math.random() * exercises.length)];
            setSteps(exercise)
            setStepDuration(exercise[0].duration);
            setCurrentStep(exercise[0].step);
            step.current = 0;
        }
    }, [props.open])

    useEffect(() => {
        if (open) {
            var timer = setInterval(() => {
                console.log("test");
                if (stepDuration - 1 === -1) {
                    if (step.current !== steps.length - 1) {
                        step.current = step.current + 1;
                        setCurrentStep(steps[step.current].step);
                        setStepDuration(steps[step.current].duration);
                    } else {
                        setOpen(false);
                        clearInterval(timer);
                    }
                } else {
                    setStepDuration(stepDuration - 1);
                }
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [steps, currentStep, stepDuration, open])

    return (
        <Popup open={open} onClose={props.onClose} modal>
            <div className="modal" style={{backgroundColor: "#8a5d8c"}}>
                <div className="header">Exercises</div>
                <p className="content">
                    {currentStep}
                </p>
                <h3 className="popup-timer">{stepDuration}</h3>
            </div>
        </Popup>
    )
}

export default Exercises;
