export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-grid'
    },
    {
      name: 'Service',
      url: '/service',
      icon: 'icon-support',
      children: [
        {
          name: 'Service 관리',
          url: '/service/service'
        },
        {
          name: 'Bucket 관리',
          url: '/service/bucket'
        },
        {
          name: 'Account 관리',
          url: '/service/account'
        }
      ]
    },
    {
      name: 'Configuration',
      url: '/configuration',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Edge 관리',
          url: '/configuration/edge'
        },
        {
          name: 'Referrer 관리',
          url: '/configuration/referrer'
        },
        {
          name: 'Pop 관리',
          url: '/configuration/pop'
        }
      ]
    },
    {
      name: 'Policy',
      url: '/policy',
      icon: 'icon-equalizer',
      children: [
        {
          name: 'One-Time URL',
          url: '/policy/onetime'
        },
        {
          name: 'PoP Preference',
          url: '/policy/popPreference'
        },
        {
          name: 'GTM Config',
          url: '/policy/gtmConfig'
        },
        {
          name: 'GEO IP',
          url: '/policy/geoIp'
        },
        {
          name: 'IP Restriction',
          url: '/policy/ipRestriction'
        }
      ]
    },
    {
      name: 'Workflow',
      url: '/workflow',
      icon: 'icon-share',
      children: [
        {
          name: 'Service Processing 관리',
          url: '/workflow/service'
        }
      ]
    },
    {
      title: true,
      name: 'UI Component Sample',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Process(drag&drop)',
      url: '/process',
      icon: 'icon-chart'
    },
    {
      name: 'Map',
      url: '/map',
      icon: 'icon-map'
    },
    {
      name: 'Grid UI',
      url: '/gridUI',
      icon: 'icon-grid'
    }
  ]
}
