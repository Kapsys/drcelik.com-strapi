import type { Schema, Attribute } from '@strapi/strapi';

export interface SmallComponentVideos extends Schema.Component {
  collectionName: 'components_small_component_videos';
  info: {
    displayName: 'Videos';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    name: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    videoImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    videoUrl: Attribute.Text;
    button: Attribute.Component<'small-component.button'>;
  };
}

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

export interface SmallComponentTestimonials extends Schema.Component {
  collectionName: 'components_small_component_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'medium';
  };
  attributes: {
    personPhoto: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Text;
    name: Attribute.String;
    companyName: Attribute.String;
    countryName: Attribute.String;
    button: Attribute.Component<'small-component.button'>;
    countryFlag: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SmallComponentSubcategory extends Schema.Component {
  collectionName: 'components_small_component_subcategories';
  info: {
    displayName: 'subcategory';
    icon: 'information';
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.String;
  };
}

export interface SmallComponentSubMenu extends Schema.Component {
  collectionName: 'components_small_component_sub_menus';
  info: {
    displayName: 'Sub Menu';
    icon: 'repeat';
  };
  attributes: {
    subItemName: Attribute.String;
    subItemLink: Attribute.String;
  };
}

export interface SmallComponentSubMenuItems extends Schema.Component {
  collectionName: 'components_small_component_sub_menu_items';
  info: {
    displayName: 'Sub Menu Items';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subMenu: Attribute.Component<'small-component.sub-menu', true>;
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

export interface SmallComponentProductsSlider extends Schema.Component {
  collectionName: 'components_small_component_products_sliders';
  info: {
    displayName: 'Products Slider';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    imageProduct: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface SmallComponentList extends Schema.Component {
  collectionName: 'components_small_component_lists';
  info: {
    displayName: 'List';
    icon: 'stack';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Attribute.String;
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

export interface SmallComponentImages extends Schema.Component {
  collectionName: 'components_small_component_images';
  info: {
    displayName: 'Images';
    icon: 'television';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    isImageLeft: Attribute.Boolean;
    isColoredBg: Attribute.Boolean;
    list: Attribute.Component<'small-component.list', true>;
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

export interface SmallComponentForm extends Schema.Component {
  collectionName: 'components_small_component_forms';
  info: {
    displayName: 'Form';
    icon: 'server';
    description: '';
  };
  attributes: {
    formInputs: Attribute.Component<'small-component.form-inputs', true>;
    checkboxText: Attribute.String;
    privacyPolicyText: Attribute.String;
    privacyPolicyUrl: Attribute.String;
    button: Attribute.Component<'small-component.button'>;
  };
}

export interface SmallComponentFormInputs extends Schema.Component {
  collectionName: 'components_small_component_form_inputs';
  info: {
    displayName: 'Form Inputs';
    icon: 'cup';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    placeholder: Attribute.String;
    type: Attribute.Enumeration<['countrySelect', 'text', 'email', 'phone', 'textarea']>;
    countrySelect: Attribute.Enumeration<['text', 'email', 'phone', 'textarea']>;
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

export interface SmallComponentFeaturesSection extends Schema.Component {
  collectionName: 'components_small_component_features_sections';
  info: {
    displayName: 'Features Section';
    icon: 'message';
    description: '';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    list: Attribute.Component<'small-component.list', true>;
    button: Attribute.Component<'small-component.button'>;
    rightImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    titleComponent: Attribute.Component<'small-component.title-component'>;
  };
}

export interface SmallComponentFaq extends Schema.Component {
  collectionName: 'components_small_component_faqs';
  info: {
    displayName: 'Faq';
    icon: 'chartPie';
  };
  attributes: {
    faqQuestion: Attribute.String;
    faqAnswer: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
  };
}

export interface SmallComponentContents extends Schema.Component {
  collectionName: 'components_small_component_contents';
  info: {
    displayName: 'Contents';
    icon: 'gate';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SmallComponentContactInfos extends Schema.Component {
  collectionName: 'components_small_component_contact_infos';
  info: {
    displayName: 'Contact Infos';
    icon: 'oneToMany';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Attribute.String;
    info: Attribute.String;
    link: Attribute.String;
  };
}

export interface SmallComponentCategory extends Schema.Component {
  collectionName: 'components_small_component_categories';
  info: {
    displayName: 'category';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.String;
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

export interface SectionVideosSection extends Schema.Component {
  collectionName: 'components_section_videos_sections';
  info: {
    displayName: 'Videos Section';
    icon: 'monitor';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    videos: Attribute.Component<'small-component.videos', true>;
    titleComponent: Attribute.Component<'small-component.title-component'>;
  };
}

export interface SectionTreatmentsSection extends Schema.Component {
  collectionName: 'components_section_treatments_sections';
  info: {
    displayName: 'Treatments Section';
    icon: 'picture';
    description: '';
  };
  attributes: {
    titleComponent: Attribute.Component<'small-component.title-component'>;
    description: Attribute.Text;
    button: Attribute.Component<'small-component.button'>;
    expertiseItems: Attribute.Component<'section.expertise-items', true>;
    isColoredBackground: Attribute.Boolean;
  };
}

export interface SectionTestimonialsSection extends Schema.Component {
  collectionName: 'components_section_testimonials_sections';
  info: {
    displayName: 'Testimonials Section';
    icon: 'layout';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Text;
    testimonials: Attribute.Component<'small-component.testimonials', true>;
    titleComponent: Attribute.Component<'small-component.title-component'>;
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

export interface SectionProductSection extends Schema.Component {
  collectionName: 'components_section_product_sections';
  info: {
    displayName: 'Product Section';
    description: '';
  };
  attributes: {
    productSlider: Attribute.Component<'small-component.products-slider', true>;
    imageText: Attribute.String;
    subtitle: Attribute.String;
    title: Attribute.String;
    button: Attribute.Component<'small-component.button'>;
    list: Attribute.Component<'small-component.list', true>;
    phone: Attribute.String;
  };
}

export interface SectionImagesSection extends Schema.Component {
  collectionName: 'components_section_images_sections';
  info: {
    displayName: 'Images Section';
    icon: 'database';
    description: '';
  };
  attributes: {
    images: Attribute.Component<'small-component.images', true>;
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
    button: Attribute.Component<'small-component.button', true>;
    titleComponent: Attribute.Component<'small-component.title-component'>;
    videoUrl: Attribute.Text;
  };
}

export interface SectionHeroPageSection extends Schema.Component {
  collectionName: 'components_section_hero_page_sections';
  info: {
    displayName: 'Hero Page Section';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'small-component.button', true>;
    backgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePosition: Attribute.Enumeration<
      [
        'bottom',
        'center',
        'left',
        'left-bottom',
        'left-top',
        'right',
        'right-bottom',
        'right-top',
        'top'
      ]
    >;
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

export interface SectionFaqSection extends Schema.Component {
  collectionName: 'components_section_faq_sections';
  info: {
    displayName: 'FAQ Section';
    icon: 'manyToOne';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    description: Attribute.Text;
    faq: Attribute.Component<'small-component.faq', true>;
    titleComponent: Attribute.Component<'small-component.title-component'>;
  };
}

export interface SectionExpertiseItems extends Schema.Component {
  collectionName: 'components_section_expertise_items';
  info: {
    displayName: 'Expertise Items';
    icon: 'server';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'small-component.button'>;
  };
}

export interface SectionDotsSection extends Schema.Component {
  collectionName: 'components_section_dots_sections';
  info: {
    displayName: 'Dots Section';
    icon: 'clock';
  };
  attributes: {
    title: Attribute.String;
    titleComponent: Attribute.Component<'small-component.title-component'>;
    description: Attribute.Text;
    images: Attribute.Component<'small-component.images', true>;
  };
}

export interface SectionContactSection extends Schema.Component {
  collectionName: 'components_section_contact_sections';
  info: {
    displayName: 'Contact Section';
    icon: 'oneToMany';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    contactInfos: Attribute.Component<'small-component.contact-infos', true>;
    form: Attribute.Component<'small-component.form'>;
    mapImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mapUrl: Attribute.Text;
    titleComponent: Attribute.Component<'small-component.title-component'>;
  };
}

export interface SectionBlogSection extends Schema.Component {
  collectionName: 'components_section_blog_sections';
  info: {
    displayName: 'Blog Section';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    button: Attribute.Component<'small-component.button'>;
    titleComponent: Attribute.Component<'small-component.title-component'>;
  };
}

export interface SectionBlogCategorySection extends Schema.Component {
  collectionName: 'components_section_blog_category_sections';
  info: {
    displayName: 'Blog Category Section';
    icon: 'layout';
    description: '';
  };
  attributes: {
    searchPlaceholder: Attribute.String;
    blogCategories: Attribute.Component<'section.blog-categories', true>;
    button: Attribute.Component<'small-component.button', true>;
  };
}

export interface SectionBlogCategories extends Schema.Component {
  collectionName: 'components_section_blog_categories';
  info: {
    displayName: 'Blog Categories';
    icon: 'message';
    description: '';
  };
  attributes: {
    name: Attribute.String;
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
    isMinified: Attribute.Boolean;
    isColoredBackground: Attribute.Boolean;
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
      'small-component.videos': SmallComponentVideos;
      'small-component.title-component': SmallComponentTitleComponent;
      'small-component.testimonials': SmallComponentTestimonials;
      'small-component.subcategory': SmallComponentSubcategory;
      'small-component.sub-menu': SmallComponentSubMenu;
      'small-component.sub-menu-items': SmallComponentSubMenuItems;
      'small-component.steps': SmallComponentSteps;
      'small-component.socials': SmallComponentSocials;
      'small-component.products-slider': SmallComponentProductsSlider;
      'small-component.metrics-block': SmallComponentMetricsBlock;
      'small-component.menu-items': SmallComponentMenuItems;
      'small-component.list': SmallComponentList;
      'small-component.lines': SmallComponentLines;
      'small-component.language-switcher': SmallComponentLanguageSwitcher;
      'small-component.inside-lines': SmallComponentInsideLines;
      'small-component.infos': SmallComponentInfos;
      'small-component.images': SmallComponentImages;
      'small-component.gallery': SmallComponentGallery;
      'small-component.form': SmallComponentForm;
      'small-component.form-inputs': SmallComponentFormInputs;
      'small-component.footer-menu-items': SmallComponentFooterMenuItems;
      'small-component.footer-items': SmallComponentFooterItems;
      'small-component.features-section': SmallComponentFeaturesSection;
      'small-component.faq': SmallComponentFaq;
      'small-component.contents': SmallComponentContents;
      'small-component.contact-infos': SmallComponentContactInfos;
      'small-component.category': SmallComponentCategory;
      'small-component.button': SmallComponentButton;
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'section.videos-section': SectionVideosSection;
      'section.treatments-section': SectionTreatmentsSection;
      'section.testimonials-section': SectionTestimonialsSection;
      'section.steps-section': SectionStepsSection;
      'section.product-section': SectionProductSection;
      'section.images-section': SectionImagesSection;
      'section.hero-section': SectionHeroSection;
      'section.hero-page-section': SectionHeroPageSection;
      'section.header': SectionHeader;
      'section.footer': SectionFooter;
      'section.faq-section': SectionFaqSection;
      'section.expertise-items': SectionExpertiseItems;
      'section.dots-section': SectionDotsSection;
      'section.contact-section': SectionContactSection;
      'section.blog-section': SectionBlogSection;
      'section.blog-category-section': SectionBlogCategorySection;
      'section.blog-categories': SectionBlogCategories;
      'section.before-after-section': SectionBeforeAfterSection;
      'section.banner-section': SectionBannerSection;
    }
  }
}
