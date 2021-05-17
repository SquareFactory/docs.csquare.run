/**
 * We will define the sidebars here.
 */
module.exports = {
  docs: [
    'get-started/welcome',
    'get-started/quick-start',
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
