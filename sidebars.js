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
        {
          items: ['projects/collaborators/whats-a-collaborator', 'projects/collaborators/invite-a-collaborator', 'projects/collaborators/update-permissions', 'projects/collaborators/remove-a-collaborator'],
          label: 'Collaborators',
          type: "category"
        }
      ],
      label: 'Projects',
      type: "category"
    },
    {
      items: [
        'datasets/introduction',
        'datasets/create-a-dataset',
        'datasets/import-files-to-a-dataset',
        'datasets/import-an-existing-dataset-to-a-project',
        'datasets/remove-a-dataset',
        'datasets/delete-a-dataset',
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
    },
    {
      items:['organizations/introduction'],
      label: 'Organizations',
      type: "category"
    }
  ]
}
