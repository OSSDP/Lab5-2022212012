
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { CourseEntity } from './entities/courseentity';

import { CourseProxy } from './courseproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/studentsystem/basicdata/v1.0/coursedetail_frm',
    entityType: CourseEntity
})
export class CourseRepository extends BefRepository<CourseEntity> {
    public name = 'CourseRepository';

    public proxy: CourseProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(CourseProxy, null);
    }
}