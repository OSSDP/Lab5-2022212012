
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { DataGridService as DataGridService1 } from '@farris/command-services';
import { ListDataService as ListDataService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'RemoveRows1'
})
export class RemoveRows1Handler extends CommandHandler {
    constructor(
        public _DataGridService1: DataGridService1,
        public _ListDataService1: ListDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('removeRows', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/ids}', 
                '', 
                '{COMMAND~/params/successMsg}'
                    ];
            return this.invoke(this._ListDataService1, 'removeRows', args, context);
        });

        this.addTask('uncheckDeletedRows', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/ids}'
                    ];
            return this.invoke(this._DataGridService1, 'uncheckDeletedRows', args, context);
        });

        this.addTask('refreshAfterRemoving', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/refreshCommandName}', 
                '{COMMAND~/params/refreshCommandFrameId}'
                    ];
            return this.invoke(this._ListDataService1, 'refreshAfterRemoving', args, context);
        });

        this.addLink('removeRows', 'uncheckDeletedRows', `1==1`);
        this.addLink('uncheckDeletedRows', 'refreshAfterRemoving', `1==1`);
    }
}