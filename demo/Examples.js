import React from "react";
import {render} from "react-dom";
import SplitPane from "../lib/SplitPane";


const SimpleNestedExample = () => {
    return (
        <SplitPane split="vertical" minSize={50} maxSize={300} defaultSize={100} className="primary">
            <div></div>
            <SplitPane split="horizontal">
                <div></div>
                <div></div>
            </SplitPane>
        </SplitPane>
    );
};

const BasicVerticalExample = () => {
    return (
        <SplitPane split="vertical">
            <div></div>
            <div></div>
        </SplitPane>
    );
};

const BasicHorizontalExample = () => {
    return (
        <SplitPane split="horizontal">
            <div></div>
            <div></div>
        </SplitPane>
    );
};

const PercentageVerticalExample = () => {
    return (
        <SplitPane defaultSize="50%">
            <div></div>
            <div></div>
        </SplitPane>
    );
};

const PercentageHorizontalExample = () => {
    return (
        <SplitPane defaultSize="50%" split="horizontal">
            <div></div>
            <div></div>
        </SplitPane>
    );
};

const VerticallyNestedInContainerExample = () => {
    return (
        <SplitPane defaultSize="40%" split="vertical">
            <div></div>
            <div></div>
        </SplitPane>
    );
};

const HorizontallyNestedInContainerExample = () => {
    return (
        <SplitPane defaultSize="40%" split="horizontal">
            <div></div>
            <div></div>
        </SplitPane>
    );
};

const MultipleVerticalExample = () => {
    return (
        <SplitPane split="vertical" defaultSize="33%">
            <div></div>
            <SplitPane split="vertical" defaultSize="50%">
                <div></div>
                <div></div>
            </SplitPane>
        </SplitPane>
    );
};

if (document.getElementById("simple-nested-example")) render(<SimpleNestedExample />, document.getElementById("simple-nested-example"));
if (document.getElementById("basic-vertical-example")) render(<BasicVerticalExample />, document.getElementById("basic-vertical-example"));
if (document.getElementById("basic-horizontal-example")) render(<BasicHorizontalExample />, document.getElementById("basic-horizontal-example"));
if (document.getElementById("percentage-vertical-example")) render(<PercentageVerticalExample />, document.getElementById("percentage-vertical-example"));
if (document.getElementById("percentage-horizontal-example")) render(<PercentageHorizontalExample />, document.getElementById("percentage-horizontal-example"));
if (document.getElementById("vertically-nested-in-container-example")) render(<VerticallyNestedInContainerExample />, document.getElementById("vertically-nested-in-container-example"));
if (document.getElementById("horizontally-nested-in-container-example")) render(<HorizontallyNestedInContainerExample />, document.getElementById("horizontally-nested-in-container-example"));
if (document.getElementById("multiple-vertical-example")) render(<MultipleVerticalExample />, document.getElementById("multiple-vertical-example"));
