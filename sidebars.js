/**
 * We will define the sidebars here.
 */
module.exports = {
  docs: [
    {
      items: ['get-started/welcome', 'get-started/quick-start'],
      label: 'Get started',
      type: 'category'
    },
    {
      items: [
        'datasets/introduction',
        'datasets/create',
        'datasets/import',
        {type: 'category', label: 'Resources', items: ['datasets/resources/billing']}
      ],
      label: 'Datasets',
      type: "category"
    }, {
      items: ['models/create-a-model'],
      label: 'Models',
      type: "category"
    }
  ]
}
