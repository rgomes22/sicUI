import { Obj3D } from '../interfaces/Obj3D';
import { Colorable } from '../interfaces/Colorable';
import { Color } from 'three';

//0 - No Color
//1 - Green (Allowed to Attach)
//2 - Red (Unable to Attach) 
//3 - Blue (Remove)
export default function changeColor(object: Colorable, colorSetting: number) {
        if (colorSetting == 0) {
            object.changeColor(new Color(0xffffff));
        } else if (colorSetting == 1) {
            object.changeColor(new Color(0xff00));

        } else if (colorSetting == 2) {
            object.changeColor(new Color(0xff0000));

        } else {
            object.changeColor(new Color(0xff));
        }
    }
