import { Injectable } from '@nestjs/common';
import { EnvironmentRepository } from '@novu/dal';
import { UpdateBrandingDetailsCommand } from './update-branding-details.command';

@Injectable()
export class UpdateBrandingDetails {
  constructor(private environmentRepository: EnvironmentRepository) {}

  async execute(command: UpdateBrandingDetailsCommand) {
    const payload = {
      color: command.color,
      logo: command.logo,
      fontColor: command.fontColor,
      contentBackground: command.contentBackground,
      fontFamily: command.fontFamily,
    };

    await this.environmentRepository.updateBrandingDetails(command.environmentId, payload);

    return payload;
  }
}
