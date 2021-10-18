/**
 * We will define the sidebars here.
 */
module.exports = {
  docs: [
    'get-started/welcome',
    'get-started/quick-start',
    {
      label: 'Concepts',
      type: 'category',
      items: [
        'concepts/hierarchy'
      ]
    },
    {
      label: 'Organizations',
      type: 'category',
      items: [
        'organizations/introduction',
        'organizations/create-an-organization',
        'organizations/delete-an-organization',
        'organizations/invite-a-collaborator',
        'organizations/remove-a-collaborator',
      ],
    },
    {
      items: [
        'projects/introduction',
        'projects/create-a-project',
        'projects/copy-a-project-template',
        'projects/select-a-project',
        'projects/delete-a-project',
        {
          items: [
            'projects/collaborators/whats-a-collaborator',
            'projects/collaborators/invite-a-collaborator',
            'projects/collaborators/accept-an-invitation',
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
      label: 'Models',
      type: 'category',
      items: [
        'models/introduction',
        'models/create-a-model',
        {
          label: 'Containers',
          type: 'category',
          items: ['models/containers/philosophy', 'models/containers/registries'],
        },
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
        'experiments/run-an-experiment',
        'experiments/stop-an-experiment',
        'experiments/go-to-the-experiment-page',
        'experiments/artifacts',
      ],
    },
  ],
};
