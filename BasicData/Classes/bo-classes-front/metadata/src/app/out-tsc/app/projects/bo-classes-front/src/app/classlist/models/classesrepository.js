import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { ClassesEntity } from './entities/classesentity';
import { ClassesProxy } from './classesproxy';
var ClassesRepository = /** @class */ (function (_super) {
    tslib_1.__extends(ClassesRepository, _super);
    function ClassesRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'ClassesRepository';
        _this.paginationInfo = {
            ClassesEntity: {
                pageSize: 20,
            }
        };
        _this.proxy = injector.get(ClassesProxy, null);
        return _this;
    }
    ClassesRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/studentsystem/basicdata/v1.0/classlist_frm',
            entityType: ClassesEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], ClassesRepository);
    return ClassesRepository;
}(BefRepository));
export { ClassesRepository };
