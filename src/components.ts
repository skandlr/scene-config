import { Component } from "./ecs";

export interface PoseComponent extends Component {
    position: {
        x: number;
        y: number;
        z : number;
    }
    orientation: {
        x: number;
        y: number;
        z: number;
        w: number;
    }
}

export interface DeviceDescriptionComponent extends Component {
    deviceSKU: string;
    make: string;
    model: string;
    serialNumber: string;
}

export interface SimComponent extends Component {
    deviceBundleUrl: string;
    parentSocket: string;
    childSocket: string;
}
