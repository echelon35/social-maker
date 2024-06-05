import { EventEmitter } from "@angular/core";

export type IThreeDotsOptions = {
    label: string;
    srcIcon?: string;
    callbackFunction: () => void;
}