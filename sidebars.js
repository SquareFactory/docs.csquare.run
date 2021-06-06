/**
 * We will define the sidebars here.
 */
module.exports = {
  docs: [
    'get-started/welcome',
    'get-started/quick-start',
    {
      label: 'Organizations',
      type: 'category',
      items: [
        'organizations/introduction',
        'organizations/create-an-organization',
        'organizations/invite-to-organization',
        'organizations/delete-an-organization',
      ],
    },
    {
      items: [
        'projects/introduction',
        'projects/create-a-project',
        'projects/select-a-project',
        'projects/delete-a-project',
        {
          items: [
            'projects/collaborators/whats-a-collaborator',
            'projects/collaborators/invite-a-collaborator',
            'projects/collaborators/update-permissions',
            'projects/collaborators/remove-a-collaborator',
          ],
          label: 'Collaborators',
          type: 'category',
        },
      ],
      label: 'Projects',
      type: 'category',
    },
    {
      label: 'Datasets',
      type: 'category',
      items: [
        'datasets/introduction',
        'datasets/create-a-dataset',
        'datasets/import-files-to-a-dataset',
        'datasets/import-an-existing-dataset-to-a-project',
        'datasets/remove-a-dataset',
        'datasets/delete-a-dataset',
      ],
    },
    {
      label: 'Containers',
      type: 'category',
      items: ['containers/philosophy', 'containers/registries'],
    },
    {
      label: 'Models',
      type: 'category',
      items: [
        'models/introduction',
        'models/create-a-model',
        'models/edit-a-model',
        'models/delete-a-model',
        'models/models-examples',
      ],
    },
    {
      label: 'Experiments',
      type: 'category',
      items: [
        'experiments/whats-an-experiment',
        'experiments/go-to-the-experiment-page',
        'experiments/create-an-experiment',
        'experiments/run-an-experiment',
        'experiments/stop-an-experiment',
        'experiments/download-checkpoints',
      ],
    },
  ],
};
