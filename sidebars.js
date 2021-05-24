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
          'models/introduction',
        'models/create-a-model',
        'models/edit-a-model',
        'models/delete-a-model',
        {
          items: ['models/experiments/go-to-the-experiment-page', 'models/experiments/create-an-experiment', 'models/experiments/run-an-experiment', 'models/experiments/stop-an-experiment', "models/experiments/download-logs", "models/experiments/download-checkpoints"],
          label: 'Experiments',
          type: "category"
        }
      ],
      label: 'Models',
      type: "category"
    }, {
      items: [
        'labs/introduction',
        "labs/create-a-lab",
        'labs/start-a-lab',
        'labs/delete-a-lab',
        {
          items: ['labs/shells/whats-a-shell', 'labs/shells/start-a-shell', "labs/shells/stop-a-shell", "labs/shells/attach-a-shell"],
          label: 'Shells',
          type: "category"
        }
      ],
      label: 'Labs',
      type: "category"
    }, {
      items: ['organizations/introduction', 'organizations/create-an-organization', 'organizations/invite-to-organization', 'organizations/delete-an-organization'],
      label: 'Organizations',
      type: "category"
    }
  ]
}
