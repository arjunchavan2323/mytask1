import { AbstractControl, ValidationErrors } from "@angular/forms";

export class validatorename{
    public static validatorevalue(control:AbstractControl):ValidationErrors|null{
        let val=+control.value as number;
        if(!val){
            return null
        }if(val > 100){
            return {
                iserorless:`these are the length are 100 then`
            }
        }else{
            return null
        }
    }
}