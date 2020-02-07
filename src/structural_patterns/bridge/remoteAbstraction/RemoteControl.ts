import { Device } from "../interfaces/interfaceDevice";

export class RemoteControl {
  private device: Device;
  constructor(device: Device) {
    this.device = device;
  }

  public toggleState(): void {
    this.device.isEnabled() ? this.device.disable() : this.device.enable();
  }

  public volumeUp(): void {
      this.device.increaseVolume()
  }

  public volumeDown(): void {
      this.device.decreaseVolume()
  }
  public getVolume(): number {
    return this.device.getVolume();
  }
}
