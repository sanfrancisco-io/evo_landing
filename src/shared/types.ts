export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourclasses',
    ContactUs = 'contactus',
}

export interface IBenefitsConfig {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface IClassConfig {
    name: string;
    description?: string;
    image: string;
}
