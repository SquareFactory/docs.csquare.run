/**
 * We will define the sidebars here.
 */
module.exports = {
  docs: [
    'get-started/welcome',
    'get-started/quick-start',
    {
      items: [
          'projects/create-a-project',
          'projects/select-a-project',
          'projects/delete-a-project',
          'projects/change-collaborators-permissions'
      ],
      label: 'Projects',
      type: "category"
    },
    {
      items: [
        'datasets/introduction',
        'datasets/create-a-dataset',
        'datasets/import-files-to-a-dataset',
        'datasets/use-your-dataset-into-an-experiment',
        'datasets/import-an-existing-dataset-to-a-project',
        {items: ['datasets/resources/billing'], label: 'Resources', type: 'category'}
      ],
      label: 'Datasets',
      type: "category"
    }, {
      items: [
          'models/create-a-model',
          {items:['models/experiments/create-an-experiment'], label: 'Experiments', type: "category"}
      ],
      label: 'Models',
      type: "category"
    }
  ]
}
