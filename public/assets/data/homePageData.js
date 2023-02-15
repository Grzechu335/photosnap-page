import firstPhotoDesktop from '../home/desktop/create-and-share.jpg'
import firstPhotoTablet from '../home/tablet/create-and-share.jpg'
import firstPhotoMobile from '../home/mobile/create-and-share.jpg'

import secondPhotoDesktop from '../home/desktop/beautiful-stories.jpg'
import secondPhotoTablet from '../home/tablet/beautiful-stories.jpg'
import secondPhotoMobile from '../home/mobile/beautiful-stories.jpg'

import thirdPhotoDesktop from '../home/desktop/designed-for-everyone.jpg'
import thirdPhotoTablet from '../home/tablet/designed-for-everyone.jpg'
import thirdPhotoMobile from '../home/mobile/designed-for-everyone.jpg'

import MountainsDesktop from '../stories/desktop/mountains.jpg'
import CityscapesDesktop from '../stories/desktop/cityscapes.jpg'
import DaysVoyageDesktop from '../stories/desktop/18-days-voyage.jpg'
import ArchitecturalsDesktop from '../stories/desktop/architecturals.jpg'
import BehindTheWavesDesktop from '../stories/desktop/behind-the-waves.jpg'
import CalmWaterDesktop from '../stories/desktop/calm-waters.jpg'
import DarkForestDesktop from '../stories/desktop/dark-forest.jpg'
import KingOfAfricaDesktop from '../stories/desktop/king-on-africa.jpg'
import LandOfDreamsDesktop from '../stories/desktop/land-of-dreams.jpg'
import MilkyWayDesktop from '../stories/desktop/milky-way.jpg'
import MoonOfAppalaciaDesktop from '../stories/desktop/moon-of-appalacia.jpg'
import RageOfTheSeaDesktop from '../stories/desktop/rage-of-the-sea.jpg'
import RunningFreeDesktop from '../stories/desktop/running-free.jpg'
import SomwarpetDesktop from '../stories/desktop/somwarpet.jpg'
import TripToNowhereDesktop from '../stories/desktop/trip-to-nowhere.jpg'
import UnforeseenCornersDesktop from '../stories/desktop/unforeseen-corners.jpg'
import WorldTourDesktop from '../stories/desktop/world-tour.jpg'

import MountainsMobile from '../stories/mobile/mountains.jpg'
import CityscapesMobile from '../stories/mobile/cityscapes.jpg'
import DaysVoyageMobile from '../stories/mobile/18-days-voyage.jpg'
import ArchitecturalsMobile from '../stories/mobile/architecturals.jpg'
import BehindTheWavesMobile from '../stories/mobile/behind-the-waves.jpg'
import CalmWaterMobile from '../stories/mobile/calm-waters.jpg'
import DarkForestMobile from '../stories/mobile/dark-forest.jpg'
import KingOfAfricaMobile from '../stories/mobile/king-on-africa.jpg'
import LandOfDreamsMobile from '../stories/mobile/land-of-dreams.jpg'
import MilkyWayMobile from '../stories/mobile/milky-way.jpg'
import MoonOfAppalaciaMobile from '../stories/mobile/moon-of-appalacia.jpg'
import RageOfTheSeaMobile from '../stories/mobile/rage-of-the-sea.jpg'
import RunningFreeMobile from '../stories/mobile/running-free.jpg'
import SomwarpetMobile from '../stories/mobile/somwarpet.jpg'
import TripToNowhereMobile from '../stories/mobile/trip-to-nowhere.jpg'
import UnforeseenCornersMobile from '../stories/mobile/unforeseen-corners.jpg'
import WorldTourMobile from '../stories/mobile/world-tour.jpg'

export const homePageData = [
    {
        title: 'Create and share your photo stories. ',
        text: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
        buttonText: 'Get an invite',
        images: {
            desktopImage: firstPhotoDesktop,
            tabletImage: firstPhotoTablet,
            mobileImage: firstPhotoMobile,
        },
    },
    {
        title: 'Beautiful stories every time',
        text: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
        buttonText: 'View the stories',
        images: {
            desktopImage: secondPhotoDesktop,
            tabletImage: secondPhotoTablet,
            mobileImage: secondPhotoMobile,
        },
    },
    {
        title: 'DESIGNED FOR EVERYONE',
        text: 'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
        buttonText: 'View the stories',
        images: {
            desktopImage: thirdPhotoDesktop,
            tabletImage: thirdPhotoTablet,
            mobileImage: thirdPhotoMobile,
        },
    },
]

