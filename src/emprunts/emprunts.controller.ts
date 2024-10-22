import { Controller, Post, Body, Param } from '@nestjs/common';
import { EmpruntsService } from './emprunts.service';

@Controller('emprunts')
export class EmpruntsController {
    constructor(private readonly empruntsService: EmpruntsService) { }

    @Post(':livreId/:userId')
    emprunter(
        @Param('livreId') livreId: string,
        @Param('userId') userId: string,
        @Body() body,
    ) {
        return this.empruntsService.emprunter(+livreId, +userId);
    }

}