interface DeviceInterface{
    on(): void
    off(): void
}

export interface PhoneInterface extends DeviceInterface{
    call(): void
}

export interface DesktopInterface extends DeviceInterface{
    play(): void
}