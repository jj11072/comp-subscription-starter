import benefitOneImg from '../public/img/benefit1.png';
import benefitTwoImg from '../public/img/benefit2.png';
import { Shield, Cloud, Phone, Recover, Tools, Group } from './icons/Icons';



const benefitOne = {
  title: 'helping you make better decision',
  desc: `We provide real time country specific datasets with real time
   analysis specifically tailored for you, as well as technology advice 
   that may help you make those business or investment decisions with greater confidence`,
  image: benefitOneImg,
  bullets: [
    {
      title: 'Microsoft 365',
      desc: 'Complete cloud-based productivity suite set up for your business',
      icon: <Cloud />
    },
    {
      title: '24/7 Helpdesk Support',
      desc: 'Share your screen or call us at any time for help and regular updates',
      icon: <Phone />
    },

    {
      title: 'Employee Training',
      desc: 'We offer training to help you and your employees get the most out of your technology and data',
      icon: <Group />
    }
  ]
};

const benefitTwo = {
  title: 'All your data in one place',
  desc: `We us microservices to provide you with the data you need,
   when you need it. We also provide you with a dashboard to help you 
   manage your data and your business.`,
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Data Protection and Recovery',
      desc: 'We back up your data and provide you with a secure cloud storage solution',
      icon: <Recover />
    },
    {
      title: 'Dynamic IT Management',
      desc: 'All employees have access to the latest technology and software with regular updates and upgrades',
      icon: <Tools />
    },
    {
      title: '100% Secure Devices',
      desc: 'We provide you with the latest devices and software to keep you safe and secure online and offline',
      icon: <Shield />
    }
  ]
};

//TODO: add more benefits
const benefitThree = {
  title: 'We are here to help',
  desc: `We are a team of experts who are passionate about technology and data. We are here to help you make better decisions.`,
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Microsoft 365',
      desc: `Complete cloud-based productivity suite set up for your business 
      with regular updates and upgrades to keep you secure and productive at all times.`,
      icon: <Cloud />
    },
    {
      title: '24/7 Helpdesk Support',
      desc: `Share your screen or call us at any time for help and regular updates on your data and technology. Also get regular updates on your business and the market.`,
      icon: <Phone />
    },

    {
      title: 'Employee Training',
      desc: 'We offer training to help you and your employees get the most out of your technology and data',
      icon: <Group />
    },
    {
      title: 'Data Protection and Recovery',
      desc: 'We back up your data and provide you with a secure cloud storage solution',
      icon: <Recover />
    },
    {
      title: 'Dynamic IT Management',
      desc: 'All employees have access to the latest technology and software with regular updates and upgrades',
      icon: <Tools />
    },
    {
      title: '100% Secure Devices',
      desc: 'We provide you with the latest devices and software to keep you safe and secure online and offline',
      icon: <Shield />
    }
  ]
};

export { benefitOne, benefitTwo };
