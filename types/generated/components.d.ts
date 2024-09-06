import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'small-component.sub-menu-items': SmallComponentSubMenuItems;
      'small-component.socials': SmallComponentSocials;
      'small-component.menu-items': SmallComponentMenuItems;
      'small-component.language-switcher': SmallComponentLanguageSwitcher;
      'small-component.infos': SmallComponentInfos;
      'small-component.button': SmallComponentButton;
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'section.header': SectionHeader;
    }
  }
}
