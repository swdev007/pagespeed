/* eslint-disable max-lines */

import { InjectionToken } from '@angular/core';
import { Twitter } from './svg/twitter';
import { Linkedin } from './svg/linkedin';
import { FacebookF } from './svg/facebook-f';
import { Instagram } from './svg/instagram';
import { ArrowRight } from './svg/arrow-right';
import { MagnifyingGlass } from './svg/magnifying-glass';
import { DollarSign } from './svg/dollar-sign';
import { AngleDown } from './svg/angle-down';
import { ChevronDown } from './svg/chevron-down';
import { Logo } from './svg/logo';
import { LogoFooter } from './svg/logo-footer';

export const Icons = new Map([
  ['twitter', Twitter],
  ['linkedin', Linkedin],
  ['facebook-f', FacebookF],
  ['instagram', Instagram],
  ['arrow-right', ArrowRight],
  ['magnifying-glass', MagnifyingGlass],
  ['dollar-sign', DollarSign],
  ['angle-down', AngleDown],
  ['chevron-down', ChevronDown],
  ['logo', Logo],
  ['logo-footer', LogoFooter],
]);

export const ICONS = new InjectionToken('ICONS');
