# docs.csquare.run

Official documentation of teh csquare platform.

Proudly written and maintained by:

- Mathieu Bour <mathieu@csquare.ai> - Lead Platform Engineer at csquare
- Clarisse Tarrou <clarisse@csquare.ai> - Platform Engineer at csquare
- Valentin Pollart <valentin@csquare.ai> - CloudOps Engineer at csquare

## Stack

This website is build using [Docusaurus 2](https://github.com/facebook/docusaurus).
See the [Docusaurus documentation](https://docusaurus.io/docs) for details.

## Contributing

We are open to any contributions (English typos/rephrasing, translations)...
Simply open a pull request and we will be really happy to review!

## Documentation conventions

For each feature, usage of step-by-step tutorial is required. For each tutorial, a "Quick Guide" section is mandatory
and includes a short video of explanation. It also includes a detailed list of all the steps performed.
This documentation follows the classic rules of britannic english. Please respect as much as possible
the graphical charter.

### Video tutorial

In order to film video tutorials for "Quick Guide" sections, we use
[Screenshot & Screen Video Recorder](https://chrome.google.com/webstore/detail/screenshot-screen-video-r/jgmmgiojkjopgnanopiamhbhnpaednfg/support),
but feel free to use any piece of software that can make clean video for this purpose.

### Referencing elements

1. Interactive elements should be quoted such as code elements (use \`+` for a create button for instance).
2. References to other parts of the documentation should include a link to the related part.

### List typography

1. Lists should be numbered.
2. Each list item should be composed one or more sentences starting with uppercase letter, and ending with proper punctuation.
3. Each item can be split in sub-items.

Examples:

```
1. Go to the `Organization` page using the header.
2. Click on the `+` button: `Create organization`.
3. Fill the form: type the name of your new organization in the `Name field`.
4. Click on the `Create` button.
```

```
1. #### [Select the project](../projects/select-a-project.mdx) you want your model to be a part of.
2. #### Access the model creation form:

- ##### From the `Models` page
  1. Open the sidebar, and click on the `Models` section.
  2. Click on the `+` button: `Create a model`.
- ##### From the dashboard
  1. Open the sidebar, and click on the `Dashboard` section.
  2. Locate the `Latest models` widget.
  3. Click on the `+` button.

3. #### Fill the form
   1. Choose the name of your model in the `Model name` field.
   2. Give precision about your model in the `Model Description` field.
   3. Choose one or several [datasets](../datasets/create-a-dataset) to be mounted in your container.
   4. Precise your git info in the `Git repository` and `Git reference` field.
   5. Copy you SSH key in the `Deploy ssh key` field.
   6. Precise the docker image you want to use in the `Docker image` field. You can choose to `Run as a privileged user` by checking the corresponding box.
   7. If you want a command to be executed when you container is mounted, you can write it in the `Default startup command` field.
4. Click on the `Create` button.
```
