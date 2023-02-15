import pricingDesktop from '../pricing/desktop/hero.jpg'
import pricingTablet from '../pricing/tablet/hero.jpg'
import pricingMobile from '../pricing/mobile/hero.jpg'

export const pricingData = [
    {
        title: 'Pricing',
        text: 'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
        images: {
            desktop: pricingDesktop,
            tablet: pricingTablet,
            mobile: pricingMobile,
        },
    },
]

export const plansData = [
    {
        plan: 'Basic',
        description:
            'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
        price: {
            monthly: '19.00',
            yearly: '10.00',
        },
    },
    {
        plan: 'Pro',
        description:
            'More advanced features available. Recommended for photography veterans and professionals.',
        price: {
            monthly: '39.00',
            yearly: '25.00',
        },
    },
    {
        plan: 'Business',
        description:
            'Additional features available such as more detailed metrics. Recommended for business owners.',
        price: {
            monthly: '99.00',
            yearly: '70.00',
        },
    },
]

export const compareData = [
    {
        functionality: 'Unlimited story posting',
        plans: {
            basic: true,
            pro: true,
            business: true,
        },
    },
    {
        functionality: 'Unlimited photo upload',
        plans: {
            basic: true,
            pro: true,
            business: true,
        },
    },
    {
        functionality: 'EMBEDDING CUSTOM CONTENT',
        plans: {
            basic: false,
            pro: true,
            business: true,
        },
    },
    {
        functionality: 'CUSTOMIZE METADATA',
        plans: {
            basic: false,
            pro: true,
            business: true,
        },
    },
    {
        functionality: 'ADVANCED METRICS',
        plans: {
            basic: false,
            pro: false,
            business: true,
        },
    },
    {
        functionality: 'PHOTO DOWNLOADS',
        plans: {
            basic: false,
            pro: false,
            business: true,
        },
    },
    {
        functionality: 'SEARCH ENGINE INDEXING',
        plans: {
            basic: false,
            pro: false,
            business: true,
        },
    },
    {
        functionality: 'CUSTOM ANALYTICS',
        plans: {
            basic: false,
            pro: false,
            business: true,
        },
    },
]
