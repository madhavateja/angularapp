import {PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'summary'
})

export class CustomPipe implements PipeTransform
{
    transform(value:String,args?:any)
    {
        if(!value)
        {
            return null;
        }
        else
        {
            return value.slice(0,10)+'...................'
        }
    }
}