//% color="#006400" weight=20 icon="\uf1b9"
namespace TuoYuCar {


    export enum IICState {
        //% blockId="IIC_ultrasonic" block="ultrasonic"
        IIC_ultrasonic = 1,
        //% blockId="IIC_Red" block="Red"
        IIC_Red = 2,
        //% blockId="IIC_Ming" block="Ming"
        IIC_Ming = 3,
        //% blockId="IIC_Color" block="Color"
        IIC_Color = 4,
        //% blockId="IIC_Voice" block="Voice"
        IIC_Voice = 5,
        //% blockId="IIC_Display" block="Display"
        IIC_Display = 6
    }
    export enum ultrasonicState{
        //% blockId="OFF" block="OFF"
        Off = 0,
        //% blockId="Open" block="Open"
        Open=1
    }

    function IICWrite(value:number,value1:number) {
        
        pins.i2cWriteNumber(value, value1, NumberFormat.UInt8LE);
    }
    /**
     * *****************************************************************
     * @param index
     */

    //% blockId=TuoYuCar_Chao_Sheng_Bo block="超声波|%index"
    //% weight=101
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Chao_Sheng_Bo(index: ultrasonicState) {
        
        switch (index) {
            case ultrasonicState.Off: IICWrite(1, 1);
            case ultrasonicState.Open: IICWrite(1, 2);
        }
    }

    //% blockId=TuoYuCar_Yan_She_Chuan_Gan_Qi block="Yan_She_Chuan_Gan_Qi|%index"
    //% weight=99
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Yan_She_Chuan_Gan_Qi(index:ultrasonicState) {
        switch (index) {
            case ultrasonicState.Off: IICWrite(2, 1);
            case ultrasonicState.Open: IICWrite(2, 2);
        }
    }

    //% blockId=TuoYuCar_Sheng_Ying_Chuan_Gan_Qi block="Sheng_Ying_Chuan_Gan_Qi|%index"
    //% weight=97
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Sheng_Ying_Chuan_Gan_Qi(index:ultrasonicState) {
        switch (index) {
            case ultrasonicState.Off: IICWrite(3, 1);
            case ultrasonicState.Open: IICWrite(3, 2);
        }
    }

    //% blockId=TuoYuCar_OLED block="OLED|%index"
    //% weight=97
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function OLED(index:ultrasonicState) {
        switch (index) {
            case ultrasonicState.Off: IICWrite(4, 1);
            case ultrasonicState.Open: IICWrite(4, 2);
        }
    }
}
