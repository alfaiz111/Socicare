import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getSummary() {
    const totalDonasi =
      await this.prisma.donation.aggregate({
        _sum: {
          amount: true,
        },
      });

    const totalPenyaluran =
      await this.prisma.distribution.aggregate({
        _sum: {
          amount: true,
        },
      });

    const jumlahDonatur =
      await this.prisma.donor.count();

    return {
      periode: 'Semua Data',
      totalDonasi:
        totalDonasi._sum.amount || 0,
      totalPenyaluran:
        totalPenyaluran._sum.amount || 0,
      jumlahDonatur,
    };
  }
}