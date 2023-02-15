import featureDesktop from '../features/desktop/hero.jpg'
import featureTablet from '../features/tablet/hero.jpg'
import featureMobile from '../features/mobile/hero.jpg'

import ResponsiveSVG from '../features/desktop/responsive.svg'
import NoPhotosSVG from '../features/desktop/no-limit.svg'
import EmbedSVG from '../features/desktop/embed.svg'
import DomainSVG from '../features/desktop/custom-domain.svg'
import ExposureSVG from '../features/desktop/boost-exposure.svg'
import DragSVG from '../features/desktop/drag-drop.svg'

export const featuresData = [
    {
        title: 'Features',
        text: 'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.',
        images: {
            desktop: featureDesktop,
            tablet: featureTablet,
            mobile: featureMobile,
        },
    },
]

export const presentationFeaturesData = [
    {
        title: '100% Responsive',
        text: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
        image: ResponsiveSVG,
    },
    {
        title: 'No Photo Upload Limit',
        text: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
        image: NoPhotosSVG,
    },
    {
        title: 'Available to Embed',
        text: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ',
        image: EmbedSVG,
    },
    {
        title: 'Custom Domain',
        text: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
        image: DomainSVG,
    },
    {
        title: 'Boost Your Exposure',
        text: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
        image: ExposureSVG,
    },
    {
        title: 'Drag & Drop Image',
        text: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
        image: DragSVG,
    },
]
