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
      items: ['concepts/hierarchy'],
    },
    {
      label: 'Organizations',
      type: 'category',
      items: [
        'organizations/introduction',
        'organizations/create-organization',
        'organizations/delete-organization',
        'organizations/invite-member',
        'organizations/remove-member',
      ],
    },
    {
      items: [
        'projects/introduction',
        'projects/create-project',
        'projects/select-project',
        'projects/delete-project',
        'projects/use-project-template',
        {
          items: [
            'projects/collaborators/whats-collaborator',
            'projects/collaborators/invite-collaborator',
            'projects/collaborators/accept-invitation',
            'projects/collaborators/update-permissions',
            'projects/collaborators/remove-collaborator',
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
        'datasets/create-dataset',
        'datasets/import-files-to-dataset',
        'datasets/import-existing-dataset-to-project',
        'datasets/remove-dataset',
        'datasets/delete-dataset',
      ],
    },
    {
      label: 'Models',
      type: 'category',
      items: [
        'models/introduction',
        'models/create-model',
        {
          label: 'Containers',
          type: 'category',
          items: ['models/containers/philosophy', 'models/containers/registries'],
        },
        'models/edit-model',
        'models/delete-model',
        'models/models-examples',
      ],
    },
    {
      label: 'Experiments',
      type: 'category',
      items: [
        'experiments/whats-experiment',
        'experiments/run-experiment',
        'experiments/stop-experiment',
        'experiments/go-to-the-experiment-page',
        'experiments/artifacts',
      ],
    },
  ],
};
