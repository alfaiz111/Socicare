import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CampaignService } from './donor.service';

@Controller('campaign')
export class CampaignController {
  constructor(private service: CampaignService) {}

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.service.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
