
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { TeacherEntity } from './entities/teacherentity';

import { TeacherProxy } from './teacherproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/studentsystem/basicdata/v1.0/teacherdetail_frm',
    entityType: TeacherEntity
})
export class TeacherRepository extends BefRepository<TeacherEntity> {
    public name = 'TeacherRepository';

    public proxy: TeacherProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(TeacherProxy, null);
    }
}