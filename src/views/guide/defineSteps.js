const steps = [
  {
    element: '.hamburger-container',
    popover: {
      title: 'Hamburger',
      description: 'Open && Close sidebar',
      position: 'bottom'
    }
  },
  {
    element: '.breadcrumb-container',
    stageBackground: '#ffffff', // This will override the one set in driver
    popover: { // There will be no popover if empty or not given
      className: 'popover-class', // className to wrap this specific step popover in addition to the general className in Driver options
      title: 'Breadcrumb', // Title on the popover
      description: 'Indicate the current page location', // Body of the popover
      position: 'bottom',
      showButtons: true, // Do not show control buttons in footer
      doneBtnText: 'Done', // Text on the last button
      closeBtnText: 'Close', // Text on the close button
      nextBtnText: 'Next', // Next button text
      prevBtnText: 'Previous' // Previous button text
    },
    onNext: () => {}, // Called when moving to next step from current step
    onPrevious: () => {}
  },
  {
    element: '.router-link-active',
    popover: {
      title: 'router-link-active',
      description: 'Bring the page into fullscreen',
      position: 'left'
    }
  },
  {
    element: '.international-icon',
    popover: {
      title: 'Switch language',
      description: 'Switch the system language',
      position: 'left'
    }
  },
  {
    element: '.theme-switch',
    popover: {
      title: 'Theme Switch',
      description: 'Custom switch system theme',
      position: 'left'
    }
  },
  {
    element: '.tags-view-container',
    popover: {
      title: 'Tags view',
      description: 'The history of the page you visited',
      position: 'bottom'
    }
  }
]

export default steps
