import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campaign } from './campaign.entity';
import { Repository } from 'typeorm';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign)
    private readonly campaignRepository: Repository<Campaign>,
  ) {}

  async create(createDto: CreateCampaignDto) {
    const data = this.campaignRepository.create({
      ...createDto,
      collected: 0,
      progress: 0,
    });

    return this.campaignRepository.save(data);
  }

  async findAll() {
    return this.campaignRepository.find();
  }

  async findOne(id: number) {
    const data = await this.campaignRepository.findOneBy({ id });

    if (!data) {
      throw new NotFoundException('Campaign tidak ditemukan');
    }

    return data;
  }

  async update(id: number, updateDto: UpdateCampaignDto) {
    const campaign = await this.findOne(id);

    Object.assign(campaign, updateDto);

    return this.campaignRepository.save(campaign);
  }

  async remove(id: number) {
    const campaign = await this.findOne(id);
    return this.campaignRepository.remove(campaign);
  }
}