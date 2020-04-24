export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ea37726b83dec35190c439f',
                  title: 'Sanity Studio',
                  name: 'sanity-portfolio-studio-v1ref9jj',
                  apiId: '36a9808f-3505-4cab-8d3c-acabd5f9d307'
                },
                {
                  buildHookId: '5ea377262e556c550fa8ea69',
                  title: 'Blog Website',
                  name: 'sanity-portfolio-web-oi9r49ih',
                  apiId: '9cd91b39-e74d-4a00-954f-edbba99c31bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chaunceyau/sanity-portfolio',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-portfolio-web-oi9r49ih.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