export const storiesData = [
    {
        title: 'The Mountains',
        createdBy: 'John Appleseed',
        date: new Date(2020, 3, 16),
        images: {
            desktop: MountainsDesktop,
            mobile: MountainsMobile,
        },
    },
    {
        title: 'Sunset Cityscapes',
        createdBy: 'Benjamin Cruz',
        date: new Date(2020, 3, 14),

        images: {
            desktop: CityscapesDesktop,
            mobile: CityscapesMobile,
        },
    },
    {
        title: '18 Days Voyage',
        createdBy: 'Alexei Borodin',
        date: new Date(2020, 3, 11),

        images: {
            desktop: DaysVoyageDesktop,
            mobile: DaysVoyageMobile,
        },
    },
    {
        title: 'Architecturals',
        createdBy: 'Samantha Brooke',
        date: new Date(2020, 3, 9),

        images: {
            desktop: ArchitecturalsDesktop,
            mobile: ArchitecturalsMobile,
        },
    },
    {
        title: 'World Tour 2019',
        createdBy: 'Timothy Wagner',
        date: new Date(2020, 3, 7),

        images: {
            desktop: WorldTourDesktop,
            mobile: WorldTourMobile,
        },
    },
    {
        title: 'Unforeseen Corners',
        createdBy: 'William Malcolm',
        date: new Date(2020, 3, 3),
        images: {
            desktop: UnforeseenCornersDesktop,
            mobile: UnforeseenCornersMobile,
        },
    },
    {
        title: 'King of Africa: Part II',
        createdBy: 'Tim Hillenburg',
        date: new Date(2020, 2, 29),
        images: {
            desktop: KingOfAfricaDesktop,
            mobile: KingOfAfricaMobile,
        },
    },
    {
        title: 'The Trip to Nowhere',
        createdBy: 'Felicia Rourke',
        date: new Date(2020, 2, 21),
        images: {
            desktop: TripToNowhereDesktop,
            mobile: TripToNowhereMobile,
        },
    },
    {
        title: 'Rage of The Sea',
        createdBy: 'Mohammed Abdul',
        date: new Date(2020, 2, 19),
        images: {
            desktop: RageOfTheSeaDesktop,
            mobile: RageOfTheSeaMobile,
        },
    },
    {
        title: 'Running Free',
        createdBy: 'Michelle',
        date: new Date(2020, 2, 16),
        images: {
            desktop: RunningFreeDesktop,
            mobile: RunningFreeMobile,
        },
    },
    {
        title: 'Behind The Waves',
        createdBy: 'Samantha Brooke',
        date: new Date(2020, 2, 11),
        images: {
            desktop: BehindTheWavesDesktop,
            mobile: BehindTheWavesMobile,
        },
    },
    {
        title: 'Calm Waters',
        createdBy: 'Samantha Brooke',
        date: new Date(2020, 2, 9),
        images: {
            desktop: CalmWaterDesktop,
            mobile: CalmWaterMobile,
        },
    },
    {
        title: 'The Milky Way',
        createdBy: 'Benjamin Cruz',
        date: new Date(2020, 2, 5),
        images: {
            desktop: MilkyWayDesktop,
            mobile: MilkyWayMobile,
        },
    },
    {
        title: 'Night at The Dark Forest',
        createdBy: 'Mohammed Abdul',
        date: new Date(2020, 2, 4),
        images: {
            desktop: DarkForestDesktop,
            mobile: DarkForestMobile,
        },
    },
    {
        title: `Somwarpet's Beauty`,
        createdBy: 'Michelle',
        date: new Date(2020, 2, 1),
        images: {
            desktop: SomwarpetDesktop,
            mobile: SomwarpetMobile,
        },
    },
    {
        title: `Land of Dreams`,
        createdBy: 'William Malcolm`',
        date: new Date(2020, 1, 25),
        images: {
            desktop: LandOfDreamsDesktop,
            mobile: LandOfDreamsMobile,
        },
    },
]
