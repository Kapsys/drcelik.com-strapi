import type { Schema, Attribute } from '@strapi/strapi';

export interface SmallComponentTitleComponent extends Schema.Component {
  collectionName: 'components_small_component_title_components';
  info: {
    displayName: 'Title Component';
    icon: 'envelop';
  };
  attributes: {
    lines: Attribute.Component<'small-component.lines', true>;
  };
}

export interface SmallComponentTest extends Schema.Component {
  collectionName: 'components_small_component_tests';
  info: {
    displayName: 'test';
    icon: 'connector';
  };
  attributes: {
    options: Attribute.Enumeration<['text-gradient-1', 'text-black', 'text-white']>;
  };
}

export interface SmallComponentSubMenuItems extends Schema.Component {
  collectionName: 'components_small_component_sub_menu_items';
  info: {
    displayName: 'Sub Menu Items';
    icon: 'collapse';
  };
  attributes: {
    subItemName: Attribute.String;
    subItemLink: Attribute.String;
  };
}

export interface SmallComponentSteps extends Schema.Component {
  collectionName: 'components_small_component_steps';
  info: {
    displayName: 'Steps';
    icon: 'database';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    description: Attribute.Text;
    imageStep: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SmallComponentSocials extends Schema.Component {
  collectionName: 'components_small_component_socials';
  info: {
    displayName: 'Socials';
    icon: 'paint';
  };
  attributes: {
    socialIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    socialUrl: Attribute.String;
  };
}

export interface SmallComponentMetricsBlock extends Schema.Component {
  collectionName: 'components_small_component_metrics_blocks';
  info: {
    displayName: 'Metrics Block';
    icon: 'house';
    description: '';
  };
  attributes: {
    number: Attribute.Integer;
    text: Attribute.String;
  };
}

export interface SmallComponentMenuItems extends Schema.Component {
  collectionName: 'components_small_component_menu_items';
  info: {
    displayName: 'Menu Items';
    icon: 'check';
  };
  attributes: {
    itemName: Attribute.String;
    itemLink: Attribute.String;
    subMenuItems: Attribute.Component<'small-component.sub-menu-items', true>;
  };
}

export interface SmallComponentLines extends Schema.Component {
  collectionName: 'components_small_component_lines';
  info: {
    displayName: 'Lines';
    icon: 'manyToOne';
  };
  attributes: {
    insideLines: Attribute.Component<'small-component.inside-lines', true>;
    classname: Attribute.String;
  };
}

export interface SmallComponentLanguageSwitcher extends Schema.Component {
  collectionName: 'components_small_component_language_switchers';
  info: {
    displayName: 'Language Switcher';
    icon: 'manyWays';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    fullTitle: Attribute.String;
    key: Attribute.String;
  };
}

export interface SmallComponentInsideLines extends Schema.Component {
  collectionName: 'components_small_component_inside_lines';
  info: {
    displayName: 'Inside Lines';
    icon: 'discuss';
  };
  attributes: {
    text: Attribute.String;
    options: Attribute.Enumeration<['text-gradient-1', 'text-black', 'text-white']>;
  };
}

export interface SmallComponentInfos extends Schema.Component {
  collectionName: 'components_small_component_infos';
  info: {
    displayName: 'Infos';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Attribute.String;
    link: Attribute.String;
  };
}

export interface SmallComponentGallery extends Schema.Component {
  collectionName: 'components_small_component_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'grid';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SmallComponentFooterMenuItems extends Schema.Component {
  collectionName: 'components_small_component_footer_menu_items';
  info: {
    displayName: 'Footer Menu Items';
    icon: 'filter';
  };
  attributes: {
    menuItem: Attribute.String;
    menuItemUrl: Attribute.String;
  };
}

export interface SmallComponentFooterItems extends Schema.Component {
  collectionName: 'components_small_component_footer_items';
  info: {
    displayName: 'Footer Items';
    icon: 'manyToMany';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    footerMenuItems: Attribute.Component<'small-component.footer-menu-items', true>;
  };
}

export interface SmallComponentButton extends Schema.Component {
  collectionName: 'components_small_component_buttons';
  info: {
    displayName: 'Button';
    icon: 'bold';
  };
  attributes: {
    buttonIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttonName: Attribute.String;
    buttonUrl: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 250;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'> & Attribute.Required;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SectionStepsSection extends Schema.Component {
  collectionName: 'components_section_steps_sections';
  info: {
    displayName: 'Steps Section';
    icon: 'oneToMany';
  };
  attributes: {
    steps: Attribute.Component<'small-component.steps', true>;
    titleComponent: Attribute.Component<'small-component.title-component'>;
    description: Attribute.Text;
  };
}

export interface SectionHeroSection extends Schema.Component {
  collectionName: 'components_section_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    description: Attribute.Text;
    metricsBlock: Attribute.Component<'small-component.metrics-block', true>;
    button: Attribute.Component<'small-component.button'>;
    titleComponent: Attribute.Component<'small-component.title-component'>;
  };
}

export interface SectionHeader extends Schema.Component {
  collectionName: 'components_section_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    infos: Attribute.Component<'small-component.infos', true>;
    languageSwitcher: Attribute.Component<'small-component.language-switcher', true>;
    socials: Attribute.Component<'small-component.socials', true>;
    headerLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    menuItems: Attribute.Component<'small-component.menu-items', true>;
    button: Attribute.Component<'small-component.button'>;
  };
}

export interface SectionFooter extends Schema.Component {
  collectionName: 'components_section_footers';
  info: {
    displayName: 'Footer';
    icon: 'stack';
    description: '';
  };
  attributes: {
    footerItems: Attribute.Component<'small-component.footer-items', true>;
    footerLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    footerCopywritingText: Attribute.String;
    kapsysText: Attribute.String;
    kapsysLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.Component<'small-component.button'>;
    socials: Attribute.Component<'small-component.socials', true>;
  };
}

export interface SectionBeforeAfterSection extends Schema.Component {
  collectionName: 'components_section_before_after_sections';
  info: {
    displayName: 'Before After Section';
    icon: 'layer';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    button: Attribute.Component<'small-component.button'>;
    gallery: Attribute.Component<'small-component.gallery', true>;
    titleComponent: Attribute.Component<'small-component.title-component'>;
  };
}

export interface SectionBannerSection extends Schema.Component {
  collectionName: 'components_section_banner_sections';
  info: {
    displayName: 'Banner Section';
    icon: 'crop';
  };
  attributes: {
    bannerIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bannerText: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'small-component.title-component': SmallComponentTitleComponent;
      'small-component.test': SmallComponentTest;
      'small-component.sub-menu-items': SmallComponentSubMenuItems;
      'small-component.steps': SmallComponentSteps;
      'small-component.socials': SmallComponentSocials;
      'small-component.metrics-block': SmallComponentMetricsBlock;
      'small-component.menu-items': SmallComponentMenuItems;
      'small-component.lines': SmallComponentLines;
      'small-component.language-switcher': SmallComponentLanguageSwitcher;
      'small-component.inside-lines': SmallComponentInsideLines;
      'small-component.infos': SmallComponentInfos;
      'small-component.gallery': SmallComponentGallery;
      'small-component.footer-menu-items': SmallComponentFooterMenuItems;
      'small-component.footer-items': SmallComponentFooterItems;
      'small-component.button': SmallComponentButton;
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'section.steps-section': SectionStepsSection;
      'section.hero-section': SectionHeroSection;
      'section.header': SectionHeader;
      'section.footer': SectionFooter;
      'section.before-after-section': SectionBeforeAfterSection;
      'section.banner-section': SectionBannerSection;
    }
  }
}
