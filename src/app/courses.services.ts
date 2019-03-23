import { Injectable } from '@angular/core';


@Injectable({
    providedIn:'root'
})


export class CoursesService{
    getCourses()
    {
        return["java","python","j2ee","php","python"]
    }
}