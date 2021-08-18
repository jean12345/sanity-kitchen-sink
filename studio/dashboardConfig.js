export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611cbc492d5083ac2ba955a8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-v2pue22k',
                  apiId: 'ec73e0e1-4feb-451d-a04e-1a9ee199e197'
                },
                {
                  buildHookId: '611cbc49193650c21a869bf9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kzcupbju',
                  apiId: '188954d1-93d7-4cd1-8262-06acbfafa112'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jean12345/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kzcupbju.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
