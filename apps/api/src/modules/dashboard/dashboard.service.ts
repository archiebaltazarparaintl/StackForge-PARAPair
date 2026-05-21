import { Injectable } from '@nestjs/common';
          userId,
        },
      });

    if (!business) {
      return {
        listings: 0,
        applicants: 0,
        views: 0,
        revenue: 0,
      };
    }

    const listings =
      await this.prisma.listing.count({
        where: {
          businessId: business.id,
        },
      });

    const applicants =
      await this.prisma.listingApplication.count({
        where: {
          listing: {
            businessId: business.id,
          },
        },
      });

    return {
      listings,
      applicants,
      views: 0,
      revenue: 0,
    };
  }

  async getPersonalStats(
    userId: string,
  ) {
    const matches =
      await this.prisma.match.count({
        where: {
          OR: [
            {
              userOneId: userId,
            },
            {
              userTwoId: userId,
            },
          ],
        },
      });

    const notifications =
      await this.prisma.notification.count({
        where: {
          userId,
          isRead: false,
        },
      });

    const messages =
      await this.prisma.message.count({
        where: {
          conversation: {
            match: {
              OR: [
                {
                  userOneId: userId,
                },
                {
                  userTwoId: userId,
                },
              ],
            },
          },
        },
      });

    return {
      matches,
      notifications,
      messages,
      saved: 0,
    };
  }
}